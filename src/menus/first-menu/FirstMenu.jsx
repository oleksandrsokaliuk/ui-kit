import "./FirstMenu.styles.css";
import { Link } from "react-router-dom";

const FirstMenu = ({ menus, buttons }) => {
  return (
    <>
      <ul className="first-menu-ul">
        <li className="first-menu-li">
          <Link className="first-menu-link" to={buttons}>
            Buttons
          </Link>
        </li>
        <li className="first-menu-li">
          <Link className="first-menu-link" to={menus}>
            Menus
          </Link>
        </li>
      </ul>
    </>
  );
};

export default FirstMenu;
