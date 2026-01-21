import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import CompanyDropdown from "./CompanyDropdown";
import { NAV_ITEMS, ROUTES } from "../../constants/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCompanyMenu = () => {
    setIsCompanyOpen(!isCompanyOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavigation = (href) => {
    navigate(href);
    closeMenu();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-20">
          <LogoSection />

          <DesktopNav navItems={NAV_ITEMS} navigate={navigate} />

          <div className="flex items-center gap-3">
            <TalkToUsButton onClick={() => handleNavigation(ROUTES.CONTACT)} />
            <MobileMenuToggle isOpen={isOpen} onClick={toggleMenu} />
          </div>
        </div>

        {isOpen && (
          <MobileNav
            navItems={NAV_ITEMS}
            isCompanyOpen={isCompanyOpen}
            onToggleCompany={toggleCompanyMenu}
            onNavigate={handleNavigation}
          />
        )}
      </div>
    </nav>
  );
};

const LogoSection = () => (
  <div className="flex items-center gap-2">
    <img
      src={logo}
      alt="SmartITBox Logo"
      className="h-10 w-auto transition-all duration-500 hover:scale-110"
    />
  </div>
);

const DesktopNav = ({ navItems, navigate }) => (
  <div className="hidden md:flex items-center gap-2">
    {navItems.map((item) => (
      <NavButton
        key={item.label}
        label={item.label}
        onClick={() => navigate(item.href)}
      />
    ))}
    <CompanyDropdown />
  </div>
);

const NavButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="bg-yellow-400 text-white font-semibold px-6 py-2 rounded-2xl transition-colors duration-200 hover:bg-yellow-500 cursor-pointer"
  >
    {label}
  </button>
);

const TalkToUsButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-yellow-600 text-white font-semibold px-7 py-2 rounded-2xl transition-all duration-200 hover:bg-yellow-300 hover:scale-105 cursor-pointer"
  >
    Talk to us
  </button>
);

const MobileMenuToggle = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="md:hidden text-gray-800 focus:outline-none"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
);

const MobileNav = ({
  navItems,
  isCompanyOpen,
  onToggleCompany,
  onNavigate,
}) => (
  <div className="md:hidden border-t border-gray-200 bg-white">
    <div className="flex flex-col gap-3 px-5 py-4">
      {navItems.map((item) => (
        <MobileNavButton
          key={item.label}
          label={item.label}
          onClick={() => onNavigate(item.href)}
        />
      ))}

      <div className="border-t border-gray-200 pt-4 mt-4">
        <CompanyMenuToggle isOpen={isCompanyOpen} onClick={onToggleCompany} />
        {isCompanyOpen && <CompanyMenuItems onNavigate={onNavigate} />}
      </div>
    </div>
  </div>
);

const MobileNavButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="w-full bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full text-left transition-colors duration-200 hover:bg-yellow-500"
  >
    {label}
  </button>
);

const CompanyMenuToggle = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-between px-2 py-1 text-gray-600 font-semibold text-sm transition-colors duration-200 hover:text-yellow-600"
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
);

const CompanyMenuItems = ({ onNavigate }) => {
  const menuItems = [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blogs", href: "/blogs" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="space-y-2 mt-2">
      {menuItems.map((item) => (
        <button
          key={item.label}
          onClick={() => onNavigate(item.href)}
          className="block w-full px-4 py-2 text-gray-700 text-left transition-colors duration-200 hover:bg-yellow-50 rounded-lg"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
