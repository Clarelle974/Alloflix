import { Link } from "react-router-dom";
import "../styles/footer.css";
import { useLoaderData } from "react-router-dom";
import Logo from "../assets/images/Alloflix_logo.png";
import JoinUs from "./JoinUs";

export default function Footer() {
  const popular = useLoaderData() as Background[];
  const backdropPath = popular[2].backdrop_path;

  return (
    <footer>
      <JoinUs backdrop_path={backdropPath} />
      <div className="join">
        <div className="logo">
          <img src={Logo} alt="Alloflix" className="alloflix-logo" />
          <Link to="/signin" className="community">
            Rejoindre la communauté
          </Link>
        </div>
        <nav className="nav-footer">
          <div>
            <h3 className="footer-name">Les bases</h3>
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
            <h3 className="footer-name">S'impliquer</h3>
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
            <h3 className="footer-name">Communauté</h3>
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
            <h3 className="footer-name">Mentions légales</h3>
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
