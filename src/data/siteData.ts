export interface NavLink {
  label: string;
  path: string;
  pageId?: number;
}

export const navLinks: NavLink[] = [
  { label: "Bosh sahifa", path: "/" },
  { label: "Biz haqimizda", path: "/biz-haqimizda", pageId: 5 },
  { label: "Aloqa", path: "/aloqa", pageId: 8 },
];

export const siteContactInfo = {
  schoolName: "Navoiy shahar 1-sonli IMI",
  organization: "Prezident ta'lim muassasalari agentligi tizimidagi Navoiy shahar 1-son ixtisoslashtirilgan maktab-internati",
  address: "4965+Q34, Memorlar Ko'chasi, Navoi, O'zbekiston",
  email: "suxrobnavoiyinf@gmail.com",
  phone: "+998-79-224-02-11",
  telegram: "https://t.me/navoiy_shahar_IMI",
  workingHours: "Dushanba - Shanba: 08:00 - 18:00",
};

export const aboutPageData = {
  title: "Biz kimmiz?",
  goalTitle: "Bizing maqsadimiz",
  goalDescription: "O'zbekistonga kelajagi uchun o'z hissasini qo'shadigan va foydasi tegadiga yaxshi o'quvchi yoshlar yetkazib berish.",
  goalImage: "/images/photo_2020-11-18_17-42-09-2.jpg",
  methodTitle: "Biz bilan bochqacha",
  methodDescription: "Navoiy shahar 1-sonli IMI butun O'zbekistonda o'zining a'lo bilimli o'quvchilar yetishtirib berishi bilan nom qozongan. Bizning maktabimizda tajribali va fidoyi o'qituvchilar ilg'or metodlar bilan dars berishadi.",
  directionsTitle: "Yo'nalishlar",
  directionsDescription: "Hozirda maktabimizda quyidagi 2 turdagi yo'nalishlar mavjud:",
  directions: [
    { name: "Aniq fanlar", subjects: "Matematika, Fizika, Ingliz tili" },
    { name: "Tabiiy fanlar", subjects: "Kimyo, Biologiya, Ingliz tili" },
  ],
};
