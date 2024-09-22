import { buttonVariants } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { unstable_noStore as noStore } from "next/cache";
import { Faq } from "../_components/faq";
import { HasherForm } from "../_components/hasher-form";
import { UnhasherForm } from "../_components/unhasher-form";
import { Cards } from "../_components/user-card";

export default async function Home() {
  noStore();

  return (
    <main>
      <section className="container grid place-items-center gap-10 py-20 md:py-32 lg:grid-cols-2">
        <div className="space-y-6 text-center lg:text-start">
          <main className="text-5xl font-bold md:text-6xl">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] bg-clip-text text-transparent">
                NextIQ Blur 1.1
              </span>{" "}
            </h1>{" "}
            for your{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
                secret
              </span>{" "}
              phrase
            </h2>
          </main>
          <p className="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
            Take any phrase, apply a hash function to it using a password, and
            store it in a secure location. <br />
            <span className="text-xs italic text-muted-foreground">
              Hash better, sleep better.
            </span>
          </p>

          <div className="space-y-4 md:space-x-4 md:space-y-0">
            <a
              href="https://github.com/TchiRubick/nextiq-blur"
              target="_blank"
              className={`w-full md:w-1/3 ${buttonVariants({
                variant: "outline",
              })}`}
            >
              Github Repository
              <GitHubLogoIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
        <Cards />
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <section id="hash">
          <hr className="mx-auto w-11/12" />
          <div className="container py-24 sm:py-32">
            <h3 className="text-center text-4xl font-bold md:text-5xl">
              Secure your phrase{" "}
              <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
                with hashing
              </span>
            </h3>
            <p className="mb-8 mt-4 text-center text-xl text-muted-foreground">
              Please provide your crypto wallet phrase and the password you wish
              to use for encryption
            </p>
            <HasherForm />
          </div>
          <hr className="mx-auto w-11/12" />
        </section>
        <section id="unhash">
          <hr className="mx-auto w-11/12" />
          <div className="container py-24 sm:py-32">
            <h3 className="text-center text-4xl font-bold md:text-5xl">
              Decrypt your{" "}
              <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
                hashed phrase
              </span>
            </h3>
            <p className="mb-8 mt-4 text-center text-xl text-muted-foreground">
              Please input your hashed phrase and the corresponding passkey to
              decrypt it.
            </p>
            <UnhasherForm />
          </div>
          <hr className="mx-auto w-11/12" />
        </section>
      </section>
      <section id="faq" className="container py-24 sm:py-32">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Frequently Asked{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <Faq />
      </section>
    </main>
  );
}
