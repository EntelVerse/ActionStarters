import Link from "next/link";
import Image from "next/image";
import { CalendarClock, Award, Bookmark } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type CompetitionCardProps = {
  id: string;
  title: string;
  description: string;
  deadline: string;
  prize?: string;
  image?: string;
  category: "grants" | "awards" | "funding" | "conferences";
  organization?: string;
  isFeatured?: boolean;
  url: string;
};

const CompetitionCard = ({
  id,
  title,
  description,
  deadline,
  prize,
  image,
  category,
  organization,
  isFeatured = false,
  url,
}: CompetitionCardProps) => {
  const categoryColor = {
    grants: "bg-blue-100 text-blue-800",
    awards: "bg-purple-100 text-purple-800",
    funding: "bg-green-100 text-green-800",
    conferences: "bg-amber-100 text-amber-800",
  };

  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            layout="fill"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center"
          >
            <h3 className="text-white text-xl font-bold px-4 text-center">{title}</h3>
          </div>
        )}
        <Badge
          className={`absolute top-2 right-2 ${categoryColor[category]}`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Badge>
        {isFeatured && (
          <Badge className="absolute top-2 left-2 bg-yellow-100 text-yellow-800">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        {organization && (
          <p className="text-sm text-gray-600 mb-2">{organization}</p>
        )}
        <p className="text-gray-700 line-clamp-3 mb-4">{description}</p>
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <CalendarClock className="h-4 w-4 mr-1" />
          <span>Deadline: {deadline}</span>
        </div>
        {prize && (
          <div className="flex items-center text-sm text-gray-600">
            <Award className="h-4 w-4 mr-1" />
            <span>Prize: {prize}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button asChild variant="link" className="p-0">
          <Link href={url}>See details</Link>
        </Button>
        <Button variant="ghost" size="icon">
          <Bookmark className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CompetitionCard;
