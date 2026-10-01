export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  content: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "tajweed-rules-for-beginners",
    title: "Tajweed Rules for Beginners: A Complete Guide to Reading the Quran Correctly",
    excerpt:
      "Learn the foundational Tajweed rules every Quran student should know, from Makharij and Noon Saakin to Madd and Qalqalah, explained in simple, practical terms.",
    image: "/images/course-tajweed.webp",
    date: "2026-09-15",
    readTime: "7 min read",
    author: "Quran Tutoring",
    content: [
      {
        paragraphs: [
          "Tajweed is the set of rules that govern how the Quran should be recited, letter by letter, so that its meaning and beauty are preserved exactly as it was revealed. For many students, Tajweed can feel intimidating at first, but once broken down into its core building blocks, it becomes a natural and rewarding part of daily recitation. This guide covers the essential Tajweed rules every beginner should understand before moving on to more advanced recitation.",
        ],
      },
      {
        heading: "Why Tajweed Matters",
        paragraphs: [
          "The Quran was revealed with a precise oral tradition, and Tajweed exists to protect that tradition. Mispronouncing a single letter can change the meaning of a word entirely, which is why scholars consider learning Tajweed an essential part of reading the Quran correctly rather than an optional skill. Beyond accuracy, Tajweed also gives recitation its distinctive rhythm and beauty, the quality that makes Quranic recitation instantly recognizable.",
        ],
      },
      {
        heading: "1. Makharij al-Huruf (Articulation Points)",
        paragraphs: [
          "Before learning any Tajweed rule, a student must first master Makharij, the precise point in the mouth or throat where each Arabic letter originates. Arabic has several letters with no equivalent sound in English, such as ض (Dhad) and ع (Ain), and each one must be pronounced from its correct articulation point. A qualified tutor listening to your recitation in real time is the fastest way to correct these sounds, which is difficult to self-teach from books or apps alone.",
        ],
      },
      {
        heading: "2. Rules of Noon Saakin and Tanween",
        paragraphs: [
          "When a Noon with sukoon (ن) or Tanween appears, it follows one of four rules depending on the letter that comes after it:",
        ],
        list: [
          "Izhar (Clear pronunciation): when followed by one of the throat letters, the Noon sound is pronounced clearly.",
          "Idgham (Merging): when followed by specific letters, the Noon sound merges into the next letter.",
          "Iqlab (Conversion): when followed by the letter Ba, the Noon sound converts into a light Meem sound.",
          "Ikhfa (Concealment): when followed by most remaining letters, the Noon sound is concealed with a slight nasal tone.",
        ],
      },
      {
        heading: "3. Rules of Meem Saakin",
        paragraphs: [
          "A Meem with sukoon (م) follows three similar rules depending on what follows it: Ikhfa Shafawi (concealment before Ba), Idgham Shafawi (merging into another Meem), and Izhar Shafawi (clear pronunciation before all other letters). Mastering these rules, alongside the Noon Saakin rules, forms the backbone of fluent, correct recitation.",
        ],
      },
      {
        heading: "4. Qalqalah (Echoing Sound)",
        paragraphs: [
          "Qalqalah applies to five letters, ق ط ب ج د, when they carry a sukoon. These letters produce a slight bouncing or echoing sound rather than a flat stop, and the strength of that echo varies depending on whether the letter appears mid-word or at the end of a verse.",
        ],
      },
      {
        heading: "5. Madd (Elongation)",
        paragraphs: [
          "Madd rules govern how long a vowel sound should be stretched during recitation, measured in counts called 'harakat'. The natural Madd (Madd Asli) is held for two counts, while several secondary Madd rules, Madd Muttasil, Madd Munfasil, and Madd Lazim among them, extend that count based on what follows the elongated letter. Getting Madd lengths right is one of the most common challenges for new students, and it is where consistent practice with a tutor makes the biggest difference.",
        ],
      },
      {
        heading: "How to Actually Learn Tajweed",
        paragraphs: [
          "Reading about Tajweed rules is useful, but Tajweed is fundamentally an oral skill. It has to be heard, practiced, and corrected in real time by someone qualified to catch small mistakes in pronunciation and timing. This is why one-on-one live classes consistently produce faster, more accurate results than self-study apps or recorded videos, especially for children and absolute beginners.",
          "At Quran Tutoring, our Quran Reading with Tajweed course is built specifically around this principle: live correction, structured progression through each rule, and consistent practice with certified tutors who specialize in Tajweed instruction for students of all ages.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-online-quran-tutor",
    title: "How to Choose the Right Online Quran Tutor for Your Child",
    excerpt:
      "A practical guide for parents on what to look for in an online Quran tutor, from qualifications and teaching style to trial classes and scheduling flexibility.",
    image: "/images/boy-classroom-quran.jpg",
    date: "2026-09-22",
    readTime: "6 min read",
    author: "Quran Tutoring",
    content: [
      {
        paragraphs: [
          "Choosing the right Quran tutor is one of the most important decisions a parent can make for their child's religious education. With so many online academies and freelance tutors available, it can be difficult to know what actually separates a good tutor from a great one. This guide walks through the key factors parents should evaluate before enrolling their child in online Quran classes.",
        ],
      },
      {
        heading: "1. Verify Qualifications, Not Just Experience",
        paragraphs: [
          "Years of teaching experience matter, but formal qualifications matter just as much. Look for tutors who have completed Hifz-e-Quran, hold an Ijazah (a formal certification of authorized transmission) in Tajweed or Qiraat, or have studied at a recognized Islamic institution such as Dars-e-Nizami. A tutor with both experience and formal credentials is far more likely to teach correct pronunciation and sound Islamic knowledge from day one.",
        ],
      },
      {
        heading: "2. Ask Whether They Teach Kids Differently Than Adults",
        paragraphs: [
          "Teaching a 6-year-old to recognize Arabic letters requires a completely different approach than teaching a working adult to improve their Tajweed. Good tutors adapt their teaching style, pace, and materials based on the student's age and attention span. Ask prospective academies directly: how do you structure lessons for young children versus adult beginners?",
        ],
      },
      {
        heading: "3. Male and Female Tutor Options",
        paragraphs: [
          "Many families, for reasons of comfort and Islamic etiquette, prefer their daughters to learn from female tutors and their sons from male tutors. A reputable online Quran academy should offer both options and let you choose based on your family's preference, rather than assigning tutors at random.",
        ],
      },
      {
        heading: "4. Always Take the Free Trial Class Seriously",
        paragraphs: [
          "A free trial class is not just a formality, it is your best opportunity to evaluate fit before committing financially. During the trial, pay attention to: Does the tutor correct mistakes patiently? Does your child feel comfortable asking questions? Is the connection stable and is the tutor clearly audible? Is the tutor's own Tajweed and pronunciation accurate? If any of these feel off during a single trial class, it is worth trying another tutor rather than assuming it will improve.",
        ],
      },
      {
        heading: "5. Scheduling Flexibility Across Time Zones",
        paragraphs: [
          "If you live outside the tutor's home country, confirm upfront that class timings can realistically fit your family's routine, not just in theory but in practice over several weeks. Academies that serve students across the USA, UK, Canada, and Australia should be able to offer evening or weekend slots that don't require your child to study at an exhausting hour.",
        ],
      },
      {
        heading: "6. Progress Tracking and Communication",
        paragraphs: [
          "Ask how the academy communicates your child's progress. Monthly reports, WhatsApp updates after each class, or a simple progress chart all help you stay informed without having to sit in on every lesson. A tutor who can clearly explain what your child has learned this month, and what comes next, is managing the course with real structure rather than improvising lesson to lesson.",
        ],
      },
      {
        heading: "Putting It All Together",
        paragraphs: [
          "The right Quran tutor combines verified qualifications, an age-appropriate teaching style, clear communication, and a schedule that actually works for your family. Rather than choosing based on price alone, use a free trial class to evaluate these factors directly before enrolling.",
          "At Quran Tutoring, every new student starts with a free trial class with one of our certified male or female tutors, so you can evaluate fit risk-free before choosing a monthly plan.",
        ],
      },
    ],
  },
];
