import containers from "../styles/Container.module.css";
import styles from "../styles/Paragraph.module.css";

interface ParagraphContent {
  title: string;
  text: string;
}

const Paragraph = (content: ParagraphContent) => {
  const { title, text } = content;

  return (
    <section className={containers.section}>
      <article className={styles.container}>
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    </section>
  );
};

export default Paragraph;
