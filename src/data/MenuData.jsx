import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi";
import { HiOutlineCalendarDays, HiOutlineHomeModern } from "react-icons/hi2";
import { MdOutlineSettings } from "react-icons/md";

export const MenuData = [
  {
    id: 1,
    link: "/dashboard",
    name: "Home",
    icon: <HiOutlineHome />,
  },
  {
    id: 2,
    link: "/bookings",
    name: "Bookings",
    icon: <HiOutlineCalendarDays />,
  },
  {
    id: 3,
    link: "/cabins",
    name: "Cabins",
    icon: <HiOutlineHomeModern />,
  },
  {
    id: 4,
    link: "/users",
    name: "Users",
    icon: <HiOutlineUsers />,
  },
  {
    id: 5,
    link: "/settings",
    name: "Settings",
    icon: <MdOutlineSettings />,
  },
];
