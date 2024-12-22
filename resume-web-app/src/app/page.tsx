import Head from 'next/head';
import styles from './page.module.css';

const Resume = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resume - River Smith</title>
        <meta name="description" content="Resume of River Smith" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>River Smith</h1>

        <section className={styles.section}>
          <h2>Contact Information</h2>
          <p>Email: example@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>LinkedIn: linkedin.com/in/riversmith</p>
        </section>

        <section className={styles.section}>
          <h2>Summary</h2>
          <p>
            A dedicated professional with a proven track record in [Industry].
            Experienced in [Skills/Expertise] with strong problem-solving skills
            and a focus on delivering exceptional results.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Experience</h2>
          <ul>
            <li>
              <strong>Job Title</strong> - Company Name (Start Date - End Date)
              <p>Key Responsibilities:</p>
              <ul>
                <li>Responsibility 1</li>
                <li>Responsibility 2</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Education</h2>
          <p>Degree - University Name (Graduation Year)</p>
        </section>

        <section className={styles.section}>
          <h2>Skills</h2>
          <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} River Smith</p>
      </footer>
    </div>
  );
};

export default Resume;
