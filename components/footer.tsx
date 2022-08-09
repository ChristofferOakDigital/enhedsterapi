import Link from "next/link";
import Image from "next/image";
import container from "../styles/Container.module.css";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={`${container.section} ${styles.footer}`}>
        <Link href="/">
          <a className={styles.logo}>
            <Image
              src="/images/logo-white.png"
              alt="Logo"
              height={90}
              width={90}
            />
          </a>
        </Link>

        <span className={styles.tag}>Kontakt KiroJess</span>
        <span>Adresse: Langesvej 34, stuen, 3400 Hillerød</span>
        <span>
          Telefon: <a href="tel:+4548242444">+45 48 24 24 44</a>
        </span>
        <span>
          Email:{" "}
          <a href="mailto:lisbeth.jessen@kirojess.dk">
            lisbeth.jessen@kirojess.dk
          </a>
        </span>
        <span className={styles.italic}>
          Der er mulighed for gratis parkering ved klinikken
        </span>
      </div>
    </footer>
  );
};

export default Footer;
