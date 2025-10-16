import { Link } from "react-router";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <nav className="fixed flex items-center justify-between top-0 left-0 right-0 p-4">
      <Link to="/">Job Matcher</Link>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
