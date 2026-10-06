export const site = {
  name: "Quran Tutoring",
  legalName: "Quran Tutoring Online Academy",
  tagline: "Empowering Souls Through Quranic Knowledge",
  description:
    "Learn Quran online with certified male and female tutors. One-on-one classes in Quran reading, Tajweed, Hifz (memorization), Arabic, and Islamic Studies for kids, adults, and beginners worldwide.",
  url: "https://qurantutoring.net",
  phone: "+92 311 4893800",
  phoneAlt: "(92) 311 4893800",
  whatsapp: "923114893800",
  whatsappDisplay: "+92 311 4893800",
  email: "qurantutoring.net@gmail.com",
  locality: "Islamabad",
  country: "Pakistan",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
};

export type Course = {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  image: string;
  summary: string;
  who: string[];
  learn: string[];
  features: string[];
  outcome: string;
  faqs: { q: string; a: string }[];
};

export const courses: Course[] = [
  {
    slug: "basic-qaida",
    title: "Basic Qaida Course",
    shortTitle: "Basic Qaida",
    subtitle: "Learn to Read the Quran from Scratch – Step by Step",
    image: "/images/course-qaida.jpg",
    summary:
      "Ideal for kids and beginners, this course builds a strong foundation in Arabic letters, pronunciation, and basic rules of recitation.",
    who: [
      "Young children",
      "Absolute beginners",
      "New Muslims who want to start reading the Quran from the very basics, with proper pronunciation and Tajweed",
    ],
    learn: [
      "Recognition of Arabic letters (Alif to Yaa)",
      "Correct pronunciation (Makharij of letters)",
      "Joining letters to make words",
      "Harakaat (Fatha, Kasra, Damma)",
      "Sukoon, Shaddah, Tanween, Madd",
      "Introduction to basic Tajweed rules",
      "Reading short Quranic words & verses",
    ],
    features: [
      "One-on-One live classes (Zoom / Skype)",
      "Certified male & female Quran tutors",
      "Colorful and engaging Qaida material",
      "Progress tracking for each student",
      "Free 3-day trial",
      "Available 24/7 for all time zones",
    ],
    outcome:
      "This course usually takes 3 to 6 months, depending on the student's pace. We offer flexible scheduling to match your time zone and availability.",
    faqs: [
      {
        q: "What is the Basic Qaida course?",
        a: "The Basic Qaida course is designed for beginners to learn the Arabic alphabet, correct pronunciation, and foundational rules for reading the Quran.",
      },
      {
        q: "Who can join this course?",
        a: "Anyone, whether a child, teenager, or adult, who wants to start their Quran learning journey from scratch can join.",
      },
      {
        q: "How long does it take to complete the Basic Qaida?",
        a: "It usually takes 2 to 4 months depending on age, learning pace, and practice time.",
      },
      {
        q: "Do you teach with Tajweed rules?",
        a: "Yes, from the first lesson students are taught correct Makharij and basic Tajweed rules.",
      },
      {
        q: "Are the classes one-on-one?",
        a: "Yes, all classes are one-on-one for personalized learning.",
      },
    ],
  },
  {
    slug: "quran-reading-with-tajweed",
    title: "Quran Reading with Tajweed",
    shortTitle: "Quran with Tajweed",
    subtitle: "Perfect Your Quran Recitation – Learn Tajweed Step-by-Step",
    image: "/images/course-tajweed.webp",
    summary:
      "Elevate your Quranic recitation by mastering Tajweed. Designed for learners of all levels who can already read the Quran.",
    who: [
      "Students who have completed Basic Qaida",
      "Adults who want to improve their recitation skills",
      "Children who know how to read but need Tajweed training",
      "Anyone aiming for fluent, melodious, and correct Quran recitation",
    ],
    learn: [
      "Correct Makharij for all Arabic letters",
      "Rules of Noon Saakin & Tanween",
      "Rules of Meem Saakin",
      "Rules of Qalqalah",
      "Stretching (Madd) rules and types",
      "Reading practice with selected Surahs",
      "Fluency building with accuracy in Tajweed",
    ],
    features: [
      "One-on-one live classes with certified Tajweed tutors",
      "Flexible schedule for all time zones",
      "Access to digital resources and class recordings",
      "Step-by-step Tajweed lessons with real-time correction",
      "24/7 support & easy class rescheduling",
    ],
    outcome:
      "By the end of this course, you will recite the Quran fluently and correctly with Tajweed, understand and apply all major Tajweed rules, and develop a beautiful and melodious recitation style.",
    faqs: [
      {
        q: "Do I need to know Arabic before starting this course?",
        a: "No, you only need to know how to read the Quran. We will teach you Tajweed rules step-by-step.",
      },
      {
        q: "Will I learn both theory and practice?",
        a: "Yes, every rule will be explained with examples and then practiced in live recitation.",
      },
      {
        q: "Can my child take this course?",
        a: "Absolutely! We have separate teaching methods for kids to keep them engaged.",
      },
      {
        q: "How many classes per week are recommended?",
        a: "At least 3 classes per week are recommended for best results.",
      },
      {
        q: "Will I get a certificate after completing?",
        a: "Yes, all students receive a certificate upon successful completion of the course.",
      },
    ],
  },
  {
    slug: "quran-memorization",
    title: "Quran Memorization (Hifz)",
    shortTitle: "Quran Memorization",
    subtitle: "Memorize the Holy Quran – Step-by-Step with Expert Guidance",
    image: "/images/course-memorization.jpg",
    summary:
      "Join our online Quran memorization course and embark on a spiritual journey to become a Hafiz with personalized Hifz plans and revision.",
    who: [
      "Students of all ages who want to memorize the full Quran",
      "Adults seeking to complete their Hifz journey",
      "Children beginning their Quran memorization from scratch",
      "Those who want to re-memorize after forgetting portions",
    ],
    learn: [
      "Daily lesson (Sabqi) memorization",
      "Revision of previously memorized portions (Manzil)",
      "Correct Tajweed and pronunciation during memorization",
      "Memorization strategies for long-term retention",
      "Time management techniques for consistent Hifz progress",
      "Spiritual discipline and focus during Quran study",
    ],
    features: [
      "One-on-one online Hifz classes with certified Huffaz",
      "Daily, weekly, and monthly progress tracking",
      "Flexible schedule for students worldwide",
      "Personalized memorization plan according to ability",
      "24/7 support for students and parents",
      "Regular Tajweed checks during memorization",
    ],
    outcome:
      "By the end of this course, you will memorize the Holy Quran completely or a significant portion, retain it through consistent revision, and gain the honor of becoming a Hafiz/Hafiza of the Quran.",
    faqs: [
      {
        q: "Do I need to have prior memorization experience?",
        a: "No, our tutors will guide you from the very first lesson according to your pace.",
      },
      {
        q: "How long will it take to memorize the entire Quran?",
        a: "It depends on your pace and class frequency. On average, it takes 2–4 years with consistent effort.",
      },
      {
        q: "Can I do partial memorization?",
        a: "Yes, you can choose to memorize selected Surahs or Juz according to your goal.",
      },
      {
        q: "Do you help with revision after completion?",
        a: "Yes, we provide post-Hifz revision plans to ensure long-term retention.",
      },
      {
        q: "Will I learn Tajweed during memorization?",
        a: "Absolutely! Tajweed is integrated into every memorization session.",
      },
    ],
  },
  {
    slug: "tafseer-ul-quran",
    title: "Tafseer-ul-Quran Course",
    shortTitle: "Tafseer-ul-Quran",
    subtitle: "Understand the Deeper Meaning Behind Every Verse",
    image: "/images/course-tafseer.jpg",
    summary:
      "Go beyond translation and explore the context, wisdom, and scholarly explanation behind the Quran's verses with guided Tafseer lessons.",
    who: [
      "Students who have completed Quran reading and want to understand its meaning",
      "Adults seeking a deeper spiritual and intellectual connection with the Quran",
      "Anyone who has completed our Arabic Language or Translation course",
      "Students preparing to teach or lead discussions on Quranic topics",
    ],
    learn: [
      "Context and reasons behind the revelation (Asbab al-Nuzul) of key verses",
      "Classical Tafseer references explained in simple language",
      "Thematic study of major Surahs and their core messages",
      "Linking Quranic guidance to everyday life and modern situations",
      "Connections between verses, Hadith, and Islamic jurisprudence",
      "Building the skills to study Tafseer independently",
    ],
    features: [
      "One-on-one live classes with scholars trained in Tafseer",
      "Explanations drawn from authentic, recognized Tafseer sources",
      "Flexible pacing, Surah-by-Surah or topic-by-topic",
      "Suitable for both Arabic speakers and non-Arabic speakers",
      "24/7 student support and flexible scheduling",
    ],
    outcome:
      "By the end of this course, you will understand the deeper meaning and context of the verses you recite, and be able to connect Quranic guidance to real life with confidence.",
    faqs: [
      {
        q: "Do I need to know Arabic to join this course?",
        a: "No, all explanations are given in English (or Urdu on request), though a basic grasp of Arabic helps you follow along with the original text.",
      },
      {
        q: "Is this different from the Arabic Language course?",
        a: "Yes. The Arabic Language course teaches you to read and understand Arabic itself, while Tafseer focuses on the meaning, context, and scholarly explanation of specific verses.",
      },
      {
        q: "Can beginners join this course?",
        a: "We recommend first completing Basic Qaida and some Quran reading practice, so you're comfortable following along with the verses being discussed.",
      },
      {
        q: "Which Tafseer sources do you use?",
        a: "Our tutors draw from recognized, authentic classical and contemporary Tafseer works, explained in accessible language.",
      },
      {
        q: "How is this course structured?",
        a: "You can choose to study specific Surahs in depth or follow a structured thematic path through the Quran, based on your goals.",
      },
    ],
  },
  {
    slug: "islamic-studies",
    title: "Islamic Studies Course",
    shortTitle: "Islamic Studies",
    subtitle: "Understand Islam – Learn the Core Beliefs, Practices, and History",
    image: "/images/course-islamic-studies.jpg",
    summary:
      "Enroll in our comprehensive Islamic Studies online course to expand your understanding of Islam, its pillars, ethics, and history.",
    who: [
      "Students of all ages wanting to learn the fundamentals of Islam",
      "Non-Arabic speakers who wish to understand Islam in English",
      "Children needing structured Islamic education",
      "Adults seeking authentic knowledge to strengthen their faith",
      "New Muslims eager to learn Islamic basics and practices",
    ],
    learn: [
      "The Five Pillars of Islam (Shahadah, Salah, Zakat, Sawm, Hajj)",
      "Articles of Faith (Belief in Allah, Angels, Books, Prophets, Qiyamah, Divine Decree)",
      "Prophet Muhammad's ﷺ life and Seerah",
      "Islamic ethics and moral conduct",
      "Brief introduction to Islamic history and civilization",
      "Duas and daily Sunnah practices",
      "Understanding halal and haram in daily life",
    ],
    features: [
      "One-on-one live classes tailored to your level",
      "Suitable for kids, adults, and new Muslims",
      "Interactive lessons with visuals and stories",
      "Flexible class timings",
      "Teachers with authentic Islamic knowledge and Ijazah",
      "24/7 student support",
    ],
    outcome:
      "By the end of this course, you will have a clear understanding of Islam's core beliefs and practices, and be confident in explaining Islam to others respectfully.",
    faqs: [
      {
        q: "Is this course for beginners?",
        a: "Yes, it is designed for all levels, including complete beginners.",
      },
      {
        q: "Will I learn Quran reading in this course?",
        a: "No, this course focuses on Islamic knowledge. For Quran reading, we have separate courses.",
      },
      {
        q: "Do you provide classes for kids?",
        a: "Yes, we have separate teaching methods for children to make learning fun and engaging.",
      },
      {
        q: "Is the content authentic?",
        a: "Absolutely! All content is based on authentic Quran and Hadith sources.",
      },
      {
        q: "Can non-Muslims take this course?",
        a: "Yes, we welcome anyone interested in learning about Islam.",
      },
    ],
  },
  {
    slug: "hadith-studies",
    title: "Hadith Studies Course",
    shortTitle: "Hadith Studies",
    subtitle: "Learn the Authentic Sayings and Practices of the Prophet ﷺ",
    image: "/images/course-hadith.jpg",
    summary:
      "Study selected authentic Hadith from trusted collections, understand their meaning and application, and learn how to live by the Prophet's ﷺ guidance.",
    who: [
      "Students wanting to learn directly from the Prophet's ﷺ teachings",
      "Adults seeking practical guidance for daily life and worship",
      "Parents wanting to teach their children good character through Hadith",
      "Anyone who has completed our Islamic Studies or Seerah course",
    ],
    learn: [
      "Selected authentic Hadith from Sahih Bukhari, Sahih Muslim, and other trusted collections",
      "Basic understanding of Hadith terminology and authenticity grading",
      "The context and application of each Hadith in daily life",
      "Hadith related to worship, character, manners, and family life",
      "How Hadith complements and explains the Quran",
    ],
    features: [
      "One-on-one live classes with knowledgeable tutors",
      "Hadith sourced only from authentic, verified collections",
      "Practical, life-application focus, not just memorization",
      "Suitable for kids, adults, and new Muslims",
      "24/7 student support and flexible scheduling",
    ],
    outcome:
      "By the end of this course, you will have studied a meaningful collection of authentic Hadith, understand their context, and know how to apply the Prophet's ﷺ guidance in everyday life.",
    faqs: [
      {
        q: "Which Hadith collections do you teach from?",
        a: "We teach from authentic, widely recognized collections such as Sahih Bukhari and Sahih Muslim, along with other trusted sources.",
      },
      {
        q: "Do I need prior Islamic knowledge to join?",
        a: "No, this course is designed for all levels, including complete beginners.",
      },
      {
        q: "Is this course only memorization, or do you explain the Hadith too?",
        a: "We focus on understanding and application, not rote memorization alone. Each Hadith is explained with its context and relevance to daily life.",
      },
      {
        q: "Can children join this course?",
        a: "Yes, we select age-appropriate Hadith and explain them in a simple, engaging way for younger students.",
      },
      {
        q: "How does this course relate to the Islamic Studies course?",
        a: "Islamic Studies covers the broader foundations of Islam, while this course focuses specifically and in depth on studying Hadith.",
      },
    ],
  },
  {
    slug: "arabic-language",
    title: "Arabic Language Course",
    shortTitle: "Arabic Language",
    subtitle: "Learn Arabic – From Alphabets to Fluent Conversation",
    image: "/images/course-arabic.jpg",
    summary:
      "Learn classical Arabic to understand the meanings of the Quran directly without translation, focusing on Quranic vocabulary, grammar, and sentence structure.",
    who: [
      "Students who want to understand the Quran directly in Arabic",
      "Beginners with no prior Arabic knowledge",
      "Adults and kids who want to learn Arabic for communication",
      "New Muslims wanting to understand Islamic terms and phrases",
      "Anyone preparing for travel, study, or work in an Arabic-speaking country",
    ],
    learn: [
      "Arabic alphabets and correct pronunciation",
      "Basic vocabulary for daily conversation",
      "Simple grammar and sentence formation",
      "Reading and understanding short Arabic texts",
      "Writing in Arabic script",
      "Quranic Arabic vocabulary and common phrases",
      "Listening and speaking practice for fluency",
    ],
    features: [
      "One-on-one live interactive classes",
      "Course available for both Modern Standard Arabic and Quranic Arabic",
      "Customized lessons for kids and adults",
      "Flexible class timings",
      "Experienced native and non-native Arabic-speaking teachers",
      "24/7 student support",
    ],
    outcome:
      "By the end of this course, you will read and write Arabic confidently, understand common Arabic words and phrases, and build a foundation for advanced Arabic studies.",
    faqs: [
      {
        q: "Do I need to know Arabic before starting?",
        a: "No, this course starts from scratch and builds your skills step by step.",
      },
      {
        q: "Will I learn to speak Arabic fluently?",
        a: "Yes, with consistent practice, you will be able to communicate in Arabic confidently.",
      },
      {
        q: "Is Quranic Arabic included?",
        a: "Yes, we teach common Quranic words and their meanings alongside regular Arabic lessons.",
      },
      {
        q: "Can kids join this course?",
        a: "Absolutely! We have fun and interactive methods for young learners.",
      },
      {
        q: "How long will it take to learn Arabic?",
        a: "Basic fluency can be achieved in 4–6 months depending on your pace and practice.",
      },
    ],
  },
  {
    slug: "six-kalimas",
    title: "Six Kalimas & Nimaz Course",
    shortTitle: "Six Kalimas & Nimaz",
    subtitle: "Learn the Six Declarations of Faith and How to Pray Nimaz Correctly",
    image: "/images/course-kalimas.jpg",
    summary:
      "Memorize the Six Kalimas with correct pronunciation and learn how to perform Nimaz (Salah) step by step, ideal for kids and new Muslims.",
    who: [
      "Children learning the foundations of their faith and daily prayer",
      "New Muslims wanting to learn the core declarations of Islam and how to pray",
      "Adults who want to refresh their memorization and correct their Nimaz",
      "Parents looking for a structured way to teach their kids at home",
    ],
    learn: [
      "Correct memorization of all Six Kalimas with proper pronunciation",
      "Word-by-word meaning and translation of each Kalima",
      "The significance and occasion of use for each declaration",
      "How to perform Nimaz (Salah) correctly, step by step, from Wudu to Salaam",
      "Surahs and duas required for Nimaz, with correct pronunciation",
      "Simple Arabic vocabulary found within the Kalimas and prayer",
      "Connecting the Kalimas and Nimaz to daily practice and belief",
    ],
    features: [
      "One-on-one live classes with certified tutors",
      "Fun, repetition-based memorization techniques for children",
      "Step-by-step Nimaz practice with live correction",
      "Clear meaning and translation alongside memorization",
      "Flexible timings for families worldwide",
      "24/7 student support",
    ],
    outcome:
      "By the end of this course, you will confidently recite all Six Kalimas from memory with correct pronunciation, and be able to perform Nimaz correctly and confidently on your own.",
    faqs: [
      {
        q: "What are the Six Kalimas?",
        a: "The Six Kalimas are six foundational Arabic declarations covering faith, purity, and core Islamic beliefs, traditionally among the first things taught to Muslim children.",
      },
      {
        q: "Does this course also teach how to pray Nimaz?",
        a: "Yes. Alongside the Six Kalimas, students are taught how to perform Nimaz (Salah) correctly, step by step, including Wudu, the required Surahs and duas, and the correct movements.",
      },
      {
        q: "Is this course suitable for very young children?",
        a: "Yes, we use simple repetition and engaging methods suitable for young learners, typically from age 4 and up.",
      },
      {
        q: "Will my child understand the meaning, or just memorize the words?",
        a: "Both. Alongside memorization, we explain the meaning of each Kalima and the purpose of each part of Nimaz in simple, age-appropriate terms.",
      },
      {
        q: "How long does it take to complete this course?",
        a: "Most students memorize all six Kalimas and learn to perform Nimaz confidently within 2 to 3 months with consistent practice, though pace varies by age and frequency of classes.",
      },
      {
        q: "Can adults join this course too?",
        a: "Absolutely. Many adults, especially new Muslims, join to learn or correct their Kalimas and Nimaz.",
      },
    ],
  },
  {
    slug: "seerah-of-the-prophet-muhammad-pbuh",
    title: "Seerah of the Prophet Muhammad (PBUH) Course",
    shortTitle: "Seerah of the Prophet",
    subtitle: "Discover the Life and Legacy of Prophet Muhammad ﷺ",
    image: "/images/course-seerah.jpg",
    summary:
      "Discover the life, character, and teachings of Prophet Muhammad ﷺ in a simplified and inspiring way, perfect for all age groups.",
    who: [
      "Muslims wanting to strengthen their love and connection with the Prophet ﷺ",
      "New Muslims who want to understand the foundations of Islam",
      "Students of Islamic Studies and history",
      "Parents who want their children to learn authentic Seerah",
      "Anyone seeking moral and spiritual guidance through the Prophet's example",
    ],
    learn: [
      "The lineage, birth, and early life of the Prophet ﷺ",
      "The first revelation and the early days of Islam",
      "The Prophet's ﷺ migration to Madinah",
      "Major battles and events during his lifetime",
      "His personal character, compassion, and leadership",
      "Lessons from his dealings with family, friends, and even enemies",
      "The final sermon and passing of the Prophet ﷺ",
    ],
    features: [
      "Authentic content from reliable Islamic sources",
      "Story-based teaching for easy understanding",
      "Special focus on moral lessons for kids and adults",
      "One-on-one or group class options available",
      "Flexible timings for students worldwide",
      "24/7 student support",
    ],
    outcome:
      "By the end of this course, you will gain a deep understanding of the Prophet's ﷺ life and mission, learn practical Sunnah to apply in your daily life, and be able to share Seerah stories with others confidently.",
    faqs: [
      {
        q: "Do I need prior Islamic knowledge to join this course?",
        a: "No, this course is designed for all levels, from beginners to advanced students.",
      },
      {
        q: "Will you provide authentic sources?",
        a: "Yes, all content is taken from authentic and verified Islamic sources.",
      },
      {
        q: "Is this course suitable for kids?",
        a: "Absolutely! We use age-appropriate language and storytelling techniques for children.",
      },
      {
        q: "How long does the course take?",
        a: "It usually takes 1–3 months depending on class frequency and student pace.",
      },
      {
        q: "Will I get a certificate?",
        a: "Yes, a certificate of completion will be awarded after finishing the course.",
      },
    ],
  },
];

