import { useState } from "react";
import { EventCard } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import portfolioWedding from "@/assets/portfolio-wedding.jpg";
import portfolioCorporate from "@/assets/portfolio-corporate.jpg";
import portfolioGala from "@/assets/portfolio-gala.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";

type EventCategory = "All" | "Wedding" | "Corporate" | "Gala";

const events = [
  {
    id: 1,
    image: heroWedding,
    title: "The Grand Ballroom Wedding",
    category: "Wedding" as EventCategory,
    description: "Pernikahan mewah di ballroom dengan kristal chandelier, dekorasi bunga putih mawar, dan meja elegant untuk 300 tamu"
  },
  {
    id: 2,
    image: portfolioCorporate,
    title: "Tech Summit Gala 2024",
    category: "Corporate" as EventCategory,
    description: "Acara gala korporat dengan panggung profesional, dekor hitam-emas Art Deco, dan pencahayaan dramatis"
  },
  {
    id: 3,
    image: portfolioGala,
    title: "Charity Gala Dinner",
    category: "Gala" as EventCategory,
    description: "Makan malam gala amal eksklusif dengan tema merah-emas, chandelier kristal, dan pengaturan meja mewah"
  },
  {
    id: 4,
    image: portfolioWedding,
    title: "Sunset Beach Wedding",
    category: "Wedding" as EventCategory,
    description: "Pernikahan outdoor romantis dengan arch bunga putih, pencahayaan sunset, dan venue pinggir pantai yang memukau"
  },
  {
    id: 5,
    image: portfolioCorporate,
    title: "Annual Corporate Celebration",
    category: "Corporate" as EventCategory,
    description: "Perayaan tahunan perusahaan dengan setup panggung modern, teknologi audio visual canggih, dan dekorasi sophisticated"
  },
  {
    id: 6,
    image: portfolioGala,
    title: "Red Carpet Gala Night",
    category: "Gala" as EventCategory,
    description: "Malam gala red carpet dengan dekorasi merah mewah, pencahayaan dramatis, dan suasana eksklusif"
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<EventCategory>("All");

  const filteredEvents = activeCategory === "All" 
    ? events 
    : events.filter(event => event.category === activeCategory);

  const categories: EventCategory[] = ["All", "Wedding", "Corporate", "Gala"];

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <section className="gradient-dark py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Galeri Portofolio
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Jelajahi koleksi acara mewah yang telah kami ciptakan dengan sempurna untuk klien kami
          </p>
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
                {category === "All" ? "Semua" : category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                image={event.image}
                title={event.title}
                category={event.category}
                description={event.description}
                className="animate-fade-in"
              />
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Tidak ada acara dalam kategori ini
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-8 text-center">
              Studi Kasus: The Grand Ballroom Wedding
            </h2>
            
            <div className="bg-card rounded-lg p-8 shadow-elegant">
              <div className="space-y-6">
                <div>
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                    Tantangan
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Klien menginginkan pernikahan mewah dengan tema klasik elegan untuk 300 tamu dalam waktu persiapan yang terbatas - hanya 3 bulan.
                  </p>
                </div>

                <div>
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                    Solusi Kami
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tim kami merancang konsep ballroom mewah dengan chandelier kristal, 5000+ bunga mawar putih premium, pencahayaan custom, dan koordinasi sempurna dengan 15+ vendor terpilih.
                  </p>
                </div>

                <div>
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                    Hasil
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Acara berlangsung sempurna dengan standing ovation dari 300 tamu. Klien sangat puas dan merekomendasikan kami kepada 10+ kolega mereka untuk acara mendatang.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 pt-6 border-t">
                  <div className="text-center">
                    <div className="font-playfair text-3xl font-bold text-primary">300</div>
                    <div className="text-muted-foreground">Tamu</div>
                  </div>
                  <div className="text-center">
                    <div className="font-playfair text-3xl font-bold text-primary">15+</div>
                    <div className="text-muted-foreground">Vendor</div>
                  </div>
                  <div className="text-center">
                    <div className="font-playfair text-3xl font-bold text-primary">3</div>
                    <div className="text-muted-foreground">Bulan Setup</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
