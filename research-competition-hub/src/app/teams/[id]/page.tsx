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
  ChevronRight,
  Clock,
  Calendar,
  Users,
  Award,
  MicroscopeIcon,
  Trophy,
  UserPlus,
  Mail,
  Shield,
  Info,
  CheckCircle,
  Clock2,
  Link as LinkIcon
} from "lucide-react";

// Import mock data
import {
  getTeamById,
  getUserById,
  getCompetitionById,
  getResearchAreasByIds,
  TeamMember
} from "@/lib/data";

interface TeamDetailPageProps {
  params: {
    id: string;
  }
}

export default function TeamDetailPage({ params }: TeamDetailPageProps) {
  // Get team data
  const team = getTeamById(params.id);

  if (!team) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Team Not Found</h1>
        <p className="mb-8 text-gray-600">The team you are looking for does not exist or has been removed.</p>
        <Button asChild>
          <Link href="/teams">
            View All Teams
          </Link>
        </Button>
      </div>
    );
  }

  // Get related data
  const competition = getCompetitionById(team.competitionId);
  const owner = getUserById(team.ownerId);
  const members = team.members.map(member => {
    const user = getUserById(member.userId);
    return { ...member, user };
  });
  const researchAreas = getResearchAreasByIds(team.researchAreas);

  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      {/* Team header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg text-white p-8 mb-8 shadow-md">
        <div className="flex flex-col md:flex-row gap-8">
          {team.image && (
            <div className="w-full md:w-64 h-48 md:h-64 rounded-lg overflow-hidden bg-white flex-shrink-0">
              <div className="relative w-full h-full">
                <Image
                  src={team.image}
                  alt={team.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          )}

          <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
              <h1 className="text-3xl font-bold">{team.name}</h1>
              <Badge className={
                team.status === 'recruiting' ? 'bg-green-500' :
                team.status === 'active' ? 'bg-blue-500' :
                team.status === 'complete' ? 'bg-purple-500' :
                'bg-gray-500'
              }>
                {team.status.charAt(0).toUpperCase() + team.status.slice(1)}
              </Badge>
              {team.averageRating && (
                <div className="flex items-center bg-yellow-500 text-blue-900 px-2 py-1 rounded-md text-sm font-medium">
                  <Star className="mr-1 h-4 w-4" /> {team.averageRating} Rating
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {researchAreas.map(area => (
                <Badge key={area.id} className="bg-blue-600">
                  <MicroscopeIcon className="h-3 w-3 mr-1" />
                  {area.name}
                </Badge>
              ))}
            </div>

            <p className="mt-4 text-gray-100">{team.description}</p>

            <div className="mt-6 flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex items-center">
                <Shield className="mr-2 h-5 w-5 text-blue-300" />
                <div>
                  <div className="text-sm text-gray-300">Team Lead</div>
                  <div>{owner?.name}</div>
                </div>
              </div>

              <div className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-blue-300" />
                <div>
                  <div className="text-sm text-gray-300">Team Size</div>
                  <div>{team.members.length} Members</div>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-blue-300" />
                <div>
                  <div className="text-sm text-gray-300">Created</div>
                  <div>{new Date(team.createdAt).toLocaleDateString()}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-0 flex md:flex-col gap-4">
            {team.status === 'recruiting' && (
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                <UserPlus className="mr-2 h-4 w-4" />
                Apply to Join
              </Button>
            )}
            <Button variant="outline" className="border-white text-white hover:bg-blue-800">
              <Mail className="mr-2 h-4 w-4" />
              Contact Team
            </Button>
          </div>
        </div>
      </div>

      {/* Main content with tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Competition info */}
        <div className="space-y-6">
          {competition && (
            <Card>
              <CardHeader className="bg-gray-50 border-b">
                <CardTitle className="text-lg flex items-center">
                  <Trophy className="mr-2 h-5 w-5 text-blue-600" /> Associated Competition
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">{competition.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{competition.description.substring(0, 150)}...</p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Deadline</p>
                      <p className="font-medium">{competition.deadline}</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Prize</p>
                      <p className="font-medium">{competition.amount}</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start">
                    <Building className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Organization</p>
                      <p className="font-medium">{competition.organization}</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Team Size</p>
                      <p className="font-medium">{competition.teamSizeMin} - {competition.teamSizeMax} members</p>
                    </div>
                  </div>

                  {competition.applicationLink && (
                    <div className="mt-6">
                      <Button asChild className="w-full">
                        <a href={competition.applicationLink} target="_blank" rel="noopener noreferrer">
                          <LinkIcon className="mr-2 h-4 w-4" /> Visit Competition Site
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t">
                <Button variant="ghost" size="sm" className="ml-auto" asChild>
                  <Link href={`/grants/${competition.id}`}>
                    View Competition Details <ChevronRight size={16} className="ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Team Stats Card */}
          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-lg flex items-center">
                <Info className="mr-2 h-5 w-5 text-blue-600" /> Team Information
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Status:</span>
                  <Badge className={
                    team.status === 'recruiting' ? 'bg-green-500' :
                    team.status === 'active' ? 'bg-blue-500' :
                    team.status === 'complete' ? 'bg-purple-500' :
                    'bg-gray-500'
                  }>
                    {team.status.charAt(0).toUpperCase() + team.status.slice(1)}
                  </Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Created:</span>
                  <span className="font-medium">{new Date(team.createdAt).toLocaleDateString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Last Updated:</span>
                  <span className="font-medium">{new Date(team.updatedAt).toLocaleDateString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Privacy:</span>
                  <span className="font-medium">{team.private ? 'Private' : 'Public'}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Middle and right columns - Tabs */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="members">
            <TabsList className="grid grid-cols-3 w-full mb-6">
              <TabsTrigger value="members">Team Members</TabsTrigger>
              <TabsTrigger value="details">Research Details</TabsTrigger>
              <TabsTrigger value="positions">Open Positions</TabsTrigger>
            </TabsList>

            {/* Members Tab */}
            <TabsContent value="members" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Team Members ({members.length})</h3>
                {team.status === 'recruiting' && (
                  <Badge className="bg-green-500">Recruiting</Badge>
                )}
              </div>

              <div className="space-y-4">
                {members.map((member) => (
                  <Card key={member.userId} className="overflow-hidden">
                    <div className="flex items-start p-4 gap-4">
                      <div className="relative w-12 h-12 rounded-full bg-white border border-gray-200 flex-shrink-0">
                        {member.user?.profileImage ? (
                          <Image
                            src={member.user.profileImage}
                            alt={member.user.name}
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        ) : (
                          <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                            <Users className="h-6 w-6 text-gray-400" />
                          </div>
                        )}
                        {member.status === 'joined' && (
                          <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-0.5">
                            <CheckCircle className="h-3 w-3" />
                          </div>
                        )}
                        {member.status === 'invited' && (
                          <div className="absolute -bottom-1 -right-1 bg-orange-500 text-white rounded-full p-0.5">
                            <Clock2 className="h-3 w-3" />
                          </div>
                        )}
                      </div>

                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{member.user?.name || 'Unknown User'}</h4>
                            <p className="text-sm text-gray-500">{member.role}</p>
                          </div>

                          {member.userId === team.ownerId && (
                            <Badge className="bg-blue-600">Team Lead</Badge>
                          )}
                        </div>

                        {member.user?.researchAreas && member.user.researchAreas.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {getResearchAreasByIds(member.user.researchAreas).slice(0, 3).map(area => (
                              <Badge key={area.id} variant="outline" className="text-xs">
                                {area.name}
                              </Badge>
                            ))}
                            {member.user.researchAreas.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{member.user.researchAreas.length - 3} more
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {member.user?.rating !== undefined && (
                          <div className="flex items-center bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-xs">
                            <Star className="mr-1 h-3 w-3 text-yellow-500" /> {member.user.rating}
                          </div>
                        )}

                        <Button size="sm" variant="ghost" asChild>
                          <Link href={`/profile/${member.userId}`}>
                            View Profile
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {member.status === 'invited' && (
                      <div className="bg-orange-50 border-t border-orange-200 px-4 py-2 text-sm text-orange-700">
                        Invitation pending. Joined {new Date(member.joinedAt).toLocaleDateString()}
                      </div>
                    )}
                  </Card>
                ))}
              </div>

              {team.status === 'recruiting' && (
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold flex items-center text-green-800 mb-2">
                      <UserPlus className="mr-2 h-5 w-5" /> Join This Team
                    </h3>
                    <p className="text-green-700 mb-4">This team is currently recruiting members. Apply to join and collaborate on exciting research!</p>
                    <Button className="bg-green-600 hover:bg-green-700">Apply to Join</Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Research Details Tab */}
            <TabsContent value="details">
              <Card>
                <CardHeader>
                  <CardTitle>Research Focus & Expertise</CardTitle>
                  <CardDescription>Detailed information about the team's research areas and expertise</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Research Areas</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {researchAreas.map(area => (
                        <div key={area.id} className="flex items-center bg-gray-50 p-3 rounded-md">
                          <MicroscopeIcon className="h-5 w-5 text-blue-600 mr-3" />
                          <div>
                            <div className="font-medium">{area.name}</div>
                            <div className="text-sm text-gray-500">{area.category}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Team Expertise</h3>
                    <p className="text-gray-600 mb-4">
                      This team combines expertise from multiple disciplines to address the research challenge.
                    </p>

                    <div className="space-y-3">
                      {members.map(member => (
                        <div key={member.userId} className="bg-blue-50 p-3 rounded-md">
                          <div className="font-medium">{member.user?.name}: {member.role}</div>
                          {member.user?.researchAreas && member.user.researchAreas.length > 0 && (
                            <div className="mt-1 flex flex-wrap gap-1">
                              {getResearchAreasByIds(member.user.researchAreas).map(area => (
                                <Badge key={area.id} variant="outline" className="text-xs bg-white">
                                  {area.name}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Open Positions Tab */}
            <TabsContent value="positions">
              {team.status === 'recruiting' ? (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Open Positions</CardTitle>
                      <CardDescription>
                        This team is currently recruiting new members with the following expertise
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-green-50 border border-green-200 rounded-md p-4">
                          <h3 className="font-semibold text-green-800 mb-2">Position: Data Scientist</h3>
                          <p className="text-gray-700 mb-3">
                            Looking for a data scientist with experience in machine learning and data analysis to help with processing research data.
                          </p>
                          <div className="flex flex-wrap gap-1 mb-4">
                            <Badge variant="outline" className="bg-white">Machine Learning</Badge>
                            <Badge variant="outline" className="bg-white">Data Analysis</Badge>
                            <Badge variant="outline" className="bg-white">Python</Badge>
                          </div>
                          <Button className="bg-green-600 hover:bg-green-700">Apply for This Position</Button>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-md p-4">
                          <h3 className="font-semibold text-green-800 mb-2">Position: Research Assistant</h3>
                          <p className="text-gray-700 mb-3">
                            Seeking a research assistant with background in biochemistry to help with laboratory experiments and data collection.
                          </p>
                          <div className="flex flex-wrap gap-1 mb-4">
                            <Badge variant="outline" className="bg-white">Biochemistry</Badge>
                            <Badge variant="outline" className="bg-white">Laboratory Experience</Badge>
                          </div>
                          <Button className="bg-green-600 hover:bg-green-700">Apply for This Position</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Apply to Join</CardTitle>
                      <CardDescription>
                        Don't see a position that matches your skills? You can still apply to join the team.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        If you believe your skills and expertise would benefit this research team, you can submit a general application to join. Please describe your relevant experience and how you can contribute to the team's goals.
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700">Submit General Application</Button>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <h3 className="text-xl font-semibold mb-2">No Open Positions</h3>
                    <p className="text-gray-600 mb-6">This team is not currently recruiting new members.</p>
                    <Button variant="outline" asChild>
                      <Link href="/teams">Browse Other Teams</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
