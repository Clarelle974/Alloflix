// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// interface ArtistTypes {
//   artist: {
//     id: number;
//     name: string;
//     original_name: string;
//     known_for_department: string;
//     profile_path: string;
//   };
// }

// export default function ArtistsActeurs({ artist }: ArtistTypes) {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   const Acteurs = () => {
//     const [acteurs, setActeurs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//       const fetchActeurs = async () => {
//         try {
//           const key = import.meta.env.VITE_API_KEY;
//           const response = await axios.get(
//             `https://api.themoviedb.org/3/person/popular?api_key=${key}&language=fr-FR`,
//           );

//           const filteredActeurs = response.data.results.filter(
//             (acteurs) => artist.known_for_department === "Acting",
//           );

//           setActeurs(filteredActeurs);
//           setLoading(false);
//         } catch (err) {
//           setError("Erreur lors de la récupération des données");
//           setLoading(false);
//         }
//       };

//       fetchActeurs();
//     }, []);

//     if (loading) return <p>Chargement...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//       <div>
//         <h1>Liste des Acteurs</h1>
//         <ul>
//           {artists.map((acteur) => (
//             <li key={acteur.id}>
//               <h2>{acteur.name}</h2>
//               {acteur.profile_path && (
//                 <img
//                   src={`https://image.tmdb.org/t/p/w200${acteur.profile_path}`}
//                   alt={acteur.name}
//                 />
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   //   return (
//   //     <div className="artistcard-display">
//   //       <div className="artistCard">
//   //         <Link
//   //           to={`/artistdetails/${artist.id}`}
//   //           className="link-artist"
//   //           onClick={scrollToTop}
//   //         >
//   //           <img
//   //             src={`https://image.tmdb.org/t/p/w500${artist.profile_path}`}
//   //             alt={artist.name}
//   //             className="img-artist-card"
//   //           />
//   //         </Link>
//   //         <h2 className="artist-name-card">{artist.name}</h2>
//   //       </div>
//   //     </div>
//   //   );
//   // }
// }
