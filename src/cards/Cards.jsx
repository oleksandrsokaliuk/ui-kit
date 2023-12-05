import "./Cards.styles.css";
import Accordion from "./accordion/Accordion";
import ThirdCard from "./third-card/ThirdCard";

const Cards = () => {
  return (
    <div className="cards-div">
      <Accordion />
      <ThirdCard />
    </div>
  );
};

export default Cards;
