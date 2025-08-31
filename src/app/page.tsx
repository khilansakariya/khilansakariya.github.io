import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Resume } from '@/components/sections/Resume';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';

export default function Home() {
  return (
    <LoadingScreen>
      <main className="min-h-screen bg-navy-900">
        <Navigation />
        
        <div className="relative">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center justify-center hero-section">
            <Hero />
          </section>

          {/* About Section */}
          <section id="about" className="section-padding">
            <div className="container-max">
              <About />
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="section-padding bg-navy-800/30">
            <div className="container-max">
              <Experience />
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="section-padding">
            <div className="container-max">
              <Education />
            </div>
          </section>

          {/* Resume Section */}
          <section id="resume" className="section-padding bg-navy-800/30">
            <div className="container-max">
              <Resume />
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section-padding bg-navy-800/30">
            <div className="container-max">
              <Projects />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section-padding">
            <div className="container-max">
              <Contact />
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </LoadingScreen>
  );
} 