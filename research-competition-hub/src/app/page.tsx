import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ArrowRightIcon, MicroscopeIcon, BookOpen, Award, Globe, Users, Star, Search } from "lucide-react";

// Mock data for competitions
const featuredCompetitions = [
  {
    id: 1,
    title: "National Science Foundation SBIR/STTR Research Grant",
    category: "grants",
    description: "Supports small businesses engaged in innovative research. Phase I grants up to $275,000 for 6-12 months of concept development.",
    deadline: "May 15, 2025",
    organization: "National Science Foundation",
    amount: "$275,000",
  },
  {
    id: 2,
    title: "NIH Early-Stage Investigator Research Award",
    category: "awards",
    description: "Recognizes promising early-career scientists conducting groundbreaking biomedical research projects to improve human health.",
    deadline: "June 30, 2025",
    organization: "National Institutes of Health",
    amount: "$350,000",
  },
  {
    id: 3,
    title: "International Climate Solutions Challenge",
    category: "funding",
    description: "Funds innovative research proposals addressing climate change through technological solutions or policy frameworks.",
    deadline: "August 12, 2025",
    organization: "Global Environmental Research Initiative",
    amount: "$500,000",
  },
  {
    id: 4,
    title: "Annual Breakthrough in Quantum Computing Award",
    category: "awards",
    description: "Recognizes significant advancements in quantum computing research with transformative potential for the field.",
    deadline: "September 5, 2025",
    organization: "International Quantum Society",
    amount: "$100,000",
  },
  {
    id: 5,
    title: "Gates Foundation Global Health Research Grant",
    category: "grants",
    description: "Supports research projects aiming to solve critical health challenges affecting disadvantaged populations worldwide.",
    deadline: "July 10, 2025",
    organization: "Bill & Melinda Gates Foundation",
    amount: "$1,200,000",
  },
  {
    id: 6,
    title: "European Research Council Consolidator Grant",
    category: "funding",
    description: "Funds excellent researchers with 7-12 years experience after PhD to pursue ambitious research projects across disciplines.",
    deadline: "October 22, 2025",
    organization: "European Research Council",
    amount: "€2,000,000",
  },
];

// Helper function to get icon based on category
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "grants":
      return <MicroscopeIcon className="h-5 w-5" />;
    case "awards":
      return <Award className="h-5 w-5" />;
    case "funding":
      return <BookOpen className="h-5 w-5" />;
    default:
      return <Globe className="h-5 w-5" />;
  }
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a2353] to-[#2a3b83] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Discover Scientific Research Opportunities
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              Find the latest research grants, awards, and funding opportunities for scientists, researchers, and institutions worldwide.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/grants">Browse Grants</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-800">
                <Link href="/funding">Find Funding</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Collaboration Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-3 py-1 px-3 text-base font-medium bg-blue-600">NEW</Badge>
            <h2 className="text-3xl font-bold mb-4">Collaborate with Research Teams</h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              ScienceCompete now helps you find and join research teams based on your expertise and interests. Create or join teams for competitions, build your research profile, and track your achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Create & Join Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Form research teams for specific competitions or join existing teams looking for your expertise.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="text-blue-600">
                  <Link href="/teams" className="flex items-center">
                    Browse Teams <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Build Your Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Showcase your research areas, track your competition history, and earn ratings based on your performance.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="text-blue-600">
                  <Link href="/profile" className="flex items-center">
                    View Your Profile <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Find Researchers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Connect with other researchers based on complementary skills and research interests for collaborative projects.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="text-blue-600">
                  <Link href="/researchers" className="flex items-center">
                    Search Researchers <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Explore by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center">
                  <MicroscopeIcon className="h-6 w-6 mr-2 text-blue-600" />
                  Research Grants
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Find competitive grants for research projects across all scientific disciplines.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full">
                  <Link href="/grants" className="flex items-center justify-center">
                    Browse Grants <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center">
                  <Award className="h-6 w-6 mr-2 text-blue-600" />
                  Science Awards
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Prestigious recognition programs honoring research excellence and innovation.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full">
                  <Link href="/awards" className="flex items-center justify-center">
                    View Awards <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center">
                  <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
                  Research Funding
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Diverse funding opportunities from government agencies, foundations, and corporations.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full">
                  <Link href="/funding" className="flex items-center justify-center">
                    Explore Funding <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center">
                  <Globe className="h-6 w-6 mr-2 text-blue-600" />
                  Conferences
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Scientific conferences, symposiums and events to present research and network.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full">
                  <Link href="/conferences" className="flex items-center justify-center">
                    Find Conferences <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Competitions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Opportunities</h2>
            <Button asChild variant="outline">
              <Link href="/all-opportunities">View All</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCompetitions.map((competition) => (
              <Card key={competition.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="flex items-center gap-1 mb-2">
                      {getCategoryIcon(competition.category)}
                      {competition.category.charAt(0).toUpperCase() + competition.category.slice(1)}
                    </Badge>
                    <Badge className="bg-blue-600">{competition.amount}</Badge>
                  </div>
                  <CardTitle className="line-clamp-2">{competition.title}</CardTitle>
                  <CardDescription>{competition.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3">{competition.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    Deadline: {competition.deadline}
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={`/${competition.category}/${competition.id}`} className="flex items-center">
                      Details <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Stay Updated on Research Opportunities</h2>
              <p className="mt-2 text-gray-600">
                Get the latest research grants, awards, and funding opportunities delivered to your inbox.
              </p>
            </div>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
              <p className="mt-2 text-xs text-gray-500 text-center">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
