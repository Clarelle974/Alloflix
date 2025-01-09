import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <h1>Bienvenue sur Alloflix</h1>
      <div className="input">
        <input type="search" placeholder="Rechercher un film/artiste" />
        <button type="submit">Rechercher</button>
      </div>
    </header>
  );
}
