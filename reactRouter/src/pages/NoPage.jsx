import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found !!</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default NoPage;
