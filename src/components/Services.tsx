import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
export const Services = () => {
  return <section id="services" className="py-24 bg-gradient-subtle relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* How It Works */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-primary via-primary-glow to-foreground bg-clip-text text-transparent">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Day 1 */}
          <div className="text-center">
            <div className="bg-gradient-primary w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-elegant">
              <span className="text-primary-foreground font-bold text-xl">Day 1</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Diagnosis</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We define ICP, target accounts, and success metrics in one working session.
            </p>
            <p className="text-sm text-muted-foreground/70">Duration: 4 hours<br />Outcome: Clear roadmap</p>
          </div>

          {/* Days 2-4 */}
          <div className="text-center">
            <div className="bg-gradient-primary w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-elegant">
              <span className="text-primary-foreground font-bold text-base">Days 2-4</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Infrastructure</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Domains, deliverability, sequences, and dialer configured inside your stack.
            </p>
            <p className="text-sm text-muted-foreground/70">Duration: 48-72 hours<br />Outcome: Live infrastructure inside your CRM</p>
          </div>

          {/* Day 5 */}
          <div className="text-center">
            <div className="bg-gradient-primary w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-elegant">
              <span className="text-primary-foreground font-bold text-xl">Day 5</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Live</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Your cell makes first outreaches. You see pipeline in your CRM. Revenue tracking begins.
            </p>
            <p className="text-sm text-muted-foreground/70">Duration: 1 day<br />Outcome: Pipeline moving</p>
          </div>

          {/* Week 2+ */}
          <div className="text-center">
            <div className="bg-gradient-primary w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-elegant">
              <span className="text-primary-foreground font-bold text-base">Week 2+</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Scaling</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Daily iteration, coaching, and optimization locked in.
            </p>
            <p className="text-sm text-muted-foreground/70">Duration: Ongoing<br />Outcome: Predictable, scalable outbound motion</p>
          </div>
        </div>

        {/* How It Works With Your VP Sales */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">How It Works With Your VP Sales</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {/* Week 1-2 */}
            <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
              <CardContent className="p-6">
                <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
                  <span className="text-primary-foreground font-bold text-sm">W 1-2</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground text-center">You Launch with Mamut</h4>
                <p className="text-muted-foreground text-center">We diagnose, build, and go live. Your first cell is dialing. Your first pipeline is moving.</p>
              </CardContent>
            </Card>

            {/* VP Sales Recruiting Period */}
            <Card className="bg-card/80 backdrop-blur-sm border border-primary/20 shadow-soft">
              <CardContent className="p-6">
                <div className="bg-primary-glow w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
                  <span className="text-white font-bold text-sm">ACTIVE</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground text-center">VP Sales Recruiting</h4>
                <p className="text-muted-foreground text-center">While your new VP is onboarding and building their plan, your cell is generating data, insights, and early wins.</p>
              </CardContent>
            </Card>

            {/* Week 12+ */}
            <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
              <CardContent className="p-6">
                <div className="bg-foreground w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
                  <span className="text-background font-bold text-sm">W 12+</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground text-center">VP Sales Takes Over</h4>
                <p className="text-muted-foreground text-center">Your VP walks into a running motion. They see what's working. They know your ICP. They have real data. Now they scale it.</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-6 max-w-2xl mx-auto text-center shadow-elegant">
            <p className="text-xl font-bold">VP inherits a running machine. Not a blank slate. Not an agency trap.</p>
          </div>
        </div>

        {/* Anti-Agency Comparison Table */}
        <div className="mb-20 bg-card/80 backdrop-blur-sm rounded-3xl p-10 border border-primary/20 shadow-soft">
          <h3 className="text-3xl font-bold mb-4 text-center text-foreground">Why Agencies Fail Founders</h3>
          <p className="text-center text-muted-foreground mb-8 text-lg max-w-3xl mx-auto">
            Agencies rent you labor. We build you capability. One model traps you forever. The other sets you free.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 text-foreground font-bold"></th>
                  <th className="text-center py-4 px-4 text-primary font-bold bg-primary/5">Mamut BOT</th>
                  <th className="text-center py-4 px-4 text-muted-foreground font-semibold">Traditional Agency</th>
                  <th className="text-center py-4 px-4 text-muted-foreground font-semibold">Hire Internally</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                <tr>
                  <td className="py-4 px-4 font-semibold text-foreground">Time to Live</td>
                  <td className="py-4 px-4 text-center text-primary font-bold bg-primary/5">&lt;1 week</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">4-8 weeks</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">Months</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-foreground">Ownership</td>
                  <td className="py-4 px-4 text-center text-primary font-bold bg-primary/5">Yours. Forever.</td>
                  <td className="py-4 px-4 text-center text-destructive font-bold">Never. Rent forever.</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">Yours from day 1</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-foreground">Monthly Cost After Transfer</td>
                  <td className="py-4 px-4 text-center text-primary font-bold bg-primary/5">$0 forever</td>
                  <td className="py-4 px-4 text-center text-destructive font-bold">$10K+ forever</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">$15K-25K/month</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-foreground">VP Sales Inherits</td>
                  <td className="py-4 px-4 text-center text-primary font-bold bg-primary/5">Running machine + data</td>
                  <td className="py-4 px-4 text-center text-destructive">Agency dependency</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">Empty desk</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-foreground">If Provider Fails</td>
                  <td className="py-4 px-4 text-center text-primary font-bold bg-primary/5">You own everything</td>
                  <td className="py-4 px-4 text-center text-destructive font-bold">Your pipeline dies</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">You're fine</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-foreground">Data Visibility</td>
                  <td className="py-4 px-4 text-center text-primary font-bold bg-primary/5">100% in your CRM</td>
                  <td className="py-4 px-4 text-center text-destructive">They control access</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">100% yours</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-foreground">Built For</td>
                  <td className="py-4 px-4 text-center text-primary font-bold bg-primary/5">Series A founders</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">Chronic renters</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">Patient builders</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 p-6 bg-destructive/10 border border-destructive/30 rounded-2xl max-w-3xl mx-auto">
            <p className="text-destructive font-bold text-center text-lg">
              Agency goes under? Your pipeline is hostage. They own the data, the infrastructure, the relationships.
            </p>
          </div>
          <div className="mt-4 p-6 bg-primary/10 border border-primary/30 rounded-2xl max-w-3xl mx-auto">
            <p className="text-primary font-bold text-center text-lg">
              Mamut transfers ownership? You're bulletproof. Your VP scales a proven machine. Forever.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-20">
          <Button size="lg" className="bg-gradient-primary text-primary-foreground text-lg px-8 py-4 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300" onClick={() => window.open('https://calendly.com/bruno-leadmamut/30min', '_blank')}>
            Book Your Launch Call
          </Button>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Pricing</h2>
          
          {/* Shared features */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-4xl mx-auto border border-border/50 shadow-soft">
            <h3 className="text-lg font-bold text-foreground mb-4">Every Package Includes</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-muted-foreground">
              <div>✓ Full-time BDRs</div>
              <div>✓ AI operator</div>
              <div>✓ Email infrastructure</div>
              <div>✓ Enrichment tools</div>
              <div>✓ Daily iterations</div>
              <div>✓ Custom workflows</div>
              <div>✓ Dedicated lead</div>
              <div>✓ CRM integration</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
            {/* Starter */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-2">Starter</h3>
              <div className="text-3xl font-bold text-primary mb-4">$6,490<span className="text-lg">/mo</span></div>
              <div className="bg-primary/10 rounded-lg px-3 py-2 mb-4">
                <div className="text-primary font-bold">1 BDR</div>
                <div className="text-primary/80 text-xs">12k contacts/mo</div>
              </div>
            </div>
            
            {/* Growth */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 shadow-soft relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">Most Popular</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Growth</h3>
              <div className="text-3xl font-bold text-primary mb-4">$9,990<span className="text-lg">/mo</span></div>
              <div className="bg-primary/10 rounded-lg px-3 py-2 mb-4">
                <div className="text-primary font-bold">2 BDRs</div>
                <div className="text-primary/80 text-xs">18k contacts/mo</div>
              </div>
            </div>
            
            {/* Scale */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-2">Scale</h3>
              <div className="text-3xl font-bold text-primary mb-4">$13,490<span className="text-lg">/mo</span></div>
              <div className="bg-primary/10 rounded-lg px-3 py-2 mb-4">
                <div className="text-primary font-bold">3 BDRs</div>
                <div className="text-primary/80 text-xs">24k contacts/mo</div>
              </div>
            </div>
            
            {/* Enterprise */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-primary mb-4">$16,990<span className="text-lg">/mo</span></div>
              <div className="bg-primary/10 rounded-lg px-3 py-2 mb-4">
                <div className="text-primary font-bold">4 BDRs</div>
                <div className="text-primary/80 text-xs">30k+ contacts/mo</div>
              </div>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Build-Operate-Transfer. Permanent ownership. Zero ongoing costs.
          </p>
          
          <Button size="lg" className="bg-gradient-primary text-primary-foreground text-lg px-8 py-4 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300" onClick={() => window.open('https://calendly.com/bruno-leadmamut/30min', '_blank')}>
            See Your Path to Ownership
          </Button>
        </div>

      </div>
    </section>;
};