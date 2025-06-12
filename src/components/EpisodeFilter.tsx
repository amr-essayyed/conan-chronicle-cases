
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

interface EpisodeFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filterType: string;
  onFilterChange: (value: string) => void;
  totalEpisodes: number;
  filteredCount: number;
}

const EpisodeFilter = ({
  searchTerm,
  onSearchChange,
  filterType,
  onFilterChange,
  totalEpisodes,
  filteredCount
}: EpisodeFilterProps) => {
  return (
    <div className="bg-card rounded-lg p-6 mb-8 border shadow-sm">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search episodes..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <Select value={filterType} onValueChange={onFilterChange}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter episodes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Episodes</SelectItem>
                <SelectItem value="manga">Manga Only</SelectItem>
                <SelectItem value="filler">Filler Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge variant="outline">
            {filteredCount} of {totalEpisodes} episodes
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default EpisodeFilter;
