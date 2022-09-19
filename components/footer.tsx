import Link from "next/link";
import Image from "next/image";
import CurveDoubleLarge from "./curves/CurveDoubleLarge";

const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="curve-wrapper">
        <CurveDoubleLarge />
      </div>

      <div className="pattern-wrapper" />

      <div className="section footer">
        <Link href="/">
          <a className="logo">
            <Image
              src="/images/logo-white.png"
              alt="Logo"
              height={90}
              width={90}
            />
          </a>
        </Link>

        <span className="tag">Kontakt KiroJess</span>
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
        <span className="italic">
          Der er mulighed for gratis parkering ved klinikken
        </span>
      </div>

      <style jsx>{`
        .wrapper {
          position: relative;
          margin-top: 14%;
          padding-bottom: 8rem;
          background-color: var(--brown);
        }

        .curve-wrapper {
          position: absolute;
          top: 2px;
          left: 0;
          width: 100%;
          transform: translateY(-69%);
          z-index: -1;
        }

        .footer {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .footer span {
          font-size: 1.6rem;
          color: var(--white);
          line-height: 120%;
        }

        .footer a:hover {
          text-decoration: underline;
        }

        .logo {
          margin-bottom: 3rem;
        }

        .tag {
          margin-bottom: 1.5rem;
          font-family: var(--font-heading);
        }

        .italic {
          margin-top: 3rem;
          font-style: italic;
        }

        .pattern-wrapper {
          position: absolute;
          bottom: 0;
          right: 0;
          height: 80%;
          width: clamp(300px, 33%, 600px);
          overflow: hidden;
          pointer-events: none;
        }

        .pattern-wrapper::before {
          content: "";
          position: absolute;
          height: 100%;
          width: 100%;
          background-image: url("/icons/patternSand.svg");
          background-repeat: no-repeat;
          background-position: top left;
          background-size: 100%;
          transform: rotate(-44deg) translateY(31%);
        }

        .pattern-wrapper::after {
          content: "";
          position: absolute;
          height: 100%;
          width: 100%;
          background-image: url("/icons/patternSand.svg");
          background-repeat: no-repeat;
          background-position: top left;
          background-size: 100%;
          transform: rotate(-12deg) translateY(31%);
        }

        @media (min-width: 768px) {
          .footer span {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
