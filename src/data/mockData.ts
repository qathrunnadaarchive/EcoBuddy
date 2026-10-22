import { EducationGuide, EcoProduct, Testimonial } from '../types';

export const EDUCATION_GUIDES: EducationGuide[] = [
  {
    id: 'langkah-awal-zero-waste',
    title: 'Langkah Awal Zero Waste untuk Pemula',
    subtitle: 'Panduan praktis 30 hari memulai hidup minim sampah tanpa rasa cemas atau overwhelmed.',
    category: 'Langkah Awal',
    readTime: '4 menit baca',
    difficulty: 'Sangat Mudah',
    summary: 'Memulai hidup minim sampah tidak harus langsung sempurna. Cukup mulai dengan menolak barang sekali pakai yang tidak esensial dan membawa perlengkapan pakai ulang.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Langkah awal zero waste: tas kain dan botol minum pakai ulang untuk hidup minim sampah',
    ecoImpact: 'Mencegah rata-rata 300 kantong plastik dan 160 botol plastik per orang setiap tahunnya.',
    toolsNeeded: ['Tas belanja kain lipat', 'Tumbler air minum', 'Wadah bekal makan', 'Saputangan katun'],
    steps: [
      {
        title: '1. Lakukan Audit Sampah 3 Hari',
        description: 'Perhatikan tempat sampah Anda selama 3 hari. Kenali apa sampah terbanyak: kantong kresek, kemasan sachet kopi, atau sisa makanan? Fokus kurangi satu kategori terlebih dahulu.'
      },
      {
        title: '2. Terapkan Kaidah "Refuse" (Tolak)',
        description: 'Katakan dengan sopan: "Terima kasih, tidak perlu kantong kresek dan sedotan plastiknya ya kak". Penolakan adalah filter pertama mencegah sampah masuk rumah.'
      },
      {
        title: '3. Siapkan "Kit Darurat" di Tas',
        description: 'Selalu simpan satu tas kain lipat dan tumbler di ransel atau jok motor. Anda tidak akan pernah terjebak harus memakai kantong plastik darurat saat belanja mendadak.'
      },
      {
        title: '4. Habiskan yang Sudah Dimiliki',
        description: 'Jangan membuang wadah plastik yang masih ada hanya demi membeli wadah estetik baru. Zero waste sejati adalah memaksimalkan fungsi barang sampai akhir usia pakainya.'
      }
    ]
  },
  {
    id: 'upcycling-botol-bekas-pot',
    title: 'Upcycling Botol Bekas jadi Pot Self-Watering',
    subtitle: 'Kreasi upcycling barang bekas botol plastik air mineral menjadi pot tanaman penyerap mandiri yang estetik.',
    category: 'Upcycling Kreatif',
    readTime: '6 menit baca',
    difficulty: 'Mudah',
    summary: 'Jangan buang botol plastik minuman kemasan ke tempat sampah! Ubah menjadi pot self-watering pintar yang menjaga kelembapan tanaman mint, cabai, atau sirih gading tanpa perlu disiram tiap hari.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Upcycling botol bekas jadi pot tanaman ramah lingkungan untuk hiasan rumah minim sampah',
    ecoImpact: 'Mengalihkan sampah botol PET dari TPA dan memotong emisi daur ulang industri.',
    toolsNeeded: ['Botol plastik bekas 1.5L / 600ml', 'Gunting atau cutter', 'Sumbu kompor / kain flanel bekas', 'Media tanam & bibit'],
    steps: [
      {
        title: '1. Potong Botol Menjadi Dua Bagian',
        description: 'Bersihkan botol plastik bekas dari sisa minuman. Potong melintang pada jarak sekitar sepertiga dari leher botol menggunakan cutter dengan hati-hati.'
      },
      {
        title: '2. Pasang Sumbu Kapiler',
        description: 'Lubangi tutup botol dengan paku atau solder, lalu masukkan potongan kain flanel atau tali katun sepanjang 15 cm. Tutup kembali botol dengan sumbu menggantung.'
      },
      {
        title: '3. Rangkai Pot Penyerap Mandiri',
        description: 'Balik bagian atas botol (leher menghadap ke bawah) dan masukkan ke dalam potongan badan bawah botol. Bagian bawah akan berfungsi sebagai tandon air cadangan.'
      },
      {
        title: '4. Isi Media Tanam & Tanam Bibit',
        description: 'Masukkan tanah subur dan kompos, pastikan sumbu flanel berada di tengah tanah. Isi tandon bawah dengan air bersih. Air akan terserap alami lewat kapilaritas flanel.'
      }
    ]
  },
  {
    id: 'memilah-sampah-dapur',
    title: 'Memilah Sampah Dapur & Komposting Rumah',
    subtitle: 'Cara mudah mengolah sisa organik dapur agar tidak membusuk di TPA dan menghasilkan gas metana berbahaya.',
    category: 'Dapur & Organik',
    readTime: '5 menit baca',
    difficulty: 'Mudah',
    summary: 'Lebih dari 60% sampah di Indonesia adalah sampah sisa makanan dapur. Dengan memilah dan membuat kompos sendiri, Anda memutus mata rantai bau busuk dan membantu menyuburkan tanah.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Memilah sampah dapur dan pembuatan pupuk kompos alami untuk hidup minim sampah',
    ecoImpact: 'Mencegah pembentukan gas metana (CH4) yang 28x lebih berbahaya dari CO2 di TPA.',
    toolsNeeded: ['Ember berlubang / keranjang Takakura', 'Sekam atau serbuk kayu', 'Bantalan sabut kelapa', 'Sisa sayur & buah mentah'],
    steps: [
      {
        title: '1. Siapkan Wadah Organik Khusus di Dapur',
        description: 'Letakkan wadah bertutup di dekat bak cuci piring untuk menampung sisa kupasan sayuran, kulit buah, dan ampas kopi. Jangan campur dengan plastik atau staples teh celup.'
      },
      {
        title: '2. Kenali Apa yang Boleh dan Tidak',
        description: 'Boleh: kulit buah, sisa sayur, cangkang telur remuk, daun kering. Hindari dalam komposter pemula: sisa daging mentah, minyak goreng, dan kotoran hewan berlemak.'
      },
      {
        title: '3. Cincang Kasar Sisa Organik',
        description: 'Potong kecil-kecil sisa sampah organik dapur sekitar 2–3 cm agar bakteri pengurai bekerja 3x lebih cepat dan matang merata dalam hitungan minggu.'
      },
      {
        title: '4. Jaga Keseimbangan Karbon & Nitrogen',
        description: 'Setiap memasukkan satu lapis sampah dapur basah (Nitrogen/Hijau), tutupi dengan satu lapis sekam/daun kering (Karbon/Cokelat) agar tidak berbau dan bebas belatung.'
      }
    ]
  }
];

