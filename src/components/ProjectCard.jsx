// const ProjectCard = ({ project }) => {
//   return (
//     <div className="min-w-[260px] max-w-[260px] bg-gray-50 border border-gray-200 rounded-md p-4 flex flex-col">

//       {/* Image */}
//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-28 object-cover rounded mb-3"
//       />

//       {/* Title */}
//       <p className="font-semibold text-sm">
//         {project.title}
//       </p>

//       {/* Year + Tech */}
//       <p className="text-xs text-gray-600 mb-2">
//         {project.year} • {project.tech.join(", ")}
//       </p>

//       {/* Description (2 line clamp) */}
//       <p className="text-sm text-gray-700 mb-3 line-clamp-2">
//         {project.description}
//       </p>

//       {/* Buttons */}
//       <div className="flex gap-2 mt-auto">

//         {project.live && (
//           <a
//             href={project.live}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-200 transition"
//           >
//             Live
//           </a>
//         )}

//         {project.github && (
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-200 transition"
//           >
//             GitHub
//           </a>
//         )}

//       </div>
//     </div>
//   );
// };

// export default ProjectCard;



// const ProjectCard = ({ project }) => {
//   return (
//     <div className="bg-gray-50 border border-gray-200 rounded-md p-4 flex flex-col">

//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-32 object-cover rounded mb-3"
//       />

//       <p className="font-semibold text-sm">
//         {project.title}
//       </p>

//       <p className="text-xs text-gray-600 mb-2">
//         {project.year} • {project.tech.join(", ")}
//       </p>

//       <p className="text-sm text-gray-700 line-clamp-2 mb-3">
//         {project.description}
//       </p>

//       <div className="flex gap-2 mt-auto">

//         {project.live && (
//           <a
//             href={project.live}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-100 transition"
//           >
//             Live
//           </a>
//         )}

//         {project.github && (
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-100 transition"
//           >
//             GitHub
//           </a>
//         )}

//       </div>
//     </div>
//   );
// };

// export default ProjectCard;


// const ProjectCard = ({ project }) => {
//   return (
//     <div className="bg-gray-50 border border-gray-200 rounded-md p-4 flex flex-col">

//       {/* Bigger Image */}
//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-30 object-cover rounded mb-3"
//       />

//       <p className="font-semibold text-sm">
//         {project.title}
//       </p>

//       <p className="text-xs text-gray-600 mb-2">
//         {project.year} • {project.tech.join(", ")}
//       </p>

//       <p className="text-sm text-gray-700 line-clamp-2 mb-3">
//         {project.description}
//       </p>

//       <div className="flex gap-2 mt-auto">
//         {project.live && (
//           <a
//             href={project.live}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-100 transition"
//           >
//             Live
//           </a>
//         )}

//         {project.github && (
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-100 transition"
//           >
//             GitHub
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;


const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-md p-4 flex gap-4">

      {/* Left Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-28 h-28 object-cover rounded"
      />

      {/* Right Content */}
      <div className="flex flex-col flex-1">

        <p className="font-semibold text-sm">
          {project.title}
        </p>

        <p className="text-xs text-gray-600 mb-1">
          {project.year} • {project.tech.join(", ")}
        </p>

        <p className="text-sm text-gray-700 line-clamp-2 mb-3">
          {project.description}
        </p>

        <div className="flex gap-2 mt-auto">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-100 transition"
            >
              Live
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-100 transition"
            >
              GitHub
            </a>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
