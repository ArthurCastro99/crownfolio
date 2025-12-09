import "./menu.css";
import pratos from "./../../data/pratos.json";
import Prato from "../../Prato";


const Menu = () => {
  return (
    <>
      <div className="mainMenu" id="menu">
        <h2 className="tituloMenu">Menu</h2>
        {pratos.map((prato) => (
          <Prato key={prato.id} prato={prato} />
        ))}
      </div>
      ;
    </>
  );
};
export default Menu;
