import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/EventCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ArrowRight, Sparkles, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-wedding.jpg";
import portfolioWedding from "@/assets/portfolio-wedding.jpg";
import portfolioCorporate from "@/assets/portfolio-corporate.jpg";
import portfolioGala from "@/assets/portfolio-gala.jpg";

const Home = () => {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Luxury Event Setup"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-elegant-black/70 via-elegant-black/50 to-elegant-black/80" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Transform Your Vision Into
            <span className="block mt-2 bg-gradient-gold bg-clip-text text-transparent">
              Unforgettable Celebrations
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Penyelenggara acara mewah yang menghadirkan pernikahan impian, gala korporat, dan acara eksklusif dengan keanggunan tanpa batas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-glow">
                Mulai Konsultasi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-elegant-black">
                Lihat Portofolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-elegant-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="font-playfair text-4xl font-bold text-primary">500+</div>
              <p className="text-white/80">Acara Sukses</p>
            </div>
            <div className="space-y-2">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="font-playfair text-4xl font-bold text-primary">15+</div>
              <p className="text-white/80">Penghargaan Industri</p>
            </div>
            <div className="space-y-2">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="font-playfair text-4xl font-bold text-primary">98%</div>
              <p className="text-white/80">Kepuasan Klien</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Karya Terpilih Kami
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Setiap acara adalah mahakarya yang dirancang dengan sempurna untuk menciptakan momen tak terlupakan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <EventCard
              image={portfolioWedding}
              title="Pernikahan Mewah"
              category="Wedding"
              description="Pernikahan outdoor yang memukau dengan dekorasi bunga putih elegan dan pencahayaan romantis"
            />
            <EventCard
              image={portfolioCorporate}
              title="Gala Korporat"
              category="Corporate"
              description="Acara gala perusahaan dengan panggung profesional dan dekor hitam-emas yang sophisticated"
            />
            <EventCard
              image={portfolioGala}
              title="Malam Gala"
              category="Gala"
              description="Makan malam gala eksklusif dengan tema merah-emas yang memukau dan mewah"
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="group">
                Lihat Semua Portofolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Apa Kata Klien Kami
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kepercayaan dan kepuasan klien adalah prioritas utama kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Siti Nurhaliza"
              role="Pengantin"
              rating={5}
              content="Royal Event Organizer membuat pernikahan kami menjadi hari paling indah dalam hidup. Setiap detail sempurna dan melebihi ekspektasi kami!"
            />
            <TestimonialCard
              name="Bambang Hartono"
              role="CEO, PT Maju Jaya"
              rating={5}
              content="Gala tahunan perusahaan kami dikelola dengan sangat profesional. Tim yang luar biasa dengan hasil yang spektakuler."
            />
            <TestimonialCard
              name="Diana Pungky"
              role="Event Director"
              rating={5}
              content="Kolaborasi terbaik! Mereka memahami visi kami dan mengeksekusinya dengan sempurna. Highly recommended untuk acara high-end."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-royal">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Siap Mewujudkan Acara Impian Anda?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Mari berdiskusi tentang visi Anda dan bagaimana kami dapat menghadirkan acara yang tak terlupakan
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-elegant-black hover:bg-white/90 font-semibold">
              Jadwalkan Konsultasi Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
