import { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.scss';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      await emailjs.sendForm(
        'service_8efelhn',
        'template_cg6wkox',
        form.current,
        '8FywBghKE8HOv_CHU'
      );

      setSent(true);
      form.current.reset();
    } catch (err) {
      console.error('Erreur lors de l’envoi du message :', err);
    }
  };

  return (
    <div>
      <h2>Contact</h2>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <label>
          Nom<br />
          <input type="text" name="name" required />
        </label>
        <label>
          Email<br />
          <input type="email" name="email" required />
        </label>
        <label>
          Message<br />
          <textarea name="message" rows={5} required />
        </label>
        <button type="submit">Envoyer</button>
        {sent && <p className={styles.success}>Message envoyé !</p>}
      </form>
    </div>
  );
};

export default Contact;
