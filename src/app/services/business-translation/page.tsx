import { Metadata } from 'next';
import { Contact } from '@/components/sections/Contact';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Business & Marketing Translation English to Gujarati | Khilan Sakariya',
    description: 'Professional business translation and website localization services. Translate marketing materials, brochures, and websites to growing Gujarati market.',
    keywords: [
        'business translation gujarati',
        'marketing translation india',
        'website localization gujarati',
        'brochure translation',
        'corporate communication translator',
        'ad copy translation gujarati',
        'financial report translation',
        'gujarati localization services'
    ]
};

export default function BusinessTranslationPage() {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="relative pb-16 px-4 sm:px-6 lg:px-8">
                <div className="container-max">
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-display">
                        Business & Marketing Translation <br className="hidden sm:block" />
                        <span className="text-primary">English to Gujarati</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mb-8 leading-relaxed">
                        Expand your reach in Gujarat. I help global businesses connect with Gujarati speaking audiences through culturally adapted translation of marketing campaigns, websites, and corporate communications.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-16 bg-secondary/30">
                <div className="container-max px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-foreground mb-12 font-display">Corporate Solutions</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="glass-card p-6 rounded-xl">
                            <h3 className="text-xl font-semibold mb-3 text-primary">Marketing & Ads</h3>
                            <p className="text-muted-foreground">Transcreation of taglines, social media posts, and ad copy that resonates culturally, not just translates literally.</p>
                        </div>
                        <div className="glass-card p-6 rounded-xl">
                            <h3 className="text-xl font-semibold mb-3 text-primary">Website Localization</h3>
                            <p className="text-muted-foreground">Full website and app localization services to provide a seamless user experience for Gujarati users.</p>
                        </div>
                        <div className="glass-card p-6 rounded-xl">
                            <h3 className="text-xl font-semibold mb-3 text-primary">Internal Comms</h3>
                            <p className="text-muted-foreground">Translation of HR policies, training manuals, and employee newsletters to ensure clear communication across diverse teams.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Localization Impact Section */}
            <section className="py-16 px-4">
                <div className="container-max">
                    <div className="glass-card p-8 rounded-2xl border-primary/20 bg-primary/5">
                        <h2 className="text-3xl font-bold mb-6 font-display">Why Localize for Gujarat?</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                Gujarat is one of India's most industrialized states. Speaking your customer's language builds trust and significantly increases conversion rates.
                            </p>
                            <p>
                                <strong>Don't rely on machine translation for your brand voice.</strong> A single awkward phrase can damage your reputation. Professional human translation ensures your brand message remains powerful and authentic.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-background">
                <div className="container-max px-4">
                    <Contact />
                </div>
            </section>
        </div>
    );
}
