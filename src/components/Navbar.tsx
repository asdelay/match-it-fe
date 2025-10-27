import { Link } from "react-router";
import { Hexagon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed flex items-center justify-between top-0 left-0 right-0 p-4">
      <Link to="/">
        <Hexagon className="duration-300 hover:rotate-90" />
      </Link>
    </nav>
  );
};

export default Navbar;
