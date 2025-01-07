import "./App.css";
import FilmCard from "./components/FilmCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import Films from "./pages/Films";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";
import Series from "./pages/Series";

export default function App() {
  return (
    <>
      <h1>Projet 2 Groupe 4</h1>
      <Navbar />
      <Header />
      <Homepage />
      <Popup />
      <Films />
      <Series />
      <FilmCard />
      <Footer />
      <Page404 />
    </>
  );
}