export const ECO_PRODUCTS: EcoProduct[] = [
  {
    id: 'sedotan-stainless-steel',
    name: 'Set Sedotan Stainless Steel 304',
    tagline: 'Lengkap dengan pouch kanvas katun & sikat pembersih alami',
    price: 28000,
    originalPrice: 40000,
    rating: 4.9,
    reviewsCount: 312,
    image: 'https://images.unsplash.com/photo-1577741314755-048d8525d31e?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Sedotan stainless steel food grade dengan pouch kain katun ramah lingkungan',
    materials: 'Stainless Steel Food Grade 304, Pouch Katun Organik',
    features: [
      '1x Sedotan lurus diameter 6mm (minuman biasa)',
      '1x Sedotan bengkok ergonomis',
      '1x Sedotan boba diameter 12mm',
      '1x Sikat pembersih serabut halus',
      'Pouch penyimpanan kanvas serut'
    ],
    ecoBenefit: 'Menggantikan lebih dari 500 sedotan plastik sekali pakai per tahun.',
    badge: 'Terlaris'
  },
  {
    id: 'tas-belanja-kain-lipat',
    name: 'Tas Belanja Kain Lipat Serbaguna',
    tagline: 'Kuat beban 15 kg, tahan air ringan, mudah dilipat seukuran saku',
    price: 35000,
    originalPrice: 50000,
    rating: 5.0,
    reviewsCount: 428,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Tas kain lipat ramah lingkungan bahan kanvas organik untuk belanja pasar bebas plastik',
    materials: 'Kain Kanvas Katun Daur Ulang & Jahitan Ganda',
    features: [
      'Kapasitas besar 22 Liter, muat belanjaan pasar',
      'Beban uji laboratorium hingga 15 kg tanpa sobek',
      'Dilengkapi pouch kantong pengait carabiner',
      'Dapat dicuci mesin dan cepat kering'
    ],
    ecoBenefit: 'Menyelamatkan minimal 350 kantong kresek setiap tahun.',
    badge: 'Favorit Komunitas'
  },
  {
    id: 'sabun-batang-alami',
    name: 'Sabun Batang Alami Handmade',
    tagline: 'Bebas SLS, bebas paraben, dibuat dari minyak kelapa & rempah lokal',
    price: 24000,
    originalPrice: 32000,
    rating: 4.8,
    reviewsCount: 189,
    image: 'https://images.unsplash.com/photo-1607006314187-8490a6e0c70d?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Sabun batang alami handmade tanpa kemasan plastik bebas minyak sawit kotor',
    materials: 'Virgin Coconut Oil, Shea Butter, Essential Oil Lavender & Serai',
    features: [
      '100% biodegradable, aman bagi saluran air tanah',
      'Melembapkan kulit sensitif dengan gliserin alami',
      'Dikemas kertas daur ulang tanpa lapisan plastik laminasi',
      'Cold-processed curing selama 6 minggu'
    ],
    ecoBenefit: 'Nol limbah botol plastik sabun cair dan nol racun deterjen kimia.',
    badge: '100% Organik'
  },
  {
    id: 'sikat-gigi-bambu',
    name: 'Sikat Gigi Bambu Biodegradable',
    tagline: 'Gagang bambu moso cepat terurai di tanah, bulu sikat super lembut',
    price: 18000,
    originalPrice: 25000,
    rating: 4.9,
    reviewsCount: 265,
    image: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Sikat gigi bambu biodegradable ramah lingkungan pengganti sikat gigi plastik',
    materials: '100% Bambu Moso Lestari, Bulu Sikat Nylon Bebas BPA Infused Charcoal',
    features: [
      'Gagang bambu dengan perlakuan panas anti jamur',
      'Bulu sikat ultra-halus 0.15mm ramah untuk gusi sensitif',
      'Gagang dapat dikomposkan di pekarangan setelah bulu dicabut',
      'Desain ergonomis nyaman digenggam'
    ],
    ecoBenefit: 'Mengganti sikat gigi plastik yang butuh 500 tahun untuk terurai.',
    badge: 'Wajib Punya'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rania Pratiwi',
    role: 'Ibu Rumah Tangga & Pegiat Kebun Kota',
    city: 'Bandung',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    quote: 'Awalnya saya kira hidup minim sampah itu mahal dan ribet. Namun setelah membaca edukasi di EcoBuddy dan mulai dari tas lipat serta botol minum, ternyata belanja bulanan kami justru hemat hampir Rp 400.000 sebulan! Rumah jadi lega tanpa tumpukan plastik kresek.',
    highlight: 'Hemat Rp 400.000/bulan & dapur bebas plastik kresek',
    rating: 5,
    verified: true
  },
  {
    id: '2',
    name: 'Dimas Arya',
    role: 'Mahasiswa Arsitektur',
    city: 'Yogyakarta',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Tutorial upcycling botol bekas jadi pot self-watering benar-benar game changer untuk anak kosan seperti saya. Balkon kamar kos sekarang hijau royo-royo dengan tanaman mint dan cabai tanpa harus beli pot plastik baru. Tampilannya estetik dan sangat inspiratif!',
    highlight: 'Balkon kosan hijau estetik dari botol bekas',
    rating: 5,
    verified: true
  },
  {
    id: '3',
    name: 'Nadia Saraswati',
    role: 'Product Lead & Komuter Harian',
    city: 'Jakarta Selatan',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'Fitur konsultasi EcoBuddy sangat membantu saat saya bingung mencari pengganti produk mandi sekali pakai. Sabun batang dan sikat gigi bambunya sangat nyaman, wangi alami, dan tidak merusak kulit. Rasanya bangga bisa berkontribusi nyata untuk bumi.',
    highlight: 'Konsultasi cepat, solusi ramah lingkungan tepat sasaran',
    rating: 5,
    verified: true
  }
];

