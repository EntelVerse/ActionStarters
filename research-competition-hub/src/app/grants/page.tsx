import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ArrowRightIcon, MicroscopeIcon, FilterIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

// Mock data for grants
const grants = [
  {
    id: 1,
    title: "National Science Foundation SBIR/STTR Research Grant",
    category: "grants",
    subcategory: "Small Business",
    description: "Supports small businesses engaged in innovative research. Phase I grants up to $275,000 for 6-12 months of concept development.",
    deadline: "May 15, 2025",
    organization: "National Science Foundation",
    amount: "$275,000",
    region: "United States",
    eligibility: "Small Businesses",
  },
  {
    id: 5,
    title: "Gates Foundation Global Health Research Grant",
    category: "grants",
    subcategory: "Health",
    description: "Supports research projects aiming to solve critical health challenges affecting disadvantaged populations worldwide.",
    deadline: "July 10, 2025",
    organization: "Bill & Melinda Gates Foundation",
    amount: "$1,200,000",
    region: "Global",
    eligibility: "Research Institutions, NGOs",
  },
  {
    id: 7,
    title: "DARPA Young Faculty Award",
    category: "grants",
    subcategory: "Technology",
    description: "Provides funding to promising early-career faculty to develop innovative research ideas in science and engineering fields relevant to national security.",
    deadline: "April 5, 2025",
    organization: "Defense Advanced Research Projects Agency",
    amount: "$500,000",
    region: "United States",
    eligibility: "Early-Career Faculty",
  },
  {
    id: 9,
    title: "Human Frontier Science Program Research Grants",
    category: "grants",
    subcategory: "Life Sciences",
    description: "Funds international teams for collaborative, innovative research in life sciences, with a focus on complex mechanisms of living organisms.",
    deadline: "March 28, 2025",
    organization: "Human Frontier Science Program",
    amount: "$450,000/year",
    region: "International",
    eligibility: "Research Teams",
  },
  {
    id: 11,
    title: "NASA Space Technology Research Grants",
    category: "grants",
    subcategory: "Space",
    description: "Supports graduate student research in space technology development, with a focus on innovation that enables future NASA missions.",
    deadline: "June 2, 2025",
    organization: "NASA",
    amount: "$80,000/year",
    region: "United States",
    eligibility: "Graduate Students",
  },
  {
    id: 14,
    title: "Gordon and Betty Moore Foundation Experimental Physics Investigators Initiative",
    category: "grants",
    subcategory: "Physics",
    description: "Supports ambitious experimental physics research with potential for significant advances in scientific understanding.",
    deadline: "September 15, 2025",
    organization: "Gordon and Betty Moore Foundation",
    amount: "$1,800,000",
    region: "United States",
    eligibility: "Mid-Career Researchers",
  },
  {
    id: 18,
    title: "Simons Foundation Autism Research Initiative",
    category: "grants",
    subcategory: "Health",
    description: "Supports innovative autism research to improve diagnosis and treatment through better understanding of the condition's biological mechanisms.",
    deadline: "August 21, 2025",
    organization: "Simons Foundation",
    amount: "$600,000",
    region: "Global",
    eligibility: "Principal Investigators",
  },
  {
    id: 21,
    title: "DOE Office of Science Graduate Student Research Program",
    category: "grants",
    subcategory: "Energy",
    description: "Provides supplemental funds for graduate students to conduct part of their thesis research at a DOE laboratory or facility.",
    deadline: "May 5, 2025",
    organization: "Department of Energy",
    amount: "$3,000/month",
    region: "United States",
    eligibility: "PhD Students",
  },
];

