import { ServiceCard } from "@/components/ServiceCard";
import { CheckCircle2 } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <section className="gradient-dark py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Layanan & Paket Kami
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Solusi lengkap untuk setiap jenis acara mewah, disesuaikan dengan kebutuhan dan anggaran Anda
          </p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              title="Koordinasi Hari-H"
              description="Sempurna untuk klien yang sudah merencanakan sebagian besar acara"
              price="Mulai 25 Jt"
              features={[
                "Koordinasi di hari acara (12 jam)",
                "2 koordinator profesional",
                "Manajemen vendor on-site",
                "Timeline & rundown detail",
                "Emergency kit standar",
                "Post-event cleanup"
              ]}
            />
            
            <ServiceCard
              title="Perencanaan Penuh"
              description="Layanan komprehensif dari konsep hingga eksekusi"
              price="Mulai 75 Jt"
              popular={true}
              features={[
                "Konsultasi unlimited",
                "Desain konsep & tema acara",
                "Vendor sourcing & negosiasi",
                "Budget management",
                "Site visit & koordinasi",
                "Koordinasi penuh di hari-H",
                "4 koordinator profesional",
                "Wedding rehearsal",
                "Emergency kit premium"
              ]}
            />
            
            <ServiceCard
              title="Luxury Signature"
              description="Pengalaman eksklusif tanpa batas untuk acara impian Anda"
              price="Custom"
              features={[
                "Semua fitur Perencanaan Penuh",
                "Dedicated wedding planner",
                "Custom design & dekorasi",
                "Vendor tier-1 eksklusif",
                "Destination wedding support",
                "Guest concierge service",
                "6+ koordinator profesional",
                "Pre & post-wedding events",
                "Professional documentation team"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-12 text-center">
              Layanan Tambahan
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
              Mengapa Memilih Royal Event Organizer?
            </h2>
            
            <div className="space-y-6">
              {whyChooseUs.map((reason, index) => (
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

const whyChooseUs = [
  {
    title: "Pengalaman 10+ Tahun",
    description: "Lebih dari satu dekade mengorganisir acara high-end dengan standar internasional"
  },
  {
    title: "Network Vendor Eksklusif",
    description: "Akses ke vendor tier-1 terbaik dengan harga dan layanan eksklusif untuk klien kami"
  },
  {
    title: "Personalisasi Tanpa Batas",
    description: "Setiap acara dirancang unik sesuai dengan visi, kepribadian, dan budget Anda"
  },
  {
    title: "Project Management Profesional",
    description: "Tim berpengalaman dengan sistem manajemen proven untuk memastikan tidak ada yang terlewat"
  }
];

export default Services;
