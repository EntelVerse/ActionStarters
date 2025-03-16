import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  ChevronRight,
  Users,
  MicroscopeIcon,
  Search,
  Filter,
  SlidersHorizontal,
  Calendar,
  Trophy,
  UserPlus,
  BriefcaseBusiness
} from "lucide-react";

// Import mock data
import {
  mockTeams,
  mockCompetitions,
  TeamStatuses,
  ResearchCategories,
  getResearchAreasByIds,
  getUserById,
  getCompetitionById
} from "@/lib/data";

export default function TeamsPage() {
  // In a real app, we'd use state to filter and search
  const teams = mockTeams;

  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg text-white p-8 mb-8 shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Teams</h1>
            <p className="text-gray-100 max-w-3xl">
              Browse research teams or create your own. Join forces with other researchers to tackle complex scientific challenges together.
            </p>
          </div>
          <Button className="mt-4 md:mt-0 bg-white text-blue-900 hover:bg-gray-100">
            Create a Team
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Search teams by name, description, or research area..."
              className="pl-10"
            />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
        </div>
      </div>

      {/* Main Content - Grid with sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar with filters */}
        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-lg flex items-center">
                <SlidersHorizontal className="mr-2 h-5 w-5 text-blue-600" /> Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              {/* Team Status */}
              <div>
                <h3 className="font-medium mb-3">Team Status</h3>
                <div className="space-y-2">
                  {Object.values(TeamStatuses).map(status => (
                    <div key={status} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`status-${status}`}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor={`status-${status}`} className="ml-2 text-sm text-gray-700 capitalize">
                        {status}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Research Areas */}
              <div>
                <h3 className="font-medium mb-3">Research Areas</h3>
                <div className="space-y-2 max-h-52 overflow-y-auto pr-2">
                  {ResearchCategories.map(category => (
                    <div key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`category-${category}`}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Minimum Rating */}
              <div>
                <h3 className="font-medium mb-3">Minimum Team Rating</h3>
                <div className="space-y-2">
                  {[0, 5, 7, 9].map(rating => (
                    <div key={rating} className="flex items-center">
                      <input
                        type="radio"
                        id={`rating-${rating}`}
                        name="min-rating"
                        value={rating}
                        className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor={`rating-${rating}`} className="ml-2 text-sm text-gray-700 flex items-center">
                        {rating === 0 ? 'Any' : (
                          <>
                            <Star className="h-3 w-3 text-yellow-500 mr-1" /> {rating}+
                          </>
                        )}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full mt-4">Apply Filters</Button>
            </CardContent>
          </Card>
        </div>

        {/* Teams Grid */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">All Teams</h2>
              <p className="text-gray-600">Showing {teams.length} teams</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="text-sm border border-gray-300 rounded px-2 py-1">
                <option>Recently Updated</option>
                <option>Rating (Highest)</option>
                <option>Name (A-Z)</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {teams.map(team => {
              const competition = getCompetitionById(team.competitionId);
              const teamOwner = getUserById(team.ownerId);

              return (
                <Card key={team.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    {team.image && (
                      <div className="md:col-span-1 h-full">
                        <div className="h-48 md:h-full w-full relative bg-gray-100">
                          <Image
                            src={team.image}
                            alt={team.name}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      </div>
                    )}

                    <div className={`md:col-span-${team.image ? '3' : '4'} flex flex-col`}>
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">{team.name}</CardTitle>
                            <CardDescription className="flex items-center mt-1">
                              <BriefcaseBusiness size={14} className="mr-1" />
                              {teamOwner?.name}
                              <span className="mx-2">•</span>
                              <Users size={14} className="mr-1" />
                              {team.members.length} member{team.members.length !== 1 ? 's' : ''}
                              {team.averageRating && (
                                <>
                                  <span className="mx-2">•</span>
                                  <Star size={14} className="mr-1 text-yellow-500" />
                                  {team.averageRating}
                                </>
                              )}
                            </CardDescription>
                          </div>
                          <Badge className={
                            team.status === 'recruiting' ? 'bg-green-500' :
                            team.status === 'active' ? 'bg-blue-500' :
                            team.status === 'complete' ? 'bg-purple-500' :
                            'bg-gray-500'
                          }>
                            {team.status.charAt(0).toUpperCase() + team.status.slice(1)}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent className="pb-3 pt-0 flex-grow">
                        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{team.description}</p>

                        {competition && (
                          <div className="flex items-center text-sm text-gray-600 mb-3">
                            <Trophy size={14} className="mr-1 text-blue-600" />
                            <span className="mr-2">Competition:</span>
                            <Link href={`/grants/${competition.id}`} className="text-blue-600 hover:underline">
                              {competition.title}
                            </Link>
                          </div>
                        )}

                        {competition && (
                          <div className="flex items-center text-sm text-gray-600 mb-3">
                            <Calendar size={14} className="mr-1 text-blue-600" />
                            <span className="mr-2">Deadline:</span>
                            {competition.deadline}
                          </div>
                        )}

                        {team.researchAreas && team.researchAreas.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {getResearchAreasByIds(team.researchAreas).map(area => (
                              <Badge key={area.id} variant="outline" className="text-xs">
                                <MicroscopeIcon className="h-3 w-3 mr-1" />
                                {area.name}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>

                      <CardFooter className="border-t pt-3 flex justify-between">
                        {team.status === 'recruiting' && (
                          <Button size="sm" variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                            <UserPlus className="h-3 w-3 mr-1" /> Apply to Join
                          </Button>
                        )}

                        {team.status !== 'recruiting' && (
                          <div></div> // Empty div to keep the layout consistent
                        )}

                        <Button size="sm" variant="ghost" asChild>
                          <Link href={`/teams/${team.id}`}>
                            View Team <ChevronRight size={16} className="ml-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm" className="bg-blue-600 text-white">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <span>...</span>
              <Button variant="outline" size="sm">Next</Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
