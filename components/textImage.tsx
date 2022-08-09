import Link from "next/link";
import Image from "next/image";
import containers from "../styles/Container.module.css";
import buttons from "../styles/Buttons.module.css";
import styles from "../styles/TextImage.module.css";

interface TextImageContent {
  title: string;
  text: string;
  button: {
    text: string;
    url: string;
  };
  image: {
    src: string;
    alt: string;
  };
  position?: string;
}

const TextImage = (content: TextImageContent) => {
  const { title, text, button, image, position } = content;

  return (
    <section className={styles.wrapper}>
      <div className={containers.section}>
        <div className={styles.container}>
          <div className={`${styles.imageWrappper} ${position || ""}`}>
            <Image
              src={image.src}
              alt={image.alt}
              width={550}
              height={600}
              className={styles.imageMask}
            />
          </div>

          <article className={styles.article}>
            <h2>{title}</h2>
            <p>{text}</p>
            <Link href={button.url}>
              <a className={`${buttons.button} ${buttons.buttonFull}`}>
                {button.text}
              </a>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TextImage;
