import styles from './Footer.module.css';
import '@fortawesome/fontawesome-free/css/all.css';
function Footer() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.containerRodape}>
        <p className={styles.textoRodape}>
          Feito por Tatiane Neris 👩🏽‍💻
        </p>
        <ul className={styles.listaRodape}>
          <li className={styles.itemRodape}>
            <i className="fa-solid fa-envelope" style={{ color: '#f41515', marginRight: '5px' }}></i>
            <a href="mailto:neris.tatiane@gmail.com" target="_blank">neris.tatiane@gmail.com</a>
          </li>
          <li className={styles.itemRodape}>
            <i className="fa-brands fa-linkedin" style={{ color: '#2283bf', marginRight: '5px' }}></i>
            <a href="/https://www.linkedin.com/in/tatiane-neris-169040174/" target="_blank">Linkedin</a>
          </li>
          <li className={styles.itemRodape}>
            <i className="fa-brands fa-github" style={{ color: '#030303', marginRight: '5px' }}></i>
            <a href="https://github.com/Tatineris" target="_blank">Tatineris</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;