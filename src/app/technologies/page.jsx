import TechGrid from "@/components/TechGrid";

export const metadata = {
    title: "Technologies | VajraTechLabs",
    description: "Our technology stack includes React, Next.js, Node.js, AWS, and more.",
};

export default function Technologies() {
    return (
        <div className="pt-20 pb-20 bg-dark min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Technologies We Use</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We leverage the latest tools and frameworks to build robust, scalable, and future-proof solutions.
                    </p>
                </div>

                <TechGrid />

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-4">Frontend</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>React.js / Next.js</li>
                            <li>Tailwind CSS / Sass</li>
                            <li>Three.js / React Three Fiber</li>
                            <li>GSAP / Framer Motion</li>
                            <li>Redux / Zustand</li>
                        </ul>
                    </div>
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-4">Backend & Cloud</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Node.js / Express</li>
                            <li>Python / Django</li>
                            <li>MongoDB / PostgreSQL</li>
                            <li>AWS (EC2, S3, Lambda)</li>
                            <li>Docker / Kubernetes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
