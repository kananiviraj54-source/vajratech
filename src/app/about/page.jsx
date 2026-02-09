export const metadata = {
    title: "About Us | VajraTechLabs",
    description: "Learn about VajraTechLabs, our journey, mission, and the team driving innovation in IT services.",
};

export default function About() {
    return (
        <div className="pt-20 pb-20 bg-darker min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6">
                        About VajraTechLabs
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We are a forward-thinking IT services company dedicated to transforming businesses through technology.
                    </p>
                </div>

                {/* Story Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Our Journey</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Founded 2+ years ago, VajraTechLabs started with a vision to bridge the gap between complex technology and business needs. Over the years, we have grown from a small team of passionate developers into a full-service IT agency.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            We have successfully delivered projects ranging from simple business websites to complex enterprise CRM systems and innovative 3D web experiences. Our commitment to quality and innovation has made us a trusted partner for businesses worldwide.
                        </p>
                    </div>
                    <div className="relative h-80 rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
                        {/* Placeholder for About Image */}
                        <div className="text-center">
                            <div className="text-6xl font-bold text-primary mb-2">2+</div>
                            <div className="text-xl text-white">Years of Excellence</div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                        <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-gray-400">
                            To empower businesses with scalable, efficient, and innovative digital solutions that drive growth and competitive advantage in the modern digital landscape.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/30 transition-colors">
                        <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                        <p className="text-gray-400">
                            To be a global leader in IT services, known for our technical excellence, creative problem-solving, and unwavering commitment to client success.
                        </p>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-12">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6">
                            <div className="text-primary text-4xl mb-4">🚀</div>
                            <h4 className="text-xl font-bold text-white mb-2">Innovative Approach</h4>
                            <p className="text-gray-400">We stay ahead of the curve with the latest tech stacks like Next.js, Three.js, and AI integration.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-primary text-4xl mb-4">💎</div>
                            <h4 className="text-xl font-bold text-white mb-2">Quality First</h4>
                            <p className="text-gray-400">We never compromise on code quality, performance, or user experience.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-primary text-4xl mb-4">🤝</div>
                            <h4 className="text-xl font-bold text-white mb-2">Client-Centric</h4>
                            <p className="text-gray-400">Your success is our success. We work collaboratively to bring your vision to life.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
