import Header from "./components/sections/Header";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="flex justify-center">
      <div className="bg-white w-full max-w-[994px] min-h-screen px-10 py-10 relative pb-16">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Footer />
      </div>
    </div>
  );
}

export default App;
