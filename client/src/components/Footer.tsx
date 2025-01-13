import { Link } from "react-router-dom";
import "../styles/footer.css";
import Logo from "../assets/images/Alloflix_logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="join">
        <div className="logo">
          <img src={Logo} alt="Alloflix" />
          <Link to={"#"} className="community">
            Rejoindre la communauté
          </Link>
        </div>
        <nav>
          <div>
            <h3>Les bases</h3>
            <ul>
              <li>
                <Link to={"#"}>À propos d'Alloflix</Link>
              </li>
              <li>
                <Link to={"#"}>Contactez-nous</Link>
              </li>
              <li>
                <Link to={"#"}>Forum d'assitance</Link>
              </li>
              <li>
                <Link to={"#"}>Centre d'aide</Link>
              </li>
              <li>
                <Link to={"#"}>Statut du système</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>S'impliquer</h3>
            <ul>
              <li>
                <Link to={"#"}>Bible des contributeurs</Link>
              </li>
              <li>
                <Link to={"#"}>Ajouter un film</Link>
              </li>
              <li>
                <Link to={"#"}>Ajouter un artiste</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Communauté</h3>
            <ul>
              <li>
                <Link to={"#"}>Règles</Link>
              </li>
              <li>
                <Link to={"#"}>Conversations</Link>
              </li>
              <li>
                <Link to={"#"}>Top contributeurs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Mentions légales</h3>
            <ul>
              <li>
                <Link to={"#"}>Conditions d'utilisation</Link>
              </li>
              <li>
                <Link to={"#"}>Confidentialité</Link>
              </li>
              <li>
                <Link to={"#"}>Information légales</Link>
              </li>
              <li>
                <Link to={"#"}>Préférences de cookies</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <section className="copyright">© 2025 Alloflix by Wilders</section>
    </footer>
  );
}
