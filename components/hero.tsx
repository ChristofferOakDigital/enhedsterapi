import Link from "next/link";
import Image from "next/image";
import containers from "../styles/Container.module.css";
import buttons from "../styles/Buttons.module.css";
import styles from "../styles/Hero.module.css";

interface HeroContent {
  title: string;
  text: string;
  buttonMore?: {
    text: string;
    url: string;
  };
  buttonBook?: {
    text: string;
    url: string;
  };
  image: {
    src: string;
    alt: string;
  };
  bg?: string;
}

const Hero = (content: HeroContent) => {
  const { title, text, buttonMore, buttonBook, image, bg } = content;

  return (
    <section className={`${styles.wrapper} ${bg || ""}`}>
      <div className={`${containers.section} ${styles.hero}`}>
        <div className={styles.imageWrapper}>
          <Image
            src={image.src}
            alt={image.alt}
            width={500}
            height={500}
            className={styles.imageMask}
          />
        </div>

        <div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{text}</p>

          <div className={styles.buttons}>
            {buttonMore && (
              <Link href={buttonMore.url}>
                <a className={`${buttons.button} ${buttons.buttonFull}`}>
                  {buttonMore.text}
                </a>
              </Link>
            )}
            {buttonBook && (
              <Link href={buttonBook.url}>
                <a className={buttons.button}>{buttonBook.text}</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
