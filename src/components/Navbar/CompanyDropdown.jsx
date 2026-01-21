import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiInfo,
  FiUsers,
  FiBriefcase,
  FiFileText,
  FiMessageSquare,
  FiLock,
  FiPhone,
} from "react-icons/fi";

const CompanyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const companyLinks = [
    {
      id: 1,
      label: "About Us",
      href: "/about",
      icon: <FiInfo className="w-6 h-6" />,
    },
    {
      id: 2,
      label: "Our Team",
      href: "/team",
      icon: <FiUsers className="w-6 h-6" />,
    },
    {
      id: 3,
      label: "Careers",
      href: "/careers",
      icon: <FiBriefcase className="w-6 h-6" />,
    },
    {
      id: 4,
      label: "Case Studies",
      href: "/case-studies",
      icon: <FiFileText className="w-6 h-6" />,
    },
    {
      id: 5,
      label: "Blogs",
      href: "/blogs",
      icon: <FiMessageSquare className="w-6 h-6" />,
    },
    {
      id: 6,
      label: "Privacy Policy",
      href: "/privacy",
      icon: <FiLock className="w-6 h-6" />,
    },
    {
      id: 7,
      label: "Contact Us",
      href: "/contact",
      icon: <FiPhone className="w-6 h-6" />,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    navigate(href);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-yellow-400 text-white font-semibold px-6 py-2 rounded-2xl hover:bg-yellow-500 hover:text-white transition-colors flex items-center gap-2"
      >
        Company
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 animate-in fade-in slide-in-from-top-2 overflow-hidden w-11/12 md:w-full"
          style={{
            width: "calc(100vw - 32px)",
            maxWidth: "1100px",
            height: "auto",
            maxHeight: "80vh",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full p-4 md:p-6">
            <div className="md:col-span-2 lg:col-span-3 overflow-y-auto max-h-96 md:max-h-full pr-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {companyLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.href)}
                    className="group flex flex-col items-start p-3 md:p-4 rounded-lg bg-linear-to-br from-gray-50 to-white hover:from-yellow-50 hover:to-yellow-100 transition-all duration-300 border border-gray-200 hover:border-yellow-300 text-left"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-linear-to-br from-yellow-100 to-orange-100 rounded-lg flex items-center justify-center text-yellow-600 mb-2 md:mb-3 group-hover:shadow-md transition-shadow text-lg">
                      {link.icon}
                    </div>

                    <h3 className="font-semibold text-gray-800 text-xs md:text-sm mb-1 md:mb-2 group-hover:text-yellow-600 transition-colors line-clamp-2">
                      {link.label}
                    </h3>

                    <span className="text-yellow-600 text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more{" "}
                      <svg
                        className="w-3 h-3 shrink-0"
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
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-1">
              <div className="bg-linear-to-br from-yellow-500 via-yellow-600 to-orange-600 rounded-xl p-4 md:p-5 text-white h-full flex flex-col justify-between shadow-lg">
                {/* Icon */}
                <div className="text-3xl md:text-4xl">✈️</div>

                <div>
                  <h4 className="font-bold text-sm md:text-base leading-tight mb-2 md:mb-3">
                    Driving Digital Innovation
                  </h4>

                  <p className="text-xs opacity-90 mb-3 md:mb-4 line-clamp-3">
                    With over a decade of experience, we help businesses
                    transform through technology.
                  </p>

                  <button className="bg-white text-yellow-600 font-semibold text-xs md:text-sm px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-1 w-full justify-center">
                    Learn Story{" "}
                    <svg
                      className="w-3 h-3"
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
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden bg-linear-to-br from-yellow-500 via-yellow-600 to-orange-600 p-4 text-white">
            <div className="flex items-start gap-4">
              <div className="text-2xl">✈️</div>
              <div className="flex-1">
                <h4 className="font-bold text-base mb-2">
                  Driving Digital Innovation
                </h4>
                <p className="text-xs opacity-90 mb-3 line-clamp-2">
                  With over a decade of experience, we help businesses transform
                  through technology.
                </p>
                <button className="bg-white text-yellow-600 font-semibold text-xs px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-1">
                  Learn Story{" "}
                  <svg
                    className="w-3 h-3"
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyDropdown;
