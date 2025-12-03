import "../Footer/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="contato">
        <div className="footerSecoes">
          <div className="contatos">
            <h2>Contato</h2>
            <ul className="listaContato">
              <li>
                <a
                  href="https://www.instagram.com/arthurcastro_99/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon="phone" size="3x" />
                  55+ 00 99999-9999
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps" target="_blank">
                  <FontAwesomeIcon icon="home" size="3x" />
                  Rua ali, depois logo ali, 123
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/arthur-castro-b70a02223/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon="envelope" size="3x" />
                  crownfolio@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="redeSociais">
            <h2>Rede Sociais</h2>
            <ul className="listaSocias">
              <li>
                <a
                  href="https://www.instagram.com/arthurcastro_99/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/arthur-castro-b70a02223/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
                  Linkedln
                </a>
              </li>
              <li>
                <a href="https://github.com/ArthurCastro99" target="_blank">
                  <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footerDireitos">
          <p>@ 2025 - Todos os direitos reservados -</p>
          <a href="#">Arthur</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
