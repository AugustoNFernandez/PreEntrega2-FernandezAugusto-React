import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./css/NavBar.css";

export default function NavBar() {
  return (
    <header className="navContainer">
      <Link to="/" className="logo">
        <img
          src="/src/components/img/books-apple.svg"
          alt="isoLogo"
          className="imgLogo"
        />
        <h2>Tienda de Libros</h2>
      </Link>
      <nav className="menu">
        <ul className="lista">
          <Link to="/category/biografias">Biografías</Link>
          <Link to="/category/ficcion">Ficción</Link>
          <Link to="/category/terror">Terror</Link>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
}
 

