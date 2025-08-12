import { Link } from "react-router-dom";
import { ArrowRight, Beaker, Truck, Factory, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import chemicalContainersImage from "@/assets/chemical-containers.jpg";

const ProductsSection = () => {
  const productCategories = [
    {
      icon: <Beaker className="w-8 h-8" />,
      title: "Industrial Chemicals",
      description: "Anhydrous Sodium Sulphate, Ammonium Chloride, Soda Ash Light & Dense",
      count: "Products",
      color: "bg-primary",
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Dyes & Pigments",
      description: "Basic, Reactive, Direct, and Acid dyes for textile and industrial applications",
      count: "Varieties",
      color: "bg-accent",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Food Grade Chemicals",
      description: "Sodium Bicarbonate, Dextrose Monohydrate, Glucose, and Maize Starch",
      count: "Products",
      color: "bg-secondary",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Technical Grade",
      description: (
        <>
          Super Refined Salt, Urea, White & Yellow Dextrin, Caustic  <br /> Soda
        </>
      ),
      count: "Products",
      color: "bg-steel-grey",
    },
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6 tracking-wide">
            What We Supply
          </h2>
          <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-3xl mx-auto">
            A comprehensive range of industrial, food-grade, and technical-grade chemicals 
            serving multiple industries across domestic and international markets.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <div 
              key={category.title}
              className="card-port-elevated group hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${category.color} text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-montserrat font-bold text-foreground mb-3 tracking-wide">
                {category.title}
              </h3>
              
              <p className="text-muted-foreground font-inter leading-relaxed mb-4">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-montserrat font-semibold text-accent">
                  {category.count}
                </span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={chemicalContainersImage}
              alt="Industrial chemical containers and storage"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
          </div>
          
          <div className="relative z-10 py-16 px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4 tracking-wide">
              Ready to Explore Our Full Product Range?
            </h3>
            <p className="text-lg text-white/90 font-inter leading-relaxed mb-8 max-w-2xl mx-auto">
              Browse our comprehensive catalog of high-quality chemicals with detailed 
              specifications, grades, and competitive pricing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-port-accent bg-white text-primary hover:bg-white/90">
                <Link to="/products">
                  View All Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button asChild className="btn-port-outline border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">
                  Request Product Catalog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;