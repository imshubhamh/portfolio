
// import education from "../../data/education";

// const Education = () => {
//   return (
//     <div className="mb-6">
//       <h2 className="text-lg font-semibold border-b pb-1 mb-3">
//         Education
//       </h2>

//       {education.map((edu, index) => (
//         <div key={index} className="flex justify-between text-sm mb-2">
//           <div>
//             <p className="font-semibold">{edu.degree}</p>
//             <p className="text-gray-600">
//               {edu.institution}, {edu.city}
//             </p>
//           </div>
//           <span className="text-gray-600">{edu.year}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Education;




import { ExternalLink } from "lucide-react";
import education from "../../data/education";

const Education = () => {
  return (
    <div className="mb-12 relative">

      <h2 className="text-lg font-semibold border-b pb-1 mb-8">
        Education
      </h2>

      {/* Center Vertical Line */}
      <div className="absolute left-1/2 top-12 bottom-0 w-[1px] bg-gray-300"></div>

      <div className="space-y-10">

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >

              {/* Card */}
              <div className="w-[45%] bg-gray-50 border border-gray-200 rounded-md p-4 relative">

                {/* Year Badge */}
                <span className="absolute -top-3 left-4 bg-white px-2 text-xs text-gray-600 border border-gray-300">
                  {edu.year}
                </span>

                <p className="text-sm font-semibold mt-2">
                  {edu.degree}
                </p>

                <div className="flex items-center gap-2 mt-1">
                  <p className="text-sm text-gray-700">
                    {edu.institution}
                  </p>

                  {edu.collegeLink && (
                    <a
                      href={edu.collegeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-800"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                <p className="text-xs text-gray-600">
                  {edu.city}
                </p>

                <p className="text-sm text-gray-700 mt-2 leading-snug">
                  {edu.description}
                </p>

              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-4 w-3 h-3 bg-gray-700 rounded-full border-2 border-white"></div>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Education;
