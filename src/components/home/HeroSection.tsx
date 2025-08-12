import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import heroPortImage from "@/assets/hero-port.jpg";
import { Truck, BadgeCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroPortImage}
          alt="Modern container port at sunset with shipping cranes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-russo font-black text-white uppercase tracking-wide mb-6 animate-fade-in-up whitespace-nowrap" 
              style={{ 
                fontSize: 'clamp(40px, 7vw, 96px)', 
                lineHeight: '0.95', 
                letterSpacing: '0.5px',
                textShadow: '0 1px 12px rgba(0,0,0,0.35)'
              }}>
            Dye Chem Agency
          </h1>

          {/* Subheading */}
          <div className="font-inter font-semibold text-white mx-auto mb-8 animate-fade-in-up text-center" 
               style={{ 
                 fontSize: 'clamp(16px, 2.2vw, 22px)', 
                 maxWidth: '980px',
                 animationDelay: '0.2s',
                 textShadow: '0 1px 12px rgba(0,0,0,0.35)'
               }}>
            <span style={{ color: '#F97316' }}>Established 1977</span> • Mumbai & Ahmedabad • <span style={{ color: '#F97316' }}>Chemical Trading</span> 
          </div>

          {/* Description */}
          <p className="font-inter leading-relaxed mb-12 max-w-3xl mx-auto animate-fade-in-up text-center" 
             style={{ 
               fontSize: 'clamp(16px, 1.8vw, 20px)',
               color: '#FFFFFF',
               animationDelay: '0.4s',
               textShadow: '0 1px 12px rgba(0,0,0,0.35)'
             }}>
            Over four decades of unmatched expertise in chemical trading, serving domestic markets with reliable quality, competitive pricing, and optimized logistics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild className="group" style={{ backgroundColor: '#7A1F29', color: '#FFFFFF' }} 
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#641820'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7A1F29'}>
              <Link to="/products" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                View Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button asChild className="group" style={{ backgroundColor: '#7A1F29', color: '#FFFFFF' }} 
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#641820'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7A1F29'}>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <FileText className="mr-2 w-5 h-5" />
                Request a Quote
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="p-6 text-center rounded-lg border" 
                 style={{ 
                   background: 'rgba(255,255,255,0.10)', 
                   border: '1px solid rgba(255,255,255,0.25)', 
                   backdropFilter: 'blur(8px)',
                   color: '#FFFFFF'
                 }}>
              <div className="text-3xl md:text-4xl font-montserrat font-bold mb-2" style={{ color: '#F97316' }}>
                48+
              </div>
              <div className="text-sm md:text-base font-medium">
                Years Experience
              </div>
            </div>

            <div className="p-6 text-center rounded-lg border" 
                 style={{ 
                   background: 'rgba(255,255,255,0.10)', 
                   border: '1px solid rgba(255,255,255,0.25)', 
                   backdropFilter: 'blur(8px)',
                   color: '#FFFFFF'
                 }}>
              <div className="text-2xl md:text-3xl font-montserrat font-bold mb-2" style={{ color: '#F97316' }}>
                3
              </div>
              <div className="text-sm md:text-base font-medium">
                Warehousing Hubs
              </div>
              <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.70)' }}>
                Bhiwandi • Vapi • Ahmedabad
              </div>
            </div>

            <div className="p-6 text-center rounded-lg border"
                 style={{ 
                   background: 'rgba(255,255,255,0.10)', 
                   border: '1px solid rgba(255,255,255,0.25)', 
                   backdropFilter: 'blur(8px)',
                   color: '#FFFFFF'
                 }}>
              
              <div className="text-lg md:text-xl font-montserrat font-bold mb-2" style={{ color: '#F97316' }}>
                Optimised
              </div>
              <div className="text-sm md:text-base font-medium">
                Logistics
              </div>
              <Truck className="w-8 h-8 mx-auto mt-3 text-orange-500" strokeWidth={2} />
            </div>

            <div className="p-6 text-center rounded-lg border" 
                 style={{ 
                   background: 'rgba(255,255,255,0.10)', 
                   border: '1px solid rgba(255,255,255,0.25)', 
                   backdropFilter: 'blur(8px)',
                   color: '#FFFFFF'
                 }}>
              <div className="text-lg md:text-xl font-montserrat font-bold mb-2" style={{ color: '#F97316' }}>
                Reliable
              </div>
              <div className="text-sm md:text-base font-medium">
                Quality & Pricing
              </div>
              <BadgeCheck className="w-8 h-8 mx-auto mt-3 text-orange-500" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;