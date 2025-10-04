// Global Site Data
const currentYear = new Date().getFullYear();
export const siteData = {
    name: "Zelenije",
    lang: "hr-HR",
    copyright: `Zelenije - ${currentYear} | Sva Prava Pridržana`,
    ver: "0.1.1"
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
        label: "Početna",
        href: "/"
    },
    {
        label: "Arhiva",
        href: "/arhiva"
    },
    {
        label: "Recepti",
        href: "/recepti"
    }
]
// Contact Info
export const contactInfo = {
    email: "info@zelenije.com",
    address: "Gornja Reka 103, 10450 Jastrebarsko, Croatia"
}
// Social Media
export const socialMedia = {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com"
}