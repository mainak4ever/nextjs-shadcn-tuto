import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function page() {
  return (
    <div className=" flex justify-center items-center">
      <main className="w-[500px]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible 2?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern 2.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  );
}

export default page;
