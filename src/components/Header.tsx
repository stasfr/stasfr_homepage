import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  const navBar = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Skills",
      link: "/skills",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contacts",
      link: "/contacts",
    },
  ];

  return (
    <header>
      <div>
        <div>
          <Link to={"/"}>stasfr_homepage</Link>
        </div>

        <nav>
          {navBar.map((item) => (
            <Button asChild>
              <Link to={item.link}>{item.name}</Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
