import { Metadata } from 'next';
import { Contact } from '@/components/sections/Contact';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Legal Translation Services English to Gujarati | Khilan Sakariya',
    description: 'Certified legal translation for contracts, court documents, affidavits, and patents. Professional English to Gujarati legal translator.',
    keywords: [
        'legal translation gujarati',
        'contract translation english to gujarati',
        'court document translator',
        'certified translation for court',
        'legal interpreter india',
        'patent translation gujarati',
        'affidavit translation',
        'legal localization services'
    ]
};

export default function LegalTranslationPage() {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="relative pb-16 px-4 sm:px-6 lg:px-8">
                <div className="container-max">
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-display">
                        Legal Translation Services <br className="hidden sm:block" />
                        <span className="text-primary">English to Gujarati</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mb-8 leading-relaxed">
                        Legal documents leave no room for ambiguity. I deliver precise, legally binding translations for law firms, corporations, and individuals, maintaining strict confidentiality and terminological accuracy.
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
                    <h2 className="text-3xl font-bold text-foreground mb-12 font-display">Legal Specializations</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="glass-card p-6 rounded-xl">
                            <h3 className="text-xl font-semibold mb-3 text-primary">Contracts & Agreements</h3>
                            <p className="text-muted-foreground">Detailed translation of employment contracts, NDAs, lease agreements, and business MOUs with preserved legal nuance.</p>
                        </div>
                        <div className="glass-card p-6 rounded-xl">
                            <h3 className="text-xl font-semibold mb-3 text-primary">Court Documents</h3>
                            <p className="text-muted-foreground">Certified translation of petitions, judgments, affidavits, and evidence documents for legal proceedings in Indian courts.</p>
                        </div>
                        <div className="glass-card p-6 rounded-xl">
                            <h3 className="text-xl font-semibold mb-3 text-primary">Corporate Law</h3>
                            <p className="text-muted-foreground">Translation of articles of incorporation, board resolutions, and compliance documents for businesses operating in Gujarat.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 px-4">
                <div className="container-max">
                    <div className="glass-card p-8 rounded-2xl border-primary/20 bg-primary/5">
                        <h2 className="text-3xl font-bold mb-6 font-display">Confidentiality & Accuracy</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                I understand the sensitivity of legal data. All documents are handled with strict <strong>NDA (Non-Disclosure Agreement)</strong> compliance.
                            </p>
                            <p>
                                My process involves rigorous proofreading to ensure every legal term in Gujarati matches the precise intent of the English source usage, avoiding potential liability issues.
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
