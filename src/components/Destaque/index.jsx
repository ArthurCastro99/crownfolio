import "./destaque.css";

const Destaques = () => {
  return (
    <section className="promocoes" id="promo">
      <h2>Promoções</h2>
      <div className="gridPromocoes">
        <div className="cardPromo">
          <img
            src="./public/menuImagens/carbonara.webp"
            alt="Spaghetti Carbonara"
          />
          <h3>Spaghetti Carbonara</h3>
          <p>de R$ 45 por R$ 35</p>
        </div>
        <div className="cardPromo">
          <img src="./public/menuImagens/classica.webp" alt="Lasanha" />
          <h3>Lasanha</h3>
          <p>De R$ 50 por R$ 40</p>
        </div>
      </div>
    </section>
  );
};

export default Destaques;
