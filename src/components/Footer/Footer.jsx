import React, { useState } from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import {
  FOOTER_COMPANY_DESCRIPTION,
  SOCIAL_LINKS,
  FOOTER_YEAR,
} from "../../constants/footer";
import { validateEmail } from "../../utils/stringUtils";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setSubscribeMessage("Please enter a valid email");
      setTimeout(() => setSubscribeMessage(""), 3000);
      return;
    }
    if (email.trim()) {
      setSubscribeMessage("Thank you for subscribing!");
      setEmail("");
      setTimeout(() => setSubscribeMessage(""), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <FooterAboutSection logo={logo} />

        <FooterLinksSection title="Quick Links" links={quickLinks} />

        <FooterLinksSection title="Services" links={servicesLinks} />

        <FooterContactSection />
      </div>

      <FooterNewsletterSection
        email={email}
        setEmail={setEmail}
        subscribeMessage={subscribeMessage}
        onSubscribe={handleSubscribe}
      />

      <FooterBottom />
    </footer>
  );
};

const FooterAboutSection = ({ logo }) => (
  <div className="footer-section footer-about">
    <div className="footer-logo">
      <img
        src={logo}
        alt="SmartITBox Logo"
        className="h-10 w-auto transition-all duration-500 hover:scale-110"
      />
    </div>
    <p className="footer-description">{FOOTER_COMPANY_DESCRIPTION}</p>
    <SocialLinks />
  </div>
);

const SocialLinks = () => (
  <div className="social-links">
    {SOCIAL_LINKS.map((link) => (
      <SocialLink key={link.platform} link={link} />
    ))}
  </div>
);

const SocialLink = ({ link }) => {
  const IconMap = {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
  };
  const Icon = IconMap[link.icon];

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.platform}
      className="transition-colors duration-200 hover:text-yellow-600"
    >
      {Icon && <Icon />}
    </a>
  );
};

const FooterLinksSection = ({ title, links }) => (
  <div className="footer-section">
    <h4 className="footer-title">{title}</h4>
    <ul className="footer-links">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

const FooterContactSection = () => (
  <div className="footer-section">
    <h4 className="footer-title">Get in Touch</h4>
    <div className="contact-info">
      <ContactItem
        icon="📍"
        label="Address:"
        value="Block A Skytex, Plot 64, A Block, Sector 63, Noida"
      />
      <ContactItem
        icon="📞"
        label="Phone:"
        value="+91 8178740797"
        href="tel:+918178740797"
        isLink
      />
      <ContactItem
        icon="📧"
        label="Email:"
        value="ceo@smartitbox.in"
        href="mailto:ceo@smartitbox.in"
        isLink
      />
    </div>
  </div>
);

const ContactItem = ({ icon, label, value, href, isLink }) => (
  <div className="contact-item">
    <span className="contact-icon">{icon}</span>
    <div>
      <p className="contact-label">{label}</p>
      {isLink ? (
        <a href={href} className="contact-value">
          {value}
        </a>
      ) : (
        <p className="contact-value">{value}</p>
      )}
    </div>
  </div>
);

const FooterNewsletterSection = ({
  email,
  setEmail,
  subscribeMessage,
  onSubscribe,
}) => (
  <div className="newsletter-section">
    <div className="newsletter-content">
      <div className="newsletter-text">
        <h3>Stay Updated</h3>
        <p>
          Subscribe to our newsletter for the latest updates, tips, and insights
          on business automation.
        </p>
      </div>
      <form className="newsletter-form" onSubmit={onSubscribe}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="subscribe-btn">
          ✈️ Subscribe
        </button>
      </form>
      {subscribeMessage && (
        <p className="subscribe-message">{subscribeMessage}</p>
      )}
    </div>
  </div>
);

const FooterBottom = () => (
  <div className="footer-bottom">
    <p>&copy; {FOOTER_YEAR} SmartITBox. All rights reserved.</p>
  </div>
);

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const servicesLinks = [
  { label: "Google Sheets Automation", href: "#google-sheets" },
  { label: "WhatsApp Integration", href: "#whatsapp" },
  { label: "Web Development", href: "#web-dev" },
  { label: "Custom Software", href: "#custom-software" },
  { label: "Business Automation", href: "#business-auto" },
];

export default Footer;
