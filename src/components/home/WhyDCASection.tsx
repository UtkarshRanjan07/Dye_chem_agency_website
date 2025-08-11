import { CheckCircle, Clock, Trophy, Truck, Shield, Globe } from "lucide-react";
import warehouseImage from "@/assets/warehouse.jpg";

const WhyDCASection = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Ready Stock",
      description: "Maintained inventory across three strategic warehousing hubs ensuring immediate availability.",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Optimized Logistics",
      description: "Efficient distribution network with prompt deliveries from Bhiwandi, Vapi, and Ahmedabad.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Consistent Quality",
      description: "Rigorous quality control processes ensuring reliable chemical specifications and purity.",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Competitive Pricing",
      description: "Market-leading rates with transparent pricing structure and flexible payment terms.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "48+ Years Experience",
      description: "Nearly five decades of expertise in chemical trading and industry relationships.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Serving both domestic and international markets with reliable shipment capabilities.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6 tracking-wide">
              Why Choose <span className="text-primary">DCA</span>?
            </h2>
            
            <p className="text-xl text-muted-foreground font-inter leading-relaxed mb-10">
              Four decades of chemical trading excellence backed by reliable infrastructure, 
              quality assurance, and customer-centric service delivery.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="flex items-start space-x-4 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {benefit.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-montserrat font-bold text-foreground mb-2 tracking-wide">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-port">
              <img
                src={warehouseImage}
                alt="Professional chemical warehouse with organized storage"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 card-port-elevated bg-white">
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold text-primary mb-1">3</div>
                <div className="text-sm font-medium text-muted-foreground">Warehousing Hubs</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 card-port-elevated bg-white">
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold text-accent mb-1">1977</div>
                <div className="text-sm font-medium text-muted-foreground">Established</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDCASection;