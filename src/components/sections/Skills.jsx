

import skills from "../../data/skills";

const Skills = () => {
  return (
    <div className="mb-10 relative ">

      <h2 className="text-lg font-semibold border-b w-full pb-1 mb-8">
        Technical Skills
      </h2>

      <div className="relative max-w-[700px] ">
        {/* Center Horizontal Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-300"></div>
        <div className="flex justify-between gap-6 relative">

          {/* Frontend Card */}
          <div className="relative flex-1 max-w-[220px]">
            <div className="bg-gray-50 border border-gray-200 rounded-md p-4 text-center">
              <p className="font-semibold text-sm mb-2">Frontend</p>
              <p className="text-xs text-gray-700 leading-snug">
                {skills.frontend.join(", ")}
              </p>
            </div>
          </div>

          {/* Backend Card */}
          <div className="relative flex-1 max-w-[220px]">
            <div className="bg-gray-50 border border-gray-200 rounded-md p-4 text-center">
              <p className="font-semibold text-sm mb-2">Backend</p>
              <p className="text-xs text-gray-700 leading-snug">
                {skills.backend.join(", ")}
              </p>
            </div>
          </div>

          {/* Tools Card */}
          <div className="relative flex-1 max-w-[220px]">
            <div className="bg-gray-50 border border-gray-200 rounded-md p-4 text-center">
              <p className="font-semibold text-sm mb-2">Tools</p>
              <p className="text-xs text-gray-700 leading-snug">
                {skills.tools.join(", ")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;


