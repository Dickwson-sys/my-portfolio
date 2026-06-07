const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-5 bg-transparent absolute top-0 left-0 z-50">
      
      {/* MD Logo */}
      <div className="text-2xl font-bold">
        <span className="text-blue-400">MD</span>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-8 text-white text-sm font-medium">
        <a href="#about" className="hover:text-blue-400 transition-colors border-b-2 border-blue-400 pb-1">About</a>
        <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
        <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
        <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
      </div>

      {/* Hire Me Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
        Hire Me
      </button>

    </nav>
  );
};

export default Navbar;