import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-24 min-h-screen flex flex-col items-center justify-center">
      <div className="container-max px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
        {/* 404 Icon */}
        <div className="w-24 h-24 mx-auto bg-destructive/20 rounded-full flex items-center justify-center mb-8">
          <span className="text-4xl font-bold text-destructive">!</span>
        </div>

        {/* 404 Text */}
        <h1 className="text-6xl sm:text-8xl font-bold text-foreground mb-4 font-display">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground mb-6">
          Page Not Found
        </h2>

        <p className="text-lg text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <Link
            href="javascript:history.back()"
            className="px-6 py-3 bg-secondary text-foreground hover:bg-secondary/80 rounded-full font-medium transition-all duration-300 flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="glass-card p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Looking for something specific?
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 text-left">
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
              → About Me
            </Link>
            <Link href="/experience" className="text-muted-foreground hover:text-primary transition-colors">
              → Experience
            </Link>
            <Link href="/skills" className="text-muted-foreground hover:text-primary transition-colors">
              → Skills
            </Link>
            <Link href="/work" className="text-muted-foreground hover:text-primary transition-colors">
              → Projects
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              → Contact
            </Link>
            <Link href="/archive" className="text-muted-foreground hover:text-primary transition-colors">
              → All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}