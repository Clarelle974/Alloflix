import { useEffect } from "react";
import "../styles/page404.css";
import { Link } from "react-router-dom";

export default function Page404() {
  useEffect(() => {
    function drawVisor(): void {
      const canvas = document.getElementById(
        "visor",
      ) as HTMLCanvasElement | null;
      if (!canvas) {
        console.error("Canvas 'visor' introuvable.");
        return;
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        console.error(
          "Impossible d'obtenir le contexte 2D pour le canevas 'visor'.",
        );
        return;
      }

      ctx.beginPath();
      ctx.moveTo(5, 45);
      ctx.bezierCurveTo(15, 64, 45, 64, 55, 45);

      ctx.lineTo(55, 20);
      ctx.bezierCurveTo(55, 15, 50, 10, 45, 10);

      ctx.lineTo(15, 10);

      ctx.bezierCurveTo(15, 10, 5, 10, 5, 20);
      ctx.lineTo(5, 45);

      ctx.fillStyle = "#2f3640";
      ctx.strokeStyle = "#f5f6fa";
      ctx.fill();
      ctx.stroke();
    }

    function animate(): void {
      const cordCanvas = document.getElementById(
        "cord",
      ) as HTMLCanvasElement | null;
      if (!cordCanvas) {
        console.error("Canvas 'cord' introuvable.");
        return;
      }

      const ctx = cordCanvas.getContext("2d");
      if (!ctx) {
        console.error(
          "Impossible d'obtenir le contexte 2D pour le canevas 'cord'.",
        );
        return;
      }

      let y1 = 160;
      let y2 = 100;
      let y3 = 100;

      let y1Forward = true;
      let y2Forward = false;
      let y3Forward = true;

      function animateFrame(): void {
        requestAnimationFrame(animateFrame);
        const cordCanvas = document.getElementById(
          "cord",
        ) as HTMLCanvasElement | null;
        if (!cordCanvas) {
          console.error("Canvas 'cord' introuvable.");
          return;
        }

        const ctx = cordCanvas.getContext("2d");
        if (!ctx) {
          console.error(
            "Impossible d'obtenir le contexte 2D pour le canevas 'cord'.",
          );
          return;
        }

        // Effacer le canevas avant de redessiner
        ctx.clearRect(0, 0, cordCanvas.width, cordCanvas.height);

        // Dessiner la courbe
        ctx.beginPath();
        ctx.moveTo(130, 170);
        ctx.bezierCurveTo(250, y1, 345, y2, 400, y3);

        ctx.strokeStyle = "white";
        ctx.lineWidth = 8;
        ctx.stroke();

        // Gestion des directions pour les animations
        if (y1 === 100) y1Forward = true;
        if (y1 === 300) y1Forward = false;

        if (y2 === 100) y2Forward = true;
        if (y2 === 310) y2Forward = false;

        if (y3 === 100) y3Forward = true;
        if (y3 === 317) y3Forward = false;

        // Mise à jour des positions
        if (y1Forward) {
          y1 += 1;
        } else {
          y1 -= 1;
        }

        if (y2Forward) {
          y2 += 1;
        } else {
          y2 -= 1;
        }

        if (y3Forward) {
          y3 += 1;
        } else {
          y3 -= 1;
        }
      }

      // Démarrer l'animation
      animateFrame();
    }

    // Lancer les fonctions après le rendu
    drawVisor();
    animate();
  }, []); // Exécute une seule fois après le montage

  return (
    <div className="main-page">
      <div className="moon" />
      <div className="moon__crater moon__crater1" />
      <div className="moon__crater moon__crater2" />
      <div className="moon__crater moon__crater3" />

      <div className="star star1" />
      <div className="star star2" />
      <div className="star star3" />
      <div className="star star4" />
      <div className="star star5" />

      <div className="error">
        <div className="error__title">404</div>
        <div className="error__subtitle">Hmmm...</div>
        <div className="error__description">
          On dirait que l'un des développeurs s'est endormi
        </div>
        <Link to="/">
          <button className="error__button error__button--active" type="button">
            HOME
          </button>
        </Link>
        <Link to="/contact">
          <button className="error__button" type="button">
            CONTACT
          </button>
        </Link>
      </div>

      <div className="astronaut">
        <div className="astronaut__backpack" />
        <div className="astronaut__body" />
        <div className="astronaut__body__chest" />
        <div className="astronaut__arm-left1" />
        <div className="astronaut__arm-left2" />
        <div className="astronaut__arm-right1" />
        <div className="astronaut__arm-right2" />
        <div className="astronaut__arm-thumb-left" />
        <div className="astronaut__arm-thumb-right" />
        <div className="astronaut__leg-left" />
        <div className="astronaut__leg-right" />
        <div className="astronaut__foot-left" />
        <div className="astronaut__foot-right" />
        <div className="astronaut__wrist-left" />
        <div className="astronaut__wrist-right" />

        <div className="astronaut__cord">
          <canvas id="cord" height="500" width="500" />
        </div>

        <div className="astronaut__head">
          <canvas id="visor" width="60" height="60" />
          <div className="astronaut__head-visor-flare1" />
          <div className="astronaut__head-visor-flare2" />
        </div>
      </div>
    </div>
  );
}
