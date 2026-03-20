import Link from 'next/link';
import styles from '../styles/Portfolio.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navBrand}>My Portfolio</div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
