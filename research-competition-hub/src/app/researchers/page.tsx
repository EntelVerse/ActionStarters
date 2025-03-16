import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  Building,
  ChevronRight,
  Users,
  MicroscopeIcon,
  UserIcon,
  Mail,
  Search,
  Filter,
  SlidersHorizontal,
  GraduationCap
} from "lucide-react";

// Import mock data
import {
  mockUsers,
  mockResearchAreas,
  ResearchArea,
  ResearchCategories,
  getResearchAreasByIds,
  searchUsers
} from "@/lib/data";

export default function ResearchersPage() {
  // In a real app, we'd use state to filter and search
  const researchers = mockUsers;

  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg text-white p-8 mb-8 shadow-md">
        <h1 className="text-3xl font-bold mb-2">Find Researchers</h1>
        <p className="text-gray-100 max-w-3xl">
          Connect with researchers across different disciplines and institutions. Find potential team members for your next research project or competition.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Search researchers by name, university, or research area..."
              className="pl-10"
            />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Advanced Filters
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
              {/* Research Categories */}
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
                <h3 className="font-medium mb-3">Minimum Rating</h3>
                <div className="space-y-2">
                  {[0, 5, 7, 10].map(rating => (
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

              <Separator />

              {/* Availability */}
              <div>
                <h3 className="font-medium mb-3">Position</h3>
                <div className="space-y-2">
                  {['Professor', 'Associate Professor', 'Assistant Professor', 'Postdoctoral Researcher', 'Graduate Student'].map(position => (
                    <div key={position} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`position-${position}`}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor={`position-${position}`} className="ml-2 text-sm text-gray-700">
                        {position}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full mt-4">Apply Filters</Button>
            </CardContent>
          </Card>
        </div>

        {/* Researchers Grid */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">Researchers</h2>
              <p className="text-gray-600">Showing {researchers.length} researchers</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="text-sm border border-gray-300 rounded px-2 py-1">
                <option>Rating (Highest)</option>
                <option>Name (A-Z)</option>
                <option>Recently Active</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchers.map(researcher => (
              <Card key={researcher.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16 rounded-full bg-white border border-gray-200 flex-shrink-0">
                      {researcher.profileImage ? (
                        <Image
                          src={researcher.profileImage}
                          alt={researcher.name}
                          width={64}
                          height={64}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                          <UserIcon size={24} className="text-gray-400" />
                        </div>
                      )}
                      <div className="absolute -bottom-1 -right-1 bg-yellow-500 text-blue-900 rounded-full px-1.5 py-0.5 text-xs font-bold flex items-center">
                        <Star size={10} className="mr-0.5" /> {researcher.rating}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="text-lg">{researcher.name}</CardTitle>
                      <CardDescription className="flex items-center">
                        {researcher.position && (
                          <div className="flex items-center">
                            <GraduationCap size={14} className="mr-1" />
                            {researcher.position}
                            {researcher.university && <span className="mx-1">at</span>}
                          </div>
                        )}
                        {researcher.university && (
                          <div className="flex items-center">
                            <Building size={14} className="mr-1" />
                            {researcher.university}
                          </div>
                        )}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {researcher.bio && (
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">{researcher.bio}</p>
                  )}

                  {researcher.researchAreas && researcher.researchAreas.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {getResearchAreasByIds(researcher.researchAreas).slice(0, 3).map(area => (
                        <Badge key={area.id} variant="outline" className="text-xs">
                          <MicroscopeIcon className="h-3 w-3 mr-1" />
                          {area.name}
                        </Badge>
                      ))}
                      {researcher.researchAreas.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{researcher.researchAreas.length - 3} more
                        </Badge>
                      )}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="border-t pt-3 flex justify-between">
                  <Button size="sm" variant="outline" className="text-blue-600">
                    <Mail className="h-3 w-3 mr-1" /> Contact
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <Link href={`/profile/${researcher.id}`}>
                      View Profile <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm" className="bg-blue-600 text-white">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <span>...</span>
              <Button variant="outline" size="sm">5</Button>
              <Button variant="outline" size="sm">Next</Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
