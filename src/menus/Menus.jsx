import "./Menus.styles.css";
import FirstMenu from "./first-menu/FirstMenu";
import SecondMenu from "./second-menu/SecondMenu";
import ThirdMenu from "./third-menu/ThirdMenu";
import FourthMenu from "./fourth-menu/FourthMenu";
import FifthMenu from "./fifth-menu/FifthMenu";

const Menus = () => {
  return (
    <div className="menus-div">
      <FirstMenu />
      <SecondMenu />
      <ThirdMenu />
      <FourthMenu />
      <FifthMenu />
    </div>
  );
};

export default Menus;
