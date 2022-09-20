import { Link } from "react-router-dom";


const PageNotFound = () => {
  return (
    <nav>
      <h1>Page Not Found</h1>
      <Link to="/">Go Back To Home</Link>
    </nav>
  );
};

export default PageNotFound;