export const ZERO_WASTE_BENEFITS = [
  {
    id: 'hemat',
    title: 'Hemat Pengeluaran Finansial',
    tagline: 'Hentikan siklus beli-pakai-buang yang menguras dompet',
    description: 'Dengan beralih ke barang pakai ulang berkualitas, Anda tidak lagi membeli botol air mineral harian, kantong belanja berbayar, atau sedotan sekali pakai. Rata-rata keluarga menghemat Rp 3.000.000 hingga Rp 6.000.000 setiap tahunnya.',
    iconName: 'Coins',
    stat: 'Hemat s.d. 35%',
    statLabel: 'Biaya perlengkapan rumah tangga'
  },
  {
    id: 'rapi',
    title: 'Rumah Rapi & Bersih Minimalis',
    tagline: 'Ucapkan selamat tinggal pada tumpukan sampah plastik di pojok dapur',
    description: 'Tanpa tumpukan kantong kresek liar di balik pintu, botol kosong menumpuk di tempat cucian, atau kemasan sachet bertebaran. Hunian Anda terasa lebih lapang, bersih, higienis, dan menenangkan pikiran.',
    iconName: 'Home',
    stat: '80% Lebih Rapi',
    statLabel: 'Bebas penumpukan sampah kemasan'
  },
  {
    id: 'sehat',
    title: 'Bumi & Generasi Masa Depan Lebih Sehat',
    tagline: 'Tekan krisis TPA dan lindungi tanah serta lautan nusantara',
    description: 'Setiap sampah yang Anda tolak atau olah mandiri langsung mengurangi beban TPA yang kini terancam overkapasitas. Mengurangi pembakaran sampah liar penyebab polusi udara serta mencegah bahaya mikroplastik di rantai makanan.',
    iconName: 'Globe',
    stat: '1.200 kg Emisi',
    statLabel: 'Karbon dicegah per keluarga/tahun'
  }
];

export const ZERO_WASTE_PRINCIPLES_5R = [
  {
    name: 'Refuse (Tolak)',
    desc: 'Tolak apa yang tidak Anda butuhkan, seperti kantong kresek, struk kertas tak penting, dan sedotan plastik.'
  },
  {
    name: 'Reduce (Kurangi)',
    desc: 'Beli barang sesuai kebutuhan nyata dan pilih barang berkualitas yang berumur pakai panjang.'
  },
  {
    name: 'Reuse (Gunakan Ulang)',
    desc: 'Pakai kembali toples kaca, kardus, dan wadah yang ada sebelum memutuskan membeli wadah baru.'
  },
  {
    name: 'Repurpose (Alih Guna / Upcycle)',
    desc: 'Beri nyawa baru pada barang bekas dengan kreativitas upcycling, seperti pot tanaman dari botol plastik.'
  },
  {
    name: 'Rot (Komposkan)',
    desc: 'Kembalikan seluruh sisa organik dapur ke tanah menjadi nutrisi bagi tanaman melalui komposting.'
  }
];

export const DEFAULT_CHATBOT_URL = 'https://chat.google.com';
