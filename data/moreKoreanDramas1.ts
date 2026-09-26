import type { Drama } from "@/types/drama";

// Jis drama ka poster abhi nahi mila, uske liye placeholder (baad me asli URL daalo)
const POSTER_PLACEHOLDER = "/posters/placeholder.jpg";

// Actor photos (Wikimedia Commons). Naam match hone par cast me apne aap lag jati hain.
const ACTOR_PHOTOS: Record<string, string> = {
  "Gong Yoo": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Gong_Yoo_in_2021_-_3.png",
  "Ji Chang-wook": "https://upload.wikimedia.org/wikipedia/commons/8/87/Ji_Chang-wook.jpg",
  "IU": "https://upload.wikimedia.org/wikipedia/commons/2/2f/IU_at_Blue_Dragon_Series_Awards_on_18072025_%2810%29.png",
  "Yeo Jin-goo": "https://upload.wikimedia.org/wikipedia/commons/4/45/Yeo_Jin-goo_in_May_2024.png",
  "Nam Joo-hyuk": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Nam_Joo-hyuk_in_July_2026.png",
  "Kim Seon-ho": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Kim_Seon-ho_Bottega_2026_A.jpg",
   "Kim Tae-ri": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Kim_Tae-ri_in_April_2026_-_02.jpg",
  "Nam Joo-hyuk": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Nam_Joo-hyuk_in_July_2026.png",
  "Song Joong-ki": "https://upload.wikimedia.org/wikipedia/commons/1/13/Song_Joong-ki_at_Style_Icon_Asia_2016.jpg",
  "Song Hye-kyo": "https://upload.wikimedia.org/wikipedia/commons/5/53/Song_Hye_Kyo_2025_%EC%86%A1%ED%98%9C%EA%B5%90_04.jpg",
  "Gong Yoo": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Gong_Yoo_in_2021_-_3.png",
  "Kim Go-eun": "https://upload.wikimedia.org/wikipedia/commons/f/fa/050826_Kim_Go-eun_at_the_2026_Baeksang_Arts_Awards.png",
  "Lee Dong-wook": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Lee_Dong-wook_at_the_2024_Toronto_International_Film_Festival_%28cropped%29.jpg",
  "Yoo In-na": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Yoo_In-na_for_Marie_Claire_Korea_X_Didier_Dubot_on_07032023_%282%29.png",
  "Hyeri": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Hyeri_in_July_2025.png",
  "Park Bo-gum": "https://upload.wikimedia.org/wikipedia/commons/8/86/Park_Bo-gum_%EB%B0%95%EB%B3%B4%EA%B2%80_%E6%9C%B4%E5%AF%B6%E5%8A%8D_for_Marie_Claire_Korea%2C_April_2025_4.png",
  "Ryu Jun-yeol": "https://upload.wikimedia.org/wikipedia/commons/7/77/20240319_Ryu_Jun-yeol_%EB%A5%98%EC%A4%80%EC%97%B4_03.jpg",
  "IU": "https://upload.wikimedia.org/wikipedia/commons/2/2f/IU_at_Blue_Dragon_Series_Awards_on_18072025_%2810%29.png",
  "Jo Jung-suk": "https://upload.wikimedia.org/wikipedia/commons/2/24/Jo_Jung-suk_in_June_2026.png",
  "Yoo Yeon-seok": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Yoo_Yeon-seok_-_Bean_Pole_catalogue_2015_Spring-Summer_02_%28cropped%29.jpg",
  "Go Youn-jung": "https://upload.wikimedia.org/wikipedia/commons/9/93/073126_Go_Younjung_at_the_5th_Blue_Dragon_Series_Awards_02.jpg",
  "Lee Jung-jae": "https://upload.wikimedia.org/wikipedia/commons/1/1e/240305_Lee_Jung-jae_%28cropped%29.jpg",
  "Lee Byung-hun": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Lee_Byung-hun_2025_Toronto_%28cropped%29.jpg",
  "Wi Ha-joon": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Wi_Ha-joon_in_October_2025.png",
  "Lee Je-hoon": "https://upload.wikimedia.org/wikipedia/commons/3/34/Lee_Je-hoon_in_November_2025.png",
  "Kim Hye-soo": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Kim_Hye-soo_in_March_2025.png",
  "Cho Seung-woo": "https://upload.wikimedia.org/wikipedia/commons/1/13/Cho_Seung-woo_in_July_2026.png",
  "Bae Doona": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Bae_Doona_at_Berlinale_2026.jpg",
  "Jeon Yeo-been": "https://upload.wikimedia.org/wikipedia/commons/7/73/Jeon_Yeo-been_in_November_2024.png",
  "Shin Min-a": "https://upload.wikimedia.org/wikipedia/commons/3/37/Shin_Min-a_in_September_2024.png",
  "Kim Seon-ho": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Kim_Seon-ho_Bottega_2026_A.jpg",
  "Yoona": "https://upload.wikimedia.org/wikipedia/commons/6/60/260508_YOONA_%40_62nd_BAEKSANG_AWARDS_with_GUCCI.jpg",
  "Yeo Jin-goo": "https://upload.wikimedia.org/wikipedia/commons/4/45/Yeo_Jin-goo_in_May_2024.png",
  "Moon Ga-young": "https://upload.wikimedia.org/wikipedia/commons/6/60/Moon_Ga-young_in_July_2026.png",
  "Cha Eun-woo": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Cha_Eun-woo%2C_March_31%2C_2025.png",
  "Hwang In-youp": "https://upload.wikimedia.org/wikipedia/commons/3/37/Hwang_In-youp_in_June_2026.png",
  "Lee Sung-kyung": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Lee_Sung-kyung_in_March_2025.png",
  "Ahn Hyo-seop": "https://upload.wikimedia.org/wikipedia/commons/8/83/20240514_Ahn_Hyo-seop_%EC%95%88%ED%9A%A8%EC%84%AD_06.jpg",
  "Kim Se-jeong": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Kim_Sejeong_in_June_2025.png",
  "Kim Yoo-jung": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Kim_You-jung_in_September_2026.png",
  "Kim Young-dae": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Kim-Young-dae_for_Marie_Claire_Korea_on_171222.jpg",
  "Ji Chang-wook": "https://upload.wikimedia.org/wikipedia/commons/8/87/Ji_Chang-wook.jpg",
  "Lee Kwang-soo": "https://upload.wikimedia.org/wikipedia/commons/3/33/Lee_Kwang-soo_2026.jpg",
  "Kim Nam-gil": "https://upload.wikimedia.org/wikipedia/commons/7/79/Kim_Nam-gil_at_Island_Press_Conference_2022.png",
  "Ji Sung": "https://upload.wikimedia.org/wikipedia/commons/7/7d/180212_%EC%A7%80%EC%84%B1.png",
  "Hwang Jung-eum": "https://upload.wikimedia.org/wikipedia/commons/4/40/Hwang_Jung-eum_in_March_2024.png",
  "Lee Jong-suk":"https://upload.wikimedia.org/wikipedia/commons/5/57/240725_Lee_Jong-suk.png",
  "Han Hyo-joo":"https://upload.wikimedia.org/wikipedia/commons/3/37/Han_Hyo-joo_in_July_2024.jpg",
  "Lee Joon gie":"https://upload.wikimedia.org/wikipedia/commons/7/78/2022_Again_My_Life_Lee_Joon-gi_%EC%9D%B4%EC%A4%80%EA%B8%B0_%281%29.jpg",
  "Kang Ha neul":"https://upload.wikimedia.org/wikipedia/commons/c/c7/Kang_Ha-neul_at_Midnight_Runners_VIP_premiere_in_August_2017.jpg",
  "Hyun Bin":"https://upload.wikimedia.org/wikipedia/commons/6/60/Hyun_Bin_at_the_2024_Toronto_International_Film_Festival_2_%28cropped%29.jpg",
  "Ha Ji-won":"https://upload.wikimedia.org/wikipedia/commons/7/76/Ha_Ji-won_in_September_2025.png", 
  "Bae Suzy":"https://upload.wikimedia.org/wikipedia/commons/4/40/Suzy_at_the_Longines_2026_new_product_presentation%2C_25_March_2026_04.png",
};

