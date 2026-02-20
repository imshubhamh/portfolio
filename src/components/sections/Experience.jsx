

// import experience from "../../data/experience";

// const Experience = () => {
//   return (
//     <div className="mb-8 relative">

//       <h2 className="text-lg font-semibold border-b pb-1 mb-6">
//         Work Experience
//       </h2>

//       {/* Vertical Line */}
//       <div className="absolute left-3 top-10 bottom-0 w-[1px] bg-gray-300"></div>

//       <div className="space-y-8">

//         {experience.map((job, index) => (
//           <div key={index} className="relative pl-10">

//             {/* Dot */}
//             <div className="absolute left-0 top-1.5 w-3 h-3 bg-gray-700 rounded-full border-2 border-white"></div>

//             {/* Content */}
//             <div>

//               {/* Role + Year */}
//               <div className="flex justify-between items-start">
//                 <div>
//                   <p className="text-sm font-semibold">
//                     {job.role}
//                   </p>
//                   <p className="text-sm text-gray-700">
//                     {job.company}
//                   </p>
//                 </div>

//                 <span className="text-xs text-gray-600">
//                   {job.year}
//                 </span>
//               </div>

//               {/* Location */}
//               <p className="text-xs text-gray-600 mt-1">
//                 {job.location}
//               </p>

//               {/* Points */}
//               <ul className="mt-3 space-y-1 text-sm text-gray-700 list-disc ml-4">
//                 {job.points.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>

//             </div>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// };

// export default Experience;




import { useState } from "react";
import { ExternalLink } from "lucide-react";
import experience from "../../data/experience";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="mb-10 relative">

      <h2 className="text-lg font-semibold border-b pb-1 mb-6">
        Work Experience
      </h2>

      {/* Vertical Line */}
      <div className="absolute left-3 top-10 bottom-0 w-[1px] bg-gray-300"></div>

      <div className="space-y-8">

        {experience.map((job, index) => {
          const isExpanded = expandedIndex === index;
          const visiblePoints = isExpanded
            ? job.points
            : job.points.slice(0, 5);

          return (
            <div key={index} className="relative pl-10">

              {/* Dot */}
              <div className="absolute left-0 top-1.5 w-3 h-3 bg-gray-700 rounded-full border-2 border-white"></div>

              <div>

                {/* Role + Year */}
                <div className="flex justify-between items-start">

                  <div>
                    <p className="text-sm font-semibold">
                      {job.role}
                    </p>

                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-700">
                        {job.company}
                      </p>

                      {job.companyLink && (
                        <a
                          href={job.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-800"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <span className="text-xs text-gray-600">
                    {job.year}
                  </span>

                </div>

                {/* Location */}
                <p className="text-xs text-gray-600 mt-1">
                  {job.location}
                </p>

                {/* Points */}
                <ul
                  className={`mt-3 space-y-1 text-sm text-gray-700 list-disc ml-4 transition-all duration-300`}
                >
                  {visiblePoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* View Full */}
                {job.points.length > 5 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-blue-600 text-xs mt-2 hover:underline"
                  >
                    {isExpanded ? "View Less" : "View Full"}
                  </button>
                )}

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Experience;
