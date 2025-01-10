import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img
          src="https://cdn.discordapp.com/attachments/1324658166461370428/1326553270038171678/Alloflix_logo.png?ex=677fd881&is=677e8701&hm=ff1c4aa91b43bd28ac960affe08cebb6b4bceb9734328c214cdc948f0a7ff2e1&"
          alt="Alloflix Logo"
        />
        <ul>
          <li>
            <Link to={"#"}>Accueil</Link>
          </li>
          <li>
            <Link to={"#"}>Films</Link>
          </li>
          <li>
            <Link to={"#"}>Artistes</Link>
          </li>
          <li>
            <Link to={"#"}>Ma Liste</Link>
          </li>
        </ul>
      </div>

      <div className="searchnav">
        <input type="text" placeholder="Rechercher..." />
      </div>
    </nav>
  );
}
