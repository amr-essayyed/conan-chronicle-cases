
import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import EpisodeCard from "@/components/EpisodeCard";
import EpisodeFilter from "@/components/EpisodeFilter";
import { episodes } from "@/data/episodes";
import { Search, BookOpen, Tv, Clock } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredEpisodes = useMemo(() => {
    return episodes.filter(episode => {
      const matchesSearch = episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           episode.titleJapanese.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           episode.synopsis.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (episode.storyline && episode.storyline.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesFilter = filterType === "all" || 
                           (filterType === "manga" && episode.isManga) ||
                           (filterType === "filler" && !episode.isManga);
      
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterType]);

  const mangaCount = episodes.filter(ep => ep.isManga).length;
  const fillerCount = episodes.filter(ep => !ep.isManga).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Detective Conan
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-blue-100">
              名探偵コナン
            </p>
            <p className="text-lg text-blue-200 mb-8">
              Complete Episode Timeline & Story Guide
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="w-4 h-4" />
                <span>{episodes.length} Episodes</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm rounded-full px-4 py-2">
                <BookOpen className="w-4 h-4" />
                <span>{mangaCount} Manga</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Tv className="w-4 h-4" />
                <span>{fillerCount} Filler</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <EpisodeFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filterType={filterType}
          onFilterChange={setFilterType}
          totalEpisodes={episodes.length}
          filteredCount={filteredEpisodes.length}
        />

        {/* Legend */}
        <div className="bg-card rounded-lg p-4 mb-8 border shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Legend</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-amber-400 border-2 border-amber-600"></div>
              <Badge variant="default" className="flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                Manga Episode
              </Badge>
              <span className="text-sm text-muted-foreground">Based on original manga storyline</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-blue-700"></div>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Tv className="w-3 h-3" />
                Filler Episode
              </Badge>
              <span className="text-sm text-muted-foreground">Anime-original content</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {filteredEpisodes.length > 0 ? (
            <div className="space-y-0">
              {filteredEpisodes.map((episode, index) => (
                <EpisodeCard 
                  key={episode.id} 
                  episode={episode} 
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No episodes found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>Detective Conan (名探偵コナン) © Gosho Aoyama / Shogakukan</p>
          <p className="mt-2">This fan site is for informational purposes only</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
