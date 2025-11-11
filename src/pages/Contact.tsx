import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nama harus diisi").max(100, "Nama maksimal 100 karakter"),
  email: z.string().trim().email("Email tidak valid").max(255, "Email maksimal 255 karakter"),
  phone: z.string().trim().min(1, "Nomor telepon harus diisi").max(20, "Nomor telepon maksimal 20 karakter"),
  eventType: z.string().trim().min(1, "Jenis acara harus dipilih"),
  eventDate: z.string().trim().min(1, "Tanggal acara harus diisi"),
  message: z.string().trim().min(10, "Pesan minimal 10 karakter").max(1000, "Pesan maksimal 1000 karakter")
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = contactSchema.safeParse(formData);
    
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      toast.error(firstError.message);
      return;
    }

    // Success
    toast.success("Terima kasih! Kami akan menghubungi Anda segera.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <section className="gradient-dark py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Hubungi Kami
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Mari wujudkan acara impian Anda. Jadwalkan konsultasi gratis dengan tim kami hari ini
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 shadow-elegant">
                <Mail className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">info@royalevent.com</p>
                <p className="text-muted-foreground">booking@royalevent.com</p>
              </Card>

              <Card className="p-6 shadow-elegant">
                <Phone className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Telepon</h3>
                <p className="text-muted-foreground">+62 21 1234 5678</p>
                <p className="text-muted-foreground">+62 812 3456 7890</p>
              </Card>

              <Card className="p-6 shadow-elegant">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Alamat</h3>
                <p className="text-muted-foreground">
                  Jl. Sudirman Kav. 52-53<br />
                  Jakarta Selatan 12190<br />
                  Indonesia
                </p>
              </Card>

              <Card className="p-6 shadow-elegant">
                <Clock className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Jam Operasional</h3>
                <p className="text-muted-foreground">
                  Senin - Jumat: 09.00 - 18.00<br />
                  Sabtu: 10.00 - 16.00<br />
                  Minggu: Appointment Only
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="p-8 shadow-elegant">
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                  Jadwalkan Konsultasi Gratis
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nama Lengkap *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap Anda"
                      required
                      maxLength={100}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        required
                        maxLength={255}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Nomor Telepon *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+62 812 3456 7890"
                        required
                        maxLength={20}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-2">
                        Jenis Acara *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">Pilih jenis acara</option>
                        <option value="wedding">Pernikahan</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="gala">Gala Dinner</option>
                        <option value="other">Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-2">
                        Tanggal Acara (Perkiraan) *
                      </label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Pesan *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ceritakan visi Anda untuk acara impian..."
                      rows={5}
                      required
                      maxLength={1000}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {formData.message.length}/1000 karakter
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    Kirim Permintaan Konsultasi
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-12 text-center">
              Pertanyaan Yang Sering Diajukan
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  Berapa lama waktu ideal untuk mempersiapkan acara?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Untuk pernikahan mewah, kami rekomendasikan minimal 6-12 bulan. Corporate events dan gala bisa 3-6 bulan. Namun kami juga melayani fast-track planning dengan tambahan biaya.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  Apakah konsultasi pertama gratis?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ya, konsultasi pertama 100% gratis tanpa komitmen. Kami akan mendiskusikan visi Anda dan memberikan estimasi biaya yang transparan.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  Apakah kalian melayani acara di luar Jakarta?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tentu! Kami melayani destination events di seluruh Indonesia dan luar negeri. Kami sudah berpengalaman mengorganisir acara di Bali, Lombok, Singapura, dan Thailand.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  Bagaimana sistem pembayaran?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Kami menggunakan sistem pembayaran bertahap: booking fee 30%, progress payment 40% (H-60 hari), dan final payment 30% (H-14 hari). Payment plan dapat disesuaikan.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
