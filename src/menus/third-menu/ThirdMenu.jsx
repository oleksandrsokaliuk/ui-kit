import "./ThirdMenu.styles.css";
import { Link } from "react-router-dom";

const ThirdMenu = ({ menus, buttons }) => {
  return (
    <>
      <ul className="third-menu-ul">
        <li className="third-menu-li">
          <Link className="third-menu-link" to={buttons}>
            Buttons
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Link>
        </li>
        <li className="third-menu-li">
          <Link className="third-menu-link" to={menus}>
            Menus
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ThirdMenu;
