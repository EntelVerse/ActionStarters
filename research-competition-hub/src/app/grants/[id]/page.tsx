import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CalendarIcon,
  Clock,
  GraduationCap,
  Globe,
  Building,
  CheckCircle2,
  CircleDollarSign,
  ArrowLeft,
  Share2,
  BookmarkPlus,
  FileText
} from "lucide-react";

// Mock data for grants
const grantsData = [
  {
    id: "1",
    title: "National Science Foundation SBIR/STTR Research Grant",
    category: "grants",
    subcategory: "Small Business",
    description: "Supports small businesses engaged in innovative research. Phase I grants up to $275,000 for 6-12 months of concept development.",
    fullDescription: `
      <p>The National Science Foundation's Small Business Innovation Research (SBIR) and Small Business Technology Transfer (STTR) programs are highly competitive programs that encourage domestic small businesses to engage in Federal Research/Research and Development with the potential for commercialization.</p>

      <p>Through a competitive awards-based program, SBIR and STTR enable small businesses to explore their technological potential and provide the incentive to profit from its commercialization. By including qualified small businesses in the nation's R&D arena, high-tech innovation is stimulated, and the United States gains entrepreneurial spirit as it meets its specific research and development needs.</p>

      <h3>Program Goals:</h3>
      <ul>
        <li>Stimulate technological innovation</li>
        <li>Meet Federal research and development needs</li>
        <li>Foster and encourage participation in innovation and entrepreneurship by women and socially or economically disadvantaged persons</li>
        <li>Increase private-sector commercialization of innovations derived from Federal research and development funding</li>
      </ul>

      <h3>Funding Details:</h3>
      <p>Phase I grants are for 6-12 months of concept development with up to $275,000 in funding. Successful Phase I companies may apply for Phase II funding of up to $1,000,000 for 2 years to further develop and commercialize their technology.</p>
    `,
    deadline: "May 15, 2025",
    applicationProcess: `
      <ol>
        <li>Review the solicitation guidelines and eligibility requirements</li>
        <li>Register in the NSF FastLane system</li>
        <li>Prepare and submit a project pitch (required before full proposal)</li>
        <li>If invited, submit a full proposal through FastLane</li>
        <li>Proposals undergo merit review by experts in relevant fields</li>
        <li>Award notifications are typically made within 6 months of submission</li>
      </ol>
    `,
    eligibilityCriteria: `
      <ul>
        <li>For-profit U.S. business with fewer than 500 employees</li>
        <li>At least 51% owned and controlled by U.S. citizens or permanent residents</li>
        <li>Principal Investigator must be primarily employed by the small business</li>
        <li>All work must be performed in the United States</li>
      </ul>
    `,
    organization: "National Science Foundation",
    organizationDescription: "The National Science Foundation (NSF) is an independent federal agency created by Congress in 1950 to promote the progress of science; to advance the national health, prosperity, and welfare; and to secure the national defense.",
    organizationWebsite: "https://www.nsf.gov/",
    amount: "$275,000",
    region: "United States",
    eligibility: "Small Businesses",
    applicationLink: "https://www.nsf.gov/eng/iip/sbir/",
    contactEmail: "sbir@nsf.gov",
    contactPhone: "+1 (703) 292-8050",
    publishedDate: "January 15, 2025",
    lastUpdated: "February 28, 2025",
    relatedFields: ["Technology", "Innovation", "Research & Development"],
  }
];

// Find grant by ID
function getGrantById(id: string) {
  return grantsData.find(grant => grant.id === id) || null;
}

export default function GrantDetailPage({ params }: { params: { id: string } }) {
  const grant = getGrantById(params.id);

  if (!grant) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Grant Not Found</h1>
        <p className="mb-8">The grant you are looking for does not exist or has been removed.</p>
        <Button asChild>
          <Link href="/grants">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Grants
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb navigation */}
        <div className="mb-8">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/grants" className="hover:text-blue-600">Grants</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{grant.title}</span>
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-sm">
                  {grant.subcategory}
                </Badge>
                {grant.relatedFields.map((field) => (
                  <Badge key={field} variant="outline" className="text-sm">
                    {field}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl font-bold mb-4">{grant.title}</h1>

              <div className="flex items-center mb-6">
                <Link href={grant.organizationWebsite} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                  <Building className="h-5 w-5 mr-2" />
                  {grant.organization}
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <CircleDollarSign className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Amount</p>
                    <p className="font-semibold">{grant.amount}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Application Deadline</p>
                    <p className="font-semibold">{grant.deadline}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Region</p>
                    <p className="font-semibold">{grant.region}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Eligibility</p>
                    <p className="font-semibold">{grant.eligibility}</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: grant.fullDescription }}
                />
              </div>

              <Separator className="my-6" />

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Application Process</h2>
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: grant.applicationProcess }}
                />
              </div>

              <Separator className="my-6" />

              <div>
                <h2 className="text-2xl font-bold mb-4">Eligibility Criteria</h2>
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: grant.eligibilityCriteria }}
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-6">
              {/* Action buttons */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Take Action</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <a href={grant.applicationLink} target="_blank" rel="noopener noreferrer">
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Apply Now
                    </a>
                  </Button>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <BookmarkPlus className="mr-2 h-4 w-4" /> Save
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="mr-2 h-4 w-4" /> Share
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Organization info */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>About the Organization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{grant.organizationDescription}</p>
                  <Button asChild variant="outline" className="w-full">
                    <a href={grant.organizationWebsite} target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact information */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Email:</p>
                    <a href={`mailto:${grant.contactEmail}`} className="text-blue-600 hover:underline">
                      {grant.contactEmail}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone:</p>
                    <a href={`tel:${grant.contactPhone}`} className="text-blue-600 hover:underline">
                      {grant.contactPhone}
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Grant information */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Grant Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Published:</span>
                    <span>{grant.publishedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Last Updated:</span>
                    <span>{grant.lastUpdated}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Grant ID:</span>
                    <span>#{grant.id}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Similar grants */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Similar Grants</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Link href="/grants/5" className="font-medium hover:text-blue-600 block line-clamp-2">
                        Gates Foundation Global Health Research Grant
                      </Link>
                      <p className="text-sm text-gray-500">Deadline: July 10, 2025</p>
                    </div>
                    <div>
                      <Link href="/grants/7" className="font-medium hover:text-blue-600 block line-clamp-2">
                        DARPA Young Faculty Award
                      </Link>
                      <p className="text-sm text-gray-500">Deadline: April 5, 2025</p>
                    </div>
                    <div>
                      <Link href="/grants/9" className="font-medium hover:text-blue-600 block line-clamp-2">
                        Human Frontier Science Program Research Grants
                      </Link>
                      <p className="text-sm text-gray-500">Deadline: March 28, 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Back button */}
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/grants" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Grants
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
