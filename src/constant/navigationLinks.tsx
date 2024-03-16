import { ReactNode } from "react";
import HomeIcon from "@mui/icons-material/Home";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import CampaignIcon from "@mui/icons-material/Campaign";

export type NavLinkItem = {
  display: string;
  path: string;
  icon: ReactNode;
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
    display: "Notification",
    path: "/notification",
    icon: <CampaignIcon />,
  },
  {
    display: "Health Tips",
    path: "/healthTip",
    icon: <TipsAndUpdatesIcon />,
  },
];
