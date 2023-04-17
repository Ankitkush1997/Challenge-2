import Hamburger from "../Hamburger/Hamburger";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Hamburger />
      <img
        src="https://cdn.dribbble.com/userupload/3158903/file/original-3f5abe8b99ff4ba4626ddf6660115182.jpg?compress=1&resize=70x70"
        alt="logo"
      />
    </nav>
  );
};

export default Navbar;
