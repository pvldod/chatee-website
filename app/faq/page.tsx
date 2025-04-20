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
    },
    {
      question: "Do you offer a trial period?",
      answer: "Yes, we offer a 14-day free trial with full features. During this period, you can test all features and decide if Chatee meets your needs.",
    },
    {
      question: "How does technical support work?",
      answer: "We provide different levels of support based on your plan - from email support for the basic plan to 24/7 dedicated support for enterprise clients.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Haven't found your answer? Feel free to contact us.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
} 