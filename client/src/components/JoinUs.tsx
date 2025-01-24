import { Link } from "react-router-dom";
import "../styles/joinus.css";

interface Background {
  backdropPath: string;
}

export default function JoinUs({ backdropPath }: Background) {
  return (
    <section
      className="joinus-container"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.7), rgba(11, 11, 11, 0.7)), url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdropPath}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="joinus">Rejoignez-nous !</h2>
      <div className="text-container">
        <p className="presentation-text">
          Accédez à vos listes personnelles personnalisées, suivez ce que vous
          avez vu et recherchez et filtrez ce que vous allez regarder ensuite,
          que ce soit à la télévision ou sur des services de streaming
          populaires tels que Netflix, Disney Plus, Amazon Prime Video, Apple TV
          et bien d'autres...
        </p>
        <Link to="/signin" className="link-joinus">
          Inscription
        </Link>
        <div className="list-text">
          <ul>
            <li className="li-joinus">Profiter de Alloflix sans publicité</li>
            <li className="li-joinus">
              Maintenez une liste de suivie personnelle
            </li>
            <li className="li-joinus">
              Filtrez selon vos abonnements de streaming souscrits et trouves
              quelque chose à regarder
            </li>
            <li className="li-joinus">
              Enregistrez les films que vous avez vus
            </li>
            <li className="li-joinus">Construisez des liste personnalisées</li>
            <li className="li-joinus">
              Contribuez à améliorer notre base de données
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
