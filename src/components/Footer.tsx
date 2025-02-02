import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Disc as Discord,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Features",
      links: [
        { name: "Diagnostic Test", href: "#" },
        { name: "Play & Practice", href: "#" },
        { name: "Mock Tests", href: "#" },
        { name: "Mia, AI Tutor", href: "#" },
        { name: "Digital SAT", href: "#" },
        { name: "Schools/Institutes", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Users Terms and Conditions", href: "#" },
        { name: "Enterprise Terms and Conditions", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Cookie Settings", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blogs", href: "#" },
        { name: "iOS App", href: "#" },
        { name: "Android App", href: "#" },
      ],
    },
    {
      title: "Compare",
      links: [
        { name: "CollegeBoard Bluebook", href: "#" },
        { name: "Khan Academy", href: "#" },
        { name: "Rtest.ai", href: "#" },
        { name: "UWorld", href: "#" },
        { name: "TestInnovators", href: "#" },
        { name: "Kaplan SAT", href: "#" },
        { name: "Acely.ai", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact", href: "#" },
        { name: "Join Discord Community", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Contact Sales", href: "#" },
        { name: "Request Demo", href: "#" },
        { name: "Try for Free", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-pink-50 via-purple-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-[#2E1A4A] font-semibold mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-[#7C3AED] text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-[#2E1A4A] mb-4">
              Download
            </h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-12"
                />
              </a>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-600 hover:text-[#7C3AED]">
              <Discord className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#7C3AED]">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#7C3AED]">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#7C3AED]">
              <Youtube className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#7C3AED]">
              <Facebook className="h-6 w-6" />
            </a>
          </div>

          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">
              SAT® is a trademark registered by the College Board, which is not
              affiliated with, and does not endorse, this site.
            </p>
            <p>© {currentYear} All rights reserved LearnQ Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
