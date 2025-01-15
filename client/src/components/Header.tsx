import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="input">
          <h1 className="main-title">Bienvenue sur Alloflix</h1>
          <div className="header-search">
            <input
              type="search"
              placeholder="Rechercher un film ou un artiste..."
              className="input-search"
            />
            <button type="submit" className="btn-search">
              Recherche
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
