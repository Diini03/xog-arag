import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const SeriesATimeTrap = () => {
  return (
    <section id="time-trap" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-primary via-primary-glow to-foreground bg-clip-text text-transparent">
            The Series A Kill Zone
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            You closed $2-5M. Investors demand 3x growth. But hiring takes months and agencies trap you forever.
          </p>
        </div>

        {/* The problem */}
        <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft mb-12 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">The Problem</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-primary font-bold text-xl">•</span>
                <p className="text-lg text-muted-foreground">Inbound maxed out, targets need outbound</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary font-bold text-xl">•</span>
                <p className="text-lg text-muted-foreground">VP Sales hiring takes months</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary font-bold text-xl">•</span>
                <p className="text-lg text-muted-foreground">Every month waiting burns runway with zero pipeline</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary font-bold text-xl">•</span>
                <p className="text-lg text-muted-foreground">Agencies hold your pipeline hostage—if they go under, you go under</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The gap callout */}
        <div className="bg-gradient-primary text-primary-foreground rounded-3xl p-8 mb-16 max-w-4xl mx-auto shadow-elegant text-center">
          <p className="text-2xl font-bold leading-relaxed">
            Agencies trap you with endless fees. Building internally takes 10+ months. We build you to ownership.
          </p>
        </div>

        {/* Timeline comparison table */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="py-4 px-6 text-left text-sm font-bold text-muted-foreground bg-muted/30">Timeline</th>
                      <th className="py-4 px-6 text-left text-sm font-bold text-muted-foreground bg-muted/30">Build Internally</th>
                      <th className="py-4 px-6 text-left text-sm font-bold text-primary bg-primary/5">Launch with Mamut</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-4 px-6 font-semibold text-foreground whitespace-nowrap">Week 1</td>
                      <td className="py-4 px-6 text-muted-foreground">
                        <p className="text-sm mb-1">Posting job descriptions</p>
                        <p className="text-xs text-destructive font-semibold">No outbound activity</p>
                      </td>
                      <td className="py-4 px-6 bg-primary/5">
                        <p className="text-sm font-semibold text-foreground mb-1">Diagnosis, infrastructure, go live in 5 days</p>
                        <p className="text-xs text-primary font-bold">Pipeline generation starts immediately</p>
                      </td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-4 px-6 font-semibold text-foreground whitespace-nowrap">Early Months</td>
                      <td className="py-4 px-6 text-muted-foreground">
                        <p className="text-sm mb-1">Recruiting VP Sales, slow BDR hiring, infrastructure buildout</p>
                        <p className="text-xs text-destructive font-semibold">Limited outbound, runway burning</p>
                      </td>
                      <td className="py-4 px-6 bg-primary/5">
                        <p className="text-sm font-semibold text-foreground mb-1">Daily meetings, continuous optimization, playbook development</p>
                        <p className="text-xs text-primary">VP Sales recruiting happens in parallel</p>
                      </td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-4 px-6 font-semibold text-foreground whitespace-nowrap">Transfer Point</td>
                      <td className="py-4 px-6 text-muted-foreground">
                        <p className="text-sm mb-1">VP hired, onboarding complete, building from scratch</p>
                        <p className="text-xs text-muted-foreground/70">Still ramping pipeline</p>
                      </td>
                      <td className="py-4 px-6 bg-primary/5">
                        <p className="text-sm font-semibold text-foreground mb-1">Complete ownership transferred</p>
                        <p className="text-xs text-primary font-bold">Zero ongoing Mamut fees forever</p>
                      </td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-4 px-6 font-semibold text-foreground whitespace-nowrap">Post-Transfer</td>
                      <td className="py-4 px-6 text-muted-foreground">
                        <p className="text-sm mb-1">VP experimenting, testing, iterating</p>
                        <p className="text-xs text-muted-foreground/70">Slow pipeline growth</p>
                      </td>
                      <td className="py-4 px-6 bg-primary/5">
                        <p className="text-sm font-semibold text-foreground mb-1">VP Sales inherits proven machine</p>
                        <p className="text-xs text-primary">Data, trained team, validated playbook</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-semibold text-foreground whitespace-nowrap">Long-Term</td>
                      <td className="py-4 px-6 text-muted-foreground">
                        <p className="text-sm mb-1">Full pipeline running</p>
                        <p className="text-xs text-destructive font-semibold">Long wait to full operation</p>
                      </td>
                      <td className="py-4 px-6 bg-primary/5">
                        <p className="text-sm font-semibold text-foreground mb-1">VP scaling proven motion immediately</p>
                        <p className="text-xs text-primary font-bold">You own everything permanently</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-border">
                <div className="p-6 bg-destructive/10 border-r border-border/50">
                  <p className="text-destructive font-bold text-center text-sm">Long delay to full operation, VP builds from blank slate</p>
                </div>
                <div className="p-6 bg-primary/10">
                  <p className="text-primary font-bold text-center text-sm">Pipeline in week 2, VP inherits proven machine at transfer</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary text-primary-foreground text-xl px-12 py-8 rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300 font-bold"
            onClick={() => window.open('https://calendly.com/bruno-leadmamut/30min', '_blank')}
          >
            Escape the Time Trap
          </Button>
        </div>
      </div>
    </section>
  );
};
