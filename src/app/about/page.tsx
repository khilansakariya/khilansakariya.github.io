import { About } from '@/components/sections/About';

export default function AboutPage() {
    return (
        <div className="pt-24 min-h-screen">
            <div className="container-max px-4 sm:px-6 lg:px-8 mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-display">About Me</h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    Get to know the person behind the translations.
                </p>
            </div>

            <section className="pb-16">
                <div className="container-max">
                    <About />
                </div>
            </section>
        </div>
    );
}
