

// // import { Github, Linkedin, Mail } from "lucide-react";

// // const Footer = () => {
// //   return (
// //     <div className="border-t mt-10 pt-3 flex justify-between text-xs text-gray-600">
// //       <span>© 2025 Subhash Sagar</span>

// //       <div className="flex gap-4">
// //         <a href="#"><Github size={16} /></a>
// //         <a href="#"><Linkedin size={16} /></a>
// //         <a href="#"><Mail size={16} /></a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Footer;



// import {
//   Github,
//   Linkedin,
//   Mail,
//   Instagram,
//   Twitter,
//   Youtube,
// } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 z-50">

//       <div className="max-w-[794px] mx-auto px-6 py-3 flex justify-between items-center text-xs text-gray-600">

//         <span>© 2025 Shubham Singh</span>

//         <div className="flex gap-4">

//           <a href="#" target="_blank" rel="noopener noreferrer">
//             <Github size={16} />
//           </a>

//           <a href="#" target="_blank" rel="noopener noreferrer">
//             <Linkedin size={16} />
//           </a>

//           <a href="#" target="_blank" rel="noopener noreferrer">
//             <Twitter size={16} />
//           </a>

//           <a href="#" target="_blank" rel="noopener noreferrer">
//             <Instagram size={16} />
//           </a>

//           <a href="#" target="_blank" rel="noopener noreferrer">
//             <Youtube size={16} />
//           </a>

//           <a href="mailto:your@email.com">
//             <Mail size={16} />
//           </a>

//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;




import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 z-50 ">

      {/* Centered Container with 994px */}
      <div className="max-w-[994px] mx-auto px-6 py-3 flex justify-between items-center text-xs text-gray-600">

        <span>© 2025 Shubham Singh</span>

        <div className="flex gap-4">

          <a href="#" target="_blank" rel="noopener noreferrer">
            <Github size={16} />
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} />
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <Twitter size={16} />
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <Instagram size={16} />
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <Youtube size={16} />
          </a>

          <a href="mailto:your@email.com">
            <Mail size={16} />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
