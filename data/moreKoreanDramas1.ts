import type { Drama } from "@/types/drama";

// TODO: apne project ka placeholder poster path yahan set karo
const POSTER_PLACEHOLDER = "/posters/placeholder.jpg";

type Entry = Omit<Drama, "id" | "category" | "country" | "poster" | "featured">;

const korean = (e: Entry): Drama => ({
  ...e,
  id: e.slug,
  category: "Korean",
  country: "South Korea",
  poster: POSTER_PLACEHOLDER,
  featured: false,
});

export const moreKoreanDramas1: Drama[] = [
  korean({
    slug: "crash-landing-on-you",
    title: "Crash Landing on You",
    year: 2019,
    rating: 8.7,
    description: "A South Korean heiress lands in North Korea and meets an army officer who hides her.",
    story:
      "After a paragliding accident, chaebol heiress Yoon Se-ri crash-lands in North Korea, where army captain Ri Jeong-hyeok decides to protect her. As he plans her safe return, the two fall in love while hiding from people who want to expose them.",
    genre: ["Romance", "Comedy", "Drama"],
    episodeCount: 16,
    cast: [
      { name: "Hyun Bin", role: "Ri Jeong-hyeok", bio: "Leading South Korean actor, also known for Secret Garden." },
      { name: "Son Ye-jin", role: "Yoon Se-ri", bio: "Award-winning actress known for romance and drama roles." },
      { name: "Seo Ji-hye", role: "Seo Dan", bio: "South Korean actress known for Crash Landing on You." },
    ],
    whyWatch: "A warm mix of romance, comedy and heartbreak with a very lovable ensemble cast.",
  }),
  korean({
    slug: "goblin",
    title: "Goblin",
    year: 2016,
    rating: 8.7,
    description: "An immortal goblin searches for the bride who can end his endless life.",
    story:
      "Kim Shin, an immortal goblin, needs a human bride to free him from his curse. He meets Ji Eun-tak, a cheerful high school student who can see ghosts, while a grim reaper and a mysterious past keep tying their fates together.",
    genre: ["Fantasy", "Romance", "Drama"],
    episodeCount: 16,
    cast: [
      { name: "Gong Yoo", role: "Kim Shin", bio: "Popular actor known for Coffee Prince and Train to Busan." },
      { name: "Kim Go-eun", role: "Ji Eun-tak", bio: "Acclaimed actress known for Eungyo and Yumi's Cells." },
      { name: "Lee Dong-wook", role: "Grim Reaper", bio: "Actor known for fantasy and romance dramas." },
      { name: "Yoo In-na", role: "Sunny", bio: "Actress known for a wide range of romantic and comedic roles." },
    ],
    whyWatch: "Beautiful fantasy storytelling with funny moments and a very emotional ending.",
  }),
  korean({
    slug: "descendants-of-the-sun",
    title: "Descendants of the Sun",
    year: 2016,
    rating: 8.5,
    description: "A soldier and a doctor fall in love while serving in a war-torn region.",
    story:
      "Captain Yoo Si-jin of the special forces and surgeon Kang Mo-yeon meet in Korea and later reunite in the fictional country of Uruk. Duty, danger and different ideas about saving lives test their relationship.",
    genre: ["Romance", "Action", "Drama"],
    episodeCount: 16,
    cast: [
      { name: "Song Joong-ki", role: "Yoo Si-jin", bio: "Popular actor known for Vincenzo and Reborn Rich." },
      { name: "Song Hye-kyo", role: "Kang Mo-yeon", bio: "Veteran actress known for Autumn in My Heart and The Glory." },
      { name: "Jin Goo", role: "Seo Dae-young", bio: "Actor known for supporting and lead roles in many dramas." },
    ],
    whyWatch: "A big-scale romance with action, humor and unforgettable leads.",
  }),
  korean({
    slug: "reply-1988",
    title: "Reply 1988",
    year: 2015,
    rating: 9.1,
    description: "Five families and their kids grow up together in a Seoul neighbourhood in 1988.",
    story:
      "Five neighbouring families in Ssangmun-dong share meals, worries and celebrations. The story follows their teenage children as they grow up, fall in love and support each other through the ups and downs of life.",
    genre: ["Family", "Comedy", "Drama"],
    episodeCount: 20,
    cast: [
      { name: "Hyeri", role: "Sung Deok-sun", bio: "Singer and actress, member of the group Girl's Day." },
      { name: "Ryu Jun-yeol", role: "Kim Jung-hwan", bio: "Actor known for A Taxi Driver and Reply 1988." },
      { name: "Park Bo-gum", role: "Choi Taek", bio: "Popular actor known for Love in the Moonlight and Encounter." },
    ],
    whyWatch: "One of the most loved dramas ever, full of nostalgia, laughter and tears.",
  }),
  korean({
    slug: "vincenzo",
    title: "Vincenzo",
    year: 2021,
    rating: 8.6,
    description: "An Italian mafia lawyer returns to Korea and takes on a corrupt conglomerate.",
    story:
      "After leaving the Mafia, Vincenzo Cassano returns to South Korea to retrieve hidden gold. He teams up with a feisty lawyer and the tenants of an old building to fight the powerful Babel Group.",
    genre: ["Crime", "Comedy", "Thriller"],
    episodeCount: 20,
    cast: [
      { name: "Song Joong-ki", role: "Vincenzo Cassano", bio: "Popular actor known for Descendants of the Sun." },
      { name: "Jeon Yeo-been", role: "Hong Cha-young", bio: "Actress known for Vincenzo and Record of Youth." },
      { name: "Ok Taec-yeon", role: "Jang Han-seo", bio: "Singer and actor, member of 2PM." },
    ],
    whyWatch: "A stylish crime story that keeps balancing dark humor and satisfying revenge.",
  }),
  korean({
    slug: "itaewon-class",
    title: "Itaewon Class",
    year: 2020,
    rating: 8.4,
    description: "An ex-convict opens a small restaurant to take down a powerful food company.",
    story:
      "Park Sae-ro-yi opens a small pub in Itaewon after a bitter clash with the head of a large food company. With loyal friends and a clear goal, he builds a business while seeking justice.",
    genre: ["Drama", "Business", "Revenge"],
    episodeCount: 16,
    cast: [
      { name: "Park Seo-joon", role: "Park Sae-ro-yi", bio: "Popular actor known for Fight for My Way and What's Wrong with Secretary Kim." },
      { name: "Kim Da-mi", role: "Jo Yi-seo", bio: "Actress known for The Witch and Our Beloved Summer." },
      { name: "Kwon Nara", role: "Oh Soo-ah", bio: "Actress and former member of Hello Venus." },
    ],
    whyWatch: "An inspiring underdog story with strong characters and a satisfying journey.",
  }),
  korean({
    slug: "hospital-playlist",
    title: "Hospital Playlist",
    year: 2020,
    rating: 8.9,
    description: "Five doctors who have been friends since medical school share life, work and music.",
    story:
      "Five friends from the same medical school work at Yulje Medical Center and form a band in their free time. Two seasons follow their careers, friendships and small everyday moments.",
    genre: ["Medical", "Slice of Life", "Drama"],
    episodeCount: 24,
    cast: [
      { name: "Jo Jung-suk", role: "Lee Ik-jun", bio: "Actor known for Oh My Ghost and Hospital Playlist." },
      { name: "Yoo Yeon-seok", role: "Ahn Jeong-won", bio: "Actor known for Reply 1994 and Hospital Playlist." },
      { name: "Jung Kyung-ho", role: "Kim Jun-wan", bio: "Actor known for Prison Playbook and Hospital Playlist." },
    ],
    whyWatch: "A cozy, heartwarming show about friendship, family and finding joy in daily life.",
  }),
  korean({
    slug: "squid-game",
    title: "Squid Game",
    year: 2021,
    rating: 8.0,
    description: "Hundreds of desperate people compete in deadly children's games for a huge prize.",
    story:
      "Players deep in debt accept a mysterious invitation to play a series of children's games for a large cash prize. They soon discover that losing means death. This entry covers season 1.",
    genre: ["Thriller", "Survival", "Drama"],
    episodeCount: 9,
    cast: [
      { name: "Lee Jung-jae", role: "Seong Gi-hun", bio: "Veteran actor known for Deliver Us from Evil and Squid Game." },
      { name: "Park Hae-soo", role: "Cho Sang-woo", bio: "Actor known for Prison Playbook and Squid Game." },
      { name: "Jung Ho-yeon", role: "Kang Sae-byeok", bio: "Model turned actress who became famous with Squid Game." },
      { name: "Wi Ha-joon", role: "Hwang Jun-ho", bio: "Actor known for Bad and Crazy and The Worst of Evil." },
    ],
    whyWatch: "A tense, world-famous thriller with sharp commentary on money and survival.",
  }),
  korean({
    slug: "the-glory",
    title: "The Glory",
    year: 2022,
    rating: 8.7,
    description: "A woman spends years planning revenge on the classmates who bullied her.",
    story:
      "After suffering brutal school bullying, Moon Dong-eun spends years planning her revenge. She becomes a teacher and slowly moves into the lives of the people who hurt her.",
    genre: ["Thriller", "Revenge", "Drama"],
    episodeCount: 16,
    cast: [
      { name: "Song Hye-kyo", role: "Moon Dong-eun", bio: "Veteran actress known for Descendants of the Sun." },
      { name: "Lee Do-hyun", role: "Joo Yeo-jeong", bio: "Actor known for Sweet Home and 18 Again." },
      { name: "Lim Ji-yeon", role: "Park Yeon-jin", bio: "Actress known for The Glory." },
    ],
    whyWatch: "A gripping, carefully planned revenge story with very strong performances.",
  }),
  korean({
    slug: "business-proposal",
    title: "Business Proposal",
    year: 2022,
    rating: 8.5,
    description: "A woman goes on a blind date in her friend's place and meets her own boss.",
    story:
      "Shin Ha-ri attends a blind date for her friend and ends up meeting Kang Tae-moo, the CEO of her company. To keep the truth hidden, she pretends to be someone else, which leads to a lot of funny and sweet situations.",
    genre: ["Romance", "Comedy"],
    episodeCount: 12,
    cast: [
      { name: "Ahn Hyo-seop", role: "Kang Tae-moo", bio: "Actor known for Dr. Romantic and Business Proposal." },
      { name: "Kim Se-jeong", role: "Shin Ha-ri", bio: "Singer and actress, former member of gugudan." },
      { name: "Kim Min-kyu", role: "Cha Sung-hoon", bio: "Actor known for Business Proposal." },
    ],
    whyWatch: "Light, funny and full of classic romantic comedy moments.",
  }),
  korean({
    slug: "whats-wrong-with-secretary-kim",
    title: "What's Wrong with Secretary Kim",
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
  }),
  korean({
    slug: "extraordinary-attorney-woo",
    title: "Extraordinary Attorney Woo",
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
    slug: "its-okay-to-not-be-okay",
    title: "It's Okay to Not Be Okay",
    year: 2020,
    rating: 8.7,
    description: "A caregiver and a children's book writer heal each other's emotional wounds.",
    story:
      "Moon Gang-tae works at a psychiatric hospital while caring for his older brother. He meets Ko Moon-young, a famous children's author with a difficult personality, and the two begin to help each other face their pasts.",
    genre: ["Romance", "Drama", "Psychological"],
    episodeCount: 16,
    cast: [
      { name: "Kim Soo-hyun", role: "Moon Gang-tae", bio: "Popular actor known for My Love from the Star." },
      { name: "Seo Ye-ji", role: "Ko Moon-young", bio: "Actress known for It's Okay to Not Be Okay and Eve." },
      { name: "Oh Jung-se", role: "Moon Sang-tae", bio: "Actor known for It's Okay to Not Be Okay." },
    ],
    whyWatch: "Emotional, visually striking and honest about healing and family.",
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
    slug: "our-beloved-summer",
    title: "Our Beloved Summer",
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
  }),
  korean({
    slug: "twenty-five-twenty-one",
    title: "Twenty-Five Twenty-One",
    year: 2022,
    rating: 8.6,
    description: "A young fencer and a struggling reporter meet in the late 1990s.",
    story:
      "Na Hee-do is a teenage fencer with big dreams. In the middle of the IMF crisis she meets Baek Yi-jin, a former rich kid who lost everything, and their lives become linked over the years.",
    genre: ["Romance", "Drama", "Sports"],
    episodeCount: 16,
    cast: [
      { name: "Kim Tae-ri", role: "Na Hee-do", bio: "Actress known for The Handmaiden and Mr. Sunshine." },
      { name: "Nam Joo-hyuk", role: "Baek Yi-jin", bio: "Actor and former model known for Start-Up." },
      { name: "Choi Hyun-wook", role: "Moon Ji-woong", bio: "Actor known for Twenty-Five Twenty-One." },
    ],
    whyWatch: "A nostalgic, emotional coming-of-age story about youth and first love.",
  }),
  korean({
    slug: "queen-of-tears",
    title: "Queen of Tears",
    year: 2024,
    rating: 8.8,
    description: "A married couple on the edge of divorce rediscover love in unexpected ways.",
    story:
      "Baek Hyun-woo and Hong Hae-in have been married for three years and their marriage is falling apart. When a crisis hits, they are forced to remember what first drew them together.",
    genre: ["Romance", "Comedy", "Drama"],
    episodeCount: 16,
    cast: [
      { name: "Kim Soo-hyun", role: "Baek Hyun-woo", bio: "Popular actor known for My Love from the Star." },
      { name: "Kim Ji-won", role: "Hong Hae-in", bio: "Actress known for Descendants of the Sun and My Liberation Notes." },
      { name: "Park Sung-hoon", role: "Yoon Eun-seong", bio: "Actor known for The Glory and Queen of Tears." },
    ],
    whyWatch: "A funny and emotional romance about marriage and second chances.",
  }),
  korean({
    slug: "weightlifting-fairy-kim-bok-joo",
    title: "Weightlifting Fairy Kim Bok-joo",
    year: 2016,
    rating: 8.3,
    description: "A college weightlifter and a swimmer fall in love while chasing their dreams.",
    story:
      "Kim Bok-joo is a determined weightlifter at a sports college. She falls for Jung Joon-hyung, a swimmer, and the two grow together while facing school life and their own insecurities.",
    genre: ["Romance", "Comedy", "Sports"],
    episodeCount: 16,
    cast: [
      { name: "Lee Sung-kyung", role: "Kim Bok-joo", bio: "Actress and former model known for Dr. Romantic." },
      { name: "Nam Joo-hyuk", role: "Jung Joon-hyung", bio: "Actor and former model known for Start-Up." },
      { name: "Lee Jae-yoon", role: "Song Shi-ho", bio: "Actor known for supporting roles in youth dramas." },
    ],
    whyWatch: "A sweet, funny campus romance that feels comforting and genuine.",
  }),
  korean({
    slug: "strong-woman-do-bong-soon",
    title: "Strong Woman Do Bong-soon",
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
  }),
  korean({
    slug: "healer",
    title: "Healer",
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
  }),
  korean({
    slug: "boys-over-flowers",
    title: "Boys Over Flowers",
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
  }),
  korean({
    slug: "coffee-prince",
    title: "Coffee Prince",
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
  }),
  korean({
    slug: "my-mister",
    title: "My Mister",
    year: 2018,
    rating: 9.1,
    description: "A tired middle-aged engineer and a young woman with a hard life form an unlikely bond.",
    story:
      "Park Dong-hoon is an engineer stuck in a difficult marriage and job. He meets Lee Ji-an, a young woman working hard to survive, and the two slowly comfort each other through a quiet, moving friendship.",
    genre: ["Drama", "Slice of Life"],
    episodeCount: 16,
    cast: [
      { name: "Lee Sun-kyun", role: "Park Dong-hoon", bio: "Acclaimed actor known for Parasite and Coffee Prince." },
      { name: "IU", role: "Lee Ji-an", bio: "Singer and actress known for Hotel del Luna." },
      { name: "Park Ho-san", role: "Park Sang-hoon", bio: "Veteran actor known for supporting roles in many dramas." },
    ],
    whyWatch: "A slow, deeply emotional drama about kindness and human connection.",
  }),
  korean({
    slug: "signal",
    title: "Signal",
    year: 2016,
    rating: 8.8,
    description: "A profiler and a detective solve cold cases by talking through a mysterious walkie-talkie.",
    story:
      "Profiler Park Hae-young finds a walkie-talkie that connects him to detective Lee Jae-han, who lives in the past. Together they work to solve crimes and change what happened.",
    genre: ["Crime", "Thriller", "Mystery"],
    episodeCount: 16,
    cast: [
      { name: "Lee Je-hoon", role: "Park Hae-young", bio: "Actor known for Taxi Driver and Signal." },
      { name: "Kim Hye-soo", role: "Cha Soo-hyun", bio: "Veteran actress known for Signal and Juvenile Justice." },
      { name: "Jo Jin-woong", role: "Lee Jae-han", bio: "Actor known for Signal and many films and dramas." },
    ],
    whyWatch: "A tightly written crime thriller that keeps you guessing until the end.",
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
