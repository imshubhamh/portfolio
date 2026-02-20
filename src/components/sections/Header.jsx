// const Header = () => {
//     return (
//       <div className="border-b pb-4 mb-6">
//         <h1 className="text-2xl font-bold">Shubham Singh</h1>
//         <p className="text-sm text-gray-600">
//           MERN Stack Developer
//         </p>
//         <p className="text-sm text-gray-600">
//           Email: your@email.com | Phone: +91 XXXXX XXXXX
//         </p>
//       </div>
//     );
//   };
  
//   export default Header;
  


const Header = () => {
    return (
      <div className=" border-gray-300 pb-6 mb-8 flex justify-between items-start">
  
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-2xl font-bold">
            Shubham Singh
          </h1>
  
          <p className="text-sm text-gray-700 mt-1">
            MERN Stack Developer
          </p>
  
          <div className="text-sm text-gray-600 mt-3 space-y-1">
            <p>Email: your@email.com</p>
            <p>Phone: +91 XXXXX XXXXX</p>
            <p>GitHub: github.com/yourusername</p>
            <p>LinkedIn: linkedin.com/in/yourusername</p>
          </div>
  
        </div>
  
        {/* RIGHT SIDE (Profile Image) */}
        <div>
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            className="w-38 h-38 object-cover rounded-xl border border-gray-300"
          />
        </div>
  
      </div>
    );
  };
  
  export default Header;
  