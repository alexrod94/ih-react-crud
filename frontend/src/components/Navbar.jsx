import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <Link className="btn btn-ghost normal-case text-xl" to="/">
        My journal app
      </Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/create-entry">
        Create new entry
      </Link>
    </div>
  );
}

export default Navbar;
