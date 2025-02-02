import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'Digital SAT' | 'LearnQ.ai';
}

const faqs: FAQ[] = [
  {
    id: 'what-is',
    question: 'What is the Digital SAT?',
    answer: 'The Digital SAT is the new format of the SAT that will be administered on a computer or tablet. It features adaptive testing technology, shorter test duration, and immediate score reporting. The test maintains the same scoring scale (400-1600) and continues to assess reading, writing, and math skills essential for college readiness.',
    category: 'Digital SAT'
  },
  {
    id: 'digital-vs-paper',
    question: 'Which One Should I Opt For: Digital SAT vs. Paper SAT?',
    answer: 'Starting from March 2024, all SAT tests will be digital - there will no longer be a paper option. The Digital SAT offers several advantages: shorter test duration (2 hours instead of 3), faster score reporting, and a more streamlined testing experience with built-in tools like a calculator and timer.',
    category: 'Digital SAT'
  },
  {
    id: 'adaptive',
    question: 'Is the Digital SAT adaptive?',
    answer: 'Yes, the Digital SAT uses adaptive testing technology. This means the difficulty of the second module in each section is determined by your performance in the first module. This allows for a more precise measurement of your abilities while maintaining the same scoring scale and college readiness standards.',
    category: 'Digital SAT'
  },
  {
    id: 'score-calculation',
    question: 'How is the Digital SAT score calculated?',
    answer: 'The Digital SAT maintains the 400-1600 scoring scale. Each section (Math and Evidence-Based Reading and Writing) is scored on a 200-800 scale. The adaptive nature of the test helps in more precise scoring, but the fundamental scoring approach remains similar to the paper version.',
    category: 'Digital SAT'
  },
  {
    id: 'at-home',
    question: 'Can the Digital SAT be taken at home?',
    answer: 'No, the Digital SAT must be taken at an approved test center or school. While the test is digital, it is administered under supervised conditions to maintain security and fairness. The College Board currently does not offer at-home testing options for the SAT.',
    category: 'Digital SAT'
  },
  {
    id: 'study-start',
    question: 'How should I start studying for Digital SAT?',
    answer: 'Start by familiarizing yourself with the digital format using LearnQ.ai\'s practice platform. Focus on understanding the adaptive nature of the test, practice with the digital tools provided, and take full-length practice tests to build stamina. Our AI-powered system will create a personalized study plan based on your performance.',
    category: 'LearnQ.ai'
  },
  {
    id: 'curriculum',
    question: 'What is the curriculum for Digital SAT Exam?',
    answer: 'The Digital SAT curriculum covers Reading and Writing (including vocabulary, grammar, and comprehension) and Math (including algebra, problem-solving, and advanced mathematics). LearnQ.ai provides comprehensive coverage of all topics with adaptive practice questions and detailed explanations.',
    category: 'LearnQ.ai'
  }
];

const DigitalSatFaqs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Digital SAT' | 'LearnQ.ai'>('Digital SAT');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#2E1A4A] mb-12">
          Digital SAT FAQs
        </h2>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveCategory('Digital SAT')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeCategory === 'Digital SAT'
                ? 'bg-[#7C3AED] text-white'
                : 'bg-white text-[#7C3AED] border border-[#7C3AED] hover:bg-[#F4EFFF]'
            }`}
          >
            Digital SAT
          </button>
          <button
            onClick={() => setActiveCategory('LearnQ.ai')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeCategory === 'LearnQ.ai'
                ? 'bg-[#7C3AED] text-white'
                : 'bg-white text-[#7C3AED] border border-[#7C3AED] hover:bg-[#F4EFFF]'
            }`}
          >
            LearnQ.ai
          </button>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full py-4 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-medium text-[#2E1A4A] group-hover:text-[#7C3AED]">
                  {faq.question}
                </span>
                <Plus 
                  className={`w-5 h-5 text-[#7C3AED] transform transition-transform duration-200 ${
                    openItems.includes(faq.id) ? 'rotate-45' : ''
                  }`} 
                />
              </button>
              {openItems.includes(faq.id) && (
                <div className="pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalSatFaqs;