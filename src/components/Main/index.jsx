import "./main.css";
import Menu from "../Menu/index";
import Eventos from "../Eventos/index";

const Main = () => {
  return (
    <>
      <main className="main" id="main">
        <div className="mainApresentacao">
          <h1 className="tituloPrincipal">Crownfolio</h1>
          <span className="apresentacaoLinha"></span>
          <p className="textoPadrao">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odio
            minus eveniet facere suscipit eaque harum illum a dolor eos quos nam
            ut recusandae! Magnam nemo quidem vel velit est?
          </p>
        </div>
        <Menu></Menu>
        <Eventos></Eventos>
      </main>
    </>
  );
};

export default Main;
