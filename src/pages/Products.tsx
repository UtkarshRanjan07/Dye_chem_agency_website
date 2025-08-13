import { useState } from "react";
import { Search, Download, Filter, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link, useSearchParams } from "react-router-dom";  // UPDATED
import { useEffect } from "react";  // ADDED
import { useRef } from "react";


const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const [searchParams, setSearchParams] = useSearchParams();  // ADDED
  const filterRef = useRef<HTMLDivElement | null>(null); // ADDED

  // ADDED — place this directly below the searchParams line
  useEffect(() => {
    const f = searchParams.get("filter");
    const valid = ["All", "Industrial", "Food", "Dyes"];
    if (f && valid.includes(f)) {
      setSelectedFilter(f);
      setTimeout(() => {
        filterRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100); // ADDED smooth scroll to filters
    }
  }, [searchParams]);

  const products = [
    {
      name: "Anhydrous Sodium Sulphate",
      category: "Industrial",
      grades: ["Technical Grade"],
      applications: ["Glass", "Detergent", "Textile"],
      description: "High-purity anhydrous sodium sulphate for industrial applications.",
    },
    {
      name: "Ammonium Chloride",
      category: "Industrial",
      grades: ["Technical Grade", "Industrial Grade"],
      applications: ["Fertilizer", "Metal Processing"],
      description: "Premium quality ammonium chloride for various industrial uses.",
    },
    {
      name: "Soda Ash Light",
      category: "Industrial",
      grades: ["Technical Grade"],
      applications: ["Glass", "Detergent", "Chemicals"],
      description: "Light density soda ash with consistent quality for manufacturing.",
    },
    {
      name: "Soda Ash Dense",
      category: "Industrial",
      grades: ["Technical Grade"],
      applications: ["Glass", "Detergent", "Chemicals"],
      description: "Dense grade soda ash for heavy industrial applications.",
    },
    {
      name: "Basic Dyes",
      category: "Dyes",
      grades: ["Commercial Grade"],
      applications: ["Textile", "Paper", "Leather"],
      description: "Vibrant basic dyes for textile and industrial coloring applications.",
    },
    {
      name: "Reactive Dyes",
      category: "Dyes",
      grades: ["Commercial Grade"],
      applications: ["Textile", "Cotton", "Cellulose"],
      description: "High-fastness reactive dyes for cotton and cellulose fibers.",
    },
    {
      name: "Direct Dyes",
      category: "Dyes",
      grades: ["Commercial Grade"],
      applications: ["Textile", "Paper", "Cotton"],
      description: "Direct application dyes with excellent color retention.",
    },
    {
      name: "Acid Dyes",
      category: "Dyes",
      grades: ["Commercial Grade"],
      applications: ["Textile", "Wool", "Silk"],
      description: "Acid dyes for protein fibers and synthetic materials.",
    },
    {
      name: "Sodium Bicarbonate",
      category: "Food",
      grades: ["Food Grade", "Technical Grade"],
      applications: ["Food Processing", "Pharmaceuticals", "Industrial"],
      description: "Premium sodium bicarbonate for food and industrial applications.",
    },
    {
      name: "Super Refined Salt",
      category: "Industrial",
      grades: ["Technical Grade"],
      applications: ["Chemical Processing", "Industrial"],
      description: "High-purity refined salt for chemical manufacturing.",
    },
    {
      name: "Urea",
      category: "Industrial",
      grades: ["Technical Grade"],
      applications: ["Fertilizer", "Chemicals", "Plastics"],
      description: "Technical grade urea for industrial manufacturing processes.",
    },
    {
      name: "White Dextrin",
      category: "Food",
      grades: ["Food Grade", "Technical Grade"],
      applications: ["Food Processing", "Adhesives", "Textiles"],
      description: "High-quality white dextrin for multiple applications.",
    },
    {
      name: "Yellow Dextrin",
      category: "Industrial",
      grades: ["Technical Grade"],
      applications: ["Adhesives", "Textiles", "Paper"],
      description: "Industrial grade yellow dextrin for manufacturing uses.",
    },
    {
      name: "Dextrose Monohydrate",
      category: "Food",
      grades: ["Food Grade"],
      applications: ["Food Processing", "Pharmaceuticals", "Beverages"],
      description: "Pure dextrose monohydrate for food and pharmaceutical industries.",
    },
    {
      name: "Glucose",
      category: "Food",
      grades: ["Food Grade"],
      applications: ["Food Processing", "Confectionery", "Beverages"],
      description: "High-quality glucose for food manufacturing applications.",
    },
    {
      name: "Maize Starch",
      category: "Food",
      grades: ["Food Grade"],
      applications: ["Food Processing", "Textiles", "Paper"],
      description: "Premium maize starch for food and industrial applications.",
    },
    {
      name: "Caustic Soda Flakes",
      category: "Industrial",
      grades: ["Technical Grade"],
      applications: ["Chemical Processing", "Textiles", "Paper"],
      description: "High-purity caustic soda flakes for industrial processes.",
    },
    {
      name: "Caustic Soda Lye",
      category: "Industrial",
      grades: ["Technical Grade"],
      applications: ["Chemical Processing", "Water Treatment", "Cleaning"],
      description: "Liquid caustic soda for various industrial applications.",
    },
  ];

  const categories = ["All", "Industrial", "Food", "Dyes"];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.applications.some(app => app.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = selectedFilter === "All" || product.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleRequestQuote = (productName: string) => {
    // Navigate to contact page with product pre-selected
    window.location.href = `/contact?product=${encodeURIComponent(productName)}`;
  };

  const onSelectFilter = (cat: string) => {
    setSelectedFilter(cat);
    if (cat === "All") {
      searchParams.delete("filter");
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ filter: cat }, { replace: true });
    }
  };
  

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6 tracking-wide">
              Our <span className="text-primary">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-3xl mx-auto">
              We deal in a wide range of industrial, food-grade, and technical-grade chemicals, 
              serving diverse industries with consistent quality and competitive pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div ref={filterRef} className="flex flex-col md:flex-row gap-6 mb-12 scroll-mt-28">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search products or applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 form-port"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedFilter === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => onSelectFilter(category)}
                    className="font-montserrat"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <Button className="btn-port-accent">
              <Download className="mr-2 w-4 h-4" />
              Download Catalog
            </Button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.name}
                className="card-port-elevated hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <Badge 
                    variant="secondary" 
                    className={`
                      ${product.category === 'Industrial' ? 'bg-primary/10 text-primary' : ''}
                      ${product.category === 'Food' ? 'bg-accent/10 text-accent' : ''}
                      ${product.category === 'Dyes' ? 'bg-secondary/10 text-secondary' : ''}
                      font-montserrat font-semibold
                    `}
                  >
                    {product.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-montserrat font-bold text-foreground mb-3 tracking-wide">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground font-inter leading-relaxed mb-4">
                  {product.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-sm font-montserrat font-semibold text-foreground mb-1">
                      Grades Available:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {product.grades.map((grade) => (
                        <Badge key={grade} variant="outline" className="text-xs">
                          {grade}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-montserrat font-semibold text-foreground mb-1">
                      Applications:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {product.applications.map((app) => (
                        <Badge key={app} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleRequestQuote(product.name)}
                  className="btn-port-primary w-full"
                >
                  <FileText className="mr-2 w-4 h-4" />
                  Request Quote
                </Button>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl text-muted-foreground/30 mb-4">🔍</div>
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-2">
                No products found
              </h3>
              <p className="text-muted-foreground font-inter">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-20 text-center card-port-elevated bg-gradient-to-r from-primary/5 to-secondary/5">
            <h3 className="text-3xl font-montserrat font-bold text-foreground mb-4 tracking-wide">
              Need Something Specific?
            </h3>
            <p className="text-lg text-muted-foreground font-inter leading-relaxed mb-8 max-w-2xl mx-auto">
              Can't find the chemical you're looking for? Our team can source specialized products 
              and provide custom solutions for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-port-primary">
                <Link to="/contact">
                  Contact Our Team
                </Link>
              </Button>
              <Button asChild className="btn-port-outline">
                <Link to="/market-reach">
                  View Our Capabilities
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;