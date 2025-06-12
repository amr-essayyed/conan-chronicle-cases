
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Bookmark, ExternalLink } from "lucide-react";
import { Episode } from "@/data/episodes";

interface EpisodeCardProps {
  episode: Episode;
}

export const EpisodeCard = ({ episode }: EpisodeCardProps) => {
  return (
    <Card className="bg-gray-900 border-gray-700 hover:border-blue-400 transition-colors duration-300 shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold text-white">
            Episode {episode.number}: {episode.title}
          </CardTitle>
          <Badge 
            variant={episode.type === 'manga' ? 'default' : 'secondary'}
            className={episode.type === 'manga' 
              ? 'bg-red-600 hover:bg-red-700 text-white border-red-500' 
              : 'bg-gray-600 hover:bg-gray-700 text-gray-200 border-gray-500'
            }
          >
            {episode.type === 'manga' ? (
              <>
                <Bookmark className="w-3 h-3 mr-1" />
                Manga
              </>
            ) : (
              'Filler'
            )}
          </Badge>
        </div>
        <div className="flex items-center text-gray-400 text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          {new Date(episode.airDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
        {episode.storyArc && (
          <Badge variant="outline" className="w-fit bg-blue-900 text-blue-200 border-blue-600">
            {episode.storyArc}
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 leading-relaxed mb-4">{episode.synopsis}</p>
        <Button 
          variant="outline" 
          size="sm"
          className="bg-blue-900 hover:bg-blue-800 text-blue-200 border-blue-600"
          onClick={() => window.open(episode.link, '_blank')}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View on Wiki
        </Button>
      </CardContent>
    </Card>
  );
};
