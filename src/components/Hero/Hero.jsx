import React from "react";
import webBanner from "../../assets/webbanner.webp";
import {
  HERO_STATS,
  HERO_HIGHLIGHTS,
  HERO_TAG,
  HERO_MAIN_DESCRIPTION,
  HERO_SUB_DESCRIPTION,
  HERO_TAGLINE,
} from "../../constants/home";

const Hero = () => {
  return (
    <div className="w-full bg-white pt-40 pb-20 mt-20">
      {/* Hero Main Section */}
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent />

          <HeroMedia />
        </div>
      </div>

      <ServicesSection />
    </div>
  );
};

const HeroContent = () => (
  <div>
    <div className="inline-block bg-pink-200 px-6 py-2 mb-8">
      <p className="text-gray-800 font-semibold text-sm">{HERO_TAG}</p>
    </div>

    <HeroHeading />

    <HeroDescription />

    <HeroButtons />
  </div>
);

const HeroHeading = () => (
  <div className="mb-8">
    {HERO_HIGHLIGHTS.map((line, index) => (
      <h1
        key={index}
        className={`text-4xl lg:text-5xl font-bold leading-tight ${
          line.includes("No") || line.includes("Actual")
            ? "text-gray-900"
            : "text-yellow-400"
        }`}
      >
        {line}
      </h1>
    ))}
  </div>
);

const HeroDescription = () => (
  <div className="space-y-4 mb-8">
    <p className="text-gray-500 text-lg leading-relaxed">
      {HERO_MAIN_DESCRIPTION}
    </p>
    <p className="text-gray-500 text-lg leading-relaxed">
      {HERO_SUB_DESCRIPTION}
    </p>
    <p className="text-gray-400 text-sm italic">{HERO_TAGLINE}</p>
  </div>
);

const HeroButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4">
    <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full transition-colors duration-200 hover:bg-yellow-500 flex items-center gap-2 justify-center sm:justify-start">
      Start Free Trial
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
    <button className="text-yellow-600 font-semibold px-8 py-3 transition-colors duration-200 hover:text-yellow-700 flex items-center gap-2 justify-center sm:justify-start">
      View Case Studies
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
    </button>
  </div>
);

const HeroMedia = () => (
  <div>
    <div className="mb-12 rounded-3xl overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/B4z8t1AEqTg"
        title="This Is How SMART ITBOX Was Born"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full"
      />
    </div>

    <div className="flex gap-6">
      {HERO_STATS.map((stat, index) => (
        <StatCard key={index} stat={stat} />
      ))}
    </div>
  </div>
);

const StatCard = ({ stat }) => (
  <div className="text-center border-2 border-gray-200 rounded-xl p-4">
    <h3 className="text-3xl lg:text-2xl font-bold text-gray-700 mb-2">
      {stat.number}
    </h3>
    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
  </div>
);

const ServicesSection = () => (
  <div className="max-w-7xl mx-auto px-5 mt-20">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Image Card */}
      <ServiceImageCard />

      <ServiceCard
        title="Web Design"
        description="Web design usually refers to the user experience aspects of website development rather than software development."
      />

      <ServiceCard
        title="Digital Transformation"
        description="Digital transformation is the incorporation of computer-based technologies into an organization's products, processes and strategies."
      />
    </div>
  </div>
);

const ServiceImageCard = () => (
  <div className="bg-orange-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 p-6 min-h-80">
    <div className="w-full h-full rounded-xl overflow-hidden">
      <img
        src={webBanner}
        alt="Web Design"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
);

const ServiceCard = ({ title, description }) => (
  <div className="bg-orange-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 min-h-80 flex flex-col justify-center items-center text-center">
    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
      {title}
    </h3>
    <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6" />
    <p className="text-gray-600 text-base leading-relaxed">{description}</p>
  </div>
);

export default Hero;
