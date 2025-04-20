import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import FadeIn from "@/components/animations/fade-in"

export default function FAQSection() {
  const faqs = [
    {
      question: "How easy is it to integrate the chatbot with my website?",
      answer:
        "Very easy! You just need to add a simple script tag to your website's HTML. We provide step-by-step instructions and support if you need any help with the integration process.",
    },
    {
      question: "Can I customize the appearance of the chatbot?",
      answer:
        "You can customize the colors, chat bubble style, position, and even the avatar to match your brand identity. All customizations can be done through our user-friendly dashboard.",
    },
    {
      question: "How does the AI chatbot learn about my business?",
      answer:
        "You can provide information about your business through our knowledge base feature. You can upload documents, FAQs, or manually input information that the chatbot will use to answer customer queries accurately.",
    },
    {
      question: "What happens if the chatbot can't answer a question?",
      answer:
        "You can set up fallback options such as collecting the user's email for follow-up, connecting them to a live agent, or providing links to relevant resources. The chatbot will also learn from these interactions to improve over time.",
    },
    {
      question: "Is there a limit to the number of conversations?",
      answer:
        "Each pricing plan comes with a specific number of messages per month. The Starter plan includes 1,000 messages, Professional includes 5,000, and Enterprise offers unlimited messages. You can always upgrade your plan as your needs grow.",
    },
    {
      question: "Can I try before I buy?",
      answer: "Yes! We offer a 14-day free trial with full access to all features.",
    },
  ]

  return (
    <section className="w-full py-4 md:py-6" id="faqs">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-block rounded-lg gradient-bg px-3 py-1 text-sm text-white mb-2">FAQ</div>
            <div className="title-container">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text-light">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-muted-foreground md:text-xl">Everything you need to know about our AI chatbot service</p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-4 py-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <AccordionItem
                  value={`item-${index}`}
                  className="gradient-border bg-secondary/10 rounded-lg mb-4 overflow-hidden enhanced-card"
                >
                  <AccordionTrigger className="text-left px-4 py-4 hover:bg-secondary/20 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-4 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              </FadeIn>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
