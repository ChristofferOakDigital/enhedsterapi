import Image from "next/image";
import containers from "../styles/Container.module.css";
import buttons from "../styles/Buttons.module.css";
import styles from "../styles/Form.module.css";

interface FormContent {
  title: string;
  text: string;
  image: {
    src: string;
    alt: string;
  };
}

const Form = (content: FormContent) => {
  const { title, text, image } = content;

  return (
    <section className={styles.wrapper}>
      <div className={containers.section}>
        <div className={styles.container}>
          <article className={styles.article}>
            <h1>{title}</h1>
            <p>{text}</p>
            <a href="tel:+4548242444">+45 48 24 24 44</a>

            <form className={styles.form}>
              <fieldset>
                <div className={styles.label}>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder=" "
                  />
                  <label htmlFor="firstname">Fornavn</label>
                </div>
                <div className={styles.label}>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder=" "
                  />
                  <label htmlFor="lastname">Efternavn</label>
                </div>
              </fieldset>
              <fieldset>
                <div className={styles.label}>
                  <input type="tel" name="phone" id="phone" placeholder=" " />
                  <label htmlFor="phone">Telefon</label>
                </div>
                <div className={styles.label}>
                  <input type="email" name="email" id="email" placeholder=" " />
                  <label htmlFor="email">Email</label>
                </div>
              </fieldset>
              <fieldset>
                <div className={`${styles.wide} ${styles.label}`}>
                  <textarea
                    name="message"
                    id="message"
                    className={`${styles.wide}`}
                    placeholder=" "
                  ></textarea>
                  <label htmlFor="message">Besked</label>
                </div>
              </fieldset>

              <fieldset>
                <button
                  className={`${buttons.button} ${buttons.buttonFull} ${styles.wide}`}
                >
                  Send
                </button>
              </fieldset>
            </form>
          </article>

          <div className={styles.imageWrapper}>
            <Image
              src={image.src}
              alt={image.alt}
              width={375}
              height={400}
              className={styles.imageMask}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
