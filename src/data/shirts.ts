export type ShirtClassification =
  | "Fan Version"
  | "Player Issue"
  | "Match Issue"
  | "Match Worn"
  | "Signed"
  | "Retro"
  | "Other";

export type ShirtStatus = "In Collection" | "Seeking Upgrade" | "Open to Trade" | "Not for Sale";

export type ShirtImageSide = "front" | "back" | "detail" | "label" | "other";

export type ShirtImage = {
  src: string;
  label: string;
  side: ShirtImageSide;
};

export type Shirt = {
  id: string;
  collection: string;
  team: string;
  season: string;
  title: string;
  playerName?: string;
  shirtNumber?: string;
  manufacturer?: string;
  size?: string;
  condition?: number;
  classification: ShirtClassification;
  status: ShirtStatus;
  description?: string;
  personalStory?: string;
  thanks?: string;
  provenance?: string;
  images: ShirtImage[];
  featured?: boolean;
};

export type WantedPriority = "Low" | "Medium" | "High";

export type WantedShirt = {
  id: string;
  title: string;
  season?: string;
  description?: string;
  exampleImage?: string;
  priority: WantedPriority;
  notes?: string;
};

export const statusLabels: Record<ShirtStatus, string> = {
  "In Collection": "באוסף",
  "Seeking Upgrade": "מעוניין לשדרג",
  "Open to Trade": "פתוח להחלפה",
  "Not for Sale": "לא למכירה"
};

export const priorityLabels: Record<WantedPriority, string> = {
  Low: "נמוכה",
  Medium: "בינונית",
  High: "גבוהה"
};

export const priorityColors: Record<WantedPriority, string> = {
  Low: "#888888",
  Medium: "#E2951E",
  High: "#E21E26"
};

export function getShirtImage(shirt: Shirt, side: ShirtImageSide) {
  return shirt.images.find((image) => image.side === side);
}

export function getPrimaryShirtImage(shirt: Shirt) {
  return getShirtImage(shirt, "front") ?? shirt.images[0];
}

export function getBackShirtImage(shirt: Shirt) {
  return getShirtImage(shirt, "back");
}