export default function GrantsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1a2353] to-[#2a3b83] text-white p-8 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Research Grants</h1>
              <p className="text-gray-200 max-w-2xl">
                Discover funding opportunities for scientific research across different disciplines, institutions, and regions.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button asChild className="bg-white text-blue-800 hover:bg-gray-100">
                <Link href="#subscribe">Get Alerts</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content Area with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold flex items-center">
                  <FilterIcon className="h-5 w-5 mr-2" /> Filters
                </h2>
                <Button variant="ghost" size="sm">Reset</Button>
              </div>

              <Separator className="my-4" />

              <div className="space-y-6">
                {/* Research Area Filter */}
                <div>
                  <h3 className="font-medium mb-2">Research Area</h3>
                  <div className="space-y-2">
                    {['Health', 'Technology', 'Physics', 'Life Sciences', 'Energy', 'Space', 'Small Business'].map((area) => (
                      <div className="flex items-center" key={area}>
                        <input
                          type="checkbox"
                          id={`area-${area}`}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor={`area-${area}`} className="ml-2 text-sm text-gray-700">
                          {area}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-2" />

                {/* Region Filter */}
                <div>
                  <h3 className="font-medium mb-2">Region</h3>
                  <div className="space-y-2">
                    {['United States', 'Europe', 'Asia', 'Global', 'International'].map((region) => (
                      <div className="flex items-center" key={region}>
                        <input
                          type="checkbox"
                          id={`region-${region}`}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor={`region-${region}`} className="ml-2 text-sm text-gray-700">
                          {region}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-2" />

                {/* Eligibility Filter */}
                <div>
                  <h3 className="font-medium mb-2">Eligibility</h3>
                  <div className="space-y-2">
                    {['Graduate Students', 'PhD Students', 'Early-Career Faculty', 'Principal Investigators', 'Research Teams', 'Research Institutions', 'Small Businesses'].map((eligibility) => (
                      <div className="flex items-center" key={eligibility}>
                        <input
                          type="checkbox"
                          id={`eligibility-${eligibility}`}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor={`eligibility-${eligibility}`} className="ml-2 text-sm text-gray-700">
                          {eligibility}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full mt-4">Apply Filters</Button>
              </div>
            </div>
          </div>

          {/* Grants Listing */}
          <div className="lg:w-3/4">
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Available Grants</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <select className="text-sm border border-gray-300 rounded px-2 py-1">
                    <option>Deadline (Soonest)</option>
                    <option>Amount (Highest)</option>
                    <option>Recently Added</option>
                  </select>
                </div>
              </div>
              <p className="text-gray-600 mt-2">Showing {grants.length} research grants</p>
            </div>

            <div className="space-y-6">
              {grants.map((grant) => (
                <Card key={grant.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className="mb-2">{grant.subcategory}</Badge>
                      <Badge className="bg-blue-600">{grant.amount}</Badge>
                    </div>
                    <CardTitle className="text-xl">{grant.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <MicroscopeIcon className="h-4 w-4 mr-1" />
                      {grant.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{grant.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="secondary">{grant.region}</Badge>
                      <Badge variant="secondary">{grant.eligibility}</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-3 border-t">
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      Deadline: {grant.deadline}
                    </div>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/grants/${grant.id}`} className="flex items-center">
                        View Details <ArrowRightIcon className="ml-1 h-4 w-4" />
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
                <Button variant="outline" size="sm">12</Button>
                <Button variant="outline" size="sm">Next</Button>
              </nav>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <section id="subscribe" className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Get Research Grant Alerts</h2>
            <p className="mt-2 text-gray-600">
              Stay updated on new research grant opportunities tailored to your research interests.
            </p>
          </div>
          <form className="max-w-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="research-area" className="block text-sm font-medium text-gray-700 mb-1">Research Area</label>
                <select
                  id="research-area"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Research Area</option>
                  <option value="health">Health Sciences</option>
                  <option value="technology">Technology</option>
                  <option value="physics">Physics</option>
                  <option value="life-sciences">Life Sciences</option>
                  <option value="energy">Energy</option>
                  <option value="space">Space</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-8">
                Subscribe to Alerts
              </Button>
            </div>
            <p className="mt-4 text-xs text-gray-500 text-center">
              You can unsubscribe at any time. By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}
