import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
export const Hero = () => {
  return <section id="home" className="pt-20 pb-16 bg-gradient-hero min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 bg-gradient-to-r from-primary via-primary-glow to-foreground bg-clip-text text-transparent leading-tight animate-fade-in">
            We build it. Yours forever.
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-6 max-w-5xl mx-auto leading-relaxed font-medium">
            Launch outbound in &lt;1 week. Build to permanent ownership. Own your pipeline forever.
          </p>
          
          <p className="text-xl text-muted-foreground/80 mb-12 max-w-4xl mx-auto font-medium">
            Stop renting from agencies. Own your pipeline permanently.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground text-xl px-12 py-8 rounded-2xl shadow-elegant hover:shadow-glow hover:scale-105 transition-all duration-300 group font-bold" onClick={() => window.open('https://calendly.com/bruno-leadmamut/30min', '_blank')}>
              See Your Path to Ownership
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <Button size="lg" variant="outline" className="text-xl px-12 py-8 rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group font-bold backdrop-blur-sm bg-card/50" onClick={() => {
            const element = document.querySelector('#roi-calculator');
            if (element) element.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
              <Play className="mr-3 group-hover:scale-125 transition-transform duration-300" />
              Calculate Your True Cost Savings
            </Button>
          </div>

          {/* Why Mamut - Anti-Agency Positioning */}
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-border/50 shadow-soft">
            <h3 className="text-2xl font-bold mb-8 text-foreground text-center">The Anti-Agency Model</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
                  <span className="text-primary-foreground font-bold text-xl">⚡</span>
                </div>
                <h4 className="font-bold text-primary text-lg mb-2">Own It, Don't Rent It</h4>
                <p className="text-muted-foreground text-sm">Transfer to permanent ownership. Then $0/month forever. Agencies charge you forever.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-glow w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
                  <span className="text-white font-bold text-xl">🎯</span>
                </div>
                <h4 className="font-bold text-primary-glow text-lg mb-2">Build Capability, Not Dependency</h4>
                <p className="text-muted-foreground text-sm">Your VP inherits a running machine. Agencies keep you trapped.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-foreground w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
                  <span className="text-background font-bold text-xl">🚀</span>
                </div>
                <h4 className="font-bold text-foreground text-lg mb-2">Speed Without Lock-In</h4>
                <p className="text-muted-foreground text-sm">Live in &lt;1 week. Transfer at the end. Agencies never let go.</p>
              </div>
            </div>
          </div>

          {/* Who this helps */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Built for Series A Founders Who Refuse Agency Lock-In</h3>
            
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto mb-8 border border-border/50 shadow-soft">
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  <p className="text-muted-foreground text-lg">You raised $2-5M and need outbound now</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  <p className="text-muted-foreground text-lg">You're recruiting VP Sales (but it takes time)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  <p className="text-muted-foreground text-lg">You refuse to rent your pipeline from agencies forever</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300" onClick={() => window.location.href = '/one-pager'}>
              Get the 1-page operating model
            </Button>
          </div>
        </div>
      </div>
    </section>;
};