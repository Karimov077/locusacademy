// Lokus Academy — Ko'p tilli qo'llab-quvvatlash
// Tillar: O'zbek (uz), Rus (ru), Ingliz (en)

export const translations = {
  uz: {
    // Navbar
    nav: {
      home: "Bosh sahifa",
      courses: "Kurslar",
      about: "Biz haqimizda",
      contact: "Aloqa",
      enroll: "Kursga yozilish",
    },

    // Hero
    hero: {
      badge: "Professional ta'lim markazi",
      title1: "Kelajagingizni",
      title2: "bilim bilan",
      title3: "quring!",
      description:
        "Matematika, xorijiy tillar, tabiiy fanlar va IT yo'nalishlarida maqsadlaringiz sari ishonch bilan qadam tashlang.",
      ctaPrimary: "Kurslarni ko'rish",
      ctaSecondary: "Bepul konsultatsiya",
      priceLabel: "Kurslar narxi",
      priceValue: "549 000 so'mdan",
      priceFrom: "boshlab",
    },

    // Features
    features: {
      tag: "Afzalliklarimiz",
      title: "Nima uchun aynan biz?",
      subtitle:
        "Lokus Academy — bu nafaqat o'quv markazi, balki o'quvchilar kelajagi uchun fidoyi jamoa.",
      items: [
        {
          title: "Tajribali ustozlar",
          desc: "Har bir yo'nalishda chuqur bilim va pedagogik mahoratga ega mutaxassislar bilan ishlaysiz.",
        },
        {
          title: "Maqsadga yo'naltirilgan ta'lim",
          desc: "Dars jarayoni har bir o'quvchining individual maqsadlari va sur'atiga mos tarzda tashkil etiladi.",
        },
        {
          title: "Qulay o'quv muhiti",
          desc: "Zamonaviy jihozlangan sinf xonalari va do'stona muhit bilim olishni yanada samarali qiladi.",
        },
        {
          title: "Turli yo'nalishlar",
          desc: "Matematika, tillar, tabiiy fanlar va IT — maqsadingizga mos yo'nalishni tanlang.",
        },
      ],
    },

    // Courses
    courses: {
      tag: "Yo'nalishlar",
      title: "Kurslarimiz",
      subtitle:
        "Har bir o'quvchi o'z maqsadiga mos yo'nalishni tanlashi uchun keng qamrovli kurslar.",
      priceFrom: "549 000 so'mdan",
      enrollBtn: "Yozilish",
      items: [
        {
          name: "Matematika Kids",
          desc: "Bolalar uchun qiziqarli va tushunarli tarzda matematik asoslarni o'rgatish. Mantiqiy fikrlash ko'nikmalarini rivojlantirish.",
          tag: "Bolalar uchun",
        },
        {
          name: "Matematika (Abituriyentlar)",
          desc: "DTM va universitetga kirish imtihonlariga tayyorlanishga yo'naltirilgan chuqur matematik kurs.",
          tag: "Abituriyentlar",
        },
        {
          name: "Kimyo (Abituriyentlar)",
          desc: "Kimyo fani bo'yicha nazariya va amaliyotni muvozanatli tarzda o'rgatish. DTM imtihoniga tayyorgarlik.",
          tag: "Abituriyentlar",
        },
        {
          name: "Biologiya (Abituriyentlar)",
          desc: "Tirik organizmlar dunyosi sirlarini o'rganib, biologiya bo'yicha mustahkam bilim bazasini shakllantiring.",
          tag: "Abituriyentlar",
        },
        {
          name: "Ingliz tili — CEFR",
          desc: "A1 dan C1 gacha bo'lgan barcha darajalar bo'yicha ingliz tilini kommunikativ metodda o'rgatish.",
          tag: "Barcha darajalar",
        },
        {
          name: "Ingliz tili — IELTS",
          desc: "IELTS Academic va General Training imtihonlariga maqsadli tayyorgarlik. Band score maqsadingizga erishasiz.",
          tag: "Xalqaro sertifikat",
        },
        {
          name: "IT Kurslar",
          desc: "Dasturlash asoslaridan professional darajaga qadar. Zamonaviy texnologiyalar bilan ishlashni o'rganing.",
          tag: "Yangi yo'nalish",
        },
      ],
    },

    // Why section
    why: {
      tag: "Nega Lokus Academy?",
      title: "Ta'limga chin yurakdan yondoshamiz",
      subtitle:
        "Lokus Academy — bu shunchaki darslar emas. Bu o'quvchi maqsadiga erishgunga qadar uning yonida bo'ladigan fidoyi jamoa.",
      ctaBtn: "Konsultatsiyaga yozilish",
      items: [
        {
          title: "Individual yondashuv",
          desc: "Har bir o'quvchining bilim darajasi, maqsadi va sur'atiga mos o'quv rejasi tuziladi.",
        },
        {
          title: "Amaliyotga yo'naltirilgan ta'lim",
          desc: "Nazariya bilan bir qatorda, ko'nikmalarni mustahkamlash uchun amaliy mashg'ulotlarga alohida e'tibor beriladi.",
        },
        {
          title: "Doimiy ustozlar qo'llab-quvvatlashi",
          desc: "O'quvchilar dars vaqtidan tashqari ham savollar bilan murojaat qilishlari mumkin.",
        },
        {
          title: "Qulay jadval va muhit",
          desc: "Haftalik dars jadvali o'quvchi va ota-onalar bilan kelishilgan holda tuziladi.",
        },
      ],
      directions: [
        { name: "Matematika", sub: "Kids & Abituriyentlar" },
        { name: "Ingliz tili", sub: "CEFR & IELTS" },
        { name: "Tabiiy fanlar", sub: "Kimyo & Biologiya" },
        { name: "IT Kurslar", sub: "Dasturlash & Texnologiya" },
      ],
    },

    // Contact Form
    form: {
      tag: "Ariza",
      title: "Qaysi kursimiz sizga yoqdi?",
      subtitle:
        "Ma'lumotlaringizni qoldiring. Jamoamiz siz bilan bog'lanib, kurs haqida batafsil ma'lumot beradi.",
      points: [
        "Ariza qoldirganingizdan keyin 24 soat ichida jamoamiz siz bilan bog'lanadi.",
        "Konsultatsiya mutlaqo bepul va hech qanday majburiyatsiz.",
        "Kurs haqida batafsil ma'lumot, jadval va narxlar bo'yicha savollarga javob beramiz.",
      ],
      formTitle: "Ariza shakli",
      nameLbl: "Ismingiz",
      namePlaceholder: "Masalan: Aziz Karimov",
      phoneLbl: "Telefon raqamingiz",
      phonePlaceholder: "+998 90 123 45 67",
      courseLbl: "Qiziqayotgan kurs",
      courseDefault: "Kursni tanlang...",
      submitBtn: "Ariza yuborish",
      submitting: "Yuborilmoqda...",
      successTitle: "Arizangiz qabul qilindi! 🎉",
      successDesc:
        "Hurmatli {name}, arizangiz muvaffaqiyatli yuborildi. Jamoamiz 24 soat ichida {phone} raqamiga bog'lanadi.",
      newFormBtn: "Yangi ariza yuborish",
      errors: {
        nameRequired: "Ismingizni kiriting",
        nameMin: "Ism kamida 2 ta harf bo'lishi kerak",
        phoneRequired: "Telefon raqamingizni kiriting",
        phoneInvalid: "To'g'ri O'zbekiston raqamini kiriting: +998XXXXXXXXX",
        courseRequired: "Qiziqayotgan kursni tanlang",
        apiError:
          "Hozirda ariza qabul qilish tizimi sozlanmoqda. Iltimos, to'g'ridan-to'g'ri murojaat qiling: +998 77 699 46 46",
      },
    },

    // Footer
    footer: {
      desc: "Matematika, xorijiy tillar, tabiiy fanlar va IT yo'nalishlarida professional ta'lim beruvchi o'quv markazi.",
      sectionsTitle: "Bo'limlar",
      contactTitle: "Aloqa",
      copyright: "Barcha huquqlar himoyalangan.",
      tagline: "Professional ta'lim — kelajak uchun investitsiya",
    },
  },

  // ============================================================
  // RUSSIAN
  // ============================================================
  ru: {
    nav: {
      home: "Главная",
      courses: "Курсы",
      about: "О нас",
      contact: "Контакты",
      enroll: "Записаться",
    },
    hero: {
      badge: "Профессиональный учебный центр",
      title1: "Стройте своё",
      title2: "будущее",
      title3: "со знаниями!",
      description:
        "Математика, иностранные языки, естественные науки и IT — уверенно шагайте к своим целям.",
      ctaPrimary: "Смотреть курсы",
      ctaSecondary: "Бесплатная консультация",
      priceLabel: "Стоимость курсов",
      priceValue: "от 549 000 сум",
      priceFrom: "",
    },
    features: {
      tag: "Преимущества",
      title: "Почему именно мы?",
      subtitle:
        "Lokus Academy — это не просто учебный центр, а команда, преданная будущему учеников.",
      items: [
        {
          title: "Опытные преподаватели",
          desc: "Специалисты с глубокими знаниями и педагогическим мастерством в каждом направлении.",
        },
        {
          title: "Целенаправленное обучение",
          desc: "Учебный процесс организован в соответствии с индивидуальными целями и темпом каждого ученика.",
        },
        {
          title: "Комфортная среда",
          desc: "Современно оснащённые классы и дружелюбная атмосфера делают обучение эффективным.",
        },
        {
          title: "Разные направления",
          desc: "Математика, языки, естественные науки и IT — выберите направление для своей цели.",
        },
      ],
    },
    courses: {
      tag: "Направления",
      title: "Наши курсы",
      subtitle:
        "Широкий выбор курсов, чтобы каждый ученик мог выбрать подходящее направление.",
      priceFrom: "от 549 000 сум",
      enrollBtn: "Записаться",
      items: [
        {
          name: "Математика Kids",
          desc: "Обучение математическим основам для детей в интересной и понятной форме. Развитие логического мышления.",
          tag: "Для детей",
        },
        {
          name: "Математика (Абитуриенты)",
          desc: "Углублённый курс математики для подготовки к вступительным экзаменам DTM и университетов.",
          tag: "Абитуриенты",
        },
        {
          name: "Химия (Абитуриенты)",
          desc: "Сбалансированное изучение теории и практики по химии. Целенаправленная подготовка к DTM.",
          tag: "Абитуриенты",
        },
        {
          name: "Биология (Абитуриенты)",
          desc: "Изучайте тайны живых организмов и формируйте прочную базу знаний по биологии.",
          tag: "Абитуриенты",
        },
        {
          name: "Английский язык — CEFR",
          desc: "Изучение английского коммуникативным методом для всех уровней от A1 до C1.",
          tag: "Все уровни",
        },
        {
          name: "Английский язык — IELTS",
          desc: "Целенаправленная подготовка к IELTS Academic и General Training. Достигните нужного band score.",
          tag: "Международный сертификат",
        },
        {
          name: "IT Курсы",
          desc: "От основ программирования до профессионального уровня. Изучайте современные технологии.",
          tag: "Новое направление",
        },
      ],
    },
    why: {
      tag: "Почему Lokus Academy?",
      title: "Подходим к образованию с душой",
      subtitle:
        "Lokus Academy — это не просто уроки. Это команда, которая будет рядом с учеником до достижения его цели.",
      ctaBtn: "Записаться на консультацию",
      items: [
        {
          title: "Индивидуальный подход",
          desc: "Учебный план составляется в соответствии с уровнем знаний, целями и темпом каждого ученика.",
        },
        {
          title: "Практикоориентированное обучение",
          desc: "Наряду с теорией, особое внимание уделяется практическим занятиям для закрепления навыков.",
        },
        {
          title: "Постоянная поддержка преподавателей",
          desc: "Ученики могут обращаться с вопросами даже вне времени занятий.",
        },
        {
          title: "Удобное расписание и среда",
          desc: "Еженедельное расписание составляется в согласовании с учеником и родителями.",
        },
      ],
      directions: [
        { name: "Математика", sub: "Kids и Абитуриенты" },
        { name: "Английский язык", sub: "CEFR и IELTS" },
        { name: "Естественные науки", sub: "Химия и Биология" },
        { name: "IT Курсы", sub: "Программирование и Технологии" },
      ],
    },
    form: {
      tag: "Заявка",
      title: "Какой курс вас заинтересовал?",
      subtitle:
        "Оставьте свои данные. Наша команда свяжется с вами и расскажет подробнее о курсе.",
      points: [
        "Наша команда свяжется с вами в течение 24 часов после подачи заявки.",
        "Консультация абсолютно бесплатна и ни к чему не обязывает.",
        "Ответим на вопросы о курсе, расписании и стоимости.",
      ],
      formTitle: "Форма заявки",
      nameLbl: "Ваше имя",
      namePlaceholder: "Например: Азиз Каримов",
      phoneLbl: "Номер телефона",
      phonePlaceholder: "+998 90 123 45 67",
      courseLbl: "Интересующий курс",
      courseDefault: "Выберите курс...",
      submitBtn: "Отправить заявку",
      submitting: "Отправка...",
      successTitle: "Заявка принята! 🎉",
      successDesc:
        "Уважаемый(ая) {name}, ваша заявка успешно отправлена. Наша команда свяжется с вами по номеру {phone} в течение 24 часов.",
      newFormBtn: "Новая заявка",
      errors: {
        nameRequired: "Введите ваше имя",
        nameMin: "Имя должно содержать минимум 2 символа",
        phoneRequired: "Введите номер телефона",
        phoneInvalid: "Введите корректный номер Узбекистана: +998XXXXXXXXX",
        courseRequired: "Выберите интересующий курс",
        apiError:
          "Система приёма заявок сейчас настраивается. Пожалуйста, свяжитесь напрямую: +998 77 699 46 46",
      },
    },
    footer: {
      desc: "Профессиональный учебный центр по математике, иностранным языкам, естественным наукам и IT.",
      sectionsTitle: "Разделы",
      contactTitle: "Контакты",
      copyright: "Все права защищены.",
      tagline: "Профессиональное образование — инвестиция в будущее",
    },
  },

  // ============================================================
  // ENGLISH
  // ============================================================
  en: {
    nav: {
      home: "Home",
      courses: "Courses",
      about: "About",
      contact: "Contact",
      enroll: "Enroll Now",
    },
    hero: {
      badge: "Professional Learning Center",
      title1: "Build your",
      title2: "future",
      title3: "with knowledge!",
      description:
        "Mathematics, foreign languages, natural sciences and IT — step confidently towards your goals.",
      ctaPrimary: "View Courses",
      ctaSecondary: "Free Consultation",
      priceLabel: "Courses starting from",
      priceValue: "549,000 UZS",
      priceFrom: "",
    },
    features: {
      tag: "Why Choose Us",
      title: "Why exactly us?",
      subtitle:
        "Lokus Academy is not just a learning center — it's a dedicated team committed to students' futures.",
      items: [
        {
          title: "Experienced Teachers",
          desc: "Work with specialists who have deep knowledge and pedagogical expertise in every subject.",
        },
        {
          title: "Goal-Oriented Learning",
          desc: "The learning process is tailored to each student's individual goals and pace.",
        },
        {
          title: "Comfortable Environment",
          desc: "Modern equipped classrooms and a friendly atmosphere make learning more effective.",
        },
        {
          title: "Multiple Directions",
          desc: "Mathematics, languages, natural sciences and IT — choose the path that fits your goal.",
        },
      ],
    },
    courses: {
      tag: "Programs",
      title: "Our Courses",
      subtitle:
        "A wide range of courses so every student can find the right direction.",
      priceFrom: "from 549,000 UZS",
      enrollBtn: "Enroll",
      items: [
        {
          name: "Mathematics Kids",
          desc: "Teaching mathematical fundamentals to children in an engaging and understandable way. Developing logical thinking skills.",
          tag: "For Children",
        },
        {
          name: "Mathematics (Applicants)",
          desc: "An in-depth mathematics course for preparing for DTM and university entrance exams.",
          tag: "Applicants",
        },
        {
          name: "Chemistry (Applicants)",
          desc: "Balanced teaching of theory and practice in chemistry. Targeted preparation for DTM exams.",
          tag: "Applicants",
        },
        {
          name: "Biology (Applicants)",
          desc: "Explore the secrets of living organisms and build a solid knowledge base in biology.",
          tag: "Applicants",
        },
        {
          name: "English Language — CEFR",
          desc: "Communicative method English learning for all levels from A1 to C1.",
          tag: "All Levels",
        },
        {
          name: "English Language — IELTS",
          desc: "Targeted preparation for IELTS Academic and General Training. Achieve your target band score.",
          tag: "International Certificate",
        },
        {
          name: "IT Courses",
          desc: "From programming basics to professional level. Learn to work with modern technologies.",
          tag: "New Direction",
        },
      ],
    },
    why: {
      tag: "Why Lokus Academy?",
      title: "We approach education with heart",
      subtitle:
        "Lokus Academy is not just classes. It's a dedicated team that stays by the student's side until they achieve their goal.",
      ctaBtn: "Schedule a Consultation",
      items: [
        {
          title: "Individual Approach",
          desc: "A learning plan is created according to each student's knowledge level, goals and pace.",
        },
        {
          title: "Practice-Oriented Learning",
          desc: "Alongside theory, special attention is paid to practical exercises to consolidate skills.",
        },
        {
          title: "Continuous Teacher Support",
          desc: "Students can reach out with questions even outside class hours.",
        },
        {
          title: "Flexible Schedule & Environment",
          desc: "The weekly schedule is arranged in agreement with students and parents.",
        },
      ],
      directions: [
        { name: "Mathematics", sub: "Kids & Applicants" },
        { name: "English Language", sub: "CEFR & IELTS" },
        { name: "Natural Sciences", sub: "Chemistry & Biology" },
        { name: "IT Courses", sub: "Programming & Technology" },
      ],
    },
    form: {
      tag: "Apply",
      title: "Which course interests you?",
      subtitle:
        "Leave your details. Our team will contact you and provide detailed information about the course.",
      points: [
        "Our team will contact you within 24 hours after submitting the application.",
        "The consultation is completely free with no obligations.",
        "We'll answer questions about the course, schedule and pricing.",
      ],
      formTitle: "Application Form",
      nameLbl: "Your Name",
      namePlaceholder: "e.g. Aziz Karimov",
      phoneLbl: "Phone Number",
      phonePlaceholder: "+998 90 123 45 67",
      courseLbl: "Course of Interest",
      courseDefault: "Select a course...",
      submitBtn: "Submit Application",
      submitting: "Submitting...",
      successTitle: "Application Received! 🎉",
      successDesc:
        "Dear {name}, your application has been successfully submitted. Our team will contact you at {phone} within 24 hours.",
      newFormBtn: "New Application",
      errors: {
        nameRequired: "Please enter your name",
        nameMin: "Name must be at least 2 characters",
        phoneRequired: "Please enter your phone number",
        phoneInvalid: "Enter a valid Uzbekistan number: +998XXXXXXXXX",
        courseRequired: "Please select a course",
        apiError:
          "The application system is currently being configured. Please contact us directly: +998 77 699 46 46",
      },
    },
    footer: {
      desc: "Professional learning center for mathematics, foreign languages, natural sciences and IT.",
      sectionsTitle: "Sections",
      contactTitle: "Contact",
      copyright: "All rights reserved.",
      tagline: "Professional education — an investment in your future",
    },
  },
};

export const LANGUAGES = [
  { code: "uz", label: "O'z", fullLabel: "O'zbek" },
  { code: "ru", label: "Ru", fullLabel: "Русский" },
  { code: "en", label: "En", fullLabel: "English" },
];
