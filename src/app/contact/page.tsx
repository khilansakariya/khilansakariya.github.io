import { Contact } from '@/components/sections/Contact';

export default function ContactPage() {
    return (
        <div className="pt-24 min-h-screen">
            <div className="container-max px-4 sm:px-6 lg:px-8 mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-display">Get in Touch</h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    Interested in working together? Let's discuss your project.
                </p>
            </div>

            <div className="container-max pb-20">
                <Contact />
            </div>
        </div>
    );
}
