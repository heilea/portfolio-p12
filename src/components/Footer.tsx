import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
    </footer>
  );
};

export default Footer;
