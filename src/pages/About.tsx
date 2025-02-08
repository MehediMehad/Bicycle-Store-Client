import { useState } from "react";
import { Bike, Globe, Mountain, Leaf } from "lucide-react";

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState<
    "mission" | "vision" | "values"
  >("mission");

  const sections = {
    mission: {
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      title: "Our Mission",
      content:
        "To revolutionize cycling by connecting people with sustainable, innovative transportation solutions that inspire adventure and environmental consciousness.",
    },
    vision: {
      icon: <Mountain className="w-12 h-12 text-green-500" />,
      title: "Our Vision",
      content:
        "Creating a world where cycling is more than transportation—it's a lifestyle that promotes health, community, and environmental stewardship.",
    },
    values: {
      icon: <Leaf className="w-12 h-12 text-emerald-500" />,
      title: "Our Values",
      content:
        "We believe in sustainable mobility, community empowerment, and pushing the boundaries of cycling innovation.",
    },
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Bike className="w-16 h-16 text-blue-600 mr-4" />
            <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
              Pedal Planet
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering urban cyclists, one revolution at a time
          </p>
        </div>

        {/* Interactive Sections */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="flex border-b">
            {(Object.keys(sections) as Array<keyof typeof sections>).map(
              (key) => (
                <button
                  key={key}
                  className={`flex-1 py-4 px-6 text-center transition-all duration-300 ${
                    activeSection === key
                      ? "bg-blue-50 text-blue-600 font-bold"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveSection(key)}
                >
                  {sections[key].title}
                </button>
              )
            )}
          </div>

          <div className="p-12 text-center">
            {sections[activeSection].icon}
            <h2 className="text-3xl font-bold text-gray-800 mt-4 mb-6">
              {sections[activeSection].title}
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
              {sections[activeSection].content}
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="mt-16 bg-white shadow-xl rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Our Journey
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Founded in 2018 by a passionate group of cyclists, Pedal Planet
                emerged from a simple dream: to transform urban mobility and
                create a more sustainable, connected world through the power of
                cycling.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From a small workshop to a growing community, we've been
                dedicated to providing top-quality bicycles, expert services,
                and inspiring cycling culture.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-blue-100 rounded-full p-8">
                <Bike className="w-32 h-32 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Us
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>🌍 123 Cycling Avenue, Urban Hub</p>
              <p>📞 (555) PEDAL-GO</p>
              <p>✉️ hello@pedalplanet.com</p>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Store Hours
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>Monday - Friday: 10am - 8pm</p>
              <p>Saturday: 9am - 6pm</p>
              <p>Sunday: 11am - 5pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
