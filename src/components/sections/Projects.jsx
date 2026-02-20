
import { useState } from "react";
import projects from "../../data/projects";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 4);

  return (
    <div className="mb-10">

      <h2 className="text-lg font-semibold border-b pb-1 mb-6 text-white">
        Projects
      </h2>

      {/* 3 Per Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}

      </div>

      {/* View More / Less */}
      {projects.length > 4 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-600 text-sm hover:underline"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}

    </div>
  );
};

export default Projects;
