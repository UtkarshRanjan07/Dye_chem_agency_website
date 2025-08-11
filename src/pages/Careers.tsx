import { useState } from "react";
import { Upload, Briefcase, Users, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your application and get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Growth",
      description: "Structured career progression with mentorship and skill development opportunities.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Environment",
      description: "Collaborative workplace with experienced professionals and supportive culture.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Recognition",
      description: "Work with a respected company with 48+ years of chemical trading excellence.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Diverse Opportunities",
      description: "Roles across operations, logistics, sales, and business development.",
    },
  ];

  const currentOpenings = [
    // This would be populated from a CMS or database
    // For now, showing empty state as requested
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6 tracking-wide">
              Join Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-3xl mx-auto">
              We're always open to strong operations, logistics, and sales talent who want to be part 
              of a growing chemical trading company with nearly five decades of industry experience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6 tracking-wide">
              Why Work With DCA?
            </h2>
            <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-2xl mx-auto">
              Join a company that values expertise, integrity, and innovation in chemical trading excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="card-port-elevated text-center hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-montserrat font-bold text-foreground mb-3 tracking-wide">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6 tracking-wide">
              Current Openings
            </h2>
            <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-2xl mx-auto">
              Explore opportunities to grow your career with our experienced team.
            </p>
          </div>

          {currentOpenings.length > 0 ? (
            <div className="space-y-6">
              {currentOpenings.map((opening, index) => (
                <div key={index} className="card-port-elevated">
                  {/* Opening details would go here */}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center card-port-elevated">
              <Briefcase className="w-16 h-16 text-muted-foreground/50 mx-auto mb-6" />
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                No Current Openings
              </h3>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed mb-8 max-w-2xl mx-auto">
                While we don't have any specific openings at the moment, we're always interested 
                in connecting with talented professionals. Submit your profile below and we'll 
                reach out when suitable opportunities arise.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6 tracking-wide">
                Submit Your Application
              </h2>
              <p className="text-xl text-muted-foreground font-inter leading-relaxed">
                Interested in joining our team? Share your details and we'll be in touch.
              </p>
            </div>

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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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

                <div>
                  <label htmlFor="role" className="block text-sm font-montserrat font-semibold text-foreground mb-2">
                    Role Interest *
                  </label>
                  <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                    <SelectTrigger className="form-port">
                      <SelectValue placeholder="Select your area of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="operations">Operations</SelectItem>
                      <SelectItem value="logistics">Logistics</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="business-development">Business Development</SelectItem>
                      <SelectItem value="quality-control">Quality Control</SelectItem>
                      <SelectItem value="administration">Administration</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="cv" className="block text-sm font-montserrat font-semibold text-foreground mb-2">
                  Upload CV/Resume
                </label>
                <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Click to upload or drag and drop your CV/Resume (PDF, DOC, DOCX)
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Maximum file size: 5MB
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-montserrat font-semibold text-foreground mb-2">
                  Cover Letter / Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-port min-h-32"
                  placeholder="Tell us about your experience, interests, and why you'd like to join DCA..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-port-primary w-full"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                By submitting this form, you agree to our privacy policy. 
                We'll only use your information for recruitment purposes.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;