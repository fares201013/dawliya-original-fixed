export type Category = "fruits" | "vegetables" | "groceries" | "frozen";

export interface Product {
  id: string;
  category: Category;
  name: { fr: string; en: string; ar: string };
  desc: { fr: string; en: string; ar: string };
  moq: string;
  packaging: { fr: string; en: string; ar: string };
  origin: string;
  image: "fruits" | "vegetables" | "groceries" | "frozen";
}

export const PRODUCTS: Product[] = [
  {
    id: "mango-keitt",
    category: "fruits",
    name: { fr: "Mangue Keitt", en: "Keitt Mango", ar: "مانجو كيت" },
    desc: { fr: "Variété tardive, chair ferme, sucrée — saison juin-septembre.", en: "Late variety, firm flesh, sweet — June–September.", ar: "صنف متأخر، لب متماسك، حلو المذاق." },
    moq: "5 ton", packaging: { fr: "Carton 4 kg", en: "4 kg carton", ar: "كرتون 4 كجم" }, origin: "EG", image: "fruits"
  },
  {
    id: "orange-valencia",
    category: "fruits",
    name: { fr: "Orange Valencia", en: "Valencia Orange", ar: "برتقال فالنسيا" },
    desc: { fr: "Calibre 56-88, jus généreux, longue conservation.", en: "Size 56-88, juicy, long shelf life.", ar: "حجم 56-88، عصير وفير." },
    moq: "20 ton", packaging: { fr: "Carton 15 kg", en: "15 kg carton", ar: "كرتون 15 كجم" }, origin: "EG", image: "fruits"
  },
  {
    id: "pomegranate",
    category: "fruits",
    name: { fr: "Grenade Wonderful", en: "Wonderful Pomegranate", ar: "رمان وندرفول" },
    desc: { fr: "Calibre 250-400 g, grains rouges intenses.", en: "Size 250-400 g, deep red arils.", ar: "حجم 250-400 جرام." },
    moq: "5 ton", packaging: { fr: "Carton 4,5 kg", en: "4.5 kg carton", ar: "كرتون 4.5 كجم" }, origin: "EG", image: "fruits"
  },
  {
    id: "dates-medjool",
    category: "fruits",
    name: { fr: "Dattes Medjool", en: "Medjool Dates", ar: "تمر مجدول" },
    desc: { fr: "Premium, jumbo, vide ou avec noyau.", en: "Premium jumbo, pitted or with pit.", ar: "ممتاز، كبير الحجم." },
    moq: "1 ton", packaging: { fr: "Carton 5 kg", en: "5 kg carton", ar: "كرتون 5 كجم" }, origin: "EG", image: "fruits"
  },
  {
    id: "tomato-roma",
    category: "vegetables",
    name: { fr: "Tomate Roma", en: "Roma Tomato", ar: "طماطم روما" },
    desc: { fr: "Allongée, ferme, idéale transformation et HORECA.", en: "Plum-shape, firm, ideal for HORECA.", ar: "مستطيلة، متماسكة." },
    moq: "20 ton", packaging: { fr: "Carton 6 kg", en: "6 kg carton", ar: "كرتون 6 كجم" }, origin: "EG", image: "vegetables"
  },
  {
    id: "potato-spunta",
    category: "vegetables",
    name: { fr: "Pomme de terre Spunta", en: "Spunta Potato", ar: "بطاطس سبونتا" },
    desc: { fr: "Calibre 75+, peau jaune, polyvalente.", en: "Size 75+, yellow skin, all-purpose.", ar: "حجم 75+، قشرة صفراء." },
    moq: "25 ton", packaging: { fr: "Sac 25 kg", en: "25 kg bag", ar: "كيس 25 كجم" }, origin: "EG", image: "vegetables"
  },
  {
    id: "onion-yellow",
    category: "vegetables",
    name: { fr: "Oignon jaune", en: "Yellow Onion", ar: "بصل أصفر" },
    desc: { fr: "Calibre 60-80, sec, longue conservation.", en: "Size 60-80, dry, long shelf life.", ar: "حجم 60-80، جاف." },
    moq: "25 ton", packaging: { fr: "Sac 25 kg", en: "25 kg bag", ar: "كيس 25 كجم" }, origin: "EG", image: "vegetables"
  },
  {
    id: "garlic-white",
    category: "vegetables",
    name: { fr: "Ail blanc", en: "White Garlic", ar: "ثوم أبيض" },
    desc: { fr: "Calibre 5,5+ cm, têtes pleines.", en: "Size 5.5+ cm, full heads.", ar: "حجم 5.5+ سم." },
    moq: "10 ton", packaging: { fr: "Carton 10 kg", en: "10 kg carton", ar: "كرتون 10 كجم" }, origin: "EG", image: "vegetables"
  },
  {
    id: "tomato-paste",
    category: "groceries",
    name: { fr: "Concentré de tomate 28-30%", en: "Tomato Paste 28-30%", ar: "صلصة طماطم 28-30٪" },
    desc: { fr: "Boîte métal, marque distributeur disponible.", en: "Tin can, private label available.", ar: "علبة معدنية، علامة خاصة متاحة." },
    moq: "1 conteneur", packaging: { fr: "Boîte 800 g / 4,5 kg", en: "Tin 800 g / 4.5 kg", ar: "علبة 800 جم / 4.5 كجم" }, origin: "EG", image: "groceries"
  },
  {
    id: "olive-oil",
    category: "groceries",
    name: { fr: "Huile d'olive extra vierge", en: "Extra Virgin Olive Oil", ar: "زيت زيتون بكر ممتاز" },
    desc: { fr: "Bouteille verre 500 ml / 1 L, première pression à froid.", en: "Glass 500 ml / 1 L, first cold-press.", ar: "زجاجة 500 مل / 1 لتر." },
    moq: "5 000 unités", packaging: { fr: "Carton 12 bouteilles", en: "12-bottle carton", ar: "كرتون 12 زجاجة" }, origin: "EG", image: "groceries"
  },
  {
    id: "lentils-red",
    category: "groceries",
    name: { fr: "Lentilles rouges", en: "Red Lentils", ar: "عدس أحمر" },
    desc: { fr: "Triées, calibrées, ensachage personnalisable.", en: "Sorted, sized, custom packing.", ar: "مفرزة، تعبئة حسب الطلب." },
    moq: "20 ton", packaging: { fr: "Sac 25 / 50 kg", en: "25 / 50 kg bag", ar: "كيس 25 / 50 كجم" }, origin: "EG", image: "groceries"
  },
  {
    id: "iqf-okra",
    category: "frozen",
    name: { fr: "Gombo IQF", en: "IQF Okra", ar: "بامية IQF" },
    desc: { fr: "Surgélation individuelle, calibres baby/whole.", en: "Individually frozen, baby/whole sizes.", ar: "تجميد فردي." },
    moq: "20 ton", packaging: { fr: "Carton 10 kg", en: "10 kg carton", ar: "كرتون 10 كجم" }, origin: "EG", image: "frozen"
  },
  {
    id: "iqf-strawberry",
    category: "frozen",
    name: { fr: "Fraises IQF", en: "IQF Strawberries", ar: "فراولة IQF" },
    desc: { fr: "Variété Festival, équeutées, classe A.", en: "Festival variety, hulled, grade A.", ar: "صنف فستيفال، منزوعة الأعناق." },
    moq: "10 ton", packaging: { fr: "Carton 10 kg", en: "10 kg carton", ar: "كرتون 10 كجم" }, origin: "EG", image: "frozen"
  },
  {
    id: "iqf-mixed-veg",
    category: "frozen",
    name: { fr: "Mélange légumes IQF", en: "IQF Mixed Vegetables", ar: "خضروات مشكلة IQF" },
    desc: { fr: "Petits pois, carottes, haricots, maïs.", en: "Peas, carrots, beans, corn.", ar: "بازلاء، جزر، فاصوليا، ذرة." },
    moq: "20 ton", packaging: { fr: "Carton 10 kg", en: "10 kg carton", ar: "كرتون 10 كجم" }, origin: "EG", image: "frozen"
  }
];
