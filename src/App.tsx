import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-background text-foreground`}
      >
        <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
          <Navbar onMenuToggle={setIsMenuOpen} />

          {/* Backdrop blur overlay for mobile menu */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-all duration-300"
              style={{ top: "64px" }} // Start below navbar
            />
          )}

          <main className={isMenuOpen ? "md:blur-none blur-0" : ""}>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
