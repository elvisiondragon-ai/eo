import { useState } from "react";
import { VendorCard } from "@/components/VendorCard";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

type VendorCategory = "All" | "Venue" | "Catering" | "Florist" | "Photography" | "Entertainment";

const vendors = [
  {
    id: 1,
    name: "The Grand Ballroom",
    category: "Venue" as VendorCategory,
    location: "Jakarta Selatan",
    rating: 4.9,
    description: "Ballroom mewah dengan kapasitas 500+ tamu, chandelier kristal, dan teknologi audio visual modern",
    specialties: ["Wedding", "Corporate", "Gala"]
  },
  {
    id: 2,
    name: "Culinary Excellence",
    category: "Catering" as VendorCategory,
    location: "Jakarta Pusat",
    rating: 4.8,
    description: "Premium catering dengan menu fusion international dan lokal, presentasi berkelas, chef berpengalaman",
    specialties: ["Fine Dining", "Buffet", "Cocktail"]
  },
  {
    id: 3,
    name: "Blooms & Petals",
    category: "Florist" as VendorCategory,
    location: "Tangerang",
    rating: 4.9,
    description: "Florist premium dengan bunga import segar, desain inovatif, dan instalasi spektakuler",
    specialties: ["Bouquet", "Centerpiece", "Installation"]
  },
  {
    id: 4,
    name: "Eternal Moments Studio",
    category: "Photography" as VendorCategory,
    location: "Jakarta",
    rating: 5.0,
    description: "Award-winning photography studio dengan portfolio wedding & corporate events internasional",
    specialties: ["Wedding", "Portrait", "Cinematic"]
  },
  {
    id: 5,
    name: "Harmony Entertainment",
    category: "Entertainment" as VendorCategory,
    location: "Jakarta",
    rating: 4.8,
    description: "Talent agency dengan musisi profesional, band, DJ, dan performer untuk berbagai jenis acara",
    specialties: ["Live Band", "DJ", "MC"]
  },
  {
    id: 6,
    name: "Seaside Resort & Spa",
    category: "Venue" as VendorCategory,
    location: "Bali",
    rating: 5.0,
    description: "Luxury beachfront resort dengan private beach, tropical garden, dan sunset view yang memukau",
    specialties: ["Destination Wedding", "Outdoor", "Beach"]
  },
  {
    id: 7,
    name: "Gourmet Delights",
    category: "Catering" as VendorCategory,
    location: "Surabaya",
    rating: 4.7,
    description: "Catering dengan spesialisasi menu Asia-Eropa fusion, layanan professional, dan presentasi artistic",
    specialties: ["Asian Fusion", "European", "Dessert"]
  },
  {
    id: 8,
    name: "Garden of Eden Florist",
    category: "Florist" as VendorCategory,
    location: "Bandung",
    rating: 4.8,
    description: "Florist dengan konsep natural-romantic, menggunakan bunga lokal dan import premium quality",
    specialties: ["Romantic", "Rustic", "Modern"]
  },
  {
    id: 9,
    name: "Lens & Light Productions",
    category: "Photography" as VendorCategory,
    location: "Bali",
    rating: 4.9,
    description: "Production house untuk photography dan videography dengan cinematic approach dan modern editing",
    specialties: ["Videography", "Drone", "Same Day Edit"]
  }
];

const Vendors = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<VendorCategory>("All");

  const filteredVendors = activeCategory === "All" 
    ? vendors 
    : vendors.filter(vendor => vendor.category === activeCategory);

  const categories: VendorCategory[] = ["All", "Venue", "Catering", "Florist", "Photography", "Entertainment"];

  const getCategoryLabel = (category: VendorCategory) => {
    if (category === "All") return t.vendors.filters.all;
    if (category === "Venue") return t.vendors.filters.venue;
    if (category === "Catering") return t.vendors.filters.catering;
    if (category === "Florist") return "Florist";
    if (category === "Photography") return t.vendors.filters.photo;
    if (category === "Entertainment") return t.vendors.filters.entertainment;
    return category;
  };

  return (
    <div className="min-h-screen pb-20 pt-16">
      {/* Header */}
      <section className="gradient-dark py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            {t.vendors.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t.vendors.subtitle}
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 bg-muted border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-foreground leading-relaxed">
              Semua vendor dalam direktori kami adalah mitra tepercaya yang telah bekerja sama dengan kami dalam ratusan acara sukses. 
              <span className="text-primary font-semibold"> Anda mendapatkan akses eksklusif, harga preferential, dan jaminan kualitas.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category 
                    ? "bg-primary text-primary-foreground" 
                    : ""
                }
              >
                {getCategoryLabel(category)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                name={vendor.name}
                category={vendor.category}
                location={vendor.location}
                rating={vendor.rating}
                description={vendor.description}
                specialties={vendor.specialties}
              />
            ))}
          </div>

          {filteredVendors.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Tidak ada vendor dalam kategori ini
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-12 text-center">
              {t.vendors.partnership.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {t.vendors.partnership.items.map((benefit, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vendors;
