import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import PullRequests from "./components/PullRequests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          <Navbar onMenuToggle={setIsMenuOpen} />

          {isMenuOpen && (
            <div
              className="fixed inset-0 z-40 bg-black/10 md:hidden"
              style={{ top: "64px" }} // Start below navbar
            />
          )}

          <main className={isMenuOpen ? "md:blur-none blur-0" : ""}>
            <Hero />
            <About />
            <Projects />
            <PullRequests />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
