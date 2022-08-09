import Image from "next/image";
import containers from "../styles/Container.module.css";
import styles from "../styles/Quote.module.css";

interface QuoteContent {
  quote: string;
  author: string;
  image: {
    src: string;
    alt: string;
  };
}

const Quote = (content: QuoteContent) => {
  const { quote, author, image } = content;

  return (
    <section className={containers.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={image.src}
            alt={image.alt}
            width={375}
            height={400}
            className={styles.imageMask}
          />
        </div>

        <article className={styles.article}>
          <p>{quote}</p>
          <span>{author}</span>
        </article>
      </div>
    </section>
  );
};

export default Quote;
