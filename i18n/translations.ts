import type { Locale } from './config';

export const translations = {
  en: {
    meta: {
      siteName: 'ArkanHub One',
      tagline: 'Electromechanical Supplies & Solutions',
      description:
        'ArkanHub One is a trusted partner in electromechanical supplies and solutions — cables, switchgear, HVAC, and fire-fighting systems for residential, commercial, and industrial projects in Egypt.',
      keywords: [
        'electromechanical supplies Egypt',
        'electrical materials Cairo',
        'HVAC systems Egypt',
        'fire fighting systems Cairo',
        'cables and wires supplier',
        'circuit breakers MCB RCCB',
        'distribution boards Egypt',
        'cable trays suppliers',
        'PVC cables',
        'XLPE cables',
        'electrical contractor Nasr City',
        'ductwork fabrication',
        'sprinkler systems',
        'fire alarm Cairo',
        'ArkanHub One',
        'Arkan Hub',
      ],
    },
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      services: 'Services',
      contact: 'Contact',
      cta: 'Request a Quote',
      skip: 'Skip to content',
    },
    hero: {
      eyebrow: 'Electromechanical Partner',
      title: 'Powering Projects With Quality, Precision & Trust',
      subtitle:
        'From cables and switchgear to HVAC and fire-fighting — ArkanHub One supplies the electromechanical backbone your project relies on.',
      primaryCta: 'Explore Products',
      secondaryCta: 'Talk to an Engineer',
      stats: [
        { value: '6', label: 'Product Lines' },
        { value: '100%', label: 'Certified Materials' },
        { value: '24/7', label: 'Client Support' },
        { value: 'All', label: 'Project Scales' },
      ],
    },
    trustBar: {
      label: 'Trusted across',
      items: [
        'Residential Projects',
        'Commercial Buildings',
        'Industrial Facilities',
        'Retail Fit-Outs',
        'Hospitality',
        'Healthcare',
        'Data Centers',
        'Warehousing',
      ],
    },
    values: {
      eyebrow: 'Our Core Values',
      title: 'Built on principles that power long-term partnerships',
      subtitle:
        'Every decision at ArkanHub One flows from five values that shape how we source, deliver, and support.',
      items: [
        {
          title: 'Building Trust',
          body: 'Honesty and transparency in every quote, delivery, and conversation.',
        },
        {
          title: 'Quality Focus',
          body: 'Products that meet recognized safety and performance standards — no exceptions.',
        },
        {
          title: 'Customer Partnership',
          body: 'We treat every client as a partner in our growth journey, not a transaction.',
        },
        {
          title: 'Reliable Service',
          body: 'Responsive, punctual, and dependable — because your timeline is our timeline.',
        },
        {
          title: 'Eager to Learn',
          body: 'Agile, attentive to feedback, and always improving how we serve.',
        },
      ],
    },
    products: {
      eyebrow: 'Product Categories',
      title: 'A complete electromechanical catalog, curated for safety & performance',
      subtitle:
        'We supply a wide range of electrical and mechanical materials for residential, commercial, and industrial needs — sourced from trusted manufacturers and ready for delivery.',
      exploreAll: 'View Full Catalog',
      items: [
        {
          key: 'cables',
          title: 'Cables & Wires',
          body: 'PVC insulated, XLPE, and rubber insulated cables in a full range of sizes and specifications.',
          list: ['PVC insulated cables', 'XLPE cables', 'Rubber insulated wires', 'Multiple sizes & ratings'],
        },
        {
          key: 'switches',
          title: 'Switches & Distribution',
          body: 'Protection and distribution gear engineered for residential, commercial, and industrial loads.',
          list: ['MCBs & RCCBs', 'Distribution boards', 'Switches & sockets', 'Protection devices'],
        },
        {
          key: 'accessories',
          title: 'Installation Accessories',
          body: 'Everything that supports a clean, code-compliant install from panel to fixture.',
          list: ['Perforated & ladder cable trays', 'Conduits & fittings', 'Bushings, elbows, couplings', 'Junction boxes'],
        },
        {
          key: 'general',
          title: 'General Electrical Supplies',
          body: 'The day-to-day materials every project depends on — finishing touches and working essentials.',
          list: ['Lighting fixtures', 'Connectors', 'Electrical tape', 'Tools & accessories'],
        },
        {
          key: 'hvac',
          title: 'HVAC Systems',
          body: 'End-to-end air conditioning, ventilation, and heating — supply, installation, and maintenance.',
          list: ['AC installation', 'Ventilation systems', 'Heating solutions', 'Ductwork fabrication', 'Chiller systems', 'Maintenance & repair'],
        },
        {
          key: 'fire',
          title: 'Fire Fighting',
          body: 'Complete life-safety systems — detection, suppression, evacuation, and certification.',
          list: ['Fire alarm systems', 'Sprinkler systems', 'Fire extinguishers', 'Fire pumps & hoses', 'Emergency exit systems', 'Testing & certification'],
        },
      ],
    },
    services: {
      eyebrow: 'Our Services',
      title: 'More than supply — a project partner at every stage',
      items: [
        {
          title: 'Reliable Supply',
          body: 'High-quality electrical materials from trusted manufacturers, in stock and ready to move.',
        },
        {
          title: 'Sourcing Support',
          body: 'Project-specific sourcing for specialty items, bulk orders, and custom requirements.',
        },
        {
          title: 'Delivery & Logistics',
          body: 'Dependable logistics across Cairo and Egypt — on schedule, on site, in full.',
        },
        {
          title: 'Technical Guidance',
          body: 'Direct access to knowledgeable staff for sizing, compatibility, and code questions.',
        },
      ],
    },
    whyPartner: {
      eyebrow: 'Why Partner With Us',
      title: 'Why teams choose ArkanHub One',
      subtitle:
        'A startup\u2019s energy with the discipline of a serious supplier — built for clients who want a partner, not a vendor.',
      items: [
        {
          title: 'Fresh Energy & Dedication',
          body: 'As a new player, your project gets our full attention and priority — no buried tickets, no afterthoughts.',
        },
        {
          title: 'Competitive Pricing',
          body: 'Cost-effective solutions without compromising on quality, safety, or sourcing standards.',
        },
        {
          title: 'Agile & Flexible',
          body: 'We adapt quickly to your specific requirements and changing project needs — fast decisions, fast delivery.',
        },
        {
          title: 'Building Relationships',
          body: 'We invest in long-term partnerships, not one-time sales. Your next project matters as much as this one.',
        },
        {
          title: 'Personalized Service',
          body: 'You deal directly with dedicated owners and management — real accountability, real answers.',
        },
      ],
    },
    cta: {
      title: 'Have a project? Let\u2019s power it together.',
      subtitle:
        'Share your BOQ, specifications, or a simple requirement — our team will come back with sourcing, pricing, and timelines.',
      primary: 'Request a Quote',
      secondary: 'Call Us Now',
    },
    contact: {
      eyebrow: 'Get in Touch',
      title: 'Talk to the ArkanHub One team',
      subtitle:
        'Whether you\u2019re sizing cables, scoping an HVAC system, or specifying fire protection, we\u2019re ready to help.',
      address: {
        label: 'Address',
        value: '11 AlReqabah AlEdarya Building, Nasr City, Cairo, Egypt',
      },
      phone: {
        label: 'Phone',
        value: '01061120223',
      },
      email: {
        label: 'Email',
        value: 'info@arkan-hub.com',
      },
      hours: {
        label: 'Hours',
        value: 'Sun\u2013Thu, 9:00 AM \u2013 6:00 PM',
      },
      form: {
        title: 'Send us a message',
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        project: 'Project Type',
        projectOptions: ['Residential', 'Commercial', 'Industrial', 'Other'],
        message: 'Tell us about your project',
        submit: 'Send Message',
        submitting: 'Sending...',
        success: 'Thanks — we\u2019ll be in touch within one business day.',
        error: 'Something went wrong. Please email us directly.',
        required: 'Required',
        emailInvalid: 'Please enter a valid email.',
      },
    },
    about: {
      eyebrow: 'About ArkanHub One',
      title: 'A new name, built on a deep understanding of the market',
      lead: 'ArkanHub One is a startup partner in comprehensive electromechanical supplies and solutions. Though newly established, we are driven by passion, a commitment to excellence, and a strong understanding of the electromechanical materials market.',
      body: [
        'We are building our reputation one project at a time, focused on quality, reliability, and outstanding customer service. Every client is treated as a partner in our growth journey, and we are dedicated to supporting projects of all sizes with the right materials and expert knowledge.',
        'ArkanHub One aims to become a leading and respected name in the electromechanical supply and installation industry, recognized for integrity, product quality, and dedication to empowering projects with safe and efficient solutions.',
      ],
      visionTitle: 'Our Vision',
      vision:
        'To become a leading and respected name in the electromechanical supply and installation industry, recognized for integrity, product quality, and dedication to empowering projects with safe and efficient electromechanical solutions.',
      missionTitle: 'Our Mission',
      mission:
        'To provide clients with high-quality electromechanical components from trusted sources, coupled with diligent service and expert guidance. We aim to grow alongside our clients, supporting their projects — big or small — with the right materials and knowledge.',
      segmentsTitle: 'Who we serve',
      segments: ['Residential projects', 'Commercial buildings', 'Industrial facilities', 'Retail & hospitality', 'Healthcare', 'Education & institutional'],
    },
    footer: {
      description:
        'A trusted partner in comprehensive electromechanical supplies and solutions — serving residential, commercial, and industrial projects across Egypt.',
      exploreTitle: 'Explore',
      productsTitle: 'Products',
      contactTitle: 'Contact',
      rights: 'All rights reserved.',
      designed: 'Designed and built with precision.',
    },
    common: {
      learnMore: 'Learn more',
      viewAll: 'View all',
      getInTouch: 'Get in touch',
      backHome: 'Back to home',
      readMore: 'Read more',
      established: 'Established',
      industry: 'Industry',
      based: 'Based in',
      industryValue: 'Electromechanical Supplies',
      basedValue: 'Cairo, Egypt',
    },
    notFound: {
      title: 'Page not found',
      body: 'The page you are looking for doesn\u2019t exist or has been moved.',
    },
  },
  ar: {
    meta: {
      siteName: 'أركان هاب وان',
      tagline: 'توريدات وحلول كهروميكانيكية',
      description:
        'أركان هاب وان شريكك الموثوق في التوريدات والحلول الكهروميكانيكية — كابلات ولوحات توزيع وأنظمة تكييف ومكافحة حريق للمشاريع السكنية والتجارية والصناعية في مصر.',
      keywords: [
        'توريدات كهروميكانيكية مصر',
        'مواد كهربائية القاهرة',
        'أنظمة تكييف وتهوية',
        'أنظمة مكافحة الحريق',
        'كابلات وأسلاك',
        'قواطع كهربائية',
        'لوحات توزيع',
        'حوامل كابلات',
        'كابلات PVC',
        'كابلات XLPE',
        'مقاول كهرباء مدينة نصر',
        'تصنيع مجاري هواء',
        'أنظمة رشاشات',
        'إنذار حريق القاهرة',
        'أركان هاب وان',
        'Arkan Hub',
      ],
    },
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      products: 'المنتجات',
      services: 'الخدمات',
      contact: 'تواصل معنا',
      cta: 'اطلب عرض سعر',
      skip: 'تخطٍّ إلى المحتوى',
    },
    hero: {
      eyebrow: 'شريكك الكهروميكانيكي',
      title: 'نُمِدّ مشاريعك بالجودة والدقة والثقة',
      subtitle:
        'من الكابلات ولوحات التوزيع إلى أنظمة التكييف ومكافحة الحريق — أركان هاب وان يوفّر العمود الفقري الكهروميكانيكي لمشروعك.',
      primaryCta: 'استكشف المنتجات',
      secondaryCta: 'تحدث مع مهندس',
      stats: [
        { value: '٦', label: 'خطوط منتجات' },
        { value: '١٠٠٪', label: 'مواد معتمدة' },
        { value: '٢٤/٧', label: 'دعم العملاء' },
        { value: 'الكل', label: 'أحجام المشاريع' },
      ],
    },
    trustBar: {
      label: 'موثوق به في',
      items: [
        'المشاريع السكنية',
        'المباني التجارية',
        'المنشآت الصناعية',
        'تجهيزات المحلات',
        'الضيافة والفنادق',
        'القطاع الصحي',
        'مراكز البيانات',
        'المخازن واللوجستيات',
      ],
    },
    values: {
      eyebrow: 'قيمنا الأساسية',
      title: 'مبادئ تبني شراكات طويلة الأمد',
      subtitle:
        'كل قرار في أركان هاب وان ينبع من خمس قيم تشكّل طريقة توريدنا وتسليمنا ودعمنا.',
      items: [
        {
          title: 'بناء الثقة',
          body: 'صدق وشفافية في كل عرض سعر وتسليم ومحادثة.',
        },
        {
          title: 'التركيز على الجودة',
          body: 'منتجات تستوفي معايير السلامة والأداء المعتمدة — دون استثناءات.',
        },
        {
          title: 'شراكة العملاء',
          body: 'نتعامل مع كل عميل كشريك في رحلة نموّنا، وليس كصفقة عابرة.',
        },
        {
          title: 'خدمة موثوقة',
          body: 'استجابة والتزام بالمواعيد — لأن جدولك الزمني هو جدولنا.',
        },
        {
          title: 'شغف التعلم',
          body: 'مرونة، وإنصات للملاحظات، وتحسين مستمر في خدمتنا لك.',
        },
      ],
    },
    products: {
      eyebrow: 'فئات المنتجات',
      title: 'كتالوج كهروميكانيكي متكامل مختار بعناية للسلامة والأداء',
      subtitle:
        'نوفّر مجموعة واسعة من المواد الكهربائية والميكانيكية للاحتياجات السكنية والتجارية والصناعية، من مُصنّعين موثوقين، وجاهزة للتسليم.',
      exploreAll: 'استعراض الكتالوج الكامل',
      items: [
        {
          key: 'cables',
          title: 'الكابلات والأسلاك',
          body: 'كابلات PVC وXLPE والمطاطية بمختلف المقاسات والمواصفات.',
          list: ['كابلات PVC معزولة', 'كابلات XLPE', 'أسلاك مطاطية معزولة', 'مقاسات وتصنيفات متعددة'],
        },
        {
          key: 'switches',
          title: 'المفاتيح ولوحات التوزيع',
          body: 'أجهزة حماية وتوزيع لأحمال سكنية وتجارية وصناعية.',
          list: ['قواطع MCB وRCCB', 'لوحات توزيع', 'مفاتيح ومقابس', 'أجهزة حماية'],
        },
        {
          key: 'accessories',
          title: 'ملحقات التركيب',
          body: 'كل ما يدعم تركيبًا نظيفًا ومطابقًا للكود من اللوحة إلى النقطة.',
          list: ['حوامل كابلات مثقّبة وسلّمية', 'مواسير ووصلات', 'جلب وأكواع وقارنات', 'علب تجميع'],
        },
        {
          key: 'general',
          title: 'التوريدات الكهربائية العامة',
          body: 'المواد اليومية التي يعتمد عليها كل مشروع — لمسات نهائية وأساسيات عمل.',
          list: ['وحدات إضاءة', 'موصلات', 'شريط كهربائي', 'أدوات وملحقات'],
        },
        {
          key: 'hvac',
          title: 'أنظمة التكييف والتهوية',
          body: 'حلول تكييف وتهوية وتدفئة متكاملة — توريد وتركيب وصيانة.',
          list: ['تركيب تكييف', 'أنظمة تهوية', 'حلول تدفئة', 'تصنيع مجاري هواء', 'أنظمة تشيلرز', 'صيانة وإصلاح'],
        },
        {
          key: 'fire',
          title: 'مكافحة الحريق',
          body: 'أنظمة سلامة حياة متكاملة — كشف وإخماد وإخلاء واعتماد.',
          list: ['أنظمة إنذار حريق', 'أنظمة رشاشات', 'طفايات حريق', 'مضخات وخراطيم', 'أنظمة مخارج طوارئ', 'اختبار واعتماد'],
        },
      ],
    },
    services: {
      eyebrow: 'خدماتنا',
      title: 'أكثر من مجرد توريد — شريك مشروعك في كل مرحلة',
      items: [
        {
          title: 'توريد موثوق',
          body: 'مواد كهربائية عالية الجودة من مُصنّعين موثوقين، متوفرة وجاهزة للحركة.',
        },
        {
          title: 'دعم التوريد الخاص',
          body: 'توريد مخصّص حسب متطلبات المشروع، والطلبات الكبيرة، والمواصفات الخاصة.',
        },
        {
          title: 'التسليم والخدمات اللوجستية',
          body: 'لوجستيات موثوقة في القاهرة وعموم مصر — في الوقت والمكان والكمية المطلوبة.',
        },
        {
          title: 'الإرشاد الفني',
          body: 'وصول مباشر لفريق متخصص للمساعدة في المقاسات والتوافق والأكواد.',
        },
      ],
    },
    whyPartner: {
      eyebrow: 'لماذا تعمل معنا',
      title: 'لماذا تختار فرق العمل أركان هاب وان',
      subtitle:
        'طاقة شركة ناشئة بانضباط مورّد جاد — مصمّم لعملاء يريدون شريكًا لا بائعًا.',
      items: [
        {
          title: 'طاقة جديدة وتفانٍ',
          body: 'بوصفنا شركة ناشئة، يحظى مشروعك بكامل اهتمامنا وأولويتنا — لا تذاكر مدفونة ولا أفكار لاحقة.',
        },
        {
          title: 'أسعار تنافسية',
          body: 'حلول فعّالة من حيث التكلفة دون التنازل عن الجودة أو السلامة أو معايير التوريد.',
        },
        {
          title: 'مرونة وسرعة',
          body: 'نتكيّف بسرعة مع متطلبات مشروعك والاحتياجات المتغيّرة — قرارات سريعة وتسليم سريع.',
        },
        {
          title: 'بناء العلاقات',
          body: 'نستثمر في شراكات طويلة الأمد، لا في صفقات لمرة واحدة. مشروعك القادم يهمّنا بقدر الحالي.',
        },
        {
          title: 'خدمة شخصية',
          body: 'تتعامل مباشرة مع أصحاب الشركة والإدارة — مساءلة حقيقية وإجابات حقيقية.',
        },
      ],
    },
    cta: {
      title: 'عندك مشروع؟ خلّينا نشغّله معك.',
      subtitle:
        'شاركنا جدول الكميات أو المواصفات أو حتى متطلب بسيط — فريقنا سيرجع لك بعرض التوريد والسعر والجدول الزمني.',
      primary: 'اطلب عرض سعر',
      secondary: 'اتصل بنا الآن',
    },
    contact: {
      eyebrow: 'تواصل معنا',
      title: 'تحدّث مع فريق أركان هاب وان',
      subtitle:
        'سواء كنت تحسب مقاسات الكابلات، أو تُعدّ نطاق عمل نظام تكييف، أو تحدّد وسائل حماية الحريق — نحن جاهزون للمساعدة.',
      address: {
        label: 'العنوان',
        value: '١١ مبنى الرقابة الإدارية، مدينة نصر، القاهرة، مصر',
      },
      phone: {
        label: 'الهاتف',
        value: '٠١٠٦١١٢٠٢٢٣',
      },
      email: {
        label: 'البريد الإلكتروني',
        value: 'info@arkan-hub.com',
      },
      hours: {
        label: 'ساعات العمل',
        value: 'الأحد\u2013الخميس، ٩:٠٠ ص \u2013 ٦:٠٠ م',
      },
      form: {
        title: 'أرسل لنا رسالة',
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        subject: 'الموضوع',
        project: 'نوع المشروع',
        projectOptions: ['سكني', 'تجاري', 'صناعي', 'آخر'],
        message: 'أخبرنا عن مشروعك',
        submit: 'إرسال الرسالة',
        submitting: 'جارٍ الإرسال...',
        success: 'شكرًا لك — سنتواصل معك خلال يوم عمل واحد.',
        error: 'حدث خطأ ما. يرجى مراسلتنا مباشرة عبر البريد.',
        required: 'مطلوب',
        emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح.',
      },
    },
    about: {
      eyebrow: 'عن أركان هاب وان',
      title: 'اسم جديد، مبنيّ على فهم عميق للسوق',
      lead: 'أركان هاب وان شركة ناشئة شريكة في التوريدات والحلول الكهروميكانيكية الشاملة. ورغم حداثة تأسيسنا، نعمل بشغف والتزام بالتميّز، وفهم متين لسوق المواد الكهروميكانيكية.',
      body: [
        'نبني سمعتنا مشروعًا تلو الآخر، بالتركيز على الجودة والموثوقية وخدمة العملاء المتميزة. نتعامل مع كل عميل كشريك في رحلة نموّنا، ونلتزم بدعم المشاريع بجميع أحجامها بالمواد المناسبة والخبرة اللازمة.',
        'نسعى لأن نصبح اسمًا رائدًا ومحترمًا في صناعة التوريد والتركيب الكهروميكانيكي، معروفًا بالنزاهة وجودة المنتج والالتزام بدعم المشاريع بحلول آمنة وفعّالة.',
      ],
      visionTitle: 'رؤيتنا',
      vision:
        'أن نصبح اسمًا رائدًا ومحترمًا في صناعة التوريد والتركيب الكهروميكانيكي، معروفًا بالنزاهة وجودة المنتج والالتزام بتمكين المشاريع بحلول كهروميكانيكية آمنة وفعّالة.',
      missionTitle: 'رسالتنا',
      mission:
        'أن نوفّر لعملائنا مكوّنات كهروميكانيكية عالية الجودة من مصادر موثوقة، مع خدمة متقنة وإرشاد خبير. نهدف إلى النمو إلى جانب عملائنا ودعم مشاريعهم — كبيرة كانت أم صغيرة — بالمواد والمعرفة المناسبة.',
      segmentsTitle: 'من نخدم',
      segments: ['مشاريع سكنية', 'مباني تجارية', 'منشآت صناعية', 'تجزئة وضيافة', 'قطاع صحي', 'تعليم ومؤسسات'],
    },
    footer: {
      description:
        'شريك موثوق في التوريدات والحلول الكهروميكانيكية الشاملة — نخدم المشاريع السكنية والتجارية والصناعية في عموم مصر.',
      exploreTitle: 'استكشف',
      productsTitle: 'المنتجات',
      contactTitle: 'تواصل',
      rights: 'جميع الحقوق محفوظة.',
      designed: 'مصمّم ومبنيّ بدقة.',
    },
    common: {
      learnMore: 'اعرف المزيد',
      viewAll: 'عرض الكل',
      getInTouch: 'تواصل معنا',
      backHome: 'العودة للرئيسية',
      readMore: 'اقرأ المزيد',
      established: 'تأسست',
      industry: 'المجال',
      based: 'المقر',
      industryValue: 'توريدات كهروميكانيكية',
      basedValue: 'القاهرة، مصر',
    },
    notFound: {
      title: 'الصفحة غير موجودة',
      body: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
