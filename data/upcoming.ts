export interface UpcomingDrama {
  id: string;
  title: string;
  category: "Korean" | "Chinese" | "Turkish";
  country: string;
  expectedRelease: string;
  platform: string;
  synopsis: string;
}

export const upcomingDramas: UpcomingDrama[] = [
  {
    id: "made-in-korea-season-2",
    title: "Made in Korea Season 2",
    category: "Korean",
    country: "South Korea",
    expectedRelease: "Late 2026",
    platform: "JioHotstar",
    synopsis:
      "Hyun Bin returns for a second season, continuing the story of a man driven by ambition for wealth and power and the prosecutor determined to stop him.",
  },
  {
    id: "tantara",
    title: "Tantara",
    category: "Korean",
    country: "South Korea",
    expectedRelease: "Q4 2026",
    platform: "Netflix",
    synopsis:
      "Set in the Korean War era of the 1960s, this period drama follows a group of entertainers making their name in the industry. Stars Song Hye-kyo, Gong Yoo, Lee Ha-nee, Kim Seol-hyun, and Cha Seung-won.",
  },
  {
    id: "can-this-love-be-translated",
    title: "Can This Love Be Translated?",
    category: "Korean",
    country: "South Korea",
    expectedRelease: "2026",
    platform: "Netflix",
    synopsis:
      "Written by the Hong sisters and starring Kim Seon-ho, this romance follows a celebrity and her interpreter as they travel the world filming a TV show, with feelings developing along the way.",
  },
  {
    id: "the-remarried-empress",
    title: "The Remarried Empress",
    category: "Korean",
    country: "South Korea",
    expectedRelease: "2026",
    platform: "Disney+",
    synopsis:
      "An adaptation of the hit web novel, starring Shin Min-a as Empress Navier, who is forced to reclaim her life and her place after her husband's betrayal.",
  },
  {
    id: "a-shop-for-killers-season-2",
    title: "A Shop for Killers Season 2",
    category: "Korean",
    country: "South Korea",
    expectedRelease: "2026",
    platform: "Disney+",
    synopsis:
      "Kim Hye-jun and Lee Dong-wook reprise their roles as Jeong Ji-an and Jeong Jin-man, picking up right where the first season's cliffhanger left off.",
  },
];
