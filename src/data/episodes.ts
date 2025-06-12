
export interface Episode {
  id: number;
  title: string;
  titleJapanese: string;
  airDate: string;
  isManga: boolean;
  storyline?: string;
  synopsis: string;
  season: number;
  episodeNumber: number;
}

export const episodes: Episode[] = [
  {
    id: 1,
    title: "Roller Coaster Murder Case",
    titleJapanese: "ジェットコースター殺人事件",
    airDate: "January 8, 1996",
    isManga: true,
    storyline: "Series Beginning",
    synopsis: "High school detective Shinichi Kudo is shrunk into a child after being forced to take a mysterious drug by the Black Organization. This marks the beginning of his journey as Conan Edogawa.",
    season: 1,
    episodeNumber: 1
  },
  {
    id: 2,
    title: "Company President's Daughter Kidnapping Case",
    titleJapanese: "社長令嬢誘拐事件",
    airDate: "January 15, 1996",
    isManga: true,
    synopsis: "Conan's first case as a child involves a kidnapping. He must solve the case while hiding his true identity and adapting to his new body.",
    season: 1,
    episodeNumber: 2
  },
  {
    id: 3,
    title: "Idol Locked Room Murder Case",
    titleJapanese: "アイドル密室殺人事件",
    airDate: "January 22, 1996",
    isManga: true,
    synopsis: "A locked room murder involving a pop idol. Conan demonstrates his deductive abilities while the audience learns more about his methods.",
    season: 1,
    episodeNumber: 3
  },
  {
    id: 4,
    title: "Big City Code Map Treasure Case",
    titleJapanese: "大都会暗号マップ事件",
    airDate: "January 29, 1996",
    isManga: true,
    synopsis: "The Detective Boys get involved in a treasure hunt that leads to danger. This episode introduces the core group of child characters.",
    season: 1,
    episodeNumber: 4
  },
  {
    id: 5,
    title: "Shinkansen Big Explosion Case",
    titleJapanese: "新幹線大爆破事件",
    airDate: "February 5, 1996",
    isManga: true,
    synopsis: "A bomb threat on the bullet train. Conan must solve the case quickly to prevent a disaster, showcasing his ability to work under extreme pressure.",
    season: 1,
    episodeNumber: 5
  },
  {
    id: 6,
    title: "Valentine Murder Case",
    titleJapanese: "バレンタイン殺人事件",
    airDate: "February 12, 1996",
    isManga: false,
    synopsis: "A murder case involving chocolate and Valentine's Day. This filler episode explores romantic themes while maintaining the mystery format.",
    season: 1,
    episodeNumber: 6
  },
  {
    id: 7,
    title: "Once-A-Month Present Threat Case",
    titleJapanese: "月いちプレゼント脅迫事件",
    airDate: "February 19, 1996",
    isManga: true,
    synopsis: "A threatening case involving monthly gifts. The episode develops the relationship between Conan and the people around him.",
    season: 1,
    episodeNumber: 7
  },
  {
    id: 8,
    title: "Art Gallery Owner Murder Case",
    titleJapanese: "美術館オーナー殺人事件",
    airDate: "February 26, 1996",
    isManga: true,
    synopsis: "A murder at an art gallery involving valuable paintings and hidden motives. Conan uncovers the truth behind artistic deception.",
    season: 1,
    episodeNumber: 8
  },
  {
    id: 9,
    title: "Tenkaichi Festival Fire Case",
    titleJapanese: "天下一夜祭殺人事件",
    airDate: "March 5, 1996",
    isManga: false,
    synopsis: "A murder during a traditional festival. This episode explores Japanese culture while maintaining the detective mystery format.",
    season: 1,
    episodeNumber: 9
  },
  {
    id: 10,
    title: "Pro Soccer Player Blackmail Case",
    titleJapanese: "プロサッカー選手脅迫事件",
    airDate: "March 12, 1996",
    isManga: true,
    synopsis: "A blackmail case involving a professional soccer player. The episode introduces themes of sports and celebrity that recur throughout the series.",
    season: 1,
    episodeNumber: 10
  },
  {
    id: 11,
    title: "Piano Sonata 'Moonlight' Murder Case",
    titleJapanese: "ピアノソナタ『月光』殺人事件",
    airDate: "April 8, 1996",
    isManga: true,
    storyline: "Moonlight Sonata Case",
    synopsis: "One of the most famous early cases involving a series of murders connected to Beethoven's Moonlight Sonata. This case deeply affects Conan and shapes his philosophy about justice.",
    season: 1,
    episodeNumber: 11
  },
  {
    id: 12,
    title: "Ayumi-chan Kidnapping Case",
    titleJapanese: "歩美ちゃん誘拐事件",
    airDate: "April 15, 1996",
    isManga: true,
    synopsis: "Ayumi gets kidnapped, and the Detective Boys must work together to save her. This episode strengthens the bond between the child characters.",
    season: 1,
    episodeNumber: 12
  },
  {
    id: 13,
    title: "Strange Person Hunt Murder Case",
    titleJapanese: "奇怪人間狩り殺人事件",
    airDate: "April 22, 1996",
    isManga: true,
    synopsis: "A bizarre murder case involving someone hunting people. The case challenges Conan's deductive abilities with its unusual circumstances.",
    season: 1,
    episodeNumber: 13
  },
  {
    id: 14,
    title: "Mystery Shooting Message Case",
    titleJapanese: "謎のメッセージ狙撃事件",
    airDate: "June 3, 1996",
    isManga: false,
    synopsis: "A sniper case with mysterious messages. This filler episode maintains tension while exploring different types of criminal methods.",
    season: 1,
    episodeNumber: 14
  },
  {
    id: 15,
    title: "Missing Corpse Murder Case",
    titleJapanese: "消えた死体殺人事件",
    airDate: "June 10, 1996",
    isManga: true,
    synopsis: "A murder where the corpse mysteriously disappears. Conan must solve the case despite the lack of physical evidence.",
    season: 1,
    episodeNumber: 15
  },
  {
    id: 16,
    title: "Antique Collector Murder Case",
    titleJapanese: "骨董品コレクター殺人事件",
    airDate: "June 17, 1996",
    isManga: false,
    synopsis: "A murder involving valuable antiques and collectors. The episode explores themes of greed and the value of historical objects.",
    season: 1,
    episodeNumber: 16
  },
  {
    id: 17,
    title: "Department Store Hijack Case",
    titleJapanese: "デパートジャック事件",
    airDate: "June 24, 1996",
    isManga: true,
    synopsis: "A hostage situation at a department store. Conan must use his wits to save the hostages while maintaining his cover as a child.",
    season: 1,
    episodeNumber: 17
  },
  {
    id: 18,
    title: "June Bride Murder Case",
    titleJapanese: "ジューンブライド殺人事件",
    airDate: "July 1, 1996",
    isManga: true,
    synopsis: "A murder during a wedding ceremony. The case explores themes of love, betrayal, and hidden relationships.",
    season: 1,
    episodeNumber: 18
  },
  {
    id: 19,
    title: "Elevator Murder Case",
    titleJapanese: "エレベーター殺人事件",
    airDate: "July 8, 1996",
    isManga: false,
    synopsis: "A murder in a confined elevator space. This locked-room mystery challenges both Conan and the audience to think creatively.",
    season: 1,
    episodeNumber: 19
  },
  {
    id: 20,
    title: "Haunted Mansion Murder Case",
    titleJapanese: "幽霊屋敷殺人事件",
    airDate: "July 15, 1996",
    isManga: true,
    synopsis: "A murder in a supposedly haunted mansion. Conan must separate supernatural claims from criminal reality.",
    season: 1,
    episodeNumber: 20
  },
  {
    id: 21,
    title: "TV Drama Location Murder Case",
    titleJapanese: "テレビドラマロケ殺人事件",
    airDate: "July 22, 1996",
    isManga: false,
    synopsis: "A murder during the filming of a TV drama. The case blurs the lines between fiction and reality.",
    season: 1,
    episodeNumber: 21
  },
  {
    id: 22,
    title: "Luxury Liner Serial Murder Case (Part 1)",
    titleJapanese: "豪華客船連続殺人事件（前編）",
    airDate: "July 29, 1996",
    isManga: true,
    storyline: "Luxury Liner Case",
    synopsis: "The first part of a complex murder case aboard a luxury cruise ship. Multiple murders create a tense atmosphere as Conan investigates.",
    season: 1,
    episodeNumber: 22
  },
  {
    id: 23,
    title: "Luxury Liner Serial Murder Case (Part 2)",
    titleJapanese: "豪華客船連続殺人事件（後編）",
    airDate: "August 5, 1996",
    isManga: true,
    storyline: "Luxury Liner Case",
    synopsis: "The conclusion of the luxury liner case. Conan reveals the complex truth behind the serial murders and the killer's identity.",
    season: 1,
    episodeNumber: 23
  },
  {
    id: 24,
    title: "The Mysterious Woman With Amnesia Case",
    titleJapanese: "謎の美女記憶喪失事件",
    airDate: "August 12, 1996",
    isManga: false,
    synopsis: "A woman with amnesia holds the key to a murder case. Conan must help her recover her memories to solve the mystery.",
    season: 1,
    episodeNumber: 24
  },
  {
    id: 25,
    title: "The False Kidnapping and Hostage Case",
    titleJapanese: "偽りの誘拐人質事件",
    airDate: "August 19, 1996",
    isManga: false,
    synopsis: "What appears to be a kidnapping case turns out to be more complex than initially thought. Conan uncovers the truth behind the deception.",
    season: 1,
    episodeNumber: 25
  }
];
