import { Routing } from "./routing/Routing";
import FirstMenu from "./menus/first-menu/FirstMenu";
import FifthMenu from "./menus/fifth-menu/FifthMenu";

function App() {
  return (
    <div>
      <FifthMenu
        menus={"/menus"}
        buttons={"/buttons"}
        cards={"/cards"}
        footers={"/footers"}
        sidebars={"/sidebars"}
        headers={"/headers"}
      />
      <Routing />
    </div>
  );
}

export default App;
