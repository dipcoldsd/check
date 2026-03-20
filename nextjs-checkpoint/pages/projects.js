import Navbar from '../components/Navbar';
import styles from '../styles/Portfolio.module.css';

export default function Projects() {
  const projects = [
    { id: 1, name: 'E-commerce App', tech: 'Next.js, Tailwind' },
    { id: 2, name: 'REST API', tech: 'Node.js, Express, MongoDB' },
    { id: 3, name: 'Redux Todo', tech: 'React, Redux Toolkit' },
  ];

  return (
    <div>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.title}>My Projects</h1>
        <div className={styles.projectGrid}>
          {projects.map(p => (
            <div key={p.id} className={styles.card}>
              <h3>{p.name}</h3>
              <p>{p.tech}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
