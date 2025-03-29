import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { fredokaOne } from "@/fonts/font";

export const FaqSection = () => {
    return (

        <section className="w-full overflow-x-hidden flex flex-col items-center justify-between py-16"
        >

            <h2 className="text-3xl text-black md:text-4xl lg:text-5xl font-medium text-center mb-6"
                style={fredokaOne.style}
            >
                Frequently Asked Questions
            </h2>

            <p className="hidden lg:block mt-2 text-center text-slate-600 w-2/3 mb-16">
                Got questions? We’ve got answers! Learn more about how Zapfolio works, how to customize your portfolio, and everything else you need to know.
            </p>
            <p className='text-sm mt-2 text-center text-slate-600 lg:hidden mb-16'>
                Need help? Check out our FAQs to learn how Zapfolio makes portfolio building effortless.
            </p>

            {/* <h1 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-semibold text-black">Any questions?</h1> */}
            <Accordion type="single" collapsible className="w-full lg:w-9/12  sm:px-5">



                <AccordionItem value="item-1">
                    <AccordionTrigger>What is Zapfolio?</AccordionTrigger>
                    <AccordionContent>
                        Zapfolio is a no-code portfolio builder that creates a professional portfolio in just two clicks. Simply enter your LinkedIn URL, pick a theme, and your portfolio is ready!
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>How does Zapfolio work?</AccordionTrigger>
                    <AccordionContent>
                        When you enter your LinkedIn profile URL, our external API scrapes your LinkedIn data and stores it in our database. When you request a portfolio, we fetch and display that data instantly.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Do I need to know coding to use Zapfolio?</AccordionTrigger>
                    <AccordionContent>
                        No, Zapfolio is completely no-code. You don’t need any technical skills—just enter your LinkedIn URL and let us handle the rest.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>Can I customize the design and layout?</AccordionTrigger>
                    <AccordionContent>
                        As of now, customization is limited to theme selection. However, we plan to introduce more design customization options in the future.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>Is Zapfolio free?</AccordionTrigger>
                    <AccordionContent>
                        Yes, Zapfolio is currently free to use. There is no premium plan yet.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                    <AccordionTrigger>How can I remove the watermark?</AccordionTrigger>
                    <AccordionContent>
                        Simply write a LinkedIn post about Zapfolio (positive or negative) and submit the link at <a href="https://zapfolio.in/linkedin-post-feedback" className="text-blue-500 underline">zapfolio.in/linkedin-post-feedback</a>. That’s it!
                    </AccordionContent>
                </AccordionItem>


            </Accordion>
        </section >
    );
};