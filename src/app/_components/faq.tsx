import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQProps = {
  question: string;
  answer: string;
  value: string;
};

const FAQList: FAQProps[] = [
  {
    question: "Why NextIQ Blur ?",
    answer:
      "I used to store my crypto wallet phrases in a private repository on Github. Consequently, I made the decision to develop NextIQ Blur to avoid storing plain text in that manner. Furthermore, all the data will be safeguarded by a passkey that I can easily recall.",
    value: "item-1",
  },
  {
    question: "Can I use it without any safety concerns ?",
    answer:
      "It's a public repository, so you can rest assured that I won't store any of your information anywhere; feel free to examine the code base. However, I can't guarantee that it's completely secure. It was primarily designed for my personal use case.",
    value: "item-2",
  },
  {
    question: "Will it continue to be available at no cost?",
    answer: "As long as it doesn't cost me anything, yes, it will.",
    value: "item-3",
  },
  {
    question:
      "After using NextIQ Blur, can I simply share my NextIQ Blur Hash in a public place or post it on X?",
    answer: "I'd strongly advise against it. Just don't.",
    value: "item-4",
  },
  {
    question: "What should I do if I forget my password or passkey?",
    answer:
      "I'm not sure. I can't assist with that because I don't retain any information whatsoever.",
    value: "item-5",
  },
  {
    question:
      "Can you ensure that the service will always be operational and free of bugs ?",
    answer: "No, I don't !",
    value: "item-6",
  },
  {
    question: "Why next-iq 1.1 ?",
    answer:
      "1.1 is the newer version. It has a different hashing algorithm and way more secure than the previous version.\nThe old version will remain available once the screen is ready for it",
    value: "item-7",
  },
];

export const Faq = () => {
  return (
    <Accordion type="single" collapsible className="AccordionRoot w-full">
      {FAQList.map(({ question, answer, value }: FAQProps) => (
        <AccordionItem key={value} value={value}>
          <AccordionTrigger className="text-left">{question}</AccordionTrigger>

          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
