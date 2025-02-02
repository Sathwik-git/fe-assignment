import {
  MessageCircle,
  Users,
  HelpCircle,
  GraduationCap,
  MessageSquare,
} from "lucide-react";
import { BarChart3, Globe2 } from "lucide-react";
import DigitalSatFaqs from "./components/DigitalSatFaqs";
import DigitalSatPlatform from "./components/DigitalSatPlatform";
import Footer from "./components/Footer";
import PricingPlans from "./components/PricingPlans";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[#F6FBFA]">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-7xl mx-4 px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-loose">
              Boost Your Digital SAT Score. Guaranteed! While Playing.
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Keep a real-time track of progress with the most fun and loved
              AI-powered practice platform.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="h-6 w-6 bg-[#6B4BFF] bg-opacity-10 rounded-full flex items-center justify-center">
                    <div className="h-2 w-2 bg-[#6B4BFF] rounded-full"></div>
                  </div>
                </div>
                <span className="text-gray-600">
                  5,000+ Fresh Digital SAT Questions
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="h-6 w-6 bg-[#6B4BFF] bg-opacity-10 rounded-full flex items-center justify-center">
                    <div className="h-2 w-2 bg-[#6B4BFF] rounded-full"></div>
                  </div>
                </div>
                <span className="text-gray-600">
                  24/7 Doubt Resolution With Big AI Tutor
                </span>
              </div>
            </div>
            <button className="mt-8 bg-[#6B4BFF] text-white px-8 py-3 rounded-full hover:bg-[#5a3ff3] font-medium">
              Get Started
            </button>
          </div>
          <div className="relative">
            <img
              src="https://framerusercontent.com/images/oLAhhxsJrxHN0p0RTCeWpC9slFY.webp?scale-down-to=1024"
              alt="Students studying"
              className="bg-inherit"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#6B4BFF]">1.7M+</div>
              <div className="mt-2 text-sm text-gray-600">Minutes Practice</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#6B4BFF]">200K+</div>
              <div className="mt-2 text-sm text-gray-600">
                Practice Tests Completed
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#6B4BFF]">73K+</div>
              <div className="mt-2 text-sm text-gray-600">
                SAT Doubt Answers
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#6B4BFF]">139+</div>
              <div className="mt-2 text-sm text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#6B4BFF]">4.9⭐</div>
              <div className="mt-2 text-sm text-gray-600">
                App & Play Store Rating
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Question Bank Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://framerusercontent.com/images/XLrfJsxdzCOHwlEpXcKoWfvWWo.webp?scale-down-to=512"
                alt="Graph showing statistics"
                className="bg-inherit"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Ultimate SAT Preparation with The{" "}
                <span className="text-[#6B4BFF]">Largest Question Bank</span>
              </h2>
              <p className="mt-6 text-gray-600">
                LearnQ.ai delivers more twice as many SAT practice questions as
                the College Board, ensuring comprehensive preparation for test
                day. With questions categorized by difficulty and an adaptive
                platform that adjusts to your performance, you'll be fully
                equipped to excel in your SAT.
              </p>
              <button className="mt-8 border-2 border-[#6B4BFF] text-[#6B4BFF] px-8 py-3 rounded-full hover:bg-[#6B4BFF] hover:text-white font-medium">
                Practice Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Boost Your Digital SAT Score and{" "}
                <span className="text-[#6B4BFF]">Save Big with LearnQ.ai</span>
              </h2>
              <p className="mt-6 text-gray-600">
                - Expert Insights from Ritesh Verma
              </p>
              <p className="mt-4 text-gray-600">
                Discover how Ritesh Verma uses LearnQ's smart tools and AI to
                help students ace the Digital SAT.
              </p>
              <button className="mt-8 border-2 border-[#6B4BFF] text-[#6B4BFF] px-8 py-3 rounded-full hover:bg-[#6B4BFF] hover:text-white font-medium">
                Try LearnQ.ai
              </button>
            </div>
            <div className="relative">
              <img
                src="https://framerusercontent.com/images/hfTIDuYAdxBXzQL5rLQH1J2Zg.webp"
                alt="Video thumbnail"
                className="rounded-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="h-12 w-12 bg-[#6B4BFF] rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Graph Section */}
            <div className="relative">
              <img
                src="https://framerusercontent.com/images/Ur7AUqo0m0fONQfidOaYxyOlz5M.webp?scale-down-to=512"
                alt="SAT Score Comparison Graph"
                className="rounded-lg bg-inherit"
              />
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <h1 className="text-3xl font-bold">
                <span className="text-navy-900">
                  Achieve Accurate SAT Results with
                </span>
                <br />
                <span className="text-emerald-700">
                  LearnQ's Precision Algorithm
                </span>
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                At LearnQ, our advanced algorithm, combined with high-quality
                questions, ensures that students practice scores closely mirror
                their actual SAT results.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                The graph illustrates the impressive alignment between average
                scores on our platform and actual SAT scores. With LearnQ,
                students are always a step ahead, fully prepared to excel on
                test day.
              </p>

              <button className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-3 rounded-full hover:bg-navy-800 transition-colors">
                <BarChart3 className="w-5 h-5" />
                <span className="font-semibold">Boost Your Score</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tutor CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#F3FFE5] rounded-2xl p-6 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-[#2D2D2D]">
              Are You a Tutor or a Test Prep Institute?
            </h3>
            <p className="text-gray-600 mt-2">
              Give your students a Duolingo-like platform for the SAT with
              Shopify-like customization for tutors and test prep institutes.
            </p>
          </div>
          <button className="px-6 py-2.5 bg-white text-[#35155D] font-medium rounded-full hover:bg-[#35155D] hover:text-white transition-colors whitespace-nowrap">
            Book Free Demo
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#E5E7EB] bg-opacity-50 px-4 py-2 rounded-full text-sm font-medium text-[#2D2D2D] mb-4">
              WALL OF LOVE
            </div>
            <h2 className="text-3xl font-bold text-[#2D2D2D] flex items-center justify-center gap-2">
              Loved By Digital SAT Aspirants Across The Globe{" "}
              <Globe2 className="text-[#00C7B1]" />
            </h2>
            <button className="mt-6 px-6 py-2.5 bg-[#35155D] text-white font-medium rounded-full hover:bg-[#2D1150] transition-colors">
              See the Wall of Love
            </button>
          </div>

          {/* Video Wall */}
          <div className="video-wall relative h-[600px] overflow-hidden">
            <div className="animate-moveUpward">
              <div className="grid grid-cols-3 gap-4">
                {/* First Column */}
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                        alt="Student testimonial"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <div className="h-8 w-8 bg-[#6B4BFF] rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white ml-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-bold text-[#2D2D2D]">
                        Dharana Cherukuwada
                      </h4>
                      <div className="flex text-yellow-400 mt-1">
                        {"★".repeat(5)}
                      </div>
                    </div>
                  </div>
                  {/* Add more testimonials for first column */}
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                        alt="Student testimonial"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <div className="h-8 w-8 bg-[#6B4BFF] rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white ml-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-bold text-[#2D2D2D]">
                        Pradeep Giridharan
                      </h4>
                      <p className="text-gray-600 mt-1">
                        "Interactive topic-games cleared my concepts"
                      </p>
                      <div className="flex text-yellow-400 mt-1">
                        {"★".repeat(5)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Column */}
                <div className="space-y-4 mt-8">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1517256673644-36ad11246d21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                        alt="Student testimonial"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <div className="h-8 w-8 bg-[#6B4BFF] rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white ml-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-bold text-[#2D2D2D]">
                        Sarah Johnson
                      </h4>
                      <div className="flex text-yellow-400 mt-1">
                        {"★".repeat(5)}
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                        alt="Student testimonial"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <div className="h-8 w-8 bg-[#6B4BFF] rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white ml-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-bold text-[#2D2D2D]">
                        Pradeep Giridharan
                      </h4>
                      <p className="text-gray-600 mt-1">
                        "Interactive topic-games cleared my concepts"
                      </p>
                      <div className="flex text-yellow-400 mt-1">
                        {"★".repeat(5)}
                      </div>
                    </div>
                  </div>
                  {/* Add more testimonials for second column */}
                </div>

                {/* Third Column */}
                <div className="space-y-4 mt-16">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                        alt="Student testimonial"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <div className="h-8 w-8 bg-[#6B4BFF] rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white ml-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-bold text-[#2D2D2D]">
                        Dharana Cherukuwada
                      </h4>
                      <div className="flex text-yellow-400 mt-1">
                        {"★".repeat(5)}
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                        alt="Student testimonial"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <div className="h-8 w-8 bg-[#6B4BFF] rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white ml-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-bold text-[#2D2D2D]">
                        Pradeep Giridharan
                      </h4>
                      <p className="text-gray-600 mt-1">
                        "Interactive topic-games cleared my concepts"
                      </p>
                      <div className="flex text-yellow-400 mt-1">
                        {"★".repeat(5)}
                      </div>
                    </div>
                  </div>
                  {/* Add more testimonials for third column */}
                </div>
              </div>

              {/* Duplicate the grid for seamless scrolling */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                {/* Duplicate of the above content */}
                {/* This creates the seamless scrolling effect */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DigitalSatPlatform />
      <div className="min-h-screen bg-[#5865F2] flex items-center justify-center p-4">
        <div className="bg-[#404EED]/30 backdrop-blur-sm rounded-2xl p-8 max-w-5xl shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Channels */}
            <div>
              {/* LearnQ.ai Logo */}
              <div>
                <img
                  src="https://framerusercontent.com/images/T5yo28F3fL7UaEZhIKj7524Q2BY.webp?scale-down-to=2048"
                  alt=""
                />
              </div>
            </div>
            <div className="text-white space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                
                
              </div>
              <p className="text-sm font-medium uppercase tracking-wider">Connect with top SAT achievers</p>
            </div>

            <h1 className="text-4xl font-bold leading-tight">
              Join our Thriving<br />Discord Community
            </h1>

            <button className="bg-white text-[#5865F2] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
              Join Now
            </button>
          </div>
          </div>
        </div>
      </div>
      <PricingPlans />
      <DigitalSatFaqs />
      <Footer />
    </div>
  );
}

export default App;
