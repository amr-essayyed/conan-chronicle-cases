
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

interface EpisodeFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  typeFilter: string;
  onTypeFilterChange: (value: string) => void;
  totalEpisodes: number;
  filteredCount: number;
}

export const EpisodeFilter = ({
  searchTerm,
  onSearchChange,
  typeFilter,
  onTypeFilterChange,
  totalEpisodes,
  filteredCount
}: EpisodeFilterProps) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search episodes by title or synopsis..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-gray-400 w-4 h-4" />
            <Select value={typeFilter} onValueChange={onTypeFilterChange}>
              <SelectTrigger className="w-40 bg-gray-900 border-gray-600 text-white">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-600">
                <SelectItem value="all" className="text-white focus:bg-gray-700">All Episodes</SelectItem>
                <SelectItem value="manga" className="text-white focus:bg-gray-700">Manga Only</SelectItem>
                <SelectItem value="filler" className="text-white focus:bg-gray-700">Filler Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="bg-gray-700 text-gray-200 border-gray-600">
            Showing {filteredCount} of {totalEpisodes} episodes
          </Badge>
        </div>
      </div>
    </div>
  );
};
