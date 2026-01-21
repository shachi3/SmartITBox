/**
 * Contact Page Constants
 * Defines all contact form fields and contact information
 */

export const CONTACT_FORM_FIELDS = {
 FULL_NAME: "fullName",
 EMAIL: "email",
 COMPANY: "company",
 SUBJECT: "subject",
 MESSAGE: "message",
};

export const CONTACT_FORM_INITIAL_STATE = {
 fullName: "",
 email: "",
 company: "",
 subject: "",
 message: "",
};

export const SUBJECT_OPTIONS = [
 {
  value: "",
  label: "Select a subject",
 },
 {
  value: "general",
  label: "General Inquiry",
 },
 {
  value: "services",
  label: "Services",
 },
 {
  value: "partnership",
  label: "Partnership",
 },
 {
  value: "other",
  label: "Other",
 },
];

export const CONTACT_INFO = {
 email: {
  platform: "Email us",
  value: "ceo@smartitbox.in",
  href: "mailto:ceo@smartitbox.in",
  detail: "We'll respond within 24 hours",
  icon: "✉️",
 },
 phone: {
  platform: "Call us",
  value: "+91 8178740797",
  href: "tel:+918178740797",
  detail: "Mon-Fri from 9am to 5pm",
  icon: "📞",
 },
 location: {
  platform: "Visit us",
  value: "Noida, Sector 63",
  detail: "Block A Skytex, Plot 64, A Block, Sector 63, Noida",
  icon: "📍",
 },
 hours: {
  platform: "Office hours",
  value: "Monday - Friday",
  detail: "9:00 AM - 6:00 PM PST",
  icon: "🕐",
 },
};

export const CONTACT_PAGE_CONTENT = {
 heading: "Contact Us",
 subheading: "Let's Start Your Project",
 description:
  "Ready to transform your business with automation? Reach out to our team for a free consultation and discover how we can help you achieve your goals.",
 badge: "Get in Touch",
};

export const MESSAGE_CHARACTER_LIMIT = 10;
