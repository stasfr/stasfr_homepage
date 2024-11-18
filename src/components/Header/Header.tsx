import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import Burger from "@/components/Header/Burger";
import ThemePicker from "@/components/Header/ThemePicker";

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
    <header className="flex items-center justify-between p-4 md:px-0">
      <div>
        <Link to={"/"}>stasfr_homepage</Link>
      </div>

      <nav className="hidden items-center gap-2 md:flex">
        {navBar.map((item) => (
          <Button variant="link" asChild key={item.link}>
            <Link to={item.link}>{item.name}</Link>
          </Button>
        ))}

        <ThemePicker />
      </nav>

      <Burger className="md:hidden">
        {navBar.map((item) => (
          <Button variant="outline" asChild key={item.link}>
            <Link to={item.link}>{item.name}</Link>
          </Button>
        ))}

        <ThemePicker className="self-end" />
      </Burger>
    </header>
  );
}
