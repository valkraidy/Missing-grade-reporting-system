import "../css/index.css";
import { Link } from "react-router-dom";

const Hearder = () => {
  return (
    <nav className="header-nav">
      <div className="inner_header">
        <div className="logo">
          <h1>myLogo</h1>
        </div>
        <ul className="navigation">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Missinggrade">
            <li>Missing grade</li>
          </Link>
          <Link to="/Dashboard">
            <li>Dashboard</li>
          </Link>
          <Link to="/Contact">
            <li>Contact</li>
          </Link>
          <Link to="/Gradereport">
            <li>Grades</li>
          </Link>

          <Link to="/Faqs">
            <li>FAQs</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Hearder;
