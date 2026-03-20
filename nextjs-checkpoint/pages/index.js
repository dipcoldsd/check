import Navbar from '../components/Navbar';
import styles from '../styles/Portfolio.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.description}>
          Hi! I am a software engineer specializing in modern web technologies like Next.js, React, and Node.js.
        </p>
        <div style={{ marginTop: '2rem' }}>
          {/* Example of displaying an image (fallback to placeholder if no real image) */}
          <img src="https://via.placeholder.com/150" alt="Profile" className={styles.profilePic} />
        </div>
      </main>
    </div>
  );
}
