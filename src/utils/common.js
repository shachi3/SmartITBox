/**
 * Common utility functions
 * Helper functions used across the application
 */

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const clsx = (...classes) => {
 return classes.filter(Boolean).join(" ");
};

export const formatDate = (date) => {
 if (!date) return "";
 return new Date(date).toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
 });
};

export const getYearsSince = (startYear) => {
 return new Date().getFullYear() - startYear;
};
