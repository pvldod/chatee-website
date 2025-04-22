import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Chatee?",
      answer: "Chatee is an advanced AI-powered chat system that helps businesses automate customer communication. It offers natural conversations, easy integration, and customizable design.",
    },
    {
      question: "How can I integrate Chatee into my website?",
      answer: "Integrating Chatee is simple - just add a short code snippet to your website. We provide detailed documentation and technical support for seamless implementation.",
    },
    {
      question: "Does Chatee support multiple languages?",
      answer: "Yes, Chatee supports over 50 languages worldwide. The system automatically detects the user's language and responds in the same language.",
    },
    {
      question: "How do you handle data privacy?",
      answer: "Security and privacy are our top priorities. All data is encrypted, and we comply with GDPR and other international data protection standards.",
    },
    {
      question: "Can I customize Chatee to match my brand?",
      answer: "Absolutely! Chatee offers extensive customization options including colors, fonts, styles, and custom welcome messages. You can create a chatbot that perfectly matches your brand.",
    },
    {
      question: "What is the system availability?",
      answer: "We guarantee 99.9% service availability. Our infrastructure is built on reliable cloud services with redundancy and automatic backup systems.",
    }
  ]

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">
          Find answers to common questions about Chatee. Can't find what you're looking for?{" "}
          <a href="/contact" className="text-primary hover:underline">
            Contact our support team
          </a>
          .
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
} 