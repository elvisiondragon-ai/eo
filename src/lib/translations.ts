export type Language = 'id' | 'en';

export const translations = {
  id: {
    // Navigation
    nav: {
      home: 'Beranda',
      portfolio: 'Portofolio',
      services: 'Layanan',
      vendors: 'Vendor',
      contact: 'Kontak',
    },
    // Home page
    home: {
      hero: {
        title: 'Ciptakan Acara Istimewa Anda',
        subtitle: 'Event organizer premium untuk pernikahan mewah, gala korporat, dan acara eksklusif',
        cta: 'Konsultasi Gratis',
      },
      stats: {
        events: 'Acara Sukses',
        clients: 'Klien Puas',
        vendors: 'Partner Vendor',
        experience: 'Tahun Pengalaman',
      },
      portfolio: {
        title: 'Portofolio Unggulan',
        subtitle: 'Lihat koleksi acara istimewa yang telah kami kelola',
        viewAll: 'Lihat Semua Portofolio',
      },
      testimonials: {
        title: 'Apa Kata Klien Kami',
        subtitle: 'Kepuasan klien adalah prioritas utama kami',
      },
      cta: {
        title: 'Siap Mewujudkan Acara Impian Anda?',
        subtitle: 'Hubungi kami hari ini untuk konsultasi gratis',
        button: 'Hubungi Kami',
      },
    },
    // Portfolio page
    portfolio: {
      title: 'Galeri Portofolio',
      subtitle: 'Jelajahi koleksi acara istimewa yang telah kami kelola',
      filters: {
        all: 'Semua',
        wedding: 'Pernikahan',
        corporate: 'Korporat',
        gala: 'Gala',
      },
      caseStudy: {
        title: 'Studi Kasus Mendalam',
        challenge: 'Tantangan',
        solution: 'Solusi',
        result: 'Hasil',
      },
    },
    // Services page
    services: {
      title: 'Layanan & Paket',
      subtitle: 'Pilih paket yang sesuai dengan kebutuhan acara Anda',
      packages: {
        coordination: {
          name: 'Koordinasi Hari-H',
          price: 'Mulai dari Rp 15.000.000',
          features: [
            'Koordinasi vendor pada hari H',
            'Timeline detail acara',
            'Setup & breakdown venue',
            'Manajemen tim 4 orang',
          ],
        },
        full: {
          name: 'Perencanaan Penuh',
          price: 'Mulai dari Rp 35.000.000',
          popular: 'Terpopuler',
          features: [
            'Konsultasi unlimited',
            'Vendor sourcing & negosiasi',
            'Design & styling konsep',
            'Budget management',
            'Koordinasi hari H',
            'Manajemen tim 8 orang',
          ],
        },
        luxury: {
          name: 'Luxury Signature',
          price: 'Custom',
          features: [
            'Semua fitur Perencanaan Penuh',
            'Personal wedding planner',
            'Vendor premium eksklusif',
            'Custom design & styling',
            'Destination event support',
            'Manajemen tim unlimited',
          ],
        },
      },
      additional: {
        title: 'Layanan Tambahan',
        items: [
          'Design & Styling Konsep',
          'Vendor Sourcing',
          'Budget Management',
          'Guest Management',
        ],
      },
      why: {
        title: 'Mengapa Memilih Kami',
        items: [
          {
            title: 'Pengalaman 10+ Tahun',
            description: 'Track record mengelola 500+ acara premium',
          },
          {
            title: 'Network Vendor Premium',
            description: 'Akses eksklusif ke vendor terbaik',
          },
          {
            title: 'Tim Profesional',
            description: 'Certified event planners berpengalaman',
          },
          {
            title: 'Full Support',
            description: 'Pendampingan dari konsep hingga eksekusi',
          },
        ],
      },
    },
    // Vendors page
    vendors: {
      title: 'Direktori Vendor Pilihan',
      subtitle: 'Partner tepercaya yang telah dikurasi untuk acara Anda',
      filters: {
        all: 'Semua',
        venue: 'Venue',
        catering: 'Katering',
        photo: 'Fotografi',
        decoration: 'Dekorasi',
        entertainment: 'Hiburan',
      },
      partnership: {
        title: 'Manfaat Kemitraan Kami',
        items: [
          {
            title: 'Harga Khusus',
            description: 'Negosiasi terbaik untuk klien kami',
          },
          {
            title: 'Quality Assured',
            description: 'Vendor terverifikasi dengan track record terbukti',
          },
          {
            title: 'One-Stop Service',
            description: 'Koordinasi seamless antar vendor',
          },
        ],
      },
    },
    // Contact page
    contact: {
      title: 'Hubungi Kami',
      subtitle: 'Jadwalkan konsultasi gratis untuk acara impian Anda',
      info: {
        email: 'Email',
        phone: 'Telepon',
        address: 'Alamat',
        hours: 'Jam Operasional',
        hoursValue: 'Sen - Sab: 09:00 - 18:00',
      },
      form: {
        title: 'Jadwalkan Konsultasi Gratis',
        name: 'Nama Lengkap',
        email: 'Email',
        phone: 'Nomor Telepon',
        eventType: 'Jenis Acara',
        eventTypeOptions: {
          wedding: 'Pernikahan',
          corporate: 'Korporat',
          gala: 'Gala',
          other: 'Lainnya',
        },
        message: 'Ceritakan tentang acara Anda',
        submit: 'Kirim Pesan',
        success: 'Pesan terkirim! Kami akan segera menghubungi Anda.',
      },
      faq: {
        title: 'Pertanyaan Umum',
        items: [
          {
            question: 'Berapa lama sebelumnya saya harus booking?',
            answer: 'Untuk acara besar seperti pernikahan, kami sarankan booking 6-12 bulan sebelumnya. Namun kami juga bisa mengakomodasi acara dengan timeline lebih singkat.',
          },
          {
            question: 'Apakah ada biaya konsultasi?',
            answer: 'Konsultasi pertama gratis! Kami akan membahas visi acara Anda dan memberikan rekomendasi paket yang sesuai.',
          },
          {
            question: 'Apakah bisa mengatur acara di luar kota?',
            answer: 'Ya, kami berpengalaman mengatur destination events di berbagai kota di Indonesia dan luar negeri.',
          },
        ],
      },
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      services: 'Services',
      vendors: 'Vendors',
      contact: 'Contact',
    },
    // Home page
    home: {
      hero: {
        title: 'Create Your Extraordinary Event',
        subtitle: 'Premium event organizer for luxury weddings, corporate galas, and exclusive events',
        cta: 'Free Consultation',
      },
      stats: {
        events: 'Successful Events',
        clients: 'Happy Clients',
        vendors: 'Vendor Partners',
        experience: 'Years Experience',
      },
      portfolio: {
        title: 'Featured Portfolio',
        subtitle: 'See our collection of extraordinary events we have managed',
        viewAll: 'View All Portfolio',
      },
      testimonials: {
        title: 'What Our Clients Say',
        subtitle: 'Client satisfaction is our top priority',
      },
      cta: {
        title: 'Ready to Bring Your Dream Event to Life?',
        subtitle: 'Contact us today for a free consultation',
        button: 'Contact Us',
      },
    },
    // Portfolio page
    portfolio: {
      title: 'Portfolio Gallery',
      subtitle: 'Explore our collection of extraordinary events we have managed',
      filters: {
        all: 'All',
        wedding: 'Wedding',
        corporate: 'Corporate',
        gala: 'Gala',
      },
      caseStudy: {
        title: 'In-Depth Case Study',
        challenge: 'Challenge',
        solution: 'Solution',
        result: 'Result',
      },
    },
    // Services page
    services: {
      title: 'Services & Packages',
      subtitle: 'Choose the package that suits your event needs',
      packages: {
        coordination: {
          name: 'Day-of Coordination',
          price: 'Starting from IDR 15,000,000',
          features: [
            'Vendor coordination on the day',
            'Detailed event timeline',
            'Venue setup & breakdown',
            '4-person team management',
          ],
        },
        full: {
          name: 'Full Planning',
          price: 'Starting from IDR 35,000,000',
          popular: 'Most Popular',
          features: [
            'Unlimited consultation',
            'Vendor sourcing & negotiation',
            'Concept design & styling',
            'Budget management',
            'Day-of coordination',
            '8-person team management',
          ],
        },
        luxury: {
          name: 'Luxury Signature',
          price: 'Custom',
          features: [
            'All Full Planning features',
            'Personal wedding planner',
            'Exclusive premium vendors',
            'Custom design & styling',
            'Destination event support',
            'Unlimited team management',
          ],
        },
      },
      additional: {
        title: 'Additional Services',
        items: [
          'Concept Design & Styling',
          'Vendor Sourcing',
          'Budget Management',
          'Guest Management',
        ],
      },
      why: {
        title: 'Why Choose Us',
        items: [
          {
            title: '10+ Years Experience',
            description: 'Track record of managing 500+ premium events',
          },
          {
            title: 'Premium Vendor Network',
            description: 'Exclusive access to the best vendors',
          },
          {
            title: 'Professional Team',
            description: 'Certified experienced event planners',
          },
          {
            title: 'Full Support',
            description: 'Guidance from concept to execution',
          },
        ],
      },
    },
    // Vendors page
    vendors: {
      title: 'Curated Vendor Directory',
      subtitle: 'Trusted partners carefully selected for your event',
      filters: {
        all: 'All',
        venue: 'Venue',
        catering: 'Catering',
        photo: 'Photography',
        decoration: 'Decoration',
        entertainment: 'Entertainment',
      },
      partnership: {
        title: 'Our Partnership Benefits',
        items: [
          {
            title: 'Special Pricing',
            description: 'Best negotiation for our clients',
          },
          {
            title: 'Quality Assured',
            description: 'Verified vendors with proven track record',
          },
          {
            title: 'One-Stop Service',
            description: 'Seamless coordination between vendors',
          },
        ],
      },
    },
    // Contact page
    contact: {
      title: 'Contact Us',
      subtitle: 'Schedule a free consultation for your dream event',
      info: {
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        hours: 'Business Hours',
        hoursValue: 'Mon - Sat: 09:00 - 18:00',
      },
      form: {
        title: 'Schedule Free Consultation',
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone Number',
        eventType: 'Event Type',
        eventTypeOptions: {
          wedding: 'Wedding',
          corporate: 'Corporate',
          gala: 'Gala',
          other: 'Other',
        },
        message: 'Tell us about your event',
        submit: 'Send Message',
        success: 'Message sent! We will contact you soon.',
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How far in advance should I book?',
            answer: 'For major events like weddings, we recommend booking 6-12 months in advance. However, we can also accommodate events with shorter timelines.',
          },
          {
            question: 'Is there a consultation fee?',
            answer: 'The first consultation is free! We will discuss your event vision and provide suitable package recommendations.',
          },
          {
            question: 'Can you arrange events outside the city?',
            answer: 'Yes, we have experience organizing destination events in various cities in Indonesia and abroad.',
          },
        ],
      },
    },
  },
};

export const getTranslation = (lang: Language) => translations[lang];
