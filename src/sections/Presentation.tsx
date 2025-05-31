import styles from './Presentation.module.scss';

const Presentation = () => {
  return (
    <section id="presentation" className={styles.section}>
      <h1 className={styles.title}>Bienvenue sur mon portfolio</h1>
      <div className='frame'>
        <p className={styles.text}>
          Je suis développeur front-end spécialisé en React TypeScript.
          Passionné par l'UI/UX et le développement web moderne. Je chemine vers Next JS. <br/>
        
        </p>
      </div>
    </section>
  );
};

export default Presentation;
