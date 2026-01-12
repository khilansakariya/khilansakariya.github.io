import { Metadata } from 'next';
import { Contact } from '@/components/sections/Contact';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Medical Translation Services English to Gujarati | Khilan Sakariya',
    description: 'Specialized medical translation services for informed consent forms (ICF), clinical trials, patient reports, and healthcare documentation. Certified Gujarati linguist.',
    keywords: [
        'medical translation gujarati',
        'clinical trial translation india',
        'informed consent form translation gujarati',
        'medical report translation',
        'healthcare translator gujarati',
        'pharmaceutical translation english to gujarati',
        'ICF translation service',
        'patient information leaflet translation'
    ]
};

export default function MedicalTranslationPage() {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="relative pb-16 px-4 sm:px-6 lg:px-8">
                <div className="container-max">
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-display">
                        Medical Translation Services <br className="hidden sm:block" />
                        <span className="text-primary">English to Gujarati</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mb-8 leading-relaxed">
                        Accuracy is vital in healthcare. I provide specialized, medically accurate translations for clinical trials, patient documentation, and pharmaceutical companies, ensuring 100% compliance with industry standards.
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                        Get a Quote
                    </Link>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-16 bg-secondary/30">
                <div className="container-max px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-foreground mb-12 font-display">Medical Expertise</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="glass-card p-6 rounded-xl">
                            <h3 className="text-xl font-semibold mb-3 text-primary">Clinical Trials</h3>
                            <p className="text-muted-foreground">Expert translation of Informed Consent Forms (ICF), Patient Information Leaflets (PIL), and study protocols ensuring strict regulatory compliance.</p>
                        </div>
                        <div className="glass-card p-6 rounded-xl">
                            <h3 className="text-xl font-semibold mb-3 text-primary">Patient Records</h3>
                            <p className="text-muted-foreground">Confidential translation of medical history reports, discharge summaries, and diagnostic reports with absolute data privacy.</p>
                        </div>
                        <div className="glass-card p-6 rounded-xl">
                            <h3 className="text-xl font-semibold mb-3 text-primary">Pharmaceutical</h3>
                            <p className="text-muted-foreground">Localization of drug packaging, inserts, marketing materials, and regulatory submission documents for the Indian market.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Me Section */}
            <section className="py-16 px-4">
                <div className="container-max">
                    <div className="glass-card p-8 rounded-2xl border-primary/20 bg-primary/5">
                        <h2 className="text-3xl font-bold mb-6 font-display">Why Choose a Specialist?</h2>
                        <ul className="space-y-4 text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-xl">✓</span>
                                <span><strong>Medical Terminology:</strong> Deep understanding of anatomical, pharmacological, and clinical terminology in both English and Gujarati.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-xl">✓</span>
                                <span><strong>Cultural Sensitivity:</strong> Ensuring patient-facing materials are culturally appropriate and easily understood by the target audience.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-xl">✓</span>
                                <span><strong>Accuracy Guarantee:</strong> Multi-step quality assurance process to ensure zero errors in critical health information.</span>
                            </li>
                        </ul>
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
