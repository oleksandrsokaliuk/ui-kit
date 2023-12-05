import "./FifthMenu.styles.css";
import { Link } from "react-router-dom";

const FifthMenu = ({ menus, buttons, cards, footers, sidebars, headers }) => {
  return (
    <>
      <ul className="fifth-menu-ul">
        <li className="fifth-menu-li">
          <Link className="fifth-menu-link" to={buttons}>
            Buttons
          </Link>
        </li>
        <li className="fifth-menu-li">
          <Link className="fifth-menu-link" to={menus}>
            Menus
          </Link>
        </li>
        <li className="fifth-menu-li">
          <Link className="fifth-menu-link" to={cards}>
            Cards
          </Link>
        </li>
        <li className="fifth-menu-li">
          <Link className="fifth-menu-link" to={footers}>
            Footers
          </Link>
        </li>
        <li className="fifth-menu-li">
          <Link className="fifth-menu-link" to={sidebars}>
            SideBars
          </Link>
        </li>
        <li className="fifth-menu-li">
          <Link className="fifth-menu-link" to={headers}>
            Headers
          </Link>
        </li>
      </ul>
    </>
  );
};

export default FifthMenu;
