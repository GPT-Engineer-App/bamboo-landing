import { Home, Info, MapPin, Plane } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <div>About Page</div>,
  },
  {
    title: "Destinations",
    to: "/destinations",
    icon: <MapPin className="h-4 w-4" />,
    page: <div>Destinations Page</div>,
  },
  {
    title: "Travel Tips",
    to: "/travel-tips",
    icon: <Plane className="h-4 w-4" />,
    page: <div>Travel Tips Page</div>,
  },
];