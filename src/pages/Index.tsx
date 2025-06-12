import { useState, useMemo } from "react";
import { EpisodeCard } from "@/components/EpisodeCard";
import { EpisodeFilter } from "@/components/EpisodeFilter";
import { episodes } from "@/data/episodes";
import { Badge } from "@/components/ui/badge";
import { Eye, Clock, BookOpen } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("manga");

  const filteredEpisodes = useMemo(() => {
    return episodes.filter(episode => {
      const matchesSearch = episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           episode.synopsis.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           episode.storyArc?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = typeFilter === "all" || episode.type === typeFilter;
      
      return matchesSearch && matchesType;
    });
  }, [searchTerm, typeFilter]);

  const stats = useMemo(() => {
    const mangaCount = episodes.filter(ep => ep.type === 'manga').length;
    const fillerCount = episodes.filter(ep => ep.type === 'filler').length;
    return { mangaCount, fillerCount };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Header */}
      <div className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Detective Conan
            </h1>
            <p className="text-xl text-blue-200 mb-4">Episode Timeline</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="bg-red-900/50 text-red-200 border-red-600">
                <BookOpen className="w-4 h-4 mr-2" />
                {stats.mangaCount} Manga Episodes
              </Badge>
              <Badge variant="outline" className="bg-gray-700/50 text-gray-200 border-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                {stats.fillerCount} Filler Episodes
              </Badge>
              <Badge variant="outline" className="bg-blue-900/50 text-blue-200 border-blue-600">
                <Eye className="w-4 h-4 mr-2" />
                {episodes.length} Total Episodes
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <EpisodeFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          typeFilter={typeFilter}
          onTypeFilterChange={setTypeFilter}
          totalEpisodes={episodes.length}
          filteredCount={filteredEpisodes.length}
        />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-red-400 to-blue-400"></div>
          
          <div className="space-y-8">
            {filteredEpisodes.map((episode, index) => (
              <div key={episode.number} className="relative flex items-start">
                {/* Timeline marker */}
                <div className="absolute left-2 md:left-6 w-4 h-4 rounded-full border-2 border-white bg-gradient-to-r from-blue-500 to-red-500 z-10"></div>
                
                {/* Content */}
                <div className="ml-12 md:ml-20 flex-1">
                  <EpisodeCard episode={episode} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredEpisodes.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-xl mb-4">No episodes found</div>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-400">
            Detective Conan Episode Guide • Data includes episodes 1-20 as sample
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Created for fans, by fans
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
