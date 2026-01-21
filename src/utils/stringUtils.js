/**
 * String utility functions
 * Common string operations used throughout the app
 */

export const formatPhoneNumber = (phoneNumber) => {
 if (!phoneNumber) return "";
 // Remove all non-digit characters
 const cleaned = phoneNumber.replace(/\D/g, "");
 return cleaned;
};

export const validateEmail = (email) => {
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 return emailRegex.test(email);
};

export const capitalizeFirstLetter = (string) => {
 if (!string) return "";
 return string.charAt(0).toUpperCase() + string.slice(1);
};

export const truncateText = (text, maxLength) => {
 if (!text || text.length <= maxLength) return text;
 return text.substring(0, maxLength) + "...";
};
