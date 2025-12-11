import "./main.css";
import Menu from "../Menu/index";
import SobreNos from "../SobreNos/index";
import Destaques from "../Destaque/index";

const Main = () => {
  return (
    <>
      <main className="main" id="main">
        <div className="mainApresentacao">
          <h1 className="tituloPrincipal">Crownfolio</h1>
          <span className="apresentacaoLinha"></span>
          <p className="textoPadrao">
            Um espaço criado para unir sabor e praticidade. Aqui você encontra
            pratos preparados com carinho, pensados para transformar cada
            refeição em uma experiência especial. Explore nosso cardápio,
            descubra promoções e aproveite a facilidade de pedir
          </p>
        </div>
        <Menu></Menu>
        <SobreNos></SobreNos>
        <Destaques></Destaques>
      </main>
    </>
  );
};

export default Main;
