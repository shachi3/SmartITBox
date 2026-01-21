import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CONTACT_INFO,
  SUBJECT_OPTIONS,
  CONTACT_FORM_INITIAL_STATE,
  CONTACT_PAGE_CONTENT,
} from "../../constants/contact";
import { validateEmail } from "../../utils/stringUtils";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(CONTACT_FORM_INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Message sent successfully! We'll get back to you soon.");
    setFormData(CONTACT_FORM_INITIAL_STATE);
  };

  return (
    <div className="min-h-screen bg-white pt-28">
      <Breadcrumb navigate={navigate} />

      <HeaderBadge />

      <ContentHeader />

      <CTAButtons navigate={navigate} />

      <section className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContactInfoSection />

          <ContactFormSection
            formData={formData}
            onFormChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </section>
    </div>
  );
};

const Breadcrumb = ({ navigate }) => (
  <div className="max-w-7xl mx-auto px-5 py-4">
    <div className="flex items-center justify-center gap-2 text-gray-600">
      <button
        onClick={() => navigate("/")}
        className="transition-colors duration-200 hover:text-yellow-600"
      >
        Home
      </button>
      <span className="text-gray-400">/</span>
      <span className="text-gray-800 font-semibold">Contact</span>
    </div>
  </div>
);

const HeaderBadge = () => (
  <div className="max-w-7xl mx-auto px-5 py-2 flex justify-center">
    <div className="inline-flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-200">
      <span className="text-yellow-600">⭐</span>
      <span className="text-yellow-700 text-sm font-medium">
        {CONTACT_PAGE_CONTENT.badge}
      </span>
    </div>
  </div>
);

const ContentHeader = () => (
  <div className="max-w-7xl mx-auto px-5 py-8 text-center">
    <h1 className="text-5xl font-bold text-gray-900 mb-4">
      {CONTACT_PAGE_CONTENT.heading}
    </h1>
    <h2 className="text-4xl font-bold text-yellow-600 mb-6">
      {CONTACT_PAGE_CONTENT.subheading}
    </h2>
    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
      {CONTACT_PAGE_CONTENT.description}
    </p>
  </div>
);

const CTAButtons = ({ navigate }) => (
  <div className="max-w-7xl mx-auto px-5 py-6 flex justify-center gap-4">
    <button
      onClick={() =>
        (window.location.href = `tel:${CONTACT_INFO.phone.value.replace(/\s/g, "")}`)
      }
      className="bg-yellow-500 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 hover:bg-yellow-600"
    >
      Schedule a Call
    </button>
    <button
      onClick={() => navigate("/services")}
      className="border-2 border-yellow-500 text-yellow-600 font-semibold px-8 py-3 rounded-full transition-colors duration-200 hover:bg-yellow-50"
    >
      View Our Services
    </button>
  </div>
);

const ContactInfoSection = () => (
  <div className="md:col-span-1">
    <div className="g">
      <h3 className="text-xl bg-orange-50 p-6 rounded-l border-l-4 border-yellow-500 font-bold text-gray-900 mb-6">
        Contact Information
      </h3>

      <ContactInfoItem
        icon={CONTACT_INFO.email.icon}
        platform={CONTACT_INFO.email.platform}
        value={CONTACT_INFO.email.value}
        href={CONTACT_INFO.email.href}
        detail={CONTACT_INFO.email.detail}
        isLink
      />

      <ContactInfoItem
        icon={CONTACT_INFO.phone.icon}
        platform={CONTACT_INFO.phone.platform}
        value={CONTACT_INFO.phone.value}
        href={CONTACT_INFO.phone.href}
        detail={CONTACT_INFO.phone.detail}
        isLink
      />

      <ContactInfoItem
        icon={CONTACT_INFO.location.icon}
        platform={CONTACT_INFO.location.platform}
        value={CONTACT_INFO.location.value}
        detail={CONTACT_INFO.location.detail}
      />

      <ContactInfoItem
        icon={CONTACT_INFO.hours.icon}
        platform={CONTACT_INFO.hours.platform}
        value={CONTACT_INFO.hours.value}
        detail={CONTACT_INFO.hours.detail}
      />
    </div>
  </div>
);

const ContactInfoItem = ({ icon, platform, value, href, detail, isLink }) => (
  <div className="mb-8 flex items-start gap-4">
    <div className="bg-yellow-100 p-3 rounded-lg text-2xl shrink-0">{icon}</div>
    <div className="flex-1">
      <h4 className="font-semibold text-gray-900">{platform}</h4>
      {isLink ? (
        <a
          href={href}
          className="text-yellow-600 font-semibold transition-colors duration-200 hover:text-yellow-700"
        >
          {value}
        </a>
      ) : (
        <p className="text-yellow-600 font-semibold">{value}</p>
      )}
      <p className="text-sm text-gray-600 mt-1">{detail}</p>
    </div>
  </div>
);

const ContactFormSection = ({ formData, onFormChange, onSubmit }) => (
  <div className="md:col-span-2">
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={onFormChange}
          required
        />
        <FormInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={onFormChange}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Company"
          name="company"
          type="text"
          placeholder="Your company name"
          value={formData.company}
          onChange={onFormChange}
        />
        <FormSelect
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={onFormChange}
          options={SUBJECT_OPTIONS}
          required
        />
      </div>

      <FormTextarea
        label="Message"
        name="message"
        placeholder="Tell us about your project or inquiry..."
        value={formData.message}
        onChange={onFormChange}
        rows={6}
        required
      />

      <p className="text-sm text-gray-600 flex items-center gap-2">
        <span className="text-yellow-600">⭐</span>
        <span>* Required fields</span>
      </p>

      <button
        type="submit"
        className="w-full bg-yellow-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 hover:bg-yellow-600 flex items-center justify-center gap-2"
      >
        Send Message
        <span>➤</span>
      </button>
    </form>
  </div>
);

const FormInput = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}) => (
  <div>
    <label className="block text-gray-700 font-semibold mb-2">
      {label}
      {required && <span className="text-red-500"> *</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
    />
  </div>
);

const FormSelect = ({ label, name, value, onChange, options, required }) => (
  <div>
    <label className="block text-gray-700 font-semibold mb-2">
      {label}
      {required && <span className="text-red-500"> *</span>}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const FormTextarea = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  rows,
  required,
}) => (
  <div>
    <label className="block text-gray-700 font-semibold mb-2">
      {label}
      {required && <span className="text-red-500"> *</span>}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={rows}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
    />
    <div className="text-right text-sm text-gray-500 mt-2">
      {value.length}/10 min
    </div>
  </div>
);

export default Contact;