export type PricingPlan = {
  name: string;
  recommendedFor: string;
  classesPerMonth: string;
  classesPerWeek: string;
  duration: string;
  prices: { currency: string; symbol: string; amount: number }[];
  highlight?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Plan A",
    recommendedFor: "Recommended for advanced level learners",
    classesPerMonth: "08 Classes Per Month",
    classesPerWeek: "02 Classes Per Week",
    duration: "30 Minutes Per Class",
    prices: [
      { currency: "USD", symbol: "$", amount: 35 },
      { currency: "GBP", symbol: "£", amount: 25 },
      { currency: "CAD", symbol: "$", amount: 40 },
      { currency: "EUR", symbol: "€", amount: 30 },
      { currency: "AUD", symbol: "$", amount: 50 },
    ],
  },
  {
    name: "Plan B",
    recommendedFor: "Recommended for medium level learners",
    classesPerMonth: "12 Classes Per Month",
    classesPerWeek: "03 Classes Per Week",
    duration: "30 Minutes Per Class",
    prices: [
      { currency: "USD", symbol: "$", amount: 50 },
      { currency: "GBP", symbol: "£", amount: 35 },
      { currency: "CAD", symbol: "$", amount: 60 },
      { currency: "EUR", symbol: "€", amount: 45 },
      { currency: "AUD", symbol: "$", amount: 70 },
    ],
  },
  {
    name: "Plan C",
    recommendedFor: "Recommended for medium level learners",
    classesPerMonth: "16 Classes Per Month",
    classesPerWeek: "04 Classes Per Week",
    duration: "30 Minutes Per Class",
    prices: [
      { currency: "USD", symbol: "$", amount: 65 },
      { currency: "GBP", symbol: "£", amount: 45 },
      { currency: "CAD", symbol: "$", amount: 80 },
      { currency: "EUR", symbol: "€", amount: 60 },
      { currency: "AUD", symbol: "$", amount: 90 },
    ],
    highlight: true,
  },
  {
    name: "Plan D",
    recommendedFor: "Recommended for basic level learners",
    classesPerMonth: "20 Classes Per Month",
    classesPerWeek: "05 Classes Per Week",
    duration: "30 Minutes Per Class",
    prices: [
      { currency: "USD", symbol: "$", amount: 80 },
      { currency: "GBP", symbol: "£", amount: 55 },
      { currency: "CAD", symbol: "$", amount: 100 },
      { currency: "EUR", symbol: "€", amount: 70 },
      { currency: "AUD", symbol: "$", amount: 110 },
    ],
  },
  {
    name: "Hifz Plan",
    recommendedFor: "Recommended for Quran Memorization",
    classesPerMonth: "20 Classes Per Month",
    classesPerWeek: "05 Classes Per Week",
    duration: "01 Hour Per Class",
    prices: [
      { currency: "USD", symbol: "$", amount: 160 },
      { currency: "GBP", symbol: "£", amount: 110 },
      { currency: "CAD", symbol: "$", amount: 200 },
      { currency: "EUR", symbol: "€", amount: 140 },
      { currency: "AUD", symbol: "$", amount: 220 },
    ],
  },
];

