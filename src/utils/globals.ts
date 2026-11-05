// Global Site Data
// Current Year
const currentYear = new Date().getFullYear();
// Site Data
export const siteData = {
  website: "Fun&Grains",
  author: "Viktorija Jaksic",
  developer: "Filip Steficar",
  developerURL: "https://funandgrains.com",
  lang: "en-US",
  ogLang: "en_US",
  langSchema: "en",
  copyright: `Fun&Grains - ${currentYear} | All Rights Reserved`,
  url: "https://funandgrains.ca",
  cmsURL: "#",
  graphQL: "#",
};
// Define the MenuItem Interface
interface MenuItem {
  label: string;
  href: string;
  isExternal?: boolean;
}
// Main Menu
export const mainMenu: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Recipes",
    href: "/recipes",
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
// Contact Info
export const contactInfo = {
  email: "info@ntiling.ca",
};
