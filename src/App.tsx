import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-warm-950 overflow-hidden selection:bg-crimson-500/30 selection:text-crimson-500 text-stone-300 font-sans">
      
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <main className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Footer />
      </main>
    </div>
  );
}

export default App;
