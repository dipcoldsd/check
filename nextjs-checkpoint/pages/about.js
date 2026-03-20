import Navbar from '../components/Navbar';
import styles from '../styles/Portfolio.module.css';

export default function About() {
  return (
    <div>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>
          I hold a degree in Computer Science and have 3 years of experience building scalable applications.
          My passion is to solve real-world problems using clean and maintainable code.
        </p>
      </main>
    </div>
  );
}
