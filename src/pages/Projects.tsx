import { useState } from "react";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const allTechnologies = ["All", ...new Set(projects.flatMap((p) => p.technologies))];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.technologies.includes(filter));

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20 z-0"></div>

      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>

        {/* Filters & View Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          {/* Filters */}
          <div className="w-full md:w-auto flex flex-wrap items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            {allTechnologies.map((tech) => (
              <Button
                key={tech}
                variant={filter === tech ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(tech)}
                className={`transition-all duration-300 whitespace-nowrap ${
                  filter === tech
                    ? "bg-gradient-to-r from-green-600 to-blue-600 text-white"
                    : "border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white hover:border-green-500"
                }`}
              >
                {tech}
              </Button>
            ))}
          </div>

          {/* View Mode */}
          <div className="flex items-center gap-2 bg-gray-800/30 backdrop-blur-sm p-1 rounded-lg border border-gray-700">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={viewMode === "grid" ? "bg-purple-600" : "text-gray-400 hover:text-white"}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={viewMode === "list" ? "bg-purple-600" : "text-gray-400 hover:text-white"}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Projects List */}
        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
              : "flex flex-col gap-6"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} index={index} viewMode={viewMode} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">No projects found</h3>
            <p className="text-gray-500">Try adjusting your filter to see more projects.</p>
          </div>
        )}

        {/* Project Count */}
        <div className="text-center mt-12">
          <p className="text-gray-400">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>
      </main>
    </div>
  );
};

export default Projects;
