import HomeIcon from "@mui/icons-material/Home";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export type NavLinkItem = {
  display: string;
  path: string;
  icon: React.ReactElement;
};

export const navLinks: NavLinkItem[] = [
  {
    display: "Home",
    path: "/",
    icon: <HomeIcon className="text-xl" />,
  },
  {
    display: "Health Blog",
    path: "/healthBlog",
    icon: <NewspaperIcon />,
  },
  {
    display: "Book Appointment",
    path: "/bookAppointment",
    icon: <AppShortcutIcon />,
  },
  {
    display: "Profile",
    path: "/profile",
    icon: <AccountCircleIcon />,
  },
];
