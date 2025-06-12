
export interface Episode {
  number: number;
  title: string;
  airDate: string;
  type: 'manga' | 'filler';
  synopsis: string;
  storyArc?: string;
}

export const episodes: Episode[] = [
  {
    number: 1,
    title: "Roller Coaster Murder Case",
    airDate: "1996-01-08",
    type: "manga",
    synopsis: "Shinichi Kudo witnesses a murder on a roller coaster and is shrunk by the Black Organization after being poisoned with APTX-4869.",
    storyArc: "Shinichi's Transformation"
  },
  {
    number: 2,
    title: "Company President's Daughter Kidnapping Case",
    airDate: "1996-01-15",
    type: "manga",
    synopsis: "Conan solves his first case in his new body, helping to rescue a kidnapped girl."
  },
  {
    number: 3,
    title: "Idol Locked Room Murder Case",
    airDate: "1996-01-22",
    type: "manga",
    synopsis: "Conan investigates a locked room murder involving a famous idol."
  },
  {
    number: 4,
    title: "The Coded Map of the City Case",
    airDate: "1996-01-29",
    type: "filler",
    synopsis: "The Detective Boys search for treasure using a coded map."
  },
  {
    number: 5,
    title: "The Shinkansen's Bomb Case",
    airDate: "1996-02-05",
    type: "manga",
    synopsis: "Conan and the gang encounter a bomber on the bullet train. First appearance of Gin and Vodka since episode 1.",
    storyArc: "Black Organization"
  },
  {
    number: 6,
    title: "Valentine Murder Case",
    airDate: "1996-02-12",
    type: "filler",
    synopsis: "A murder occurs during Valentine's Day celebrations."
  },
  {
    number: 7,
    title: "Once-A-Month Present Threat Case",
    airDate: "1996-02-19",
    type: "filler",
    synopsis: "Conan investigates threatening letters received monthly."
  },
  {
    number: 8,
    title: "Art Museum Owner Murder Case",
    airDate: "1996-02-26",
    type: "filler",
    synopsis: "A murder takes place at an art museum."
  },
  {
    number: 9,
    title: "Tenkaichi Night Festival Murder Case",
    airDate: "1996-03-04",
    type: "filler",
    synopsis: "A murder occurs during a traditional festival."
  },
  {
    number: 10,
    title: "Pro Soccer Player Blackmail Case",
    airDate: "1996-03-11",
    type: "filler",
    synopsis: "A professional soccer player is being blackmailed."
  },
  {
    number: 11,
    title: "Piano Sonata 'Moonlight' Murder Case",
    airDate: "1996-04-08",
    type: "manga",
    synopsis: "Conan investigates murders connected to Beethoven's Moonlight Sonata on a remote island."
  },
  {
    number: 12,
    title: "Ayumi-chan Kidnapping Case",
    airDate: "1996-04-15",
    type: "filler",
    synopsis: "Ayumi is kidnapped and the Detective Boys must rescue her."
  },
  {
    number: 13,
    title: "Strange Person Hunt Murder Case",
    airDate: "1996-04-22",
    type: "manga",
    synopsis: "Conan investigates a murder involving a mysterious stranger."
  },
  {
    number: 14,
    title: "The Mysterious Shooting Message Case",
    airDate: "1996-05-13",
    type: "filler",
    synopsis: "Conan decodes mysterious messages related to a shooting."
  },
  {
    number: 15,
    title: "Missing Corpse Murder Case",
    airDate: "1996-05-20",
    type: "filler",
    synopsis: "A corpse mysteriously disappears from a crime scene."
  },
  {
    number: 16,
    title: "Antique Collector Murder Case",
    airDate: "1996-05-27",
    type: "filler",
    synopsis: "A murder occurs among antique collectors."
  },
  {
    number: 17,
    title: "Department Store Hijack Case",
    airDate: "1996-06-03",
    type: "filler",
    synopsis: "The Detective Boys get caught up in a department store hijacking."
  },
  {
    number: 18,
    title: "June Bride Murder Case",
    airDate: "1996-06-10",
    type: "filler",
    synopsis: "A murder takes place during a wedding ceremony."
  },
  {
    number: 19,
    title: "Elevator Murder Case",
    airDate: "1996-06-17",
    type: "filler",
    synopsis: "A murder occurs in a building elevator."
  },
  {
    number: 20,
    title: "Haunted Mansion Murder Case",
    airDate: "1996-06-24",
    type: "filler",
    synopsis: "Conan investigates a murder in a supposedly haunted mansion."
  }
];
