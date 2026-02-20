
// const About = () => {
//     return (
//       <section className="py-28 bg-[#0f0f0f] relative overflow-hidden">
        
//         {/* Subtle background glow */}
//         <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full pointer-events-none"></div>
  
//         <div className="max-w-6xl mx-auto px-6 relative z-10">
  
//           <div className="grid md:grid-cols-2 gap-20 items-start">
  
//             {/* LEFT SIDE */}
//             <div>
//               <h2 className="text-4xl font-bold mb-8 relative inline-block">
//                 About <span className="text-purple-500">Me</span>
//                 <span className="absolute -bottom-2 left-0 w-16 h-[3px] bg-purple-500 rounded-full"></span>
//               </h2>
  
//               <p className="text-gray-400 leading-relaxed mb-6 text-lg">
//                 I am a Full Stack MERN Developer with 1.5+ years of experience 
//                 building production-level web applications using modern 
//                 technologies like React, Node.js, Express, and MongoDB.
//               </p>
  
//               <p className="text-gray-500 leading-relaxed">
//                 I focus on clean architecture, scalable backend systems, 
//                 optimized APIs, and modern UI design principles to deliver 
//                 high-performance applications.
//               </p>
//             </div>
  
//             {/* RIGHT SIDE */}
//             <div className="space-y-6">
  
//               <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-purple-500 hover:bg-white/10 transition-all duration-300 shadow-lg">
//                 <h3 className="text-lg font-semibold mb-2 text-purple-400">
//                   Full Stack Development
//                 </h3>
//                 <p className="text-gray-400 text-sm">
//                   Experience building end-to-end applications from frontend UI 
//                   to backend APIs and database design.
//                 </p>
//               </div>
  
//               <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-purple-500 hover:bg-white/10 transition-all duration-300 shadow-lg">
//                 <h3 className="text-lg font-semibold mb-2 text-purple-400">
//                   Secure Authentication
//                 </h3>
//                 <p className="text-gray-400 text-sm">
//                   Implemented JWT-based authentication, role-based access 
//                   control, and secure cookie handling.
//                 </p>
//               </div>
  
//               <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-purple-500 hover:bg-white/10 transition-all duration-300 shadow-lg">
//                 <h3 className="text-lg font-semibold mb-2 text-purple-400">
//                   Scalable Architecture
//                 </h3>
//                 <p className="text-gray-400 text-sm">
//                   Follow MVC pattern, reusable components, optimized queries, 
//                   and structured project architecture.
//                 </p>
//               </div>
  
//             </div>
  
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default About;
  

const About = () => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold border-b pb-1 mb-3">
        Summary
      </h2>
      <p className="text-sm leading-relaxed text-gray-700">
        Full Stack MERN Developer with 1.5+ years experience building scalable web applications using React, Node.js, Express and MongoDB. Focused on clean architecture and optimized backend systems.
      </p>
    </div>
  );
};

export default About;
