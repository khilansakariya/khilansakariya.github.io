import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';

export default function ExperiencePage() {
    return (
        <div className="pt-24 min-h-screen">
            <div className="container-max px-4 sm:px-6 lg:px-8 mb-16">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-display">Experience & Education</h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    A detailed overview of my professional journey and academic background.
                </p>
            </div>

            <section className="pb-16">
                <Experience />
            </section>

            <section className="py-16 bg-secondary/30">
                <div className="container-max">
                    <Education />
                </div>
            </section>
        </div>
    );
}
