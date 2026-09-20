export interface UpcomingDrama {
  id: string;
  title: string;
  category: "Korean" | "Chinese" | "Turkish";
  country: string;
  expectedRelease: string;
  platform: string;
  synopsis: string;
  about: string;
  cast: string[];
  poster?: string;
  trailerUrl?: string;
}

export const upcomingDramas: UpcomingDrama[] = [
  {
    id: "made-in-korea-season-2",
    trailerUrl: "https://youtu.be/3X6kxBnz3gA?si=7sK_7-8i2MYkhfEx",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/91/Made_in_Korea_%28TV_series%29_title_card.jpg",
    title: "Made in Korea Season 2",
    category: "Korean",
    country: "South Korea",
    expectedRelease: "Late 2026",
    platform: "Disney+ (JioHotstar in India)",
    synopsis:
      "Hyun Bin returns for a second season, continuing the story of a man driven by ambition for wealth and power and the prosecutor determined to stop him.",
    about:
      "The first season of Made in Korea followed Baek Ki-tae (Hyun Bin), a KCIA section chief in 1970s South Korea who secretly built a smuggling operation to fund his rise to power, while prosecutor Jang Geon-young (Jung Woo-sung) pursued him with unrelenting resolve. Directed by Woo Min-ho, the acclaimed political crime thriller premiered on Disney+ in December 2025 and was renewed for a second season even before season one finished its run, promising to continue the high-stakes collision between ambition and obsession.",
    cast: ["Hyun Bin", "Jung Woo-sung", "Woo Do-hwan"],
  },
  {
    id: "tantara",
    poster: "https://upload.wikimedia.org/wikipedia/commons/5/53/Song_Hye_Kyo_2025_%EC%86%A1%ED%98%9C%EA%B5%90_04.jpg",
    title: "Tantara",
    category: "Korean",
    country: "South Korea",
    expectedRelease: "Q4 2026",
    platform: "Netflix",
    synopsis:
      "Set in the Korean War era of the 1960s, this period drama follows a group of entertainers making their name in the industry. Stars Song Hye-kyo, Gong Yoo, Lee Ha-nee, Kim Seol-hyun, and Cha Seung-won.",
    about:
      "Tantara brings together several of Korean television's biggest names for a sweeping period drama set against the backdrop of the Korean War era of the 1960s. It follows a group of performers building their careers in the entertainment industry amid the chaos and uncertainty of the time — a story about ambition, survival, and the power of performance in wartime. The Netflix original is one of the most star-studded Korean drama casts announced for 2026.",
    cast: ["Song Hye-kyo", "Gong Yoo", "Lee Ha-nee", "Kim Seol-hyun", "Cha Seung-won"],
  },
  {
    id: "can-this-love-be-translated",
    trailerUrl: "https://youtu.be/tNZG1aLBATY?si=D3IPYgtD865qaVCb",
    poster: "https://upload.wikimedia.org/wikipedia/en/1/1d/Can_This_Love_Be_Translated%3F_Poster.png",
    title: "Can This Love Be Translated?",
    category: "Korean",
    country: "South Korea",
    expectedRelease: "2026",
    platform: "Netflix",
    synopsis:
      "Written by the Hong sisters and starring Kim Seon-ho, this romance follows a celebrity and her interpreter as they travel the world filming a TV show, with feelings developing along the way.",
    about:
      "From the pens of the Hong sisters, known for hit romantic comedies, this globe-trotting series follows a famous actress and the interpreter assigned to accompany her while filming a television show abroad. As they travel together and language barriers create both friction and unexpected closeness, an initially professional relationship slowly turns into something more. Kim Seon-ho stars in this Netflix original.",
    cast: ["Kim Seon-ho"],
  },
  {
    id: "the-remarried-empress",
    poster: "https://upload.wikimedia.org/wikipedia/en/0/00/The_Remarried_Empress_poster.jpg",
    title: "The Remarried Empress",
    category: "Korean",
    country: "South Korea",
    expectedRelease: "2026",
    platform: "Disney+",
    synopsis:
      "An adaptation of the hit web novel, starring Shin Min-a as Empress Navier, who is forced to reclaim her life and her place after her husband's betrayal.",
    about:
      "Based on the hugely popular web novel of the same name, The Remarried Empress reimagines the story of Empress Navier — a woman betrayed by the husband she long served faithfully, who chooses to walk away and reclaim her own life and power rather than remain in a marriage that no longer serves her. Shin Min-a stars as Navier in this Disney+ fantasy-romance adaptation, one of the most anticipated web novel adaptations among Korean drama fans.",
    cast: ["Shin Min-a"],
  },
  {
    id: "a-shop-for-killers-season-2",
    trailerUrl: "https://youtu.be/HsEtWqNooLU?si=eYv30s67clLwOnrw",
    poster: "https://upload.wikimedia.org/wikipedia/en/7/71/A_Shop_for_Killers_logo.png",
    title: "A Shop for Killers Season 2",
    category: "Korean",
    country: "South Korea",
    expectedRelease: "2026",
    platform: "Disney+",
    synopsis:
      "Kim Hye-jun and Lee Dong-wook reprise their roles as Jeong Ji-an and Jeong Jin-man, picking up right where the first season's cliffhanger left off.",
    about:
      "The first season of A Shop for Killers introduced Jeong Ji-an (Kim Hye-jun), an ordinary young woman who discovers that her late uncle secretly ran an online marketplace supplying weapons to assassins, and Jeong Jin-man (Lee Dong-wook), the uncle whose past comes back into her life in the most dangerous way. The Disney+ action-thriller became a sleeper hit for its stylish action and twisty plotting, and season two continues directly from the shocking events of the season one finale.",
    cast: ["Kim Hye-jun", "Lee Dong-wook"],
  },
];
