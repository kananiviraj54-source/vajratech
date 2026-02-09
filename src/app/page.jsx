import Link from "next/link";
import Hero3D from "@/components/Hero3D";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import TechGrid from "@/components/TechGrid";
import Button from "@/components/ui/Button";

export default function Home() {
    const services = [
        {
            title: "Custom Web Development",
            description: "Scalable, high-performance websites using Next.js and React.",
            icon: "Globe",
            delay: 0,
        },
        {
            title: "Mobile App Development",
            description: "Native and cross-platform mobile applications for iOS and Android.",
            icon: "Smartphone",
            delay: 1,
        },
        {
            title: "Cloud Solutions (AWS)",
            description: "Secure and scalable cloud infrastructure and migration services.",
            icon: "Cloud",
            delay: 2,
        },
        {
            title: "UI/UX Design",
            description: "Intuitive and engaging user interfaces with modern aesthetics.",
            icon: "Palette",
            delay: 3,
        },
    ];

    const featuredProjects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online store with payment gateway, user dashboard, and admin panel.",
            tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
            demoLink: "#",
            repoLink: "#",
        },
        {
            title: "CRM Software",
            description: "Comprehensive Customer Relationship Management tool for enterprise clients.",
            tags: ["React", "Firebase", "Tailwind"],
            demoLink: "#",
            repoLink: "#",
        },
        {
            title: "Real Estate App",
            description: "Property listing and management application with map integration.",
            tags: ["React Native", "Express", "PostgreSQL"],
            demoLink: "#",
            repoLink: "#",
        }
    ];


    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <Hero3D />
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        Innovating the Future of Tech
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        VajraTechLabs transforms ideas into powerful digital reality. 2+ years of excellence in Web, Mobile, and Cloud solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/contact" variant="primary" icon>
                            Get Started
                        </Button>
                        <Button href="/work" variant="outline">
                            View Our Work
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-darker">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
                            Our Services
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Comprehensive IT solutions tailored to your business needs.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Work Section */}
            <section className="py-20 bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Projects</h2>
                            <p className="text-gray-400">Highlights from our portfolio</p>
                        </div>
                        <Link href="/work" className="text-primary hover:text-white transition-colors flex items-center gap-2">
                            View All <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20 bg-darker overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Technologies</h2>
                        <p className="text-gray-400">Powered by the latest tech stack</p>
                    </div>
                    <TechGrid />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-dark to-primary/10">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Let&apos;s discuss how VajraTechLabs can help you achieve your digital goals with our expert solutions.
                    </p>
                    <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
                        Contact Us Today
                    </Button>
                </div>
            </section>
        </>
    );
}
