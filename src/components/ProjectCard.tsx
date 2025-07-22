import { Github, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projectType } from "@/types/portfolio";

interface ProjectCardProps {
  project: projectType;
  index: number;
  viewMode?: "grid" | "list";
}

export const ProjectCard = ({
  project,
  index,
  viewMode = "grid",
}: ProjectCardProps) => {
  const sharedImage = (
    <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg overflow-hidden relative">
      <img
        src={project.image[0]}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
    </div>
  );

  const TechBadges = (
    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech) => (
        <Badge
          key={tech}
          variant="secondary"
          className="bg-gray-700 text-gray-300 hover:bg-purple-600 transition-colors duration-300 text-sm"
        >
          {tech}
        </Badge>
      ))}
    </div>
  );

  const ActionButtons = (
    <div className="flex flex-wrap gap-3 mt-2">
      {project.githubLink && (
        <Button
          variant="outline"
          size="sm"
          className="border-gray-600 text-gray-700  hover:text-white hover:bg-gray-700 hover:border-purple-500 transition-all duration-300"
          asChild
        >
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </a>
        </Button>
      )}
      {project.workLinks?.map((link) => (
        <Button
          key={link.platform}
          variant="outline"
          size="sm"
          className="border-gray-600 text-gray-700  hover:text-white hover:bg-gray-700 hover:border-purple-500 transition-all duration-300"
          asChild
        >
          <a href={link.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            {link.platform}
          </a>
        </Button>
      ))}
    </div>
  );

  if (viewMode === "list") {
    return (
      <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-500 transition-all duration-500 group">
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-1/3 p-4 sm:p-6">{sharedImage}</div>

          {/* Content Section */}
          <div className="lg:w-2/3 px-4 sm:px-6 pb-6">
            <div className="flex flex-col h-full justify-between space-y-4">
              {/* Title & Date */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <CardTitle className="text-white text-xl group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <div className="flex items-center text-gray-100 text-sm mt-1 sm:mt-0">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.date}
                </div>
              </div>

              {/* Subtitle */}
              <CardDescription className="text-gray-300 text-base">
                {project.subtitle}
              </CardDescription>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              {TechBadges}
              {ActionButtons}
            </div>
          </div>
        </div>
      </Card>
    );
  }

  // Grid Mode
  return (
    <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-500 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 group flex flex-col h-full">
      <CardHeader className="space-y-4">{sharedImage}</CardHeader>

      <CardContent className="flex-grow space-y-4 px-6 pb-4">
        {/* Title + Date */}
        <div className="flex justify-between items-start sm:items-center">
          <CardTitle className="text-white group-hover:text-purple-400 transition-colors duration-300 text-lg sm:text-xl">
            {project.title}
          </CardTitle>
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {project.date}
          </div>
        </div>

        {/* Subtitle */}
        <CardDescription className="text-gray-300 text-base">
          {project.subtitle}
        </CardDescription>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>

        {TechBadges}
      </CardContent>

      <CardFooter className="px-6 pb-6">{ActionButtons}</CardFooter>
    </Card>
  );
};
