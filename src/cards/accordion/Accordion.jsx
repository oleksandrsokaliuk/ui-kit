import { useState } from "react";
import "./Accordion.styles.css";

const AccordionItem = ({ title, number }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      class={`item ${isShown && "open"}`}
      onClick={() => {
        setIsShown((prevState) => !prevState);
      }}
    >
      <p class="number">{number}</p>
      <p class="text">{title}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
      <div class="hidden-box">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          dolor at sequi obcaecati cupiditate. Voluptates repellendus cupiditate
          aperiam! Incidunt amet quo neque.
        </p>
        <ul>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
          <li>Quasi accusamus corporis totam tempora suscipit ab obcaecati.</li>
          <li>Tempora, et atque officia at consequatur laborum!</li>
          <li>Repudiandae praesentium illo voluptate in, atque enim.</li>
        </ul>
      </div>
    </div>
  );
};

const Accordion = () => {
  const titles = [
    "Where are these chairs assembled?",
    "How long do I have to return my chair?",
    "Do you ship to countries outside the EU?",
  ];
  return (
    <section>
      {/* {titles.map((item) => {
        console.log(item);
        console.log(titles.findIndex((item) => item) + 1);
        return (
          <AccordionItem
            title={item}
            number={`0${titles.findIndex(item) + 1}`}
          />
        );
      })} */}
      <AccordionItem title="Where are these chairs assembled?" number="01" />
      <AccordionItem
        title="How long do I have to return my chair?"
        number="02"
      />
      <AccordionItem
        title="Do you ship to countries outside the EU?"
        number="03"
      />
    </section>
  );
};

export default Accordion;
