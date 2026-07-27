import { ServiceCategory, Review, FAQ, HealthTip, GalleryItem } from '../types';

export const BUSINESS_INFO = {
  name: "Chandni Medical",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  address: "72, Gaya, Bihar 823001",
  landmark: "Near GB Road, Behind Gaya Tower, Gaya, Bihar",
  phone: "+91 7321883398",
  whatsapp: "07321883398", // 10 digit or international formatted
  whatsappFormatted: "917321883398", // for WhatsApp direct API links
  email: "chandnimedicalgaya@gmail.com",
  workingHours: {
    weekdays: "08:00 AM - 10:00 PM",
    sunday: "09:00 AM - 08:00 PM",
    emergency: "24/7 (Emergency medicine delivery on-call)"
  },
  gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.5682855135503!2d85.00049281500411!3d24.793740984185257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2993fb107ecf5%3A0x6b9d628d098a58a7!2sGaya%2C%20Bihar%20823001!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin",
  gmapDirectionsUrl: "https://maps.google.com/?q=Chandni+Medical+72+Gaya+Bihar+823001",
  usp: [
    {
      title: "100% Genuine Medicines",
      description: "Directly sourced from authorized pharmaceutical distributors with strict batch verification."
    },
    {
      title: "Cold Chain Storage",
      description: "Specialized refrigeration units for critical items like insulins, vaccines, and biologics."
    },
    {
      title: "Local Gaya Home Delivery",
      description: "Fast home delivery across Gaya, including GB Road, Vishnupad area, AP Colony, and Delha."
    },
    {
      title: "Certified Pharmacists",
      description: "Qualified experts available on-site to assist with prescriptions and dosage instructions."
    },
    {
      title: "Attractive Discounts",
      description: "Flat discount on chronic care medications for diabetes, cardiac health, and hypertension."
    },
    {
      title: "Digital Prescription Archive",
      description: "Secure, free archiving of your recurring prescriptions for easy refills over WhatsApp."
    }
  ]
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "med-categories",
    title: "Prescription Medicines",
    description: "Wide inventory of chronic care and acute care prescription drugs. We maintain separate storage and inventory for all major therapeutic categories.",
    icon: "Pill",
    items: [
      "Anti-Diabetic Medications",
      "Cardiovascular & Anti-Hypertensives",
      "Neurology & Psychiatric Drugs",
      "Gastrointestinal & Acid Reflux Care",
      "Pulmonary & Asthma Inhalers",
      "Antibiotics & Anti-Infectives"
    ]
  },
  {
    id: "otc-products",
    title: "OTC & Daily Wellness",
    description: "No-prescription-required healthcare products, pain relievers, nutritional supplements, and seasonal healthcare essentials.",
    icon: "ShieldAlert",
    items: [
      "Analgesics & Pain Killers",
      "Cough, Cold & Flu Remedies",
      "Vitamins, Minerals & Co-enzymes",
      "Digestive Care & Antacids",
      "First Aid Antiseptics & Bandages",
      "Immunity Boosting Herbal Formulations"
    ]
  },
  {
    id: "health-devices",
    title: "Health Devices & Monitoring",
    description: "Premium medical equipment and monitoring instruments for regular checking of vital statistics at home.",
    icon: "Activity",
    items: [
      "Digital Blood Pressure Monitors",
      "Blood Glucose Meters & Test Strips",
      "Pulse Oximeters & Thermometers",
      "Nebulizers & Vaporizers",
      "Orthopedic Supports & Braces",
      "Adult Diapers & Underpads"
    ]
  },
  {
    id: "baby-care",
    title: "Baby & Mother Care",
    description: "Pediatrician-approved baby nutrition, diapers, sensitive skin-care formulations, and lactating mother supplements.",
    icon: "Baby",
    items: [
      "Infant Formula & Cereals",
      "Hypoallergenic Baby Lotions & Oils",
      "Premium Soft Diapers & Wipes",
      "Baby Bath Supplies & Powders",
      "Pregnancy Health Drinks & Proteins",
      "Nursing Accessories & Breast Pads"
    ]
  },
  {
    id: "personal-care",
    title: "Personal Care & Hygiene",
    description: "Premium personal grooming, dermatologist-recommended skin care, oral hygiene, and general sanitary products.",
    icon: "Sparkles",
    items: [
      "Dermatology Grade Face Washes & Creams",
      "Therapeutic Hair Care & Shampoos",
      "Antiseptic Soaps & Body Washes",
      "Intimate Hygiene & Sanitary Pads",
      "Oral Care Toothpastes & Mouthwashes",
      "Premium Sunscreens & Moisturizers"
    ]
  },
  {
    id: "surgical-supplies",
    title: "Surgical Supplies & Wound Care",
    description: "Hospital-grade sterile surgical items, dressing materials, syringes, and clinical consumables for home-care patients.",
    icon: "Scissors",
    items: [
      "Sterile Gauze Rolls & Swabs",
      "Adhesive Dressing Tapes & Bandages",
      "Disposable Syringes & IV Sets",
      "Medical Grade Gloves & Face Masks",
      "Underpads & Air Mattress Systems",
      "Wheelchairs, Walkers & Quad Canes"
    ]
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    name: "Rajesh Kumar",
    rating: 5,
    date: "July 2026",
    text: "Chandni Medical is the most reliable pharmacy in Gaya. I buy diabetes and BP medicines for my parents every month. They always have full stock, offer reasonable prices, and deliver directly to our house in AP Colony.",
    verified: true
  },
  {
    id: "rev-2",
    name: "Dr. Anjali Sen",
    rating: 5,
    date: "June 2026",
    text: "As a practicing physician, I always recommend Chandni Medical to my patients for critical life-saving drugs. Their cold storage chain for insulins and vaccines is strictly maintained, which is vital for drug efficacy. Highly professional staff.",
    verified: true
  },
  {
    id: "rev-3",
    name: "Amit Shrivastav",
    rating: 5,
    date: "May 2026",
    text: "Very convenient WhatsApp ordering service! I just took a picture of my prescription, uploaded it through their WhatsApp form, and received the entire bundle of medicines within 2 hours. Prompt and professional service in Gaya.",
    verified: true
  },
  {
    id: "rev-4",
    name: "Priyanjana Sinha",
    rating: 4,
    date: "April 2026",
    text: "Extremely helpful customer service. I was looking for a specific orthopedic knee brace which was out of stock everywhere in Gaya, but the pharmacist here sourced it for me within 24 hours. Reliable and honest.",
    verified: true
  }
];

