import { Projects } from '@/components/sections/Projects';
import Link from 'next/link';

export default function ArchivePage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container-max px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-display">
          Project Archive
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Explore my complete portfolio of translation projects across various industries and domains.
        </p>
      </div>

      <section className="pb-16">
        <div className="container-max">
          <Projects />
        </div>
      </section>
    </div>
  );
}