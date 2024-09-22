import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

const deriveKeyFromPassphrase = async (passkey: string) => {
  const encoder = new TextEncoder();
  const passphraseKey = encoder.encode(passkey);

  const baseKey = await crypto.subtle.importKey(
    "raw",
    passphraseKey,
    { name: "PBKDF2" },
    false,
    ["deriveKey"],
  );

  const salt = crypto.getRandomValues(new Uint8Array(16));

  const derivedKey = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    baseKey,
    {
      name: "AES-GCM",
      length: 256,
    },
    true,
    ["encrypt", "decrypt"],
  );

  return { derivedKey, salt };
};

export const hashRouter = createTRPCRouter({
  getHash: publicProcedure
    .input(z.object({ value: z.string(), passkey: z.string() }))
    .mutation(async ({ input }) => {
      const { derivedKey, salt } = await deriveKeyFromPassphrase(input.passkey);

      const encoder = new TextEncoder();
      const encodedText = encoder.encode(input.value);

      const iv = crypto.getRandomValues(new Uint8Array(12));

      const cipherText = await crypto.subtle.encrypt(
        {
          name: "AES-GCM",
          iv: iv,
        },
        derivedKey,
        encodedText,
      );

      const encryptedContent = new Uint8Array(
        salt.length + iv.length + cipherText.byteLength,
      );
      encryptedContent.set(salt, 0);
      encryptedContent.set(iv, salt.length);
      encryptedContent.set(new Uint8Array(cipherText), salt.length + iv.length);

      return {
        result: btoa(
          String.fromCharCode.apply(null, Array.from(encryptedContent)),
        ),
      };
    }),
  getPhrase: publicProcedure
    .input(z.object({ value: z.string(), passkey: z.string() }))
    .mutation(async ({ input }) => {
      try {
        const encryptedContent = Uint8Array.from(atob(input.value), (c) =>
          c.charCodeAt(0),
        );

        // Extract the salt, IV, and cipherText from the encrypted content
        const salt = encryptedContent.slice(0, 16);
        const iv = encryptedContent.slice(16, 28);
        const cipherText = encryptedContent.slice(28);

        // Derive the key again using the same passphrase and salt
        const encoder = new TextEncoder();
        const passphraseKey = encoder.encode(input.passkey);
        const baseKey = await crypto.subtle.importKey(
          "raw",
          passphraseKey,
          { name: "PBKDF2" },
          false,
          ["deriveKey"],
        );

        const derivedKey = await crypto.subtle.deriveKey(
          {
            name: "PBKDF2",
            salt: salt,
            iterations: 100000,
            hash: "SHA-256",
          },
          baseKey,
          {
            name: "AES-GCM",
            length: 256,
          },
          true,
          ["decrypt"],
        );

        // Decrypt the ciphertext
        const decryptedBuffer = await crypto.subtle.decrypt(
          {
            name: "AES-GCM",
            iv: iv,
          },
          derivedKey,
          cipherText,
        );

        const decoder = new TextDecoder();

        return { result: decoder.decode(decryptedBuffer) };
      } catch (error) {
        throw new TRPCError(error as TRPCError);
      }
    }),
});
