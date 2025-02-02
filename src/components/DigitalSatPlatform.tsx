import React, { useState } from 'react';
import { BarChart3, Brain, Briefcase, PaintBucket, Calendar, FileText } from 'lucide-react';

interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  content: {
    title: string;
    description: string;
    image: string;
  };
}

const tabs: TabItem[] = [
  {
    id: 'plug-play',
    label: 'Plug & Play',
    icon: <Brain className="w-4 h-4" />,
    content: {
      title: 'Seamless Integration',
      description: 'Get started immediately with our plug-and-play Digital SAT platform, designed for easy implementation in your educational institution.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=600'
    }
  },
  {
    id: 'analyze',
    label: 'Analyze Performance',
    icon: <BarChart3 className="w-4 h-4" />,
    content: {
      title: 'With real-time insights, learning becomes data-driven',
      description: 'Our analytics platform equips educators with instant visibility into student progress, facilitating prompt and effective assistance where needed.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600'
    }
  },
  {
    id: 'ai-recommendations',
    label: 'AI Recommendations',
    icon: <Brain className="w-4 h-4" />,
    content: {
      title: 'AI-Powered Learning Insights',
      description: 'Leverage advanced AI algorithms to receive personalized recommendations for each student\'s learning journey.',
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&h=600'
    }
  },
  {
    id: 'custom-branding',
    label: 'Custom Branding',
    icon: <PaintBucket className="w-4 h-4" />,
    content: {
      title: 'Your Brand, Your Platform',
      description: 'Customize the platform with your institution\'s branding to provide a seamless experience for your students.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&h=600'
    }
  },
  {
    id: 'grow-business',
    label: 'Grow Business',
    icon: <Briefcase className="w-4 h-4" />,
    content: {
      title: 'Scale Your Education Business',
      description: 'Expand your reach and grow your business with our comprehensive Digital SAT solution.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600'
    }
  },
  {
    id: 'publish-mock',
    label: 'Publish Your Mock',
    icon: <FileText className="w-4 h-4" />,
    content: {
      title: 'Create Custom Tests',
      description: 'Design and publish your own mock tests to prepare students for the Digital SAT exam.',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&h=600'
    }
  },
  {
    id: 'schedule',
    label: 'Schedule Tests',
    icon: <Calendar className="w-4 h-4" />,
    content: {
      title: 'Flexible Test Scheduling',
      description: 'Plan and schedule tests according to your institution\'s timeline and student needs.',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&h=600'
    }
  }
];

const DigitalSatPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[1].id); // Start with Analyze Performance tab

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-[#E6FFF9] text-[#00A99D] rounded-full text-sm font-medium mb-4">
            DIGITAL SAT PLATFORM
          </div>
          <h1 className="text-4xl font-bold text-[#2E1A4A] mb-4">
            Digital SAT Solution for Institutes and Educators
          </h1>
          <p className="text-lg text-gray-600">
            Suite Of AI Driven Digital SAT Exam Tools For Education Providers
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-2 min-w-max px-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-[#F4EFFF] text-[#6941C6]'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeContent && (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-[#2E1A4A] mb-6">
                {activeContent.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {activeContent.description}
              </p>
              <button className="bg-[#6941C6] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5832A3] transition-colors duration-200">
                Learn More
              </button>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 transform rotate-3 rounded-2xl"></div>
                <img
                  src={activeContent.image}
                  alt={activeContent.title}
                  className="relative rounded-2xl shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalSatPlatform;