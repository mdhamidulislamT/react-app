import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/hometwo">Home Two</Link> 
      </nav>
    </div>
  );
};

export default Navbar;
