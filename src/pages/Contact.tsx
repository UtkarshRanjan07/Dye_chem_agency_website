import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import emailjs from "@emailjs/browser"; // ADDED

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productInterest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Pre-fill product if coming from product page
  useEffect(() => {
    const product = searchParams.get("product");
    if (product) {
      setFormData(prev => ({ ...prev, productInterest: product }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      // Template params expected by your EmailJS template
      const templateParams = {
        name: formData.name,
        company: formData.company || "-",
        email: formData.email,
        phone: formData.phone,
        productInterest: formData.productInterest || "General",
        message: formData.message,
      };
  
      // Send the email
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
      const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;
  
      await emailjs.send(serviceId, templateId, templateParams, { publicKey });
  
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
  
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        productInterest: "",
        message: "",
      });

    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hello DCA Team, I'm interested in learning more about your chemical products and services.`
    );
    window.open(`https://wa.me/+918591884487?text=${message}`, "_blank");
  };

  const productOptions = [
    "Anhydrous Sodium Sulphate",
    "Ammonium Chloride",
    "Soda Ash (Light & Dense)",
    "Basic Dyes",
    "Reactive Dyes",
    "Direct Dyes",
    "Acid Dyes",
    "Sodium Bicarbonate",
    "Super Refined Salt",
    "Urea (Technical Grade)",
    "White Dextrin",
    "Yellow Dextrin",
    "Dextrose Monohydrate",
    "Glucose",
    "Maize Starch",
    "Caustic Soda Flakes",
    "Caustic Soda Lye",
    "Custom Requirements",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6 tracking-wide">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-3xl mx-auto">
              Get in touch with our team for product inquiries, quotes, or any questions 
              about our chemical trading services. We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-foreground mb-8 tracking-wide">
                Get In Touch
              </h2>

              {/* Contact Cards */}
              <div className="space-y-6 mb-12">
                <div className="card-port-container">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-foreground mb-2">Head Office</h3>
                      <p className="text-muted-foreground font-inter leading-relaxed">
                        137, Floor-1, Shreeji Chambers, 15-A, Tata Road No. 2,<br />
                        Opp. Prasad Chambers, Opera House, Girgaon,<br />
                        Mumbai 400004, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-port-container">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-foreground mb-2">Phone Numbers</h3>
                      <div className="text-muted-foreground font-inter space-y-1">
                        <div><span className="font-medium">Office:</span> 022-4973 0014</div>
                        <div><span className="font-medium">Office:</span> 022-2363 1473</div>
                        <div><span className="font-medium">Office:</span> 022-2363 1483</div>
                        <div><span className="font-medium">Mobile:</span> +91 9987020507, +91 85918 84487</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-port-container">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-foreground mb-2">Email Addresses</h3>
                      <div className="text-muted-foreground font-inter space-y-1">
                        <div>voradyechem@gmail.com</div>
                        <div>voradyechem@rediffmail.com</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-port-container">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-steel-grey/10 text-steel-grey rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-foreground mb-2">Business Hours</h3>
                      <div className="text-muted-foreground font-inter space-y-1">
                        <div><span className="font-medium">Monday - Saturday:</span> 9:00 AM - 6:00 PM</div>
                        <div><span className="font-medium">Sunday:</span> Closed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="card-port-elevated bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="flex items-center space-x-4 mb-4">
                  <MessageSquare className="w-8 h-8 text-accent" />
                  <div>
                    <h3 className="font-montserrat font-bold text-foreground">Quick Connect</h3>
                    <p className="text-muted-foreground font-inter">Get instant responses on WhatsApp</p>
                  </div>
                </div>
                <Button onClick={handleWhatsAppClick} className="btn-port-accent w-full">
                  Chat on WhatsApp
                </Button>
              </div>

              {/* Branch Office */}
              <div className="mt-8 p-6 bg-muted/30 rounded-xl border border-border/50">
                <h3 className="font-montserrat font-bold text-foreground mb-2">Branch Office</h3>
                <p className="text-muted-foreground font-inter">
                  <span className="font-medium">Ahmedabad, Gujarat, India</span><br />
                  Additional operations and warehousing facilities
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-foreground mb-8 tracking-wide">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="card-port-elevated">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-montserrat font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-port"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-montserrat font-semibold text-foreground mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="form-port"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-montserrat font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-port"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-montserrat font-semibold text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-port"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="productInterest" className="block text-sm font-montserrat font-semibold text-foreground mb-2">
                    Product/Service Interest
                  </label>
                  <Select 
                    value={formData.productInterest} 
                    onValueChange={(value) => setFormData({ ...formData, productInterest: value })}
                  >
                    <SelectTrigger className="form-port">
                      <SelectValue placeholder="Select a product or service" />
                    </SelectTrigger>
                    <SelectContent>
                      {productOptions.map((product) => (
                        <SelectItem key={product} value={product}>
                          {product}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-montserrat font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-port min-h-32"
                    placeholder="Please provide details about your requirements, quantities, delivery location, or any specific questions..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-port-primary w-full"
                >
                  <Send className="mr-2 w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  We typically respond within 24 hours during business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6 tracking-wide">
              Find Us
            </h2>
            <p className="text-xl text-muted-foreground font-inter leading-relaxed">
              Visit our head office in the heart of Mumbai's business district.
            </p>
          </div>

          <div className="card-port-elevated overflow-hidden rounded-xl">
            {/* Embedded Google Map */}
            <div className="relative aspect-video">
            <iframe
              title="Dye Chem Agency — Head Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.4744886072235!2d72.8175991!3d18.9546411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce1033e654b9%3A0x5a9c829e705ccffb!2sDYE%20CHEM%20AGENCY!5e0!3m2!1sen!2sin!4v1755167228163!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0 rounded-xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            </div>

            {/* Footer with address + open-in-maps button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4">
              <p className="text-sm text-muted-foreground">
                Opera House, Girgaon, Mumbai 400004
              </p>
              <Button asChild className="btn-port-primary">
                <a
                  href="https://maps.app.goo.gl/fChUyXMLHMtt4mmx8?g_st=ipc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;