export const shirts: Shirt[] = [
  {
    id: "hadera-2015-16-home",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2015/16",
    title: "חולצת בית",
    playerName: "אבירן תורג'מן",
    shirtNumber: "9",
    manufacturer: "Lotto",
    size: "M",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "חולצת הבית הותיקה ביותר באוסף, מהעונות היפות באצטדיון בית אליעזר",
    images: [{ src: "/shirts/hadera-2015-16-home-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2015-16-home-back.jpg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2015-16-third",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2015/16",
    title: "חולצה שלישית",
    playerName: "מנשה זלקה",
    shirtNumber: "19",
    manufacturer: "Lotto",
    size: "M",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "חולצה יפיפיה ומרגשת של הקפטן האגדי מנשה זלקה, מהתקופות של משחקי שישי צהריים",
    images: [{ src: "/shirts/hadera-2015-16-third-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2015-16-third-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2016-17-home",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2016/17",
    title: "חולצת בית",
    playerName: "",
    shirtNumber: "77",
    manufacturer: "Lotto",
    size: "M",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "חולצת בית מעונת העלייה לליגת הלאומית - חולצת פסים מדהימה שנותנת הרבה כבוד לצבעים של המועדון, מעונה שהביאה הרבה כבוד",
    images: [{ src: "/shirts/hadera-2016-17-home-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2016-17-home-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2016-17-special",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2016/17",
    title: "חולצת משחק העלייה",
    playerName: "",
    shirtNumber: "16",
    manufacturer: "Sportball",
    size: "M",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "חולצה שנוצרה במיוחד עבור משחק העלייה לליגת הלאומית. החולצה הייתה בשימוש במשחק אחד בלבד - משחק העלייה לליגה הלאומית נגד הפועל מגדל העמק ב 28/04/2017. משחק מרגש וחולצה מרגשת עוד יותר",
    images: [{ src: "/shirts/hadera-2016-17-special-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2016-17-special-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2017-18-home",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2017/18",
    title: "חולצת בית",
    playerName: "סלים עמאש",
    shirtNumber: "18",
    manufacturer: "Lotto",
    size: "M",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "חולצת הבית מהעונה הראשונה בלאומית - חולצה מרגשת שהייתה דגל לעלייה מהירה לליגת העל, ואף שימשה את הקבוצה במספר משחקים בעונתה הראשונה בליגת העל",
    images: [{ src: "/shirts/hadera-2017-18-home-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2017-18-home-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2017-18-away",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2017/18",
    title: "חולצת חוץ",
    playerName: "וויאם עמאשה",
    shirtNumber: "41",
    manufacturer: "Lotto",
    size: "M",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "חולצת החוץ מהעונה הראשונה בלאומית - חולצה מרגשת שהייתה דגל לעלייה מהירה לליגת העל, ואף שימשה את הקבוצה במספר משחקים בעונתה הראשונה בליגת העל",
    images: [{ src: "/shirts/hadera-2017-18-away-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2017-18-away-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2018-19-home",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2018/19",
    title: "חולצת בית",
    playerName: "מוחמד אבו פאני",
    shirtNumber: "20",
    manufacturer: "Lotto",
    size: "S",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "חולצת הבית מהעונה הראשונה בליגת העל, מלווה במחווה המרגשת שעשה המועדון לשחקן העבר האגדי שולם שוורץ ז''ל, אשר זכרו מונצח על קדמת החולצה במקום הספונסר הראשי. החולצה הזו מרגשת במיוחד - שייכת לאבו פאני, שחקן ענק שלימים עבר לשחק מעבר לים ומצא את עצמו דרך קבע במדי הנבחרת. מזכרת מרגשת מאוד מעונה היסטורית",
    images: [{ src: "/shirts/hadera-2018-19-home-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2018-19-home-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2018-19-away",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2018/19",
    title: "חולצת חוץ",
    playerName: "מנשה זלקה",
    shirtNumber: "15",
    manufacturer: "Lotto",
    size: "M",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "חולצת החוץ מהעונה הראשונה בליגת העל, אמנם שחורה ואפורה, ללא האדום, אך חדרתית ביותר - כי כשאתה משחק עם מול-החוף וילג' על הכתפיים, מרלו בוטיק לאירועים על החזה, וקוראים לך מנשה זלקה - אתה חדרה.",
    images: [{ src: "/shirts/hadera-2018-19-away-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2018-19-away-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2019-20-home",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2019/20",
    title: "חולצת בית",
    playerName: "יגיל אוחנה",
    shirtNumber: "18",
    manufacturer: "Lotto",
    size: "M",
    classification: "Match Issue",
    status: "In Collection",
    personalStory:
      "אחת החולצות היפות בהיסטוריה של המועדון. חולצת חצי-חצי חדה ויפה, שהיה קשה מאוד למצוא",
    images: [{ src: "/shirts/hadera-2019-20-home-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2019-20-home-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2019-20-away",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2019/20",
    title: "חולצת חוץ",
    playerName: "לוסיו מרניאו",
    shirtNumber: "99",
    manufacturer: "Lotto",
    size: "L",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "חולצה עם הדפס החצי-חצי שליווה אותנו באותה עונה. החולצה הזאת שייכת ללוסיו, חלוץ ברזילאי חזק ששיחק גם בהפועל באר שבע",
    images: [{ src: "/shirts/hadera-2019-20-away-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2019-20-away-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2019-20-third",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2019/20",
    title: "חולצת שלישית",
    playerName: "ג'וניור צ'וקוואמקה",
    shirtNumber: "11",
    manufacturer: "Lotto",
    size: "M",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "חולצת חצי-חצי נוספת מעונה בליגת העל. הסיפור הכי מעניין איתה הוא השחקן שלבש אותה - ג'וניור צ'וקוואמקה אוגדי אוזווקו - חלוץ אנגלי עם שם מחייב שהגיע כהבטחה גדולה מהליגות הנמוכות באנגליה, והוכיח שלליגות נמוכות הוא שייך, כאשר לא השכיל לכבוש ב-5 משחקים בלבד במדי הקבוצה. ",
    images: [{ src: "/shirts/hadera-2019-20-third-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2019-20-third-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2020-21-home",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2020/21",
    title: "חולצת בית",
    playerName: "טל כחילה",
    shirtNumber: "66",
    manufacturer: "Lotto",
    size: "L",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "חולצה יפיפיה מתקופה בה חדרה היתה קבוצה לגיטימית בליגת העל. שיחק איתה טל כחילה, בלם ששיחק רוב הקריירה בבית''ר, ואף הבקיע בעונתו היחידה בחדרה, לפני שהלך לנסות את מזלו בליגות הנמוכות",
    images: [{ src: "/shirts/hadera-2020-21-home-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2020-21-home-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2020-21-third",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2020/21",
    title: "חולצת שלישית",
    playerName: "מקסים פלקושצ'נקו",
    shirtNumber: "77",
    manufacturer: "Lotto",
    size: "M",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "חולצה שלישית שחורה ופשוטה - עם הדפס שנותן וייב של טטריס או משחק מחשב ישן כלשהו. אחלה חולצה, ואחלה מקסים פלקושצ'נקו",
    images: [{ src: "/shirts/hadera-2020-21-third-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2020-21-third-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2023-24-home",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2023/24",
    title: "חולצת בית",
    playerName: "טוני גומז",
    shirtNumber: "7",
    manufacturer: "Umbro",
    size: "M",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "אמנם חדרה היא עיר של שש-בש בעיניי, אבל כאן מוצגת חולצת משבצות מטורפת ביופיה, שהייתה למדי הבית של הקבוצה באותה עונה בליגת העל. אחרי שעבר בקבוצות עם שמות כמו חרס אל-חודוד וטלאאע אל-ג'ריש, גם טוני גומז ידע שעל חולצה כזאת אי אפשר לוותר. גול אחד בעונה אחת, תודה שבאת טוני.",
    thanks: "תודה מיוחדת לדרור בונדר",
    images: [{ src: "/shirts/hadera-2023-24-home-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2023-24-home-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2023-24-away",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2023/24",
    title: "חולצת חוץ",
    playerName: "איציק שולמייסטר",
    shirtNumber: "17",
    manufacturer: "Umbro",
    size: "L",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "עיצוב המשבצות שהיה חזק באותה עונה, הגיע גם לחולצת החוץ. לבש אותה בגאון איציק שולמייסטר, שחקן שעבר לא מעט קבוצות בקריירה, אך את שערו הראשון בליגת העל כבש במדי הפועל חדרה. ככה זה - החולצה של חדרה מוציאה ממך משהו אחר.",
    thanks: "תודה מיוחדת לדרור בונדר",
    images: [{ src: "/shirts/hadera-2023-24-away-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2023-24-away-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2023-24-fourth",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2023/24",
    title: "חולצת רביעית",
    playerName: "מנשה זלקה",
    shirtNumber: "15",
    manufacturer: "Umbro",
    size: "M",
    classification: "Player Issue",
    status: "In Collection",
    personalStory:
      "חולצה מרגשת שלא ראתה אור במשחק רשמי באותה העונה, אך הוצאה לכבוד הקפטן שלנו - מנשה זלקה, עם דגל ישראל ו'יחד ננצח' על הגב, כאות הוקרה על שירות מילואים קרבי במקביל להיותו קפטן של קבוצה בליגת העל",
    images: [{ src: "/shirts/hadera-2023-24-fourth-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2023-24-fourth-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2023-24-gk-away",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2023/24",
    title: "חולצת שוער",
    playerName: "אוהד לויטה",
    shirtNumber: "21",
    manufacturer: "Umbro",
    size: "L",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "חולצת שוער ורודה איתה שיחק אוהד לויטה, שהגיע לחדרה אחרי מסע בקבוצות הגדולות בארץ וסיבוב בחו''ל.",
    thanks: "תודה מיוחדת לדרור בונדר",
    images: [{ src: "/shirts/hadera-2023-24-gk-away-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2023-24-gk-away-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2024-25-home",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2024/25",
    title: "חולצת בית",
    playerName: "תמיר עדי",
    shirtNumber: "23",
    manufacturer: "Umbro",
    size: "L",
    classification: "Match Issue",
    status: "In Collection",
    personalStory:
      "החולצה הזו מסמלת המון - היא חולצת הבית בעונה האחרונה של חדרה בליגת העל, לאחר 7 שנים מדהימות של שיכרון חושים. החולצה הרבה יותר יפה מאיך שהקבוצה שיחקה באותה עונה, שהזכירה לנו שלכל דבר טוב יש גם סוף.",
    thanks: "תודה מיוחדת לדרור בונדר",
    images: [{ src: "/shirts/hadera-2024-25-home-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2024-25-home-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2025-26-home",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2025/26",
    title: "חולצת בית",
    playerName: "ילי שאבו",
    shirtNumber: "11",
    manufacturer: "Umbro",
    size: "L",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "חולצה אדומה עם דוגמא אדירה של פסיפס, מעונה פחות אומנותית בלשון המעטה. חולצה זו שימשה את הקבוצה במשחקי הבית של עונת לאומית ראשונה לאחר 7 שנות ליגת על, שבסופה המר זכינו לומר שוב שלום לליגה א'!",
    thanks: "תודה מיוחדת לדרור בונדר",
    images: [{ src: "/shirts/hadera-2025-26-home-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2025-26-home-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2025-26-away",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2025/26",
    title: "חולצת חוץ",
    playerName: "גיתי סופיר",
    shirtNumber: "5",
    manufacturer: "Umbro",
    size: "M",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "חולצת החוץ מעונת הלאומית, שהיא גם עונת הירידה לליגה א'. החולצה משמרת את דפוסי הפסיפס מחולצת הבית.",
    thanks: "תודה מיוחדת לדרור בונדר",
    images: [{ src: "/shirts/hadera-2025-26-away-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2025-26-away-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2025-26-third",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2025/26",
    title: "חולצה שלישית",
    playerName: "גיתי סופיר",
    shirtNumber: "5",
    manufacturer: "Umbro",
    size: "M",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "חולצה שלישית שחורה מעונה שחורה. נלבשה ע''י גיתי סופיר, קשר התקפי שהגיע אחרי עונה חווייתית בליגה האזרבייג'נית.",
    thanks: "תודה מיוחדת לדרור בונדר",
    images: [{ src: "/shirts/hadera-2025-26-third-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2025-26-third-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2025-26-gk-home",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2025/26",
    title: "חולצת שוער",
    playerName: "רובי לבקוביץ'",
    shirtNumber: "32",
    manufacturer: "Umbro",
    size: "XXL",
    classification: "Match Issue",
    status: "In Collection",
    personalStory:
      "חולצת שוער ירוקה השייכת לרובי לבקוביץ' בקדנציה השנייה בהפועל חדרה, הקבוצה בה שיחק את מספר המשחקים הגדול ביותר בקריירה.",
    thanks: "תודה מיוחדת לדרור בונדר",
    images: [{ src: "/shirts/hadera-2025-26-gk-home-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2025-26-gk-home-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2025-26-gk-away",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2025/26",
    title: "חולצת שוער",
    playerName: "אופק אנטמן",
    shirtNumber: "13",
    manufacturer: "Umbro",
    size: "L",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "חולצת שוער צהובה מעונת הלאומית. משוייכת לאופק אנטמן, שעזב באמצע העונה להפועל עכו",
    thanks: "תודה מיוחדת לדרור בונדר",
    images: [{ src: "/shirts/hadera-2025-26-gk-away-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2025-26-gk-away-back.jpeg", label: "גב", side: "back" }],
    featured: true
  },
  {
    id: "hadera-2025-26-gk-third",
    collection: "hapoel-hadera",
    team: "הפועל חדרה",
    season: "2025/26",
    title: "חולצת שוער",
    playerName: "אופק אנטמן",
    shirtNumber: "13",
    manufacturer: "Umbro",
    size: "L",
    classification: "Match Worn",
    status: "In Collection",
    personalStory:
      "חולצת שוער כחולה מעונת הלאומית. משוייכת לאופק אנטמן, שעזב באמצע העונה להפועל עכו",
    thanks: "תודה מיוחדת לדרור בונדר",
    images: [{ src: "/shirts/hadera-2025-26-gk-third-front.jpeg", label: "חזית", side: "front" }, { src: "/shirts/hadera-2025-26-gk-third-back.jpeg", label: "גב", side: "back" }],
    featured: true
  }
];

export const wantedShirts: WantedShirt[] = [
  {
    id: "wanted-recent-home-away",
    title: "חולצות בית/חוץ מהשנים האחרונות",
    season: "2015 - עד היום",
    description: "חולצות בית, חוץ או שלישית מהשנים האחרונות בליגת העל והליגה הלאומית.",
    exampleImage: "/wanted-card-1.jpg",
    priority: "Medium"
  },
  {
    id: "wanted-lower-leagues",
    title: "חולצות מהתקופות בליגות הנמוכות",
    season: "שנות ה2000",
    description: "כל חולצה מהתקופה בליגות הנמוכות, כולל חולצות מהתקופה של עירוני \"ערן\" חדרה.",
    exampleImage: "/wanted-card-2-clean.png",
    priority: "Medium"
  },
  {
    id: "wanted-old-rare",
    title: "חולצות ישנות ונדירות",
    season: "שנות ה90 דרומה",
    description: "חולצות משנים ישנות מאוד, לפני שנות ה2000, בכל מצב - חולצה כזו שווה זהב.",
    exampleImage: "/wanted-card-3-vintage.jpg",
    priority: "Medium"
  }
];

export const haderaShirts = shirts.filter((shirt) => shirt.collection === "hapoel-hadera");
