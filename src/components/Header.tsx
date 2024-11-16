import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import ThemePicker from "@/components/ThemePicker";

export default function Header() {
  const navBar = [
    {
      name: "Home",
      link: "../",
    },
    {
      name: "Skills",
      link: "../skills",
    },
    {
      name: "Projects",
      link: "../projects",
    },
    {
      name: "Contacts",
      link: "../contacts",
    },
  ];

  return (
    <header className="flex items-center justify-between">
      <div>
        <div>
          <Link to={"/"}>stasfr_homepage</Link>
        </div>

        <nav>
          {navBar.map((item) => (
            <Button asChild key={item.link}>
              <Link to={item.link}>{item.name}</Link>
            </Button>
          ))}
          <ThemePicker />
        </nav>
      </div>
    </header>
  );
}
