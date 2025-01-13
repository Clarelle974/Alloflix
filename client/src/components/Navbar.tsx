import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../assets/images/Alloflix_logo.png";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Alloflix Logo" />
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/movies">Films</Link>
          </li>
          <li>
            <Link to="/artists">Artistes</Link>
          </li>
        </ul>
      </div>

      <div className="searchnav">
        <input type="text" placeholder="Rechercher..." />
      </div>
    </nav>
  );
}
