import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Market Reach", href: "/market-reach" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-steel-grey to-steel-grey/90 text-steel-grey-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/DCA_logo_2.png" 
                alt="DCA Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="font-montserrat font-bold text-xl">
                  Dye Chem Agency
                </div>
                <div className="text-sm opacity-80">
                  Trusted chemical trading since 1977
                </div>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-6 leading-relaxed">
              Over four decades of unmatched expertise in chemical trading, serving 
              domestic markets with reliable quality and competitive pricing.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                <div className="text-sm">
                  <div className="font-medium">Head Office:</div>
                  <div className="opacity-90">
                    137, Floor-1, Shreeji Chambers, 15-A, Tata Road No. 2,<br />
                    Opp. Prasad Chambers, Opera House, Girgaon,<br />
                    Mumbai 400004, Maharashtra, India
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <div className="text-sm">
                  <span className="font-medium">Office:</span> 022-4973 0014, 022-2363 1473<br />
                  <span className="font-medium">CEO Mobile:</span> +91 98210 30508
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <div className="text-sm">
                  voradyechem@gmail.com<br />
                  voradyechem@rediffmail.com
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Warehousing Hubs */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Our Locations</h3>
            <div className="space-y-3 text-sm">
              <div>
                <div className="font-medium text-accent">Warehousing Hubs:</div>
                <ul className="opacity-90 space-y-1 mt-2">
                  <li>• Bhiwandi, Maharashtra</li>
                  <li>• Vapi, Gujarat</li>
                  <li>• Ahmedabad, Gujarat</li>
                </ul>
              </div>
              
              <div>
                <div className="font-medium text-accent">Branch Office:</div>
                <div className="opacity-90 mt-1">Ahmedabad, Gujarat</div>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Clock className="w-4 h-4 text-accent" />
                <div className="text-xs opacity-80">
                  Mon-Sat: 9:00 AM - 6:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gradient-subtle/30 mt-12 pt-8 bg-gradient-to-r from-steel-grey/50 to-transparent rounded-t-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm opacity-90 mb-4 md:mb-0 font-medium">
              © {currentYear} Dye Chem Agency. All rights reserved.
            </div>
            <div className="text-xs opacity-75 bg-steel-grey/30 px-3 py-1 rounded-full">
              Registered Office: Mumbai, Maharashtra, India
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;