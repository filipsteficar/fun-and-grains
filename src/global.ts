// Global Site Data
const currentYear = new Date().getFullYear();
export const siteData = {
    name: "Fun&Grains",
    lang: "en-GB",
    ogLang: "en_GB",
    langSchema: "en",
    copyright: `Fun&Grains - ${currentYear} | All Rights Reserved`,
    ver: "0.0.1",
    url: "https://funandgrains.com"
}
// Define the MenuItem Interface
interface MenuItem {
    label: string
    href: string
    isExternal?: boolean
}
// Main Menu
export const mainMenu: MenuItem[] = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Blog",
        href: "/blog"
    },
    {
        label: "Recipes",
        href: "/recipes"
    }
]
// Contact Info
export const contactInfo = {
    email: "info@funandgrains.com",
    address: "Gornja Reka 103, 10450 Jastrebarsko, Croatia"
}
// Social Media
export const socialMedia = {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com"
}