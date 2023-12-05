import "./FourthMenu.styles.css";
import { Link } from "react-router-dom";

const FourthMenu = ({ menus, buttons }) => {
  return (
    <>
      <ul className="fourth-menu-ul">
        <li className="fourth-menu-li">
          <Link className="fourth-menu-link" to={buttons}>
            Buttons
          </Link>
        </li>
        <li className="fourth-menu-li">
          <Link className="fourth-menu-link" to={menus}>
            Menus
          </Link>
        </li>
      </ul>
    </>
  );
};

export default FourthMenu;
