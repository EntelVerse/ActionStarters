import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  Building,
  BookOpen,
  CalendarCheck,
  ChevronRight,
  Users,
  Award,
  MicroscopeIcon,
  Trophy,
  User as UserIcon,
  Mail,
  GraduationCap,
  Clock
} from "lucide-react";

// Import mock data
import {
  getUserWithDetails,
  getResearchAreasByIds,
  getTeamsByUserId,
  mockUsers,
  mockResearchAreas,
  ResearchArea
} from "@/lib/data";

export default function ProfilePage() {
  // For demonstration we'll use a specific user, normally we'd get from auth
  const userId = 'user1';
  const userDetails = getUserWithDetails(userId);

  if (!userDetails) {
    return <div className="container mx-auto py-10 text-center">User not found</div>;
  }

  const { name, profileImage, bio, university, department, position, rating, badges, researchAreasDetails, teams, competitionHistory } = userDetails;

  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      {/* Profile header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg text-white p-8 mb-8 shadow-md">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative w-32 h-32 rounded-full bg-white p-1 flex-shrink-0">
            {profileImage ? (
              <Image
                src={profileImage}
                alt={name}
                width={128}
                height={128}
                className="rounded-full"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                <UserIcon size={48} className="text-gray-400" />
              </div>
            )}
            <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-blue-900 rounded-full px-2 py-1 text-sm font-bold flex items-center">
              <Star size={14} className="mr-1" /> {rating}
            </div>
          </div>

          <div className="text-center md:text-left flex-grow">
            <h1 className="text-3xl font-bold">{name}</h1>

            <div className="flex flex-col md:flex-row gap-1 mt-2 items-center md:items-start">
              {position && (
                <div className="flex items-center">
                  <GraduationCap size={16} className="mr-1" />
                  <span>{position}</span>
                </div>
              )}

              {position && (university || department) && (
                <span className="hidden md:inline mx-2">•</span>
              )}

              {(university || department) && (
                <div className="flex items-center">
                  <Building size={16} className="mr-1" />
                  <span>{department ? `${department}, ` : ''}{university}</span>
                </div>
              )}
            </div>

            {bio && (
              <p className="mt-3 text-gray-100 max-w-2xl">{bio}</p>
            )}

            {badges && badges.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {badges.map(badge => (
                  <Badge key={badge} className="bg-blue-600">
                    <Trophy size={12} className="mr-1" />
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-4 md:mt-0">
            <Button className="bg-white text-blue-900 hover:bg-gray-100">
              <Mail size={16} className="mr-2" /> Contact
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-800">
              <UserIcon size={16} className="mr-2" /> Edit Profile
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Stats & Research Areas */}
        <div className="space-y-6">
          {/* Researcher Stats Card */}
          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-lg flex items-center">
                <Award className="mr-2 h-5 w-5 text-blue-600" /> Researcher Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Rating:</span>
                  <span className="font-semibold flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" /> {rating}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Competitions:</span>
                  <span className="font-semibold">{competitionHistory.length}</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Teams:</span>
                  <span className="font-semibold">{teams.length}</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Research Areas:</span>
                  <span className="font-semibold">{researchAreasDetails.length}</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Member Since:</span>
                  <span className="font-semibold">{new Date(userDetails.createdAt).getFullYear()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Areas Card */}
          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-lg flex items-center">
                <MicroscopeIcon className="mr-2 h-5 w-5 text-blue-600" /> Research Areas
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {researchAreasDetails.map((area) => (
                  <div key={area.id} className="bg-gray-50 p-3 rounded-md">
                    <div className="font-medium">{area.name}</div>
                    <div className="text-sm text-gray-500">{area.category}</div>
                  </div>
                ))}

                <Button variant="outline" className="w-full mt-4">
                  <PlusCircle className="mr-2 h-4 w-4" /> Add Research Area
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Middle and right columns - Tabs for Teams, History, etc. */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="teams">
            <TabsList className="grid grid-cols-3 w-full mb-6">
              <TabsTrigger value="teams">My Teams</TabsTrigger>
              <TabsTrigger value="competitions">Competition History</TabsTrigger>
              <TabsTrigger value="matches">Team Matches</TabsTrigger>
            </TabsList>

            {/* Teams Tab */}
            <TabsContent value="teams" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Current Teams</h3>
                <Button>
                  Create Team
                </Button>
              </div>

              {teams.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {teams.map((team) => (
                    <Card key={team.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      {team.image && (
                        <div className="h-32 w-full relative bg-gray-100">
                          <Image
                            src={team.image}
                            alt={team.name}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      )}
                      <CardHeader className={team.image ? 'pt-4' : ''}>
                        <CardTitle className="text-lg">{team.name}</CardTitle>
                        <CardDescription className="flex items-center">
                          <Users size={14} className="mr-1" />
                          {team.members.length} members
                          <span className="mx-2">•</span>
                          <Star size={14} className="mr-1" />
                          {team.averageRating || '-'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-gray-600 line-clamp-2">{team.description}</p>

                        {team.researchAreas && team.researchAreas.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-1">
                            {getResearchAreasByIds(team.researchAreas).slice(0, 3).map(area => (
                              <Badge key={area.id} variant="secondary" className="text-xs">
                                {area.name}
                              </Badge>
                            ))}
                            {team.researchAreas.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{team.researchAreas.length - 3} more
                              </Badge>
                            )}
                          </div>
                        )}
                      </CardContent>
                      <CardFooter className="border-t pt-3">
                        <Button variant="ghost" size="sm" className="ml-auto" asChild>
                          <Link href={`/teams/${team.id}`}>
                            View Team <ChevronRight size={16} className="ml-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="py-8 text-center">
                    <p className="text-gray-500 mb-4">You are not a member of any teams yet.</p>
                    <Button>Find a Team</Button>
                  </CardContent>
                </Card>
              )}

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Team Invitations</h3>
                <Card>
                  <CardContent className="py-6 text-center">
                    <p className="text-gray-500">You have no pending team invitations.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Competition History Tab */}
            <TabsContent value="competitions">
              <h3 className="text-xl font-semibold mb-4">Competition History</h3>

              {competitionHistory.length > 0 ? (
                <div className="space-y-4">
                  {competitionHistory.map((participation, idx) => (
                    <Card key={idx}>
                      <CardHeader className="pb-3">
                        <div className="flex justify-between">
                          <CardTitle className="text-lg">{participation.competitionId}</CardTitle>
                          <Badge className={participation.result?.includes('1st') ? 'bg-yellow-500' : participation.result?.includes('2nd') ? 'bg-gray-400' : participation.result?.includes('3rd') ? 'bg-amber-600' : 'bg-blue-600'}>
                            {participation.result || 'Participated'}
                          </Badge>
                        </div>
                        <CardDescription>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            {participation.year}
                            <span className="mx-2">•</span>
                            <Users size={14} className="mr-1" />
                            Team: {participation.teamId}
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center text-sm text-gray-600">
                          <GraduationCap size={14} className="mr-1" />
                          Role: {participation.role}

                          {participation.pointsEarned && (
                            <>
                              <span className="mx-2">•</span>
                              <Star size={14} className="mr-1" />
                              Points Earned: {participation.pointsEarned}
                            </>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-3">
                        <Button variant="ghost" size="sm" className="ml-auto" asChild>
                          <Link href={`/competitions/${participation.competitionId}`}>
                            View Competition <ChevronRight size={16} className="ml-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="py-8 text-center">
                    <p className="text-gray-500 mb-4">No competition history yet.</p>
                    <Button asChild>
                      <Link href="/grants">Browse Opportunities</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Team Matches Tab */}
            <TabsContent value="matches">
              <h3 className="text-xl font-semibold mb-4">Team Matches</h3>
              <Card>
                <CardContent className="py-8 text-center">
                  <p className="text-gray-500 mb-4">No matching teams found based on your research interests.</p>
                  <Button>Update Research Areas</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

// Helper component for Plus icon
function PlusCircle({className, ...props}: React.SVGProps<SVGSVGElement> & {className?: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}
