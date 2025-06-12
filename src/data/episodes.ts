
export interface Episode {
  number: number;
  title: string;
  airDate: string;
  type: 'manga' | 'filler';
  synopsis: string;
  storyArc?: string;
  link: string;
  watchLink: string;
}

export const episodes: Episode[] = [
  {
    number: 1,
    title: "Roller Coaster Murder Case",
    airDate: "1996-01-08",
    type: "manga",
    synopsis: "Shinichi Kudo witnesses a murder on a roller coaster and is shrunk by the Black Organization after being poisoned with APTX-4869.",
    storyArc: "Shinichi's Transformation",
    link: "https://www.detectiveconanworld.com/wiki/Roller_Coaster_Murder_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138373"
  },
  {
    number: 2,
    title: "Company President's Daughter Kidnapping Case",
    airDate: "1996-01-15",
    type: "manga",
    synopsis: "Conan solves his first case in his new body, helping to rescue a kidnapped girl.",
    link: "https://www.detectiveconanworld.com/wiki/Company_President%27s_Daughter_Kidnapping_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138374"
  },
  {
    number: 3,
    title: "Idol Locked Room Murder Case",
    airDate: "1996-01-22",
    type: "manga",
    synopsis: "Conan investigates a locked room murder involving a famous idol.",
    link: "https://www.detectiveconanworld.com/wiki/Idol_Locked_Room_Murder_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138375"
  },
  {
    number: 4,
    title: "The Coded Map of the City Case",
    airDate: "1996-01-29",
    type: "filler",
    synopsis: "The Detective Boys search for treasure using a coded map.",
    link: "https://www.detectiveconanworld.com/wiki/The_Coded_Map_of_the_City_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138376"
  },
  {
    number: 5,
    title: "The Shinkansen's Bomb Case",
    airDate: "1996-02-05",
    type: "manga",
    synopsis: "Conan and the gang encounter a bomber on the bullet train. First appearance of Gin and Vodka since episode 1.",
    storyArc: "Black Organization",
    link: "https://www.detectiveconanworld.com/wiki/The_Shinkansen%27s_Bomb_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138377"
  },
  {
    number: 6,
    title: "Valentine Murder Case",
    airDate: "1996-02-12",
    type: "filler",
    synopsis: "A murder occurs during Valentine's Day celebrations.",
    link: "https://www.detectiveconanworld.com/wiki/Valentine_Murder_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138378"
  },
  {
    number: 7,
    title: "Once-A-Month Present Threat Case",
    airDate: "1996-02-19",
    type: "filler",
    synopsis: "Conan investigates threatening letters received monthly.",
    link: "https://www.detectiveconanworld.com/wiki/Once-A-Month_Present_Threat_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138379"
  },
  {
    number: 8,
    title: "Art Museum Owner Murder Case",
    airDate: "1996-02-26",
    type: "filler",
    synopsis: "A murder takes place at an art museum.",
    link: "https://www.detectiveconanworld.com/wiki/Art_Museum_Owner_Murder_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138380"
  },
  {
    number: 9,
    title: "Tenkaichi Night Festival Murder Case",
    airDate: "1996-03-04",
    type: "filler",
    synopsis: "A murder occurs during a traditional festival.",
    link: "https://www.detectiveconanworld.com/wiki/Tenkaichi_Night_Festival_Murder_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138381"
  },
  {
    number: 10,
    title: "Pro Soccer Player Blackmail Case",
    airDate: "1996-03-11",
    type: "filler",
    synopsis: "A professional soccer player is being blackmailed.",
    link: "https://www.detectiveconanworld.com/wiki/Pro_Soccer_Player_Blackmail_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138382"
  },
  {
    number: 11,
    title: "Piano Sonata 'Moonlight' Murder Case",
    airDate: "1996-04-08",
    type: "manga",
    synopsis: "Conan investigates murders connected to Beethoven's Moonlight Sonata on a remote island.",
    link: "https://www.detectiveconanworld.com/wiki/Piano_Sonata_%22Moonlight%22_Murder_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138383"
  },
  {
    number: 12,
    title: "Ayumi-chan Kidnapping Case",
    airDate: "1996-04-15",
    type: "filler",
    synopsis: "Ayumi is kidnapped and the Detective Boys must rescue her.",
    link: "https://www.detectiveconanworld.com/wiki/Ayumi-chan_Kidnapping_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138384"
  },
  {
    number: 13,
    title: "Strange Person Hunt Murder Case",
    airDate: "1996-04-22",
    type: "manga",
    synopsis: "Conan investigates a murder involving a mysterious stranger.",
    link: "https://www.detectiveconanworld.com/wiki/Strange_Person_Hunt_Murder_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138385"
  },
  {
    number: 14,
    title: "The Mysterious Shooting Message Case",
    airDate: "1996-05-13",
    type: "filler",
    synopsis: "Conan decodes mysterious messages related to a shooting.",
    link: "https://www.detectiveconanworld.com/wiki/The_Mysterious_Shooting_Message_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138386"
  },
  {
    number: 15,
    title: "Missing Corpse Murder Case",
    airDate: "1996-05-20",
    type: "filler",
    synopsis: "A corpse mysteriously disappears from a crime scene.",
    link: "https://www.detectiveconanworld.com/wiki/Missing_Corpse_Murder_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138387"
  },
  {
    number: 16,
    title: "Antique Collector Murder Case",
    airDate: "1996-05-27",
    type: "filler",
    synopsis: "A murder occurs among antique collectors.",
    link: "https://www.detectiveconanworld.com/wiki/Antique_Collector_Murder_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138388"
  },
  {
    number: 17,
    title: "Department Store Hijack Case",
    airDate: "1996-06-03",
    type: "filler",
    synopsis: "The Detective Boys get caught up in a department store hijacking.",
    link: "https://www.detectiveconanworld.com/wiki/Department_Store_Hijack_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138389"
  },
  {
    number: 18,
    title: "June Bride Murder Case",
    airDate: "1996-06-10",
    type: "filler",
    synopsis: "A murder takes place during a wedding ceremony.",
    link: "https://www.detectiveconanworld.com/wiki/June_Bride_Murder_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138390"
  },
  {
    number: 19,
    title: "Elevator Murder Case",
    airDate: "1996-06-17",
    type: "filler",
    synopsis: "A murder occurs in a building elevator.",
    link: "https://www.detectiveconanworld.com/wiki/Elevator_Murder_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138391"
  },
  {
    number: 20,
    title: "Haunted Mansion Murder Case",
    airDate: "1996-06-24",
    type: "filler",
    synopsis: "Conan investigates a murder in a supposedly haunted mansion.",
    link: "https://www.detectiveconanworld.com/wiki/Haunted_Mansion_Murder_Case",
    watchLink: "https://aniwatchtv.to/watch/case-closed-323?ep=138392"
  }
];
