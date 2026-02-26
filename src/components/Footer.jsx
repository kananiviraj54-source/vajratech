"use client";

import Link from "next/link";
import { Linkedin, Github, Twitter, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                        VajraTechLabs
                    </h3>
                    <p className="text-sm text-gray-500">
                        Empowering businesses with cutting-edge IT solutions. 2+ years of
                        excellence in web, mobile, and cloud technologies.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="https://linkedin.com" className="hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="https://github.com" className="hover:text-white transition-colors">
                            <Github size={20} />
                        </Link>
                        <Link href="https://twitter.com" className="hover:text-white transition-colors">
                            <Twitter size={20} />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/about" className="hover:text-white transition-colors">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-white transition-colors">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/work" className="hover:text-white transition-colors">
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-white transition-colors">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                    <ul className="space-y-2">
                        <li>Web Development</li>
                        <li>Mobile Apps</li>
                        <li>Cloud Solutions</li>
                        <li>UI/UX Design</li>
                        <li>DevOps</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                    <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                            <Mail size={16} className="text-gray-500" />
                            <span>info@vajratechlabs.com</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <MapPin size={16} className="text-gray-500" />
                            <span>India</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/5 text-center text-sm text-gray-600">
                &copy; {new Date().getFullYear()} VajraTechLabs. All rights reserved.
            </div>
        </footer>
    );
}
