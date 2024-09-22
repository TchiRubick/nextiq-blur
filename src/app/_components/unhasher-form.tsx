"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/trpc/react";
import { useCallback, useState } from "react";
import TextObfuscator from "text-obfuscator";
import { BlockResult } from "./block-result";

export const UnhasherForm = () => {
  const { toast } = useToast();
  const [phrase, setPhrase] = useState<string>("");
  const [passkey, setPasskey] = useState<string>("");
  const [hash, setHash] = useState<string>("");

  const { mutateAsync, isLoading, error } = api.hash.getPhrase.useMutation();

  const showError = useCallback(() => {
    const initialError = error?.message ?? "something went wrong";

    toast({
      variant: "destructive",
      description: initialError,
      duration: 5000,
    });
  }, [error, toast]);

  const handleHashClick = async () => {
    try {
      const response = await mutateAsync({ value: hash, passkey });

      const result = TextObfuscator.decode(response.result, 3);
      setPhrase(result);
    } catch (error) {
      showError();
    }
  };

  return (
    <div className="mx-auto flex w-full flex-col gap-4 md:w-6/12 md:flex-col md:gap-5 lg:w-4/12">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="hash">Hash</Label>
        <Input
          placeholder="eyJhbGciOiJIUzI1NiJ9.ZGRkZA.PCR8_V-ODt0vEA1wQPOGfUqHT9XsOSWZg6KMxtpbI8o"
          className="bg-muted/50 dark:bg-muted/80 "
          value={hash}
          id="hash"
          onChange={(e) => setHash(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="passkey-unhash">Passkey</Label>
        <Input
          placeholder="************"
          id="passkey-unhash"
          className="bg-muted/50 dark:bg-muted/80 "
          type="password"
          value={passkey}
          onChange={(e) => setPasskey(e.target.value)}
        />
      </div>
      <Button className="w-full" onClick={handleHashClick} disabled={isLoading}>
        Get phrase
      </Button>
      <BlockResult value={phrase} />
    </div>
  );
};
