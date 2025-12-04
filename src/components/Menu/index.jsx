import "./menu.css";
import pratos from "./../../data/pratos.json";

const Menu = () => {
  return (
    <>
      <div className="mainMenu" id="menu">
        <h2 className="tituloMenu">Menu</h2>

        {pratos.map((prato) => (
          <section key={prato.id} className="menuPratos">
            <div className="imgPratos">
              <img
                src={`${import.meta.env.BASE_URL}${prato.imagem}`}
                alt={prato.nome}
              />
              <div className="infoPrato">
                <h2 className="tituloPadrao">{prato.nome}</h2>
                <p className="ingredientePrato">{prato.ingredientes}</p>
              </div>

              <span className="precoPrato">{prato.preco}</span>
            </div>
          </section>
        ))}
      </div>
      ;
    </>
  );
};
export default Menu;
