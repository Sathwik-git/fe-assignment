import React from 'react';
import { Check } from 'lucide-react';

interface PlanFeature {
  text: string;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: PlanFeature[];
  buttonText: string;
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    name: "FREE",
    price: "FREE",
    period: "",
    tagline: "To experience LearnQ",
    features: [
      { text: "No Card Required" },
      { text: "10 Ask Me - AI Tutor Chats" },
      { text: "5 topic-wise Tests in total" },
      { text: "1 Digital SAT Diagnostic Test" },
    ],
    buttonText: "Start For Free",
  },
  {
    name: "STARTER",
    price: "$59",
    period: "Annually",
    tagline: "Everything you need to get started",
    features: [
      { text: "2 Digital SAT Full-Length Practice Tests" },
      { text: "150 Ask Me - AI Tutor Chats" },
      { text: "2 topic-wise Tests for each topic" },
      { text: "2 Digital SAT Diagnostic Test" },
    ],
    buttonText: "Buy Now",
  },
  {
    name: "ESSENTIAL",
    price: "$149",
    period: "Annually",
    tagline: "Take your SAT prep to the next level",
    features: [
      { text: "7 Digital SAT Full-Length Practice Tests" },
      { text: "300 Ask Me - AI Tutor Chats" },
      { text: "5 topic-wise Tests for each topic" },
      { text: "3 Digital SAT Diagnostic Tests" },
    ],
    buttonText: "Buy Now",
    highlighted: true,
  },
  {
    name: "ADVANCED",
    price: "$199",
    period: "Annually",
    tagline: "Fastest way to reach 1500+ Digital SAT Score",
    features: [
      { text: "16 Digital SAT Full-Length Practice Tests" },
      { text: "1000 Ask Me - AI Tutor Chats" },
      { text: "20 topic-wise Tests for each topic" },
      { text: "5 Digital SAT Diagnostic Tests" },
    ],
    buttonText: "Buy Now",
  },
];

const additionalFeatures = [
  "Free Personalized Study Plan",
  "SAT Predicted Score",
  "AI-Powered Accuracy, Time Management & PassKey Analytics",
  "Discord Community Support",
  "AI-Powered Study Recommendations",
  "Test Review with AI Tutor Mix",
  "Personalized AI Tutor Modes",
  "Practice with AI tutor Mix",
];

const PricingPlans: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing and Plans</h2>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 ${
                plan.highlighted
                  ? 'bg-blue-50 border-2 border-blue-500 shadow-lg'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  plan.highlighted ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {plan.name}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="ml-2 text-gray-600 text-sm">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mt-2">{plan.tagline}</p>
              </div>

              <ul className="mb-6 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 px-4 rounded-lg font-medium ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : plan.name === "FREE"
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                } transition-colors duration-200`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Features Section */}
        <div className="bg-[#f7ffa6] rounded-2xl p-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-6">What else do you get with every plan?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <button className="mt-6 bg-gray-900 text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200">
              Get Started Now
            </button>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 via-white to-pink-50 rounded-2xl p-8">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Score Higher or Get a Full Refund—Guaranteed!*
              </h3>
              <p className="text-sm text-gray-600">
                LearnQ guarantees a full refund if student's actual Digital SAT score is below their projected
                score from the initial diagnostic test on LearnQ.
              </p>
              <p className="text-xs text-gray-500 mt-2">*Read the full Terms & Conditions {'>'}{'>'}
              </p>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=200&h=200"
                alt="Guarantee Badge"
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;