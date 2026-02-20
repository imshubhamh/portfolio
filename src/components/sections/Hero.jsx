
import { useState } from "react";

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0f0f]"
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition duration-300"
        style={{
          background: `radial-gradient(
            600px circle at ${position.x}px ${position.y}px,
            rgba(139,92,246,0.15),
            transparent 40%
          )`,
        }}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-3xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
                Subhash Sagar
              </span>
            </h1>

            <p className="text-gray-400 mt-4 text-lg max-w-xl">
              Full Stack MERN Developer building scalable web applications
              with clean architecture and modern UI systems.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="bg-purple-600 px-4 py-2 rounded-md font-medium hover:bg-purple-700 transition"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                className="border border-gray-700 px-4 py-2 rounded-md font-medium hover:border-purple-500 transition"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-10 flex gap-10">
              <div>
                <h3 className="text-2xl font-bold text-purple-500">1.5+</h3>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-purple-500">15+</h3>
                <p className="text-gray-400 text-sm">Projects Built</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-purple-500">10+</h3>
                <p className="text-gray-400 text-sm">Technologies</p>
              </div>
            </div>
          </div>

      
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

              <h3 className="text-xl font-semibold mb-6">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "JWT",
                  "Docker",
                  "Tailwind"
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

