import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t, language } = useLanguage();
  
  const contactSchema = z.object({
    name: z.string().trim().min(1, language === 'id' ? "Nama harus diisi" : "Name is required").max(100, language === 'id' ? "Nama maksimal 100 karakter" : "Name maximum 100 characters"),
    email: z.string().trim().email(language === 'id' ? "Email tidak valid" : "Invalid email").max(255, language === 'id' ? "Email maksimal 255 karakter" : "Email maximum 255 characters"),
    phone: z.string().trim().min(1, language === 'id' ? "Nomor telepon harus diisi" : "Phone number is required").max(20, language === 'id' ? "Nomor telepon maksimal 20 karakter" : "Phone number maximum 20 characters"),
    eventType: z.string().trim().min(1, language === 'id' ? "Jenis acara harus dipilih" : "Event type must be selected"),
    eventDate: z.string().trim().min(1, language === 'id' ? "Tanggal acara harus diisi" : "Event date is required"),
    message: z.string().trim().min(10, language === 'id' ? "Pesan minimal 10 karakter" : "Message minimum 10 characters").max(1000, language === 'id' ? "Pesan maksimal 1000 karakter" : "Message maximum 1000 characters")
  });
  
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
    toast.success(t.contact.form.success);
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
    <div className="min-h-screen pb-20 pt-16">
      {/* Header */}
      <section className="gradient-dark py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            {t.contact.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t.contact.subtitle}
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
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">{t.contact.info.email}</h3>
                <p className="text-muted-foreground">info@royalevent.com</p>
                <p className="text-muted-foreground">booking@royalevent.com</p>
              </Card>

              <Card className="p-6 shadow-elegant">
                <Phone className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">{t.contact.info.phone}</h3>
                <p className="text-muted-foreground">+62 21 1234 5678</p>
                <p className="text-muted-foreground">+62 812 3456 7890</p>
              </Card>

              <Card className="p-6 shadow-elegant">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">{t.contact.info.address}</h3>
                <p className="text-muted-foreground">
                  Jl. Sudirman Kav. 52-53<br />
                  Jakarta Selatan 12190<br />
                  Indonesia
                </p>
              </Card>

              <Card className="p-6 shadow-elegant">
                <Clock className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">{t.contact.info.hours}</h3>
                <p className="text-muted-foreground">
                  {t.contact.info.hoursValue}
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="p-8 shadow-elegant">
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                  {t.contact.form.title}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.name} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={language === 'id' ? "Masukkan nama lengkap Anda" : "Enter your full name"}
                      required
                      maxLength={100}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        {t.contact.form.email} *
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
                        {t.contact.form.phone} *
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
                        {t.contact.form.eventType} *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">{language === 'id' ? 'Pilih jenis acara' : 'Select event type'}</option>
                        <option value="wedding">{t.contact.form.eventTypeOptions.wedding}</option>
                        <option value="corporate">{t.contact.form.eventTypeOptions.corporate}</option>
                        <option value="gala">{t.contact.form.eventTypeOptions.gala}</option>
                        <option value="other">{t.contact.form.eventTypeOptions.other}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-2">
                        {language === 'id' ? 'Tanggal Acara (Perkiraan)' : 'Event Date (Estimate)'} *
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
                      {t.contact.form.message} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={language === 'id' ? 'Ceritakan visi Anda untuk acara impian...' : 'Tell us your vision for your dream event...'}
                      rows={5}
                      required
                      maxLength={1000}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {formData.message.length}/1000 {language === 'id' ? 'karakter' : 'characters'}
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    {t.contact.form.submit}
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
              {t.contact.faq.title}
            </h2>
            
            <div className="space-y-6">
              {t.contact.faq.items.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
