import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator, Clock, TrendingDown, Target, Gift, AlertTriangle, Calendar } from "lucide-react";

export const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    monthsSinceSeriesA: 6,
    monthlyBurnRate: 150000,
    runwayRemaining: 18,
    investorRevenueTarget: 3000000,
    vpHireTimeline: 5,
    monthlyInboundLeads: 30,
    conversionRate: 15,
    averageDealSize: 5000,
    bdrSalary: 5000,
    bdrManagerSalary: 10000,
    toolsCosts: 2000
  });

  const [selectedPackage, setSelectedPackage] = useState('scale');
  const [viewType, setViewType] = useState('monthly');
  const [showInternalCosts, setShowInternalCosts] = useState(false);

  const packages = {
    starter: {
      name: 'Starter',
      price: 6490,
      bdrs: 1,
      leadMultiplier: 1.3,
      features: [
        '1 BDR (full-time)',
        'Part-time AI operator',
        'Enrichment tools',
        'Outreach tools',
        'Weekly iterations',
        'Basic reporting'
      ]
    },
    growth: {
      name: 'Growth',
      price: 9990,
      bdrs: 2,
      leadMultiplier: 1.4,
      features: [
        '2 BDRs (full-time)',
        'Part-time AI operator',
        'Enrichment tools',
        'Outreach tools',
        'Bi-weekly iterations',
        'LinkedIn execution',
        'Advanced reporting'
      ]
    },
    scale: {
      name: 'Scale',
      price: 13490,
      bdrs: 3,
      leadMultiplier: 1.5,
      features: [
        '3 BDRs (full-time)',
        'Part-time AI operator',
        'Enrichment tools',
        'Outreach tools',
        'Weekly iterations',
        'Account-based sequences',
        'Revenue dashboard',
        'Live call coaching'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      price: 16990,
      bdrs: 4,
      leadMultiplier: 1.6,
      features: [
        '4 BDRs (full-time)',
        'Part-time AI operator',
        'Enrichment tools',
        'Outreach tools',
        'Daily iterations',
        'Custom workflows',
        'Dedicated cell lead',
        'Custom integrations',
        'Priority support'
      ]
    }
  };

  const [results, setResults] = useState({
    currentRevenue: 0,
    internalCosts: 0,
    mamutCost: packages[selectedPackage].price,
    projectedLeads: 0,
    projectedRevenue: 0,
    netGain: 0,
    roi: 0,
    runwayBurned: 0,
    opportunityCost: 0,
    monthsToTarget: 0,
    monthsToTargetTraditional: 0,
    timeAdvantage: 0,
    pipelineCoverage: 0,
    vpInheritsValue: 0,
    vpInheritsPipeline: 0
  });

  const calculateROI = () => {
    const selectedPkg = packages[selectedPackage];
    
    // Current revenue calculation
    const currentRevenue = inputs.monthlyInboundLeads * (inputs.conversionRate / 100) * inputs.averageDealSize;
    
    // Projected leads and revenue with Mamut
    const projectedLeads = inputs.monthlyInboundLeads * selectedPkg.leadMultiplier;
    const projectedRevenue = projectedLeads * (inputs.conversionRate / 100) * inputs.averageDealSize;
    
    // Internal costs calculation
    const internalBDRCosts = inputs.bdrSalary * selectedPkg.bdrs;
    const managerCosts = selectedPkg.bdrs >= 2 ? inputs.bdrManagerSalary : 0;
    const internalCosts = internalBDRCosts + managerCosts + inputs.toolsCosts;
    
    const mamutCost = selectedPkg.price;
    const netGain = projectedRevenue - currentRevenue - mamutCost + internalCosts;
    const roi = internalCosts > 0 ? ((netGain / internalCosts) * 100) : 0;

    // SERIES A SPECIFIC CALCULATIONS
    
    // 1. Runway Burned During Wait
    const runwayBurned = inputs.monthlyBurnRate * inputs.vpHireTimeline;
    
    // 2. Opportunity Cost (Revenue lost during wait + ramp period)
    const traditionalWaitPeriod = inputs.vpHireTimeline + 3; // VP hire + BDR team ramp
    const opportunityCost = projectedRevenue * traditionalWaitPeriod;
    
    // 3. Time to Hit Revenue Target
    const currentAnnualRevenue = currentRevenue * 12;
    const projectedAnnualRevenue = projectedRevenue * 12;
    const revenueGap = inputs.investorRevenueTarget - currentAnnualRevenue;
    
    const monthsToTarget = revenueGap > 0 && projectedRevenue > currentRevenue
      ? (revenueGap / (projectedRevenue - currentRevenue))
      : 0;
    
    const monthsToTargetTraditional = monthsToTarget + traditionalWaitPeriod;
    const timeAdvantage = monthsToTargetTraditional - monthsToTarget;
    
    // 4. Pipeline Coverage
    const pipelineCoverage = inputs.investorRevenueTarget > 0 
      ? (projectedAnnualRevenue / inputs.investorRevenueTarget) * 100 
      : 0;
    
    // 5. What VP Sales Inherits
    const vpInheritsValue = projectedRevenue * inputs.vpHireTimeline; // Revenue generated before VP starts
    const vpInheritsPipeline = projectedLeads * inputs.vpHireTimeline; // Total leads generated

    setResults({
      currentRevenue,
      internalCosts,
      mamutCost,
      projectedLeads,
      projectedRevenue,
      netGain,
      roi,
      runwayBurned,
      opportunityCost,
      monthsToTarget,
      monthsToTargetTraditional,
      timeAdvantage,
      pipelineCoverage,
      vpInheritsValue,
      vpInheritsPipeline
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const handlePackageChange = (packageType: string) => {
    setSelectedPackage(packageType);
    setResults(prev => ({
      ...prev,
      mamutCost: packages[packageType].price
    }));
  };

  // Urgency indicator based on runway
  const getUrgencyLevel = () => {
    if (inputs.runwayRemaining < 12) return { color: 'red', label: 'CRITICAL', icon: AlertTriangle };
    if (inputs.runwayRemaining < 18) return { color: 'orange', label: 'WARNING', icon: Clock };
    return { color: 'green', label: 'HEALTHY', icon: Calendar };
  };

  const urgency = getUrgencyLevel();

  return (
    <section id="roi-calculator" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
            Series A Runway Calculator: The Cost of Waiting
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-4">
            Calculate how much <strong>runway you burn</strong> waiting months to hire a VP Sales and build an internal BDR team—versus launching outbound in <strong>&lt;1 week</strong> while your VP Sales search happens in parallel.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            See the <strong>opportunity cost</strong>, runway impact, and what your VP Sales inherits: a <strong>proven machine vs. a blank slate</strong>.
          </p>
          
          {/* Package Selection */}
          <div className="max-w-md mx-auto mb-8">
            <label className="block text-sm font-medium text-foreground mb-2">
              Select Package for Comparison
            </label>
            <select 
              value={selectedPackage} 
              onChange={(e) => handlePackageChange(e.target.value)}
              className="w-full p-3 border border-border rounded-lg bg-card text-foreground"
            >
              <option value="starter">Starter - $6,490/mo</option>
              <option value="growth">Growth - $9,990/mo</option>
              <option value="scale">Scale - $13,490/mo</option>
              <option value="enterprise">Enterprise - $16,990/mo</option>
            </select>
            <p className="text-sm text-muted-foreground mt-2">
              <a 
                href="#pricing" 
                className="text-primary hover:underline cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View detailed pricing above
              </a> to see what's included in each package
            </p>
          </div>

          {/* Urgency Indicator */}
          {inputs.runwayRemaining > 0 && (
            <div className={`max-w-2xl mx-auto p-4 rounded-lg border-2 mb-8 ${
              urgency.color === 'red' ? 'bg-red-50 border-red-500' :
              urgency.color === 'orange' ? 'bg-orange-50 border-orange-500' :
              'bg-green-50 border-green-500'
            }`}>
              <div className="flex items-center justify-center gap-3">
                <urgency.icon className={`w-5 h-5 ${
                  urgency.color === 'red' ? 'text-red-600' :
                  urgency.color === 'orange' ? 'text-orange-600' :
                  'text-green-600'
                }`} />
                <span className={`font-bold ${
                  urgency.color === 'red' ? 'text-red-800' :
                  urgency.color === 'orange' ? 'text-orange-800' :
                  'text-green-800'
                }`}>
                  {urgency.label}: {inputs.runwayRemaining} months of runway remaining
                </span>
              </div>
              {urgency.color !== 'green' && (
                <p className={`text-sm mt-2 ${
                  urgency.color === 'red' ? 'text-red-700' : 'text-orange-700'
                }`}>
                  Every month without outbound = ${inputs.monthlyBurnRate.toLocaleString()} burned with no new pipeline
                </p>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Your Metrics</h3>
              </div>
              
              {/* View Toggle */}
              <div className="flex gap-2 mb-6 p-1 bg-muted rounded-lg">
                <button
                  onClick={() => setViewType('monthly')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    viewType === 'monthly' 
                      ? 'bg-card text-primary shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Monthly View
                </button>
                <button
                  onClick={() => setViewType('annual')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    viewType === 'annual' 
                      ? 'bg-card text-primary shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Annual View
                </button>
              </div>
              
              <div className="space-y-6">
                {/* Section 1: Series A Context */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                    Series A Context
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Months Since Series A Raise
                      </label>
                      <Input
                        type="number"
                        placeholder="6"
                        className="h-12"
                        onChange={(e) => handleInputChange('monthsSinceSeriesA', e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        How long ago did you close your Series A?
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Current Monthly Burn Rate ($)
                      </label>
                      <Input
                        type="number"
                        placeholder="150000"
                        className="h-12"
                        onChange={(e) => handleInputChange('monthlyBurnRate', e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Total monthly operating expenses
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Months of Runway Remaining
                      </label>
                      <Input
                        type="number"
                        placeholder="18"
                        className="h-12"
                        onChange={(e) => handleInputChange('runwayRemaining', e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        How many months until you need to raise again?
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Investor Revenue Target (Annual $)
                      </label>
                      <Input
                        type="number"
                        placeholder="3000000"
                        className="h-12"
                        onChange={(e) => handleInputChange('investorRevenueTarget', e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        What's your board-mandated revenue target?
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Expected VP Sales Hire Timeline (months)
                      </label>
                      <Input
                        type="number"
                        placeholder="5"
                        className="h-12"
                        onChange={(e) => handleInputChange('vpHireTimeline', e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        How long will it take to recruit and onboard VP Sales?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2: Current Pipeline Metrics */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                    Current Pipeline Metrics
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Current Monthly Inbound Leads
                      </label>
                      <Input
                        type="number"
                        placeholder="30"
                        className="h-12"
                        onChange={(e) => handleInputChange('monthlyInboundLeads', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Conversion Rate (%)
                      </label>
                      <Input
                        type="number"
                        placeholder="15"
                        className="h-12"
                        onChange={(e) => handleInputChange('conversionRate', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Average Deal Size ($)
                      </label>
                      <Input
                        type="number"
                        placeholder="5000"
                        className="h-12"
                        onChange={(e) => handleInputChange('averageDealSize', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Internal Team Cost Comparison (Collapsible) */}
                <div>
                  <button
                    onClick={() => setShowInternalCosts(!showInternalCosts)}
                    className="w-full text-left"
                  >
                    <h4 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center justify-between">
                      <span>Internal Team Cost Comparison (Optional)</span>
                      <span className="text-sm text-muted-foreground">
                        {showInternalCosts ? '▼' : '▶'}
                      </span>
                    </h4>
                  </button>
                  
                  {showInternalCosts && (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground mb-4">
                        Compare against building an internal team of {packages[selectedPackage].bdrs} BDR{packages[selectedPackage].bdrs > 1 ? 's' : ''}
                      </p>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          BDR Salary (per BDR) ($)
                        </label>
                        <Input
                          type="number"
                          placeholder="4500"
                          className="h-12"
                          onChange={(e) => handleInputChange('bdrSalary', e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Will be multiplied by {packages[selectedPackage].bdrs} BDR{packages[selectedPackage].bdrs > 1 ? 's' : ''}
                        </p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          BDR Manager Salary ($)
                        </label>
                        <Input
                          type="number"
                          placeholder="7000"
                          className="h-12"
                          onChange={(e) => handleInputChange('bdrManagerSalary', e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          {packages[selectedPackage].bdrs >= 2 ? 'Included in comparison' : 'Not included (only 1 BDR)'}
                        </p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Tools & Software Costs ($)
                        </label>
                        <Input
                          type="number"
                          placeholder="500"
                          className="h-12"
                          onChange={(e) => handleInputChange('toolsCosts', e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </div>
                
                <Button 
                  onClick={calculateROI}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 mt-6"
                >
                  Calculate Runway Impact
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {/* Key Series A Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1: Runway Burned */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-orange-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    <h4 className="text-sm font-bold text-red-800">Runway Burned</h4>
                  </div>
                  <div className="text-3xl font-bold text-red-700">
                    ${results.runwayBurned.toLocaleString()}
                  </div>
                  <div className="text-xs text-red-600 mt-1">
                    Cost of waiting {inputs.vpHireTimeline} months to start outbound
                  </div>
                </CardContent>
              </Card>

              {/* Card 2: Opportunity Cost */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingDown className="w-6 h-6 text-blue-600" />
                    <h4 className="text-sm font-bold text-blue-800">Lost Revenue</h4>
                  </div>
                  <div className="text-3xl font-bold text-blue-700">
                    ${results.opportunityCost.toLocaleString()}
                  </div>
                  <div className="text-xs text-blue-600 mt-1">
                    Revenue you miss while waiting to build internal team
                  </div>
                </CardContent>
              </Card>

              {/* Card 3: Time to Target */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-6 h-6 text-green-600" />
                    <h4 className="text-sm font-bold text-green-800">Time to Target</h4>
                  </div>
                  <div className="text-2xl font-bold text-green-700">
                    {results.monthsToTarget > 0 ? `${results.monthsToTarget.toFixed(1)} mo` : 'N/A'}
                  </div>
                  <div className="text-xs text-green-600 mt-1">
                    vs {results.monthsToTargetTraditional.toFixed(1)} mo traditional
                    {results.timeAdvantage > 0 && ` (Save ${results.timeAdvantage.toFixed(1)} months)`}
                  </div>
                </CardContent>
              </Card>

              {/* Card 4: VP Inherits */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Gift className="w-6 h-6 text-purple-600" />
                    <h4 className="text-sm font-bold text-purple-800">VP Inherits</h4>
                  </div>
                  <div className="text-2xl font-bold text-purple-700">
                    ${results.vpInheritsValue.toLocaleString()}
                  </div>
                  <div className="text-xs text-purple-600 mt-1">
                    Pipeline value + {results.vpInheritsPipeline.toFixed(0)} leads before they start
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Traditional vs Mamut Path Comparison */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  The Traditional Path vs. Mamut Path
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Metric</th>
                        <th className="text-left py-3 px-4 font-semibold text-red-600">Traditional Path</th>
                        <th className="text-left py-3 px-4 font-semibold text-green-600">Mamut Path</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 font-medium text-foreground">Week 1 Status</td>
                        <td className="py-3 px-4 text-muted-foreground">Interviewing VP candidates</td>
                        <td className="py-3 px-4 text-green-700 font-medium">BDR cell live & dialing</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 font-medium text-foreground">Early Stage</td>
                        <td className="py-3 px-4 text-muted-foreground">VP onboarding, planning</td>
                        <td className="py-3 px-4 text-green-700 font-medium">
                          ${(results.projectedRevenue * 3).toLocaleString()} pipeline, {(results.projectedLeads * 3).toFixed(0)} leads
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 font-medium text-foreground">Transfer Readiness</td>
                        <td className="py-3 px-4 text-muted-foreground">Building BDR team from scratch</td>
                        <td className="py-3 px-4 text-green-700 font-medium">VP inherits proven system</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-foreground">VP Sales Readiness</td>
                        <td className="py-3 px-4 text-muted-foreground">Building from zero</td>
                        <td className="py-3 px-4 text-green-700 font-medium">Scaling proven motion</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Bottom CTA Card */}
            <Card className="border-2 border-primary shadow-xl bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Don't Lose Months. Launch While You Recruit.
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Series A founders: you don't have to choose between hiring great sales leadership and starting outbound now. Mamut launches your outbound cell in &lt;1 week. Your VP Sales search happens in parallel. When they join, they inherit:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-foreground">A proven playbook with real conversion data</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-foreground">Months of pipeline already generated</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-foreground">Clear ICP insights from live conversations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-foreground">A team that's already in rhythm</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-foreground">Full transparency - VP owns strategy from day 1</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-foreground">Scale immediately when leadership is ready</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-foreground mb-6">
                  Result: They spend month 1 scaling, not building from scratch. You save {inputs.vpHireTimeline || 6} months of runway.
                </p>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12"
                  onClick={() => window.open('https://calendar.app.google/VbkHSF52GGH6D41b8', '_blank')}
                >
                  Book Discovery Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};