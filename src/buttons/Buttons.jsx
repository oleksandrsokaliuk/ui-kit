import "./Buttons.styles.css";
import FirstButton from "./first-button/FirstButton";
import SecondButton from "./second-button/SecondButton";
import ThirdButton from "./third-button/ThirdButton";
import FourthButton from "./fourth-button/FourthButton";
import FifthButton from "./fifth-button/FifthButton";
import SixthButton from "./sixth-button/SixthButton";

const Buttons = () => {
  return (
    <div className="buttons-div">
      <FirstButton />
      <SecondButton />
      <ThirdButton />
      <FourthButton />
      <FifthButton />
      <SixthButton />
    </div>
  );
};

export default Buttons;
