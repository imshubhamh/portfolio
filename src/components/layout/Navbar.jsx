const Navbar = () => {
    return (
      <div className="fixed w-full bg-black/40 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="font-bold text-lg">Portfolio!</h1>
          <a
            href="/resume.pdf"
            className="text-sm bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  