
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, BookOpen, Tv } from "lucide-react";

interface Episode {
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

interface EpisodeCardProps {
  episode: Episode;
  index: number;
}

const EpisodeCard = ({ episode, index }: EpisodeCardProps) => {
  return (
    <div className="relative flex items-center w-full">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-700"></div>
      
      {/* Timeline dot */}
      <div className={`relative z-10 flex-shrink-0 w-6 h-6 rounded-full border-4 ${
        episode.isManga ? 'bg-amber-400 border-amber-600' : 'bg-blue-500 border-blue-700'
      } ml-5`}></div>
      
      {/* Episode card */}
      <Card className={`ml-8 mb-6 w-full transition-all duration-300 hover:shadow-lg ${
        index % 2 === 0 ? 'hover:translate-x-2' : 'hover:-translate-x-2'
      }`}>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <div className="flex items-center gap-2 mb-2 sm:mb-0">
              <Badge variant={episode.isManga ? "default" : "secondary"} className="flex items-center gap-1">
                {episode.isManga ? <BookOpen className="w-3 h-3" /> : <Tv className="w-3 h-3" />}
                {episode.isManga ? "Manga" : "Filler"}
              </Badge>
              <span className="text-sm text-muted-foreground">
                Episode {episode.episodeNumber}
              </span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {episode.airDate}
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            {episode.title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-3 italic">
            {episode.titleJapanese}
          </p>
          
          {episode.storyline && (
            <div className="mb-3">
              <Badge variant="outline" className="mb-2">
                {episode.storyline}
              </Badge>
            </div>
          )}
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {episode.synopsis}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EpisodeCard;
