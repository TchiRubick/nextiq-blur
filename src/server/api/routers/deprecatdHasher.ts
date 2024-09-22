// deprecated - JWT is not secure at all. Keeping it here in case someone have used it

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { sign, verify } from "jsonwebtoken";
import { z } from "zod";

export const deprecatedHashRouter = createTRPCRouter({
  getHash: publicProcedure
    .input(z.object({ value: z.string(), passkey: z.string() }))
    .mutation(({ input }) => {
      const result = sign(input.value, input.passkey);

      return { result };
    }),
  getPhrase: publicProcedure
    .input(z.object({ value: z.string(), passkey: z.string() }))
    .mutation(({ input }) => {
      try {
        const result = verify(input.value, input.passkey);

        return { result };
      } catch (error) {
        throw new TRPCError(error as TRPCError);
      }
    }),
});
