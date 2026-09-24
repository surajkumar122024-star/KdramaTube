import type { Drama } from "@/types/drama";

// Jis drama ka poster abhi nahi mila, uske liye placeholder (baad me asli URL daalo)
const POSTER_PLACEHOLDER = "/posters/placeholder.jpg";
const LOVELY_RUNNER_POSTER = "https://upload.wikimedia.org/wikipedia/en/6/67/Lovely_Runner.png";

// Actor photos (Wikimedia Commons). Naam match hone par cast me apne aap lag jati hain.
const ACTOR_PHOTOS: Record<string, string> = {
  "Go Youn-jung": "https://upload.wikimedia.org/wikipedia/commons/9/93/073126_Go_Younjung_at_the_5th_Blue_Dragon_Series_Awards_02.jpg",
  "Bae Doona": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Bae_Doona_at_Berlinale_2026.jpg",
};

type Entry = Omit<Drama, "id" | "category" | "country" | "poster" | "featured"> & {
  poster?: string;
};

const make =
  (category: Drama["category"], country: string) =>
  (e: Entry): Drama => ({
    ...e,
    id: e.slug,
    category,
    country,
    poster: e.poster ?? POSTER_PLACEHOLDER,
    featured: false,
    cast: e.cast?.map((c) => ({ ...c, photo: c.photo ?? ACTOR_PHOTOS[c.name] })),
    episodes:
      e.episodes ??
      (e.episodeCount
        ? Array.from({ length: e.episodeCount }, (_, i) => ({
            title: `Episode ${i + 1}`,
            summary: "",
          }))
        : undefined),
  });

const korean = make("Korean", "South Korea");
const chinese = make("Chinese", "China");
const turkish = make("Turkish", "Turkey");