export const testimonials = [
  {
    name: "Sarah A.",
    location: "New York, USA",
    title: "A Life-Changing Experience",
    quote:
      "I enrolled my 8-year-old daughter in the Basic Qaida course, and within weeks, I noticed a huge improvement in her pronunciation and interest in learning the Quran. The tutor is patient, engaging, and truly passionate about teaching. Highly recommended for anyone looking for reliable online Quran classes.",
  },
  {
    name: "Ahmed R.",
    location: "Houston, Texas",
    title: "Perfect for Busy Adults",
    quote:
      "As a full-time employee and father, I struggled to find time for my Quran learning. Quran Tutoring's flexible scheduling and experienced teachers made it easy for me to learn at my own pace. I'm now confidently reading with proper Tajweed, Alhamdulillah.",
  },
  {
    name: "Nadia H.",
    location: "Chicago, Illinois",
    title: "Trusted Quran Tutors for Kids",
    quote:
      "My two sons are enrolled in the Hifz program. The way the tutors connect with children, using kind encouragement and consistent progress tracking, is truly impressive. I feel blessed to have found such a professional Quran academy online.",
  },
];

export const whyChooseUs = [
  {
    title: "Certified Quran Tutors",
    desc: "Our experienced teachers hold Ijazah and are skilled in Tajweed and Hifz.",
  },
  {
    title: "Flexible Learning Plans",
    desc: "Custom learning plans for all ages, from kids through adults.",
  },
  {
    title: "1-on-1 Interactive Classes",
    desc: "Personalized attention in one-on-one interactive classes to help students progress quickly.",
  },
  {
    title: "Worldwide Availability",
    desc: "We provide Quran academy services worldwide, including in the USA, UK, Australia, and beyond.",
  },
];

