// import profile from "../../assets/profile.jpeg"

// const Header = () => {
//     return (
//       <div className=" border-gray-300 pb-6 mb-8 flex justify-between items-start">
  
//         {/* LEFT SIDE */}
//         <div>
//           <h1 className="text-6xl font-bold">
//            Hi I'm Subhash
//           </h1>
  
//           <p className="text-sm text-gray-700 mt-1">
//             Full Stack Developer focused on building impactful digital products.<br/> Passionate about problem-solving and continuously improving backend testing<br/> skills with Node.js and Express.
//           </p>
  
//           <div className="flex gap-3 items-center text-sm text-gray-600 mt-3 space-y-1">
//             <div>
//               <p className="mb-0 text-sm">Email: <span className="text-blue-500">sseffort@gmail.com</span></p>
//               <p className="mb-0 text-sm">Phone: <span className="text-blue-500">+91 7317303692</span></p>
//             </div>
//             <div>
//               <p className="mb-0 text-sm">GitHub: <span className="text-blue-500">https://github.com/imshubhamh</span></p>
//             <p className="mb-0 text-sm">LinkedIn: <span className="text-blue-500">https://www.linkedin.com/in/subhash-sagar-817882321/</span></p>
//             </div>
//           </div>
  
//         </div>
  
//         {/* RIGHT SIDE (Profile Image) */}
//         <div>
//           <img
//             src={profile}
//             alt="Profile"
//             className="w-48 h-48 object-cover rounded-xl border border-gray-300"
//           />
//         </div>
  
//       </div>
//     );
//   };
  
//   export default Header;
  


import profile from "../../assets/profile.jpeg";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <div className="border-gray-300 pb-6 mb-8 flex justify-between items-start">
      
      {/* LEFT SIDE */}
      <div>
        <h1 className="text-6xl font-bold text-white">
          Hi I'm Subhash
        </h1>

        <p className="text-sm text-gray-400 mt-3 leading-relaxed">
          Full Stack Developer focused on building impactful digital products.
          <br />
          Passionate about problem-solving and continuously improving backend testing
          <br />
          skills with Node.js and Express.
        </p>

        {/* Contact Info */}
        <div className="mt-4 space-y-2 text-sm text-gray-700">
          
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-gray-400"/>
            <a 
              href="mailto:sseffort@gmail.com" 
              className="text-blue-600 hover:underline"
            >
              sseffort@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={16} className="text-gray-400"/>
            <a 
              href="tel:+917317303692" 
              className="text-blue-600 hover:underline"
            >
              +91 7317303692
            </a>
          </div>

        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4">

          <a 
            href="https://github.com/imshubhamh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 border rounded-lg hover:bg-gray-100 transition"
          >
            <Github size={20} className="text-gray-400"/>
          </a>

          <a 
            href="https://www.linkedin.com/in/subhash-sagar-817882321/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 border rounded-lg hover:bg-gray-100 transition"
          >
            <Linkedin size={20} className="text-gray-400"/>
          </a>

        </div>

      </div>

      {/* RIGHT SIDE (Profile Image) */}
      <div>
        <img
          src={profile}
          alt="Profile"
          className="w-48 h-48 object-cover rounded-xl border border-gray-300"
        />
      </div>

    </div>
  );
};

export default Header;