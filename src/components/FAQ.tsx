import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What do I get at ownership transfer?",
      answer: "Complete ownership of the process (forever license), all documentation, CRM workflows, sequences, templates, dashboards, training materials, and transition support. Mamut has zero claim after transfer."
    },
    {
      question: "What if I don't want to transfer ownership?",
      answer: "You keep all data and learnings with no fees. You can also continue month-to-month or negotiate different terms. But after running together, most transfer—the process works."
    },
    {
      question: "What if my VP Sales isn't hired yet?",
      answer: "Transfer when ready (VP inherits when they arrive), extend the implementation, or use optional support. Most common: transfer when VP arrives."
    },
    {
      question: "How do I scale after buyout?",
      answer: "You own the process—scale however you want. Use the playbooks to train new BDRs. Optional $2,490/month support available but not required."
    },
    {
      question: "Won't this conflict with my VP Sales hire?",
      answer: "Opposite. Your VP inherits a working playbook, real data, and trained team. They skip the build phase and start scaling immediately."
    },
    {
      question: "I'm behind on Series A targets. Can you help?",
      answer: "Yes. We launch in <1 week. Outbound running by next Tuesday, pipeline data for investors by next month. Build to permanent ownership."
    },
    {
      question: "How do you launch in <1 week?",
      answer: "Standardized infrastructure. Pre-trained team. Proven template customized to your ICP. No hiring delays or ramp-up period."
    },
    {
      question: "Are you an agency?",
      answer: "No. Agencies rent you labor forever and keep your pipeline hostage. Mamut builds your outbound machine with you, then you own it permanently. If agencies fail, you fail. If we transfer ownership, you're bulletproof."
    },
    {
      question: "Do we need to buy tools?",
      answer: "No. Dialer, enrichment, email infrastructure, LinkedIn execution, and revenue dashboard all included."
    },
    {
      question: "How do you measure success?",
      answer: "Pipeline added, coverage vs target, connect→meeting rate, show rate, stage conversion, and won revenue."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-primary via-primary-glow to-foreground bg-clip-text text-transparent">
            FAQ
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-soft px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <button 
            className="text-lg text-primary hover:text-primary-glow transition-colors duration-300 font-medium underline decoration-primary/30 hover:decoration-primary-glow"
            onClick={() => window.open('https://calendly.com/bruno-leadmamut/30min', '_blank')}
          >
            Book a call to discuss your path to ownership
          </button>
        </div>
      </div>
    </section>
  );
};
