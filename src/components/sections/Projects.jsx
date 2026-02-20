

// import { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import projects from "../../data/projects";
// import ProjectCard from "../ProjectCard";

// const Projects = () => {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({
//       left: -300,
//       behavior: "smooth",
//     });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({
//       left: 300,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="mb-10">

//       {/* Header Row */}
//       <div className="flex justify-between items-center border-b pb-1 mb-6">
//         <h2 className="text-lg font-semibold">
//           Projects
//         </h2>

//         {/* Arrow Buttons */}
//         <div className="flex gap-2">
//           <button
//             onClick={scrollLeft}
//             className="p-1 border border-gray-400 rounded hover:bg-gray-100 transition"
//           >
//             <ChevronLeft size={18} />
//           </button>

//           <button
//             onClick={scrollRight}
//             className="p-1 border border-gray-400 rounded hover:bg-gray-100 transition"
//           >
//             <ChevronRight size={18} />
//           </button>
//         </div>
//       </div>

//       {/* Scroll Container */}
//       <div
//         ref={scrollRef}
//         className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
//       >
//         {projects.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Projects;



// import { useState } from "react";
// import projects from "../../data/projects";
// import ProjectCard from "../ProjectCard";

// const Projects = () => {
//   const [showAll, setShowAll] = useState(false);

//   const visibleProjects = showAll
//     ? projects
//     : projects.slice(0, 4);

//   return (
//     <div className="mb-10">

//       <h2 className="text-lg font-semibold border-b pb-1 mb-6">
//         Projects
//       </h2>

//       {/* 3 Per Row */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//         {visibleProjects.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}

//       </div>

//       {projects.length > 4 && (
//         <div className="text-center mt-6">
//           <button
//             onClick={() => setShowAll(!showAll)}
//             className="text-blue-600 text-sm hover:underline"
//           >
//             {showAll ? "View Less" : "View More"}
//           </button>
//         </div>
//       )}

//     </div>
//   );
// };

// export default Projects;



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

      <h2 className="text-lg font-semibold border-b pb-1 mb-6">
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
