'use client'

import { ClipboardCopyIcon, EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export const BlockResult = ({ value }: { value: string }) => {
  const [protectValue, setProtectValue] = useState<boolean>(true);

  return (
    <div className="inline-flex items-center text-muted-foreground w-full justify-start border-b bg-transparent p-5 rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900 relative">
      <div className='absolute bg-zinc-800 rounded-lg p-1 cursor-pointer top-2 right-2 hover:bg-zinc-500'>
        <ClipboardCopyIcon className="text-muted-foreground" onClick={() => navigator.clipboard.writeText(value)} />
      </div>
      <div className='absolute bg-zinc-800 rounded-lg p-1 cursor-pointer top-2 right-10 hover:bg-zinc-500' onClick={() => setProtectValue((prev) => !prev)}>
        {protectValue && <EyeOpenIcon className="text-muted-foreground" />}
        {!protectValue && <EyeNoneIcon className="text-muted-foreground" />}
      </div>
      <span className='mt-5 break-all'>
        {protectValue ? value.replaceAll(/./gi, '*') : value}
      </span>
    </div>
  )
};
