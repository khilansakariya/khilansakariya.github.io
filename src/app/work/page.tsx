import { Projects } from '@/components/sections/Projects';

export default function WorkPage() {
    return (
        <div className="pt-24 min-h-screen">
            <div className="container-max px-4 sm:px-6 lg:px-8 mb-16">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-display">Featured Projects</h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    A showcase of my recent translation work and technical projects.
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