export const paymentMethods = ["Ria", "MoneyGram", "Western Union", "Remitly"];

export const generalFaqs = [
  {
    q: "What is online Quran teaching?",
    a: "Online Quran teaching uses live video calls (Zoom or Skype) to connect students with real, qualified Quran tutors from anywhere in the world. It gives students the same one-on-one attention as in-person classes, with the convenience of learning from home.",
  },
  {
    q: "Is online Quran learning effective for kids?",
    a: "Yes. Our tutors use interactive teaching methods, colorful materials, and consistent progress tracking designed specifically for children, making online Quran learning just as effective, and often more engaging, than traditional classes.",
  },
  {
    q: "Do you offer both male and female Quran tutors?",
    a: "Yes, we provide qualified male and female Quran tutors so every student and family can choose a teacher they feel comfortable learning with.",
  },
  {
    q: "How do I start learning Quran online with Quran Tutoring?",
    a: "Simply contact us via WhatsApp, phone, or the contact form to book your free 3-day trial. We'll match you with a suitable tutor based on your age, level, and course of interest.",
  },
  {
    q: "What if I'm not satisfied after the free 3-day trial?",
    a: "There's no obligation to continue after your free 3-day trial. If you're satisfied, you can choose a monthly plan that fits your schedule and budget.",
  },
  {
    q: "Which countries do you provide online Quran classes in?",
    a: "We teach students worldwide, including in the USA, UK, Canada, Australia, and across Europe, with flexible timings to suit every time zone.",
  },
];
