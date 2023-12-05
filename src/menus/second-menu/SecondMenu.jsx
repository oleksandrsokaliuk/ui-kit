import "./SecondMenu.styles.css";
import { Link } from "react-router-dom";

const SecondMenu = ({ menus, buttons }) => {
  return (
    <>
      <ul className="second-menu-ul">
        <li className="second-menu-li">
          <Link className="second-menu-link" to={buttons}>
            Buttons
          </Link>
        </li>
        <li className="second-menu-li">
          <Link className="second-menu-link" to={menus}>
            Menus
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SecondMenu;
