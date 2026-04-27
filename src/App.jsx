import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FlagshipProject } from "./components/FlagshipProject";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { EntrepreneurJourney } from "./components/EntrepreneurJourney";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { CustomCursor } from "./components/ui/CustomCursor";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { AchievementsActivities } from "./components/AchievementsActivities";
import { PORTFOLIO_DATA } from "./data/constants";

function App() {
  return (
    <div className="relative min-h-screen selection:bg-[var(--color-neon-blue)] selection:text-white">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <FlagshipProject />
        <Projects />
        <AchievementsActivities />
        <Skills />
        <Experience />
        <EntrepreneurJourney />
        <Education />
        <Contact />
      </main>


      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-white/5 bg-[var(--color-dark-bg)] relative z-10">
        <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.hero.name}. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
