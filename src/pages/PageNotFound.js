import { Link } from "react-router-dom";

import Nav from "../components/Nav";

const PageNotFound = () => {
  return (
    <nav>
      <h1>Page Not Found</h1>
      <Link to="/">Go Back To Home</Link>
    </nav>
  );
};

export default PageNotFound;
