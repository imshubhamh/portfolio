import profile from "../../assets/profile.jpeg"

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
            <p className="mb-0 text-sm">Email: <span className="text-blue-500">your@email.com</span></p>
            <p className="mb-0 text-sm">Phone: <span className="text-blue-500">+91 XXXXX XXXXX</span></p>
            <p className="mb-0 text-sm">GitHub: <span className="text-blue-500">github.com/yourusername</span></p>
            <p className="mb-0 text-sm">LinkedIn: <span className="text-blue-500">linkedin.com/in/yourusername</span></p>
          </div>
  
        </div>
  
        {/* RIGHT SIDE (Profile Image) */}
        <div>
          <img
            src={profile}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-xl border border-gray-300"
          />
        </div>
  
      </div>
    );
  };
  
  export default Header;
  