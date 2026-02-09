import ServiceCard from "@/components/ServiceCard";

export const metadata = {
    title: "Our Services | VajraTechLabs",
    description: "Explore our wide range of IT services including Web Development, Mobile Apps, Cloud Solutions, and UI/UX Design.",
};

export default function Services() {
    const services = [
        {
            title: "Custom Web Development",
            description: "We build high-performance, SEO-friendly websites using Next.js, React, and modern CSS frameworks. From landing pages to complex web portals, we deliver excellence.",
            icon: "Globe",
            delay: 0,
        },
        {
            title: "Mobile App Development",
            description: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter. Seamless performance and native user experience.",
            icon: "Smartphone",
            delay: 0.1,
        },
        {
            title: "Cloud Solutions (AWS)",
            description: "End-to-end cloud services including architecture design, migration, Serverless computing, and cost optimization on AWS.",
            icon: "Cloud",
            delay: 0.2,
        },
        {
            title: "UI/UX Design",
            description: "User-centric design approach. We create intuitive wireframes, interactive prototypes, and stunning visual designs using Figma and Adobe XD.",
            icon: "Palette",
            delay: 0.3,
        },
        {
            title: "DevOps Services",
            description: "Streamline your development pipeline with our CI/CD implementation, Docker containerization, and Kubernetes orchestration services.",
            icon: "Settings",
            delay: 0.4,
        },
        {
            title: "E-Commerce Solutions",
            description: "Scalable e-commerce platforms with secure payment gateways, inventory management, and personalized user experiences.",
            icon: "ShoppingCart",
            delay: 0.5,
        },
        {
            title: "3D Web Experiences",
            description: "Immersive 3D websites using Three.js and WebGL. engaging product showcases and interactive storytelling.",
            icon: "Box", // Using Box as a proxy for 3D
            delay: 0.6,
        },
        {
            title: "Software Consulting",
            description: "Expert advice on technology strategy, software architecture, and digital transformation to help you achieve your business goals.",
            icon: "TrendingUp",
            delay: 0.7,
        },
    ];

    return (
        <div className="pt-20 pb-20 bg-dark min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We provide a comprehensive suite of IT services to help businesses thrive in the digital age.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
}
