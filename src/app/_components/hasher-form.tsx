'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { api } from "@/trpc/react";
import { useState } from "react";
import TextObfuscator from 'text-obfuscator';
import { BlockResult } from "./block-result";

export const HasherForm = () => {
  const [phrase, setPhrase] = useState<string>('');
  const [passkey, setPasskey] = useState<string>('');
  const [hash, setHash] = useState<string>('');

  const { mutateAsync, isLoading } = api.hash.getHash.useMutation();

  const handleHashClick = async () => {
    const result = TextObfuscator.encode(phrase, 3);
    const response = await mutateAsync({ value: result, passkey });
    setHash(response.result);
  }

  return (
    <div
      className="flex flex-col w-full md:flex-col md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-5"
    >
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="phrases">Phrase</Label>
        <Input
          placeholder="car house rights greeting elapsed happy space anti horse ..."
          className="bg-muted/50 dark:bg-muted/80 "
          value={phrase}
          id="phrase"
          onChange={(e) => setPhrase(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="passkey-hash">Passkey</Label>
        <Input
          placeholder="************"
          id='passkey-hash'
          className="bg-muted/50 dark:bg-muted/80 "
          type="password"
          value={passkey}
          onChange={(e) => setPasskey(e.target.value)}
        />
      </div>
      <Button className="w-full" onClick={handleHashClick} disabled={isLoading}>Get hash</Button>
      <BlockResult value={hash} />
    </div>
  )
};
