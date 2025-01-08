import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="join">
        <img
          src="https://cdn.discordapp.com/attachments/1324658166461370428/1326553270038171678/Alloflix_logo.png?ex=677fd881&is=677e8701&hm=ff1c4aa91b43bd28ac960affe08cebb6b4bceb9734328c214cdc948f0a7ff2e1&"
          alt="Alloflix"
        />
        <a href="/" className="community">
          Rejoindre la communauté
        </a>
      </div>
      <nav>
        <div>
          <h3>Les bases</h3>
          <ul>
            <li>
              <a href="/">À propos d'Alloflix</a>
            </li>
            <li>
              <a href="/">Contactez-nous</a>
            </li>
            <li>
              <a href="/">Forum d'assitance</a>
            </li>
            <li>
              <a href="/">Centre d'aide</a>
            </li>
            <li>
              <a href="/">Statut du système</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>S'impliquer</h3>
          <ul>
            <li>
              <a href="/">Bible des contributeurs</a>
            </li>
            <li>
              <a href="/">Ajouter un film</a>
            </li>
            <li>
              <a href="/">Ajouter un artiste</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Communauté</h3>
          <ul>
            <li>
              <a href="/">Règles</a>
            </li>
            <li>
              <a href="/">Conversations</a>
            </li>
            <li>
              <a href="/">Top contributeurs</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Mentions légales</h3>
          <ul>
            <li>
              <a href="/">Conditions d'utilisation</a>
            </li>
            <li>
              <a href="/">Confidentialité</a>
            </li>
            <li>
              <a href="/">Information légales</a>
            </li>
            <li>
              <a href="/">Préférences de cookies</a>
            </li>
          </ul>
        </div>
      </nav>
      <section>© 2025 Alloflix by Wilders</section>
    </footer>
  );
}