export const FAQS_DATA: FAQ[] = [
  {
    id: "faq-1",
    question: "Do you require a doctor's prescription to dispense medicines?",
    answer: "A valid doctor's prescription is legally mandatory for all schedule H, H1, and X drugs (including antibiotics, strong pain relievers, psychiatric and critical care medications). However, standard Over-The-Counter (OTC) drugs, daily health supplements, personal care and baby products can be purchased without a prescription.",
    category: "policy"
  },
  {
    id: "faq-2",
    question: "How do I place an order using WhatsApp?",
    answer: "It is extremely simple! You can use our interactive WhatsApp Order Form on this website. Fill in your name, contact details, address, and upload a photo of your prescription. When you click submit, a pre-formatted WhatsApp message is generated. Send it to us, and our registered pharmacist will verify the prescription and dispatch your medicines.",
    category: "ordering"
  },
  {
    id: "faq-3",
    question: "Do you deliver medicines within Gaya? What are the charges?",
    answer: "Yes, we provide home delivery of medicines across major locations in Gaya (including GB Road, AP Colony, Delha, Chand Chaura, and Gaya Junction area). Delivery is completely FREE for monthly chronic-care medicine bundles or any order value exceeding ₹500. A minimal delivery fee of ₹30 is applicable for small distance-based single orders.",
    category: "delivery"
  },
  {
    id: "faq-4",
    question: "Are the medicines sold at Chandni Medical genuine and safe?",
    answer: "Absolutely! Authenticity is our number one USP. Every strip of medicine we receive is directly sourced from authorized pharmaceutical manufacturers or standard carrying & forwarding (C&F) distributors. We strictly monitor expiry dates and maintain critical temperature environments (2°C - 8°C) for vaccines, insulin and biologics.",
    category: "safety"
  },
  {
    id: "faq-5",
    question: "What should I do if a specific medicine is out of stock?",
    answer: "You can check our real-time 'Medicine Stock Checker' on our services page. If a medicine is marked as 'Out of Stock' or is a rare drug, you can click the quick WhatsApp Inquiry button. We have daily tie-ups with regional pharma distributors and can procure almost any rare medicine for you within 12 to 24 hours.",
    category: "policy"
  }
];