type Entry = Omit<Drama, "id" | "category" | "country" | "poster" | "featured"> & {
  poster?: string;
};

const korean = (e: Entry): Drama => ({
  ...e,
  id: e.slug,
  category: "Korean",
  country: "South Korea",
  poster: e.poster ?? POSTER_PLACEHOLDER,
  featured: false,
  cast: e.cast?.map((c) => ({ ...c, photo: c.photo ?? ACTOR_PHOTOS[c.name] })),
  // Mr. Sunshine jaisa episodes list: "Episode 1", "Episode 2", ...
  episodes:
    e.episodes ??
    (e.episodeCount
      ? Array.from({ length: e.episodeCount }, (_, i) => ({
          title: `Episode ${i + 1}`,
          summary: "",
        }))
      : undefined),
});

export const moreKoreanDramas1: Drama[] = [
  korean({
    slug: "whats-wrong-with-secretary-kim",
    title: "What's Wrong with Secretary Kim",
    poster: "https://upload.wikimedia.org/wikipedia/en/1/10/What%27s_Wrong_with_Secretary_Kim.jpg",
    year: 2018,
    rating: 8.4,
    description: "A perfect secretary announces she is quitting, which upsets her narcissistic boss.",
    story:
      "Vice chairman Lee Young-joon depends on his secretary Kim Mi-so for everything. When she suddenly says she wants to resign, he tries every way to keep her, and the two start seeing each other differently.",
    genre: ["Romance", "Comedy", "Office"],
    episodeCount: 16,
    cast: [
      { name: "Park Seo-joon", role: "Lee Young-joon", bio: "Popular actor known for Itaewon Class." },
      { name: "Park Min-young", role: "Kim Mi-so", bio: "Actress known for Healer and Her Private Life." },
      { name: "Lee Tae-hwan", role: "Lee Sung-yeon", bio: "Actor known for supporting roles in many dramas." },
    ],
    whyWatch: "Fun chemistry, workplace comedy and a very comforting romance.",
    trailerUrl: "https://youtu.be/EDGfWN36q5o?si=uIij9eo2riz4ptU3",
  }),
  korean({
    slug: "boys-over-flowers",
    title: "Boys Over Flowers",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/65/Boys_Over_Flowers_%28TV_series%29_poster.jpg",
    year: 2009,
    rating: 7.9,
    description: "A working-class girl clashes with four rich boys at an elite high school.",
    story:
      "Geum Jan-di attends Shinhwa High School through a scholarship and clashes with the F4, a group of wealthy heirs. Their fights slowly turn into a complicated love story with Gu Jun-pyo and Yoon Ji-hoo.",
    genre: ["Romance", "Comedy", "School"],
    episodeCount: 25,
    cast: [
      { name: "Koo Hye-sun", role: "Geum Jan-di", bio: "Actress, director and author known for Boys Over Flowers." },
      { name: "Lee Min-ho", role: "Gu Jun-pyo", bio: "Popular actor known for The Heirs and Pachinko." },
      { name: "Kim Hyun-joong", role: "Yoon Ji-hoo", bio: "Singer and actor, former member of SS501." },
    ],
    whyWatch: "A classic K-drama that defined a generation of romance fans.",
    trailerUrl: "https://youtu.be/iuqwMI6dpJA?si=hLDRptVyQLoar6u6",
  }),
  korean({
    slug: "coffee-prince",
    title: "Coffee Prince",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Coffee_Prince.jpg",
    year: 2007,
    rating: 8.4,
    description: "A tomboyish young woman pretends to be a man while working at a cafe.",
    story:
      "Go Eun-chan gets a job at a cafe, where the owner Choi Han-gyul mistakes her for a man. As they work together to save the shop, feelings begin to grow.",
    genre: ["Romance", "Comedy", "Drama"],
    episodeCount: 17,
    cast: [
      { name: "Yoon Eun-hye", role: "Go Eun-chan", bio: "Actress known for Coffee Prince and Goong." },
      { name: "Gong Yoo", role: "Choi Han-gyul", bio: "Popular actor known for Goblin and Train to Busan." },
      { name: "Chae Jung-an", role: "Han Yoo-joo", bio: "Actress known for Coffee Prince." },
    ],
    whyWatch: "A classic romantic comedy that still feels fresh and heartwarming.",
    trailerUrl: "https://youtu.be/eNtPix9PtQw?si=GhO8ZE5vOpTKSNM6",
  }),
  korean({
    slug: "healer",
    title: "Healer",
    poster: "https://upload.wikimedia.org/wikipedia/en/e/e3/Healer_TV_series-poster.jpg",
    year: 2014,
    rating: 8.5,
    description: "A night courier who takes any job gets pulled into a story about a family's secret.",
    story:
      "Seo Jung-hoo, known as Healer, is a skilled night courier. When he takes a job involving reporter Chae Young-shin, he uncovers a secret linking his own past with hers.",
    genre: ["Action", "Romance", "Mystery"],
    episodeCount: 20,
    cast: [
      { name: "Ji Chang-wook", role: "Seo Jung-hoo (Healer)", bio: "Actor known for The K2 and Backstreet Rookie." },
      { name: "Park Min-young", role: "Chae Young-shin", bio: "Actress known for What's Wrong with Secretary Kim." },
      { name: "Yoo Ji-tae", role: "Kim Moon-ho", bio: "Veteran actor known for Oldboy and many dramas." },
    ],
    whyWatch: "A stylish mix of action, mystery and romance with a memorable lead.",
    trailerUrl: "https://youtu.be/AnjmzZFssmg?si=OKaJM_zaC-4nO-wi",
  }),
  korean({
    slug: "our-beloved-summer",
    title: "Our Beloved Summer",
    poster: "https://upload.wikimedia.org/wikipedia/en/2/29/Our_Beloved_Summer.jpg",
    year: 2021,
    rating: 8.6,
    description: "Two former lovers are forced to reunite for a documentary about their school days.",
    story:
      "Choi Ung and Kook Yeon-su were once the subject of a famous school documentary and later broke up. Ten years later they are asked to film a sequel, and old feelings slowly return.",
    genre: ["Romance", "Slice of Life", "Drama"],
    episodeCount: 16,
    cast: [
      { name: "Choi Woo-shik", role: "Choi Ung", bio: "Actor known for Parasite and Train to Busan." },
      { name: "Kim Da-mi", role: "Kook Yeon-su", bio: "Actress known for The Witch and Itaewon Class." },
      { name: "Kim Sung-cheol", role: "Kim Ji-woong", bio: "Actor known for Our Beloved Summer." },
    ],
    whyWatch: "A soft, cozy romance with beautiful cinematography.",
    trailerUrl: "https://youtu.be/wpW6aVWgvMc?si=do_JPmbT3LF_Dfbi",
  }),
  korean({
    slug: "extraordinary-attorney-woo",
    title: "Extraordinary Attorney Woo",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/9d/Strange_Lawyer_Woo_Young-woo.png",
    year: 2022,
    rating: 8.7,
    description: "A brilliant young lawyer with autism handles unusual cases at a big law firm.",
    story:
      "Woo Young-woo is a first-time attorney with autism spectrum disorder and an extraordinary memory. She faces prejudice and personal challenges while solving cases in her own creative way.",
    genre: ["Legal", "Drama", "Slice of Life"],
    episodeCount: 16,
    cast: [
      { name: "Park Eun-bin", role: "Woo Young-woo", bio: "Actress known for The King's Affection and Castaway Diva." },
      { name: "Kang Tae-oh", role: "Lee Jun-ho", bio: "Actor known for Extraordinary Attorney Woo." },
      { name: "Kang Ki-young", role: "Jung Myeong-seok", bio: "Actor known for supporting roles in many dramas." },
    ],
    whyWatch: "Warm, thoughtful and creative legal storytelling with a memorable lead.",
    trailerUrl: "https://youtu.be/MxeXECe2t-c?si=IG25Wjj44lBdM_ym",
  }),
  korean({
    slug: "strong-woman-do-bong-soon",
    title: "Strong Woman Do Bong-soon",
    poster: "https://upload.wikimedia.org/wikipedia/en/2/28/StrongWomanDoBong-soon_%28Main_poster%29.jpg",
    year: 2017,
    rating: 8.4,
    description: "A young woman with superhuman strength becomes a bodyguard for a game company CEO.",
    story:
      "Do Bong-soon is a small woman with incredible strength. She is hired as a bodyguard for Ahn Min-hyuk, the CEO of a game company, while a serial kidnapper threatens the city.",
    genre: ["Romance", "Comedy", "Action"],
    episodeCount: 16,
    cast: [
      { name: "Park Bo-young", role: "Do Bong-soon", bio: "Actress known for Oh My Ghost and Doom at Your Service." },
      { name: "Park Hyung-sik", role: "Ahn Min-hyuk", bio: "Actor and singer known for Hwarang and Happiness." },
      { name: "Ji Soo", role: "In Guk-doo", bio: "Actor known for Strong Woman Do Bong-soon." },
    ],
    whyWatch: "Lots of fun action, crime and a super sweet love story.",
    trailerUrl: "https://youtu.be/ysJzkl-SU1Q?si=HDAvgOMsKo9ELUHh",
  }),
  korean({
    slug: "hotel-del-luna",
    title: "Hotel del Luna",
    year: 2019,
    rating: 8.5,
    description: "A hotel for ghosts is run by a mysterious owner and a new human manager.",
    story:
      "Jang Man-wol is the owner of a hotel that serves ghosts who need closure before moving on. Elite hotelier Koo Chan-sung is hired as manager and slowly learns about her long and lonely past.",
    genre: ["Fantasy", "Romance", "Mystery"],
    episodeCount: 16,
    cast: [
      { name: "IU", role: "Jang Man-wol", bio: "Singer and actress known for My Mister." },
      { name: "Yeo Jin-goo", role: "Koo Chan-sung", bio: "Actor who has worked since childhood in dramas and films." },
      { name: "Kim Seo-hyung", role: "Kim Seon-bi", bio: "Veteran actress known for Sky Castle." },
    ],
    whyWatch: "Beautiful visuals, emotional ghost stories and a fantastic lead pair.",
  }),
  korean({
    slug: "start-up",
    title: "Start-Up",
    year: 2020,
    rating: 8.3,
    description: "Young entrepreneurs chase their dreams in Korea's version of Silicon Valley.",
    story:
      "Seo Dal-mi wants to succeed in the startup world of Sandbox. She meets Nam Do-san, a young tech genius, and Han Ji-pyeong, a mentor investor, and the three find their lives connected in surprising ways.",
    genre: ["Romance", "Drama", "Business"],
    episodeCount: 16,
    cast: [
      { name: "Bae Suzy", role: "Seo Dal-mi", bio: "Singer and actress, former member of Miss A." },
      { name: "Nam Joo-hyuk", role: "Nam Do-san", bio: "Actor and former model known for Weightlifting Fairy Kim Bok-joo." },
      { name: "Kim Seon-ho", role: "Han Ji-pyeong", bio: "Actor known for Hometown Cha-Cha-Cha." },
    ],
    whyWatch: "A fresh workplace drama with love, ambition and a fun love triangle.",
  }),
  korean({
    slug: "start-up",
    title: "Start-Up",
    year: 2020,
    rating: 8.3,
    description: "Young entrepreneurs chase their dreams in Korea's version of Silicon Valley.",
    story:
      "Seo Dal-mi wants to succeed in the startup world of Sandbox. She meets Nam Do-san, a young tech genius, and Han Ji-pyeong, a mentor investor, and the three find their lives connected in surprising ways.",
    genre: ["Romance", "Drama", "Business"],
    episodeCount: 16,
    cast: [
      { name: "Bae Suzy", role: "Seo Dal-mi", bio: "Singer and actress, former member of Miss A." },
      { name: "Nam Joo-hyuk", role: "Nam Do-san", bio: "Actor and former model known for Weightlifting Fairy Kim Bok-joo." },
      { name: "Kim Seon-ho", role: "Han Ji-pyeong", bio: "Actor known for Hometown Cha-Cha-Cha." },
    ],
    whyWatch: "A fresh workplace drama with love, ambition and a fun love triangle.",
  }),
];

/**
 * Pehle se maujood dramas ke saath merge karo (same slug wali entries skip ho jayengi).
 * Example: const all = mergeDramas(dramas, moreKoreanDramas1);
 */
export function mergeDramas(existing: Drama[], incoming: Drama[]): Drama[] {
  const slugs = new Set(existing.map((d) => d.slug));
  return [...existing, ...incoming.filter((d) => !slugs.has(d.slug))];
}
