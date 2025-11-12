import { ServiceCard } from "@/components/ServiceCard";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const additionalServices = [
    {
      title: "Desain & Dekorasi Custom",
      description: "Tim desainer profesional untuk menciptakan konsep visual yang unik dan memukau"
    },
    {
      title: "Katering Premium",
      description: "Partnership dengan chef ternama untuk menu kustom dan presentasi eksquisite"
    },
    {
      title: "Entertainment & Talent",
      description: "Kurasi musisi, penyanyi, dan entertainer kelas dunia untuk acara Anda"
    },
    {
      title: "Photography & Videography",
      description: "Dokumentasi profesional dengan photographer dan videographer award-winning"
    },
    {
      title: "Invitation & Stationery",
      description: "Desain dan produksi undangan custom dengan material premium"
    },
    {
      title: "Wedding Favors & Hampers",
      description: "Souvenir eksklusif dan hampers mewah untuk tamu Anda"
    }
  ];

  return (
    <div className="min-h-screen pb-20 pt-16">
      {/* Header */}
      <section className="gradient-dark py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            {t.services.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              title={t.services.packages.coordination.name}
              description="Sempurna untuk klien yang sudah merencanakan sebagian besar acara"
              price={t.services.packages.coordination.price}
              features={t.services.packages.coordination.features}
            />
            
            <ServiceCard
              title={t.services.packages.full.name}
              description="Layanan komprehensif dari konsep hingga eksekusi"
              price={t.services.packages.full.price}
              popular={true}
              features={t.services.packages.full.features}
            />
            
            <ServiceCard
              title={t.services.packages.luxury.name}
              description="Pengalaman eksklusif tanpa batas untuk acara impian Anda"
              price={t.services.packages.luxury.price}
              features={t.services.packages.luxury.features}
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-12 text-center">
              {t.services.additional.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-12 text-center">
              {t.services.why.title}
            </h2>
            
            <div className="space-y-6">
              {t.services.why.items.map((reason, index) => (
                <div key={index} className="p-6 bg-card rounded-lg shadow-sm border-l-4 border-primary">
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
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

export default Services;
