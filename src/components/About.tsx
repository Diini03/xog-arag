
import { CheckCircle } from "lucide-react";

export const About = () => {
  const features = [
    "Embedded in your CRM, domains, and Slack",
    "You own all assets and data", 
    "Build-Operate-Transfer model",
    "Zero black box operations",
    "Weekly metrics and call coaching",
    "Full SOPs and manager training on transfer"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary-glow/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Beautiful About Us section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-primary via-primary-glow to-foreground bg-clip-text text-transparent">
            The Anti-Agency
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-2xl text-muted-foreground mb-8 leading-relaxed font-medium text-center">
              Agencies rent you labor forever. We build your outbound machine, operate it with you, then transfer complete ownership.
            </p>
            <p className="text-2xl text-foreground font-bold mb-6">
              Your VP Sales inherits a running machine. Not a blank slate.
            </p>
            <p className="text-xl text-destructive font-bold">
              Agencies disappear? You're dead. We transfer ownership? You're bulletproof.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-muted-foreground">Pipeline Generated</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Data Ownership</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">&lt;1 Week</div>
              <div className="text-muted-foreground">To Operational Outbound</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">Series A</div>
              <div className="text-muted-foreground">Focus Stage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
