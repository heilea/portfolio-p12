import styles from './Header.module.scss';
import atomIcon from '../../public/React.js_logo-512.webp';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={atomIcon} alt="Atom logo" className={styles.logo} />
      <nav className={styles.nav}>
        <a href="#presentation">Présentation</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