export const HEALTH_TIPS_DATA: HealthTip[] = [
  {
    id: "tip-1",
    title: "Understanding Insulin Storage: Cold Chain Basics",
    category: "Chronic Care",
    summary: "Improper storage can render insulin completely ineffective. Learn how to maintain insulin at home.",
    content: "Insulin is a delicate protein hormone that breaks down under extreme temperatures. Unopened insulin vials and pens must always be stored in a refrigerator at a temperature between 2°C and 8°C. Never freeze insulin; frozen insulin is permanently damaged and must be discarded. Once a pen or vial is currently in use, it can be kept at room temperature (below 30°C) for up to 28 days, away from direct sunlight and heat. If you are traveling through warm climates like Gaya's summers, always use an insulated cooling pouch to carry your medications safely.",
    date: "July 15, 2026",
    readTime: "3 min read"
  },
  {
    id: "tip-2",
    title: "The Danger of Self-Medicating with Antibiotics",
    category: "Safety",
    summary: "Taking leftover antibiotics or stopping early drives AMR (Antimicrobial Resistance). Here's why adherence matters.",
    content: "Antibiotics are powerful tools that kill bacterial pathogens. However, taking them without a certified doctor's prescription for viral ailments like common cold or flu does more harm than good. Also, many patients stop taking their prescribed course of antibiotics as soon as their symptoms subside. This is dangerous! It allows the strongest bacteria to survive, mutate, and develop resistance, making future infections far more difficult to treat. Always take the full course of antibiotics exactly as directed by your physician.",
    date: "June 28, 2026",
    readTime: "4 min read"
  },
  {
    id: "tip-3",
    title: "Simple Daily Tips to Manage High Blood Pressure",
    category: "Wellness",
    summary: "Along with your regular anti-hypertensive drugs, simple lifestyle shifts can significantly stabilize BP.",
    content: "Managing hypertension requires a combination of medication adherence and deliberate lifestyle adjustments. First, reduce sodium intake by limiting processed foods and table salt. Second, engage in at least 30 minutes of moderate aerobic exercise, like brisk walking, five days a week. Third, monitor your blood pressure regularly at home using a digital BP monitor (such as those from Omron, available at our store) and log the readings. This data is extremely helpful for your doctor during monthly check-ups to adjust your dosages.",
    date: "May 10, 2026",
    readTime: "3 min read"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Chandni Medical Storefront",
    category: "store",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800",
    description: "Our fully illuminated modern pharmacy counter located on Gaya, Bihar. Easy to access with dedicated parking area."
  },
  {
    id: "gal-2",
    title: "Orphan & Critical Care Drugs Shelf",
    category: "medicines",
    imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e55c06?auto=format&fit=crop&q=80&w=800",
    description: "Perfectly organized, dust-free medicine cabinets categorized alphabetically for fast dispensing."
  },
  {
    id: "gal-3",
    title: "Cold Chain Storage Unit",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    description: "Dedicated medical refrigerators holding temperature-sensitive insulins, vaccines, and eye drops."
  },
  {
    id: "gal-4",
    title: "Baby Care & Pediatric Products Section",
    category: "products",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&q=80&w=800",
    description: "Pediatricians-approved baby formula, nutrient supplements, sensitive baby creams, and diaper ranges."
  },
  {
    id: "gal-5",
    title: "Dermatological Care & OTC Counter",
    category: "products",
    imageUrl: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800",
    description: "Wide range of skin care, hair care, and daily wellness products from leading dermatologist-recommended brands."
  },
  {
    id: "gal-6",
    title: "Advanced Diagnostic Health Monitors",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=800",
    description: "Digital BP monitors, blood glucose meters, pulse oximeters, and nebulizers on active display."
  }
];

export const TIMELINE_DATA = [
  {
    year: "2015",
    title: "Our Humble Beginnings",
    description: "Chandni Medical opened its doors as a small neighborhood medical shop in Gaya with a single pharmacist, aiming to bring genuine medicines to local families."
  },
  {
    year: "2018",
    title: "Cold Chain & Specialty Drugs",
    description: "Expanded our facilities with high-tech storage units to securely store temperature-sensitive specialty oncology and critical care medications."
  },
  {
    year: "2021",
    title: "Home Delivery & WhatsApp Service",
    description: "Launched contactless home delivery across Gaya to serve patients during critical lockdowns, archiving prescriptions digitally for repeat users."
  },
  {
    year: "2024",
    title: "Modern Facility Upgrade",
    description: "Renovated into a fully temperature-controlled, computerized retail pharmacy counter with smart stocking systems for instant medicine searches."
  }
];
