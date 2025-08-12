import { Truck, Globe, Factory, Wheat, Shirt, Beaker, Home, Building } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import warehouseImage from "@/assets/warehouse.jpg";
import chemicalContainersImage from "@/assets/chemical-containers.jpg";

const MarketReach = () => {
  const industries = [
    {
      icon: <Beaker className="w-8 h-8" />,
      name: "Dyes",
      description: "Comprehensive range of basic, reactive, direct, and acid dyes for industrial applications.",
      color: "bg-primary",
    },
    {
      icon: <Building className="w-8 h-8" />,
      name: "Glass",
      description: "Specialized chemicals for glass manufacturing including soda ash and sodium sulphate.",
      color: "bg-secondary",
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      name: "Textile",
      description: "Quality chemicals and dyes for textile processing, dyeing, and finishing operations.",
      color: "bg-accent",
    },
    {
      icon: <Home className="w-8 h-8" />,
      name: "Detergent",
      description: "Industrial grade chemicals for detergent and cleaning product manufacturing.",
      color: "bg-steel-grey",
    },
    {
      icon: <Wheat className="w-8 h-8" />,
      name: "Agriculture",
      description: "Agricultural chemicals including fertilizers and crop protection products.",
      color: "bg-primary",
    },
    {
      icon: <Factory className="w-8 h-8" />,
      name: "Food Processing",
      description: "Food-grade chemicals for processing, preservation, and manufacturing applications.",
      color: "bg-accent",
    },
  ];

  const warehousingHubs = [
    {
      location: "Bhiwandi, Maharashtra",
      description: "Strategic location near Mumbai port for efficient import/export operations",
      advantages: ["Port proximity", "Rail connectivity", "Highway access"],
    },
    {
      location: "Vapi, Gujarat",
      description: "Industrial hub with excellent chemical manufacturing ecosystem",
      advantages: ["Industrial cluster", "Chemical corridor", "Export facilities"],
    },
    {
      location: "Ahmedabad, Gujarat",
      description: "Commercial center with strong distribution networks",
      advantages: ["Commercial hub", "Distribution network", "Business center"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6 tracking-wide">
              Market <span className="text-primary">Reach</span>
            </h1>
            <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-3xl mx-auto">
              Comprehensive industries coverage and robust logistics infrastructure 
              enabling efficient domestic chemical trading operations.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6 tracking-wide">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-2xl mx-auto">
              Specialized chemical solutions across diverse industrial sectors with 
              deep understanding of specific requirements and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={industry.name}
                className="card-port-elevated hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${industry.color} text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {industry.icon}
                </div>
                
                <h3 className="text-xl font-montserrat font-bold text-foreground mb-3 tracking-wide">
                  {industry.name}
                </h3>
                
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domestic Supply Chain */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6 tracking-wide">
                Domestic Supply Chain
              </h2>
              
              <p className="text-xl text-muted-foreground font-inter leading-relaxed mb-8">
                We maintain robust distribution networks with ready stock at key warehousing hubs 
                such as Bhiwandi, Vapi, and Ahmedabad, ensuring prompt deliveries and optimized logistics.
              </p>

              <div className="space-y-6">
                {warehousingHubs.map((hub, index) => (
                  <div 
                    key={hub.location}
                    className="card-port-container animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <h3 className="text-lg font-montserrat font-bold text-foreground mb-2 tracking-wide">
                      {hub.location}
                    </h3>
                    <p className="text-muted-foreground font-inter leading-relaxed mb-4">
                      {hub.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {hub.advantages.map((advantage) => (
                        <span 
                          key={advantage}
                          className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-montserrat font-medium"
                        >
                          {advantage}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-port">
                <img
                  src={warehouseImage}
                  alt="Professional warehouse facility for chemical storage"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Info */}
              <div className="absolute -bottom-8 -left-8 card-port-elevated bg-white">
                <div className="flex items-center space-x-3">
                  <Truck className="w-8 h-8 text-primary" />
                  <div>
                    <div className="text-lg font-montserrat font-bold text-foreground">
                      3 Strategic Hubs
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Optimized Distribution
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Trade */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-port">
                <img
                  src={chemicalContainersImage}
                  alt="International chemical container operations"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Info */}
              <div className="absolute -top-8 -right-8 card-port-elevated bg-white">
                <div className="flex items-center space-x-3">
                  <Globe className="w-8 h-8 text-accent" />
                  <div>
                    <div className="text-lg font-montserrat font-bold text-foreground">
                      Global Reach
                    </div>
                    <div className="text-sm text-muted-foreground">
                      International Markets
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6 tracking-wide">
                International Trade
              </h2>
              
              <p className="text-xl text-muted-foreground font-inter leading-relaxed mb-8">
                Actively engaged in global chemical trading, we guarantee consistent product quality, 
                reliable shipments, and competitive pricing for our clientele.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-montserrat font-bold text-foreground mb-2 tracking-wide">
                      Global Market Access
                    </h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      Established relationships with international suppliers across multiple continents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-montserrat font-bold text-foreground mb-2 tracking-wide">
                      Reliable Logistics
                    </h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      Streamlined export/import processes with trusted logistics partners and port connectivity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Beaker className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-montserrat font-bold text-foreground mb-2 tracking-wide">
                      Quality Assurance
                    </h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      Stringent quality control measures ensuring international standards compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* India Map Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6 tracking-wide">
              Our Presence Across India
            </h2>
            <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-2xl mx-auto">
              Strategic locations enabling efficient distribution and customer service 
              across the Indian subcontinent.
            </p>
          </div>

          <div className="card-port-elevated bg-gradient-to-br from-primary/5 to-secondary/5 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-montserrat font-bold">
                  HQ
                </div>
                <h3 className="font-montserrat font-bold text-foreground mb-2">Mumbai</h3>
                <p className="text-sm text-muted-foreground">Head Office</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-montserrat font-bold">
                  BR
                </div>
                <h3 className="font-montserrat font-bold text-foreground mb-2">Ahmedabad</h3>
                <p className="text-sm text-muted-foreground">Branch Office</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-montserrat font-bold">
                  WH
                </div>
                <h3 className="font-montserrat font-bold text-foreground mb-2">Bhiwandi</h3>
                <p className="text-sm text-muted-foreground">Warehouse Hub</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-steel-grey text-steel-grey-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-montserrat font-bold">
                  WH
                </div>
                <h3 className="font-montserrat font-bold text-foreground mb-2">Vapi</h3>
                <p className="text-sm text-muted-foreground">Warehouse Hub</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground font-inter">
                Covering major industrial regions with efficient distribution networks
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketReach;