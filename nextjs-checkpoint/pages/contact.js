import Navbar from '../components/Navbar';
import styles from '../styles/Portfolio.module.css';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.title}>Contact Me</h1>
        <form className={styles.form}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </main>
    </div>
  );
}
