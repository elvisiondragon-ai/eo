import { Home, Images, ListChecks, Bookmark, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const getNavItems = (t: any) => [
  { icon: Home, label: t.nav.home, path: "/" },
  { icon: Images, label: t.nav.portfolio, path: "/portfolio" },
  { icon: ListChecks, label: t.nav.services, path: "/services" },
  { icon: Bookmark, label: t.nav.vendors, path: "/vendors" },
  { icon: Mail, label: t.nav.contact, path: "/contact" },
];

export const BottomNav = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const navItems = getNavItems(t);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-elegant-black border-t border-border shadow-elegant">
      <div className="flex justify-around items-center h-16 max-w-screen-xl mx-auto px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all duration-300",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              <Icon className={cn("h-5 w-5", isActive && "drop-shadow-glow")} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
