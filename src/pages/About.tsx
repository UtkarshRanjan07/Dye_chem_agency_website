import { Calendar, Users, Building, Award } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import officeBuildingImage from "@/assets/office-building.jpg";

const About = () => {
  const timeline = [
    {
      year: "1977",
      title: "Foundation",
      description: "Founded by Late Mr. Hirachand Vora in Mumbai, establishing the foundation for chemical trading excellence.",
    },
    {
      year: "1980s",
      title: "Market Expansion",
      description: "Expanded operations to serve diverse industries including textiles, dyes, and manufacturing sectors.",
    },
    {
      year: "1990s",
      title: "Infrastructure Growth",
      description: "Established warehousing facilities and strengthened distribution networks across Maharashtra and Gujarat.",
    },
    //{
    //  year: "2000s",
    //  title: "International Trade",
    //  description: "Entered international markets, building relationships with global suppliers and customers.",
    //},
    {
      year: "2010s",
      title: "Leadership Transition",
      description: "Mr. Kalpesh H. Vora took leadership as Proprietor, bringing second-generation expertise and innovation.",
    },
    {
      year: "Today",
      title: "Industry Leader",
      description: "Leading chemical trading company with 48+ years of experience, serving domestic markets.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6 tracking-wide">
              About <span className="text-primary">Dye Chem Agency</span>
            </h1>
            <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-3xl mx-auto">
              Nearly five decades of chemical trading excellence, built on trust, quality, and unwavering commitment to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6 tracking-wide">
                Our Story
              </h2>
              
              <div className="prose prose-lg text-muted-foreground font-inter leading-relaxed space-y-6">
                <p>
                  Founded in 1977 by the late Mr. Hirachand Vora, Dye Chem Agency brings over four decades of unmatched expertise in the chemical trading industry. Today, the company is led by Mr. Kalpesh H. Vora, continuing the legacy as Proprietor and second-generation entrepreneur.
                </p>
                
                <p>
                  With its headquarters in Mumbai and a branch office in Ahmedabad, Dye Chem Agency serves a wide array of clients in domestic markets. The company specializes in chemicals used across the dyes, glass, textile, detergent, agriculture, and food processing sectors.
                </p>
                
                <p>
                  Our commitment to quality, reliable supply chains, and competitive pricing has established us as a trusted partner for businesses seeking consistent chemical solutions. We maintain strategic warehousing hubs in Bhiwandi, Vapi, and Ahmedabad to ensure prompt deliveries and optimized logistics.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-port">
                <img
                  src={officeBuildingImage}
                  alt="Professional office building representing DCA headquarters"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6 tracking-wide">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-2xl mx-auto">
              From humble beginnings to industry leadership - a timeline of growth, innovation, and excellence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className="relative flex items-start space-x-8 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-montserrat font-bold text-sm z-10 shadow-port">
                    {item.year === "Today" ? (
                      <Calendar className="w-6 h-6" />
                    ) : (
                      item.year.slice(0, 4)
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 card-port-elevated">
                    <h3 className="text-xl font-montserrat font-bold text-foreground mb-2 tracking-wide">
                      {item.title}
                    </h3>
                    <div className="text-sm font-montserrat font-semibold text-accent mb-3">
                      {item.year}
                    </div>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6 tracking-wide">
              Leadership
            </h2>
            <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-2xl mx-auto">
              Guided by experienced leadership with deep industry knowledge and commitment to excellence.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="card-port-elevated text-center">
              <div className="w-24 h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-montserrat font-bold">
                KV
              </div>
              
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-2 tracking-wide">
                Mr. Kalpesh H. Vora
              </h3>
              
              <div className="text-lg font-montserrat font-semibold text-accent mb-4">
              Proprietor
              </div>
              
              <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                Second-generation entrepreneur leading Dye Chem Agency with innovative approaches while maintaining the foundational values of quality, reliability, and customer service established by his father.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-montserrat font-semibold text-foreground">
                    Leadership Excellence
                  </div>
                </div>
                
                <div className="text-center">
                  <Building className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-montserrat font-semibold text-foreground">
                    Business Development
                  </div>
                </div>
                
                <div className="text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-montserrat font-semibold text-foreground">
                    Industry Recognition
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;