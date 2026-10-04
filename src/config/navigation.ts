import { IconType } from "react-icons";
import {
    FaTachometerAlt,
    FaUser,
    FaPlane,
    FaCog,
    FaRegUser,
    FaUserCircle,
    FaUserEdit,
} from "react-icons/fa";

export interface NavItem {
    label: string;
    href: string;
    icon: IconType;
    allowedRoles: string[]; // যেমন: ['admin'], ['agent', 'admin'], ইত্যাদি
}

export const NAV_ITEMS: NavItem[] = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: FaTachometerAlt,
        allowedRoles: ["admin", "agent", "user"],
    },
    {
        label: "Hero Slider Add",
        href: "/heroslider",
        icon: FaUser,
        allowedRoles: ["admin"],
    },
    {
        label: "Add a News",
        href: "/addnews",
        icon: FaPlane,
        allowedRoles: ["admin"],
    },
    {
        label: "Add Gallery",
        href: "/addgallery",
        icon: FaCog,
        allowedRoles: ["admin"],
    },
    {
        label: "Contact Info",
        href: "/contactinfo",
        icon: FaRegUser,
        allowedRoles: ["admin"],
    },

    // 👇 ১. My Profile লিংক (Agent ও User এর জন্য)
    {
        label: "My Profile",
        href: "/myprofile",
        icon: FaUserCircle,
        allowedRoles: ["agent", "user", "admin"],
    },

    // 👇 ২. Agent Request / Profile Update (আপনার প্রয়োজন অনুযায়ী href ও label সামঞ্জস্য করতে পারেন)
    {
        label: "Create Hajjah",
        href: "/hajjahadd",
        icon: FaUserEdit,
        allowedRoles: ["user"],
    },
];