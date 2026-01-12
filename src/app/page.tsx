import { Hero } from '@/components/sections/Hero';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        <section id="home" className="min-h-screen flex items-center justify-center hero-section">
          <Hero />
        </section>
      </div>
    </main>
  );
}