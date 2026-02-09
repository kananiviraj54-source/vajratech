"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert("Message sent! (Demo)");
    };

    return (
        <div className="pt-20 pb-20 bg-darker min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Have a project in mind? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
                                <p className="text-gray-400">info@vajratechlabs.com</p>
                                <p className="text-gray-400">support@vajratechlabs.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Visit Us</h3>
                                <p className="text-gray-400">VajraTechLabs HQ,</p>
                                <p className="text-gray-400">Tech Park, Bangalore,</p>
                                <p className="text-gray-400">India - 560001</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Call Us</h3>
                                <p className="text-gray-400">+91 98765 43210</p>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-64 rounded-xl overflow-hidden bg-gray-800 border border-white/10 mt-8 relative">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                Interactive Map Loading...
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124410.95758156163!2d77.51682772592985!3d12.980075836468758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-70 grayscale hover:grayscale-0 transition-all duration-300"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500"
                                    placeholder="Tell us about your project..."
                                />
                            </div>
                            <Button type="submit" variant="primary" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
