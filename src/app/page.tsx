import { buttonVariants } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { unstable_noStore as noStore } from "next/cache";
import { Faq } from "./_components/faq";
import { HasherForm } from "./_components/hasher-form";
import { UnhasherForm } from "./_components/unhasher-form";
import { Cards } from "./_components/user-card";

export default async function Home() {
  noStore();

  return (
    <main>
      <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                NextIQ Blur
              </span>{" "}
            </h1>{" "}
            for{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                crypto
              </span>{" "}
              wallet
            </h2>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            Take your crypto phrase, apply a hash function to it using a password, and store it in a secure location. <br />
            <span className="italic text-muted-foreground text-xs">Hash better, sleep better.</span>
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="https://github.com/TchiRubick/nextiq-blur"
              target="_blank"
              className={`w-full md:w-1/3 ${buttonVariants({
                variant: "outline",
              })}`}
            >
              Github Repository
              <GitHubLogoIcon className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
        <Cards />
      </section>
      <section id="hash">
        <hr className="w-11/12 mx-auto" />
        <div className="container py-24 sm:py-32">
          <h3 className="text-center text-4xl md:text-5xl font-bold">
            Secure your crypto wallet phrase {" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              with hashing
            </span>
          </h3>
          <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
            Please provide your crypto wallet phrase and the password you wish to use for encryption
          </p>
          <HasherForm />
        </div>
        <hr className="w-11/12 mx-auto" />
      </section>
      <section id="unhash">
        <hr className="w-11/12 mx-auto" />
        <div className="container py-24 sm:py-32">
          <h3 className="text-center text-4xl md:text-5xl font-bold">
            Decrypt your crypto wallet&apos;s {" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              hashed phrase
            </span>
          </h3>
          <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
            Please input your hashed phrase and the corresponding password to decrypt it.
          </p>
          <UnhasherForm />
        </div>
        <hr className="w-11/12 mx-auto" />
      </section>
      <section
        id="faq"
        className="container py-24 sm:py-32"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Questions
          </span>
        </h2>

        <Faq />
      </section>
    </main>
  );
}