export const moreDramas2: Drama[] = [
  // ---------------- Korean ----------------
  korean({
    slug: "lovely-runner",
    title: "Lovely Runner",
    year: 2024,
    poster: LOVELY_RUNNER_POSTER,
    rating: 8.8,
    description: "A devoted fan travels back in time to save the idol who changed her life.",
    story:
      "Im Sol is a fan whose life is lifted by the singer Ryu Sun-jae, until his tragic fate shocks her. When she is suddenly sent back to 2008, she gets a chance to change what happened and to meet him before he became a star.",
    genre: ["Romance", "Fantasy", "Comedy"],
    episodeCount: 16,
    cast: [
      { name: "Byeon Woo-seok", role: "Ryu Sun-jae", bio: "Actor who became widely popular with Lovely Runner." },
      { name: "Kim Hye-yoon", role: "Im Sol", bio: "Actress known for Sky Castle and Lovely Runner." },
      { name: "Song Geon-hee", role: "Baek In-hyuk", bio: "Actor known for Lovely Runner." },
    ],
    whyWatch: "A sweet, emotional time-travel romance with great chemistry and a lot of heart.",
  }),
  korean({
    slug: "marry-my-husband",
    title: "Marry My Husband",
    year: 2024,
    poster: "https://upload.wikimedia.org/wikipedia/en/e/e1/Marry_My_Husband_poster.jpg",
    rating: 8.4,
    description: "Betrayed and wronged, a woman gets a second chance ten years in the past.",
    story:
      "Kang Ji-won is betrayed by her husband and her closest friend. She wakes up ten years earlier and decides to change her future, starting with a bold plan to hand her old husband over to her friend.",
    genre: ["Romance", "Fantasy", "Revenge"],
    episodeCount: 16,
    cast: [
      { name: "Park Min-young", role: "Kang Ji-won", bio: "Actress known for What's Wrong with Secretary Kim and Healer.", photo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/20250625_Park_Min-young_TAG_Heuer_PhotoCall.jpg" },
      { name: "Na In-woo", role: "Yoo Ji-hyuk", bio: "Actor known for Marry My Husband.", photo: "https://upload.wikimedia.org/wikipedia/commons/9/98/2022_Na_In-woo_%EB%82%98%EC%9D%B8%EC%9A%B0_Jinxed_at_First_%283%29.jpg" },
      { name: "Lee Yi-kyung", role: "Park Min-hwan", bio: "Actor and entertainer known for comedy and drama roles.", photo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Lee_Yi-kyung_%EC%9D%B4%EC%9D%B4%EA%B2%BD_in_2022.png" },
    ],
    trailerUrl: "https://www.youtube.com/watch?v=lfJGSxXf9Xg",
    whyWatch: "A satisfying revenge story with a strong lead and plenty of twists.",
  }),
  korean({
    slug: "doctor-slump",
    title: "Doctor Slump",
    year: 2024,
    poster: "https://upload.wikimedia.org/wikipedia/en/8/8a/Doctor_Slump_%28TV_series%29_poster.jpg",
    rating: 8.3,
    description: "Two former rivals hit rock bottom and slowly help each other heal.",
    story:
      "Yeo Jeong-woo and Nam Ha-neul were once top students and fierce rivals. Years later, both have fallen into deep slumps in their careers and personal lives, and a chance meeting slowly turns into comfort and care.",
    genre: ["Romance", "Comedy", "Medical"],
    episodeCount: 16,
    cast: [
      { name: "Park Shin-hye", role: "Nam Ha-neul", bio: "Actress known for The Heirs and Pinocchio.", photo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Park_Shin-hye_in_April_2025.png" },
      { name: "Park Hyung-sik", role: "Yeo Jeong-woo", bio: "Actor and singer known for Strong Woman Do Bong-soon.", photo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/20230425_Park_Hyung-sik_%EB%B0%95%ED%98%95%EC%8B%9D.jpg" },
    ],
    whyWatch: "A warm, healing romance that mixes humor with honest feelings about burnout.",
    trailerUrl: "https://youtu.be/oGyWHLCf4NQ?si=uso1w7y0aIsCNXso",
  }),
  korean({
    slug: "kingdom",
    title: "Kingdom",
    year: 2019,
    poster: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Title_screen_for_the_Netflix_series%2C_Kingdom.png",
    rating: 8.4,
    description: "A crown prince investigates a mysterious plague in Joseon that turns people into monsters.",
    story:
      "When the king is rumored to be seriously ill, Crown Prince Lee Chang goes on a dangerous search for the truth. He discovers a deadly plague that spreads across the kingdom, while political rivals fight for power. This entry covers the first two seasons.",
    genre: ["Thriller", "Historical", "Horror"],
    episodeCount: 12,
    cast: [
       { name: "Ju Ji-hoon", role: "Lee Chang", bio: "Actor known for Kingdom and Along with the Gods.", photo: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Ju_Ji-hoon_in_February_2025.png" },
       { name: "Bae Doona", role: "Seo-bi", bio: "Actress known for Kingdom, Sense8 and many films.", photo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Bae_Doona_at_Berlinale_2026.jpg" },
       { name: "Ryu Seung-ryong", role: "Jo Hak-ju", bio: "Veteran actor known for Extreme Job and Moving.", photo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Ryu_Seung-ryong_in_2025.png" },
    ],
    whyWatch: "A gripping historical zombie thriller with excellent visuals and tension.",
    trailerUrl: "https://youtu.be/4l-yByZpaaM?si=v2mx2Yj_M0qqiMis",
  }),
  korean({
    slug: "moving",
    title: "Moving",
    year: 2023,
    rating: 8.8,
    description: "Teenagers with special powers and parents with hidden pasts face a dangerous threat.",
    story:
      "A group of high school students discover they have unusual abilities. Their parents, who once used their own powers in secret operations, must return to protect them as old enemies resurface.",
    genre: ["Action", "Fantasy", "Family"],
    episodeCount: 20,
    cast: [
      { name: "Ryu Seung-ryong", role: "Jang Ju-won", bio: "Veteran actor known for Extreme Job and Kingdom." },
      { name: "Han Hyo-joo", role: "Lee Mi-hyun", bio: "Actress known for W: Two Worlds and Moving." },
      { name: "Zo In-sung", role: "Kim Doo-shik", bio: "Actor known for That Winter, the Wind Blows and Moving." },
      { name: "Go Youn-jung", role: "Jang Hee-soo", bio: "Actress known for Alchemy of Souls and Moving." },
    ],
    whyWatch: "Big action, superpowers and a surprisingly emotional family story.",
  }),
  korean({
    slug: "mr-queen",
    title: "Mr. Queen",
    year: 2020,
    rating: 8.6,
    description: "A modern chef wakes up in the body of a queen in the Joseon era.",
    story:
      "A shallow, funny modern-day chef falls into the ocean and wakes up inside the body of Queen Kim So-yong in the Joseon dynasty. He has to survive palace politics while getting closer to the young king.",
    genre: ["Comedy", "Historical", "Romance"],
    episodeCount: 20,
    cast: [
      { name: "Shin Hye-sun", role: "Kim So-yong / Jang Bong-hwan", bio: "Actress known for Mr. Queen and Angel's Last Mission: Love." },
      { name: "Kim Jung-hyun", role: "King Cheoljong", bio: "Actor known for Mr. Queen and Crash Landing on You." },
    ],
    whyWatch: "A funny and clever historical comedy that turns surprisingly touching.",
  }),
  korean({
    slug: "flower-of-evil",
    title: "Flower of Evil",
    year: 2020,
    rating: 8.8,
    description: "A loving husband hides a dark secret, and his detective wife starts to suspect him.",
    story:
      "Baek Hee-sung is a devoted husband and father with a hidden past. His wife Cha Ji-won is a detective who begins to investigate a series of strange cases, and slowly the two sides of his life collide.",
    genre: ["Thriller", "Romance", "Mystery"],
    episodeCount: 16,
    cast: [
      { name: "Lee Joon-gi", role: "Baek Hee-sung", bio: "Actor known for Scarlet Heart: Ryeo and Flower of Evil." },
      { name: "Moon Chae-won", role: "Cha Ji-won", bio: "Actress known for Flower of Evil and The Princess' Man." },
    ],
    whyWatch: "A thriller and love story in one, with a lead performance that keeps you hooked.",
  }),
  korean({
    slug: "the-heirs",
    title: "The Heirs",
    year: 2013,
    rating: 7.9,
    description: "A poor girl and the heir of a rich family meet at an elite high school.",
    story:
      "Cha Eun-sang travels to the United States to see her sister and meets Kim Tan, the son of a powerful business family. Back in Korea, they attend the same elite school and struggle with class, family expectations and first love.",
    genre: ["Romance", "School", "Drama"],
    episodeCount: 20,
    cast: [
      { name: "Lee Min-ho", role: "Kim Tan", bio: "Popular actor known for Boys Over Flowers and Pachinko." },
      { name: "Park Shin-hye", role: "Cha Eun-sang", bio: "Actress known for The Heirs and Pinocchio." },
      { name: "Kim Woo-bin", role: "Choi Young-do", bio: "Actor known for The Heirs and Uncontrollably Fond." },
    ],
    whyWatch: "A classic teen romance from the Hallyu era with a lot of memorable scenes.",
  }),
  korean({
    slug: "my-name",
    title: "My Name",
    year: 2021,
    rating: 8.0,
    description: "After her father's death, a young woman joins a criminal gang to find his killer.",
    story:
      "Yoon Ji-woo joins a powerful drug syndicate to avenge her father's death. She soon goes undercover as a rookie police officer, and the line between both sides begins to blur.",
    genre: ["Action", "Crime", "Thriller"],
    episodeCount: 8,
    cast: [
      { name: "Han So-hee", role: "Yoon Ji-woo", bio: "Actress known for My Name and The World of the Married." },
      { name: "Park Hee-soon", role: "Choi Mu-jin", bio: "Veteran actor known for My Name." },
      { name: "Ahn Bo-hyun", role: "Do Kang-jae", bio: "Actor known for Itaewon Class and My Name." },
    ],
    whyWatch: "A fast, tough action thriller that is short and easy to binge.",
  }),
  korean({
    slug: "sweet-home",
    title: "Sweet Home",
    year: 2020,
    rating: 7.9,
    description: "Residents of an apartment building fight to survive as people turn into monsters.",
    story:
      "After a family tragedy, Cha Hyun-su moves into an old apartment building. When people around him begin to change into terrifying monsters, the residents must work together to survive. This entry covers the first season.",
    genre: ["Horror", "Thriller", "Fantasy"],
    episodeCount: 10,
    cast: [
      { name: "Song Kang", role: "Cha Hyun-su", bio: "Actor known for Sweet Home and Love Alarm." },
      { name: "Lee Jin-wook", role: "Pyeon Sang-wook", bio: "Actor known for Sweet Home." },
      { name: "Lee Si-young", role: "Seo Yi-kyung", bio: "Actress known for Sweet Home." },
    ],
    whyWatch: "Creepy creature design and a strong sense of survival with an emotional core.",
  }),

  // ---------------- Chinese ----------------
  chinese({
    slug: "go-go-squid",
    title: "Go Go Squid!",
    year: 2019,
    rating: 8.4,
    description: "A pro gamer and a talented computer science student fall in love.",
    story:
      "Tong Nian is a bright computer science student who falls for Han Shangyan, a top professional e-sports player and team captain. Their love story follows his career, her ambitions and the friends around them.",
    genre: ["Romance", "Youth", "Comedy"],
    episodeCount: 30,
    cast: [
      { name: "Li Yifeng", role: "Han Shangyan", bio: "Chinese actor and singer known for Go Go Squid!" },
      { name: "Yang Zi", role: "Tong Nian", bio: "Chinese actress known for Ashes of Love and Go Go Squid!" },
    ],
    whyWatch: "A cute, fun romance with a gaming world background and very likable leads.",
  }),
  chinese({
    slug: "meteor-garden",
    title: "Meteor Garden",
    year: 2018,
    rating: 7.7,
    description: "A girl on a scholarship clashes with the four richest boys in her university.",
    story:
      "Dong Shancai gets into a prestigious university on a scholarship. She clashes with the F4, a group of wealthy and powerful boys, especially their leader Dao Ming Si, and their rivalry slowly turns into something more.",
    genre: ["Romance", "Comedy", "Youth"],
    episodeCount: 50,
    cast: [
      { name: "Shen Yue", role: "Dong Shancai", bio: "Chinese actress known for Meteor Garden." },
      { name: "Dylan Wang", role: "Dao Ming Si", bio: "Chinese actor known for Meteor Garden and Love Between Fairy and Devil." },
    ],
    whyWatch: "A modern version of a famous story, full of classic romantic and dramatic moments.",
  }),
  chinese({
    slug: "ashes-of-love",
    title: "Ashes of Love",
    year: 2018,
    rating: 8.3,
    description: "A flower spirit and a celestial prince are tied together across lives and wars.",
    story:
      "Jin Mi is the daughter of a flower spirit who grows up unaware of her real identity. She meets Xu Feng, a powerful celestial figure, and their love is tested by war, family and destiny.",
    genre: ["Fantasy", "Romance", "Xianxia"],
    episodeCount: 63,
    cast: [
      { name: "Yang Zi", role: "Jin Mi", bio: "Chinese actress known for Ashes of Love and Go Go Squid!" },
      { name: "Deng Lun", role: "Xu Feng", bio: "Chinese actor known for Ashes of Love." },
    ],
    whyWatch: "A beautiful fantasy world with a long, emotional love story.",
  }),
  chinese({
    slug: "the-story-of-ming-lan",
    title: "The Story of Ming Lan",
    year: 2018,
    rating: 8.5,
    description: "A clever young woman survives family politics and finds love in the Song dynasty.",
    story:
      "Sheng Minglan is raised in a big family full of rivalry. With intelligence and patience she learns to protect herself, and eventually finds an unexpected partner in the powerful Gu Tingye.",
    genre: ["Historical", "Romance", "Family"],
    episodeCount: 73,
    cast: [
      { name: "Zhao Liying", role: "Sheng Minglan", bio: "Chinese actress known for The Story of Ming Lan." },
      { name: "Feng Shaofeng", role: "Gu Tingye", bio: "Chinese actor known for The Story of Ming Lan." },
      { name: "Zhu Yilong", role: "Qi Heng", bio: "Chinese actor known for The Story of Ming Lan." },
    ],
    whyWatch: "A smart, warm drama about home life, ambition and quiet romance.",
  }),
  chinese({
    slug: "love-between-fairy-and-devil",
    title: "Love Between Fairy and Devil",
    year: 2022,
    rating: 8.4,
    description: "A young fairy princess and a powerful devil lord are bound by fate.",
    story:
      "Orchid, a young fairy, is bound to Dongfang Qingcang, the powerful lord of a devil realm, through a mysterious fate. As they struggle against enemies and secrets, feelings begin to grow.",
    genre: ["Fantasy", "Romance", "Xianxia"],
    episodeCount: 36,
    cast: [
      { name: "Dylan Wang", role: "Dongfang Qingcang", bio: "Chinese actor known for Meteor Garden and Love Between Fairy and Devil." },
      { name: "Esther Yu", role: "Orchid (Xiaolan)", bio: "Chinese actress known for Love Between Fairy and Devil." },
    ],
    whyWatch: "A stylish fantasy romance with a lot of visual charm and a memorable lead pair.",
  }),

  // ---------------- Turkish ----------------
  turkish({
    slug: "erkenci-kus",
    title: "Erkenci Kuş",
    year: 2018,
    rating: 7.9,
    description: "A dreamy young woman and a serious businessman are pulled into a funny romance.",
    story:
      "Sanem is a warm, imaginative young woman who dreams of becoming a writer. She meets Can Divit, a cold and busy advertising executive, and a comic mix of misunderstandings slowly turns into love.",
    genre: ["Romance", "Comedy"],
    episodeCount: 51,
    cast: [
      { name: "Can Yaman", role: "Can Divit", bio: "Turkish actor known for Erkenci Kuş." },
      { name: "Demet Özdemir", role: "Sanem Aydın", bio: "Turkish actress known for Erkenci Kuş." },
    ],
    whyWatch: "A light, colorful romcom that is easy to enjoy and very rewatchable.",
  }),
  turkish({
    slug: "cukur",
    title: "Çukur",
    year: 2017,
    rating: 8.3,
    description: "A young man returns to his neighbourhood and is pulled into a gang family's fight for power.",
    story:
      "Yamaç Koçovalı returns to the Çukur neighbourhood in Istanbul and faces the powerful family that once ruled it. He struggles to keep his family safe while gang wars and old grudges grow.",
    genre: ["Action", "Crime", "Drama"],
    episodeCount: 126,
    cast: [
      { name: "Aras Bulut İynemli", role: "Yamaç Koçovalı", bio: "Turkish actor known for Çukur." },
      { name: "Ercan Kesal", role: "İdris Koçovalı", bio: "Turkish actor and writer known for Çukur." },
      { name: "Erkan Kolçak Köstendil", role: "Vartolu Sadettin", bio: "Turkish actor known for Çukur." },
    ],
    whyWatch: "A dark, stylish crime series with strong characters and family drama.",
  }),
  turkish({
    slug: "sen-cal-kapimi",
    title: "Sen Çal Kapımı",
    year: 2020,
    rating: 7.8,
    description: "A young landscape architect agrees to a fake engagement with an arrogant boss.",
    story:
      "Eda dreams of becoming a landscape architect. She meets Serkan, a proud and famous architect, and a fake engagement between them slowly turns into real feelings.",
    genre: ["Romance", "Comedy"],
    episodeCount: 52,
    cast: [
      { name: "Hande Erçel", role: "Eda Yıldız", bio: "Turkish actress and model known for Sen Çal Kapımı." },
      { name: "Kerem Bürsin", role: "Serkan Bolat", bio: "Turkish actor known for Sen Çal Kapımı." },
    ],
    whyWatch: "A cheerful romantic comedy with great chemistry and lots of beautiful scenes.",
  }),
  turkish({
    slug: "ask-i-memnu",
    title: "Aşk-ı Memnu",
    year: 2008,
    rating: 8.2,
    description: "A young wife and her husband's nephew fall into a forbidden relationship.",
    story:
      "Bihter marries the wealthy and much older Adnan Ziyagil. She soon becomes drawn to his charming nephew Behlül, and a secret relationship threatens to destroy the entire family.",
    genre: ["Drama", "Romance"],
    episodeCount: 79,
    cast: [
      { name: "Beren Saat", role: "Bihter Ziyagil", bio: "Turkish actress known for Aşk-ı Memnu and Fatmagül'ün Suçu Ne?" },
      { name: "Kıvanç Tatlıtuğ", role: "Behlül", bio: "Turkish actor known for Aşk-ı Memnu." },
      { name: "Selçuk Yöntem", role: "Adnan Ziyagil", bio: "Turkish actor known for Aşk-ı Memnu." },
    ],
    whyWatch: "A dramatic, high-tension family story that became a landmark in Turkish television.",
  }),
];
