import Link from "next/link";
import Image from "next/image";
import CurveLight from "./curves/CurveLight";
import CurveDoubleLight from "./curves/CurveDoubleLight";

interface TextImageContent {
  title: string;
  text: string;
  button?: {
    text: string;
    url: string;
  };
  image: {
    src: string;
    alt: string;
  };
  position?: string;
  bg?: string;
  validation?: boolean;
  prices?: boolean;
}

const TextImage = (content: TextImageContent) => {
  const { title, text, button, image, position, bg, validation, prices } =
    content;

  let curveColor: string | undefined;

  switch (bg) {
    case "brown":
      curveColor = "#665050";
      break;
    case "sand":
      curveColor = "#ce9983";
      break;
    case "theme":
      curveColor = "#ebe5de";
      break;

    default:
      curveColor = "";
      break;
  }

  return (
    <section className={`wrapper ${bg ? bg : "white"}`}>
      {bg && (
        <>
          <div className="curve-wrapper curve-wrapper--top">
            <CurveLight color={curveColor} />
          </div>
          <div className="curve-wrapper curve-wrapper--bot">
            <CurveDoubleLight color={curveColor} />
          </div>
        </>
      )}

      <div className="section">
        <div className="container">
          <div className={`imageWrapper ${position || ""}`}>
            <img src={image.src} alt={image.alt} className="imageMask" />
            {/* <Image
                            src={image.src}
                            alt={image.alt}
                            layout="fill"
                            objectFit="cover"
                            className="imageMask"
                        /> */}
          </div>

          <article className="article">
            <h2>{title}</h2>
            <p>{text}</p>
            {button && (
              <Link href={button.url}>
                <a className="button buttonFull">{button.text}</a>
              </Link>
            )}
            {validation && (
              <div className="validation">
                <div className="dkf">
                  <img
                    src="/images/dkf.png"
                    alt="Dansk Kiropraktor Forening logo"
                  />
                </div>
                <div className="dkf">
                  <img src="/images/ddkm.png" alt="DDKM Akkrediteret" />
                </div>
              </div>
            )}
            {prices && (
              <div className="prices">
                <div className="first">Førstegangsbesøg: 900 kr.</div>
                <div className="return">Efterfølgende: fra 750 kr.</div>
              </div>
            )}
          </article>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          position: relative;
          width: 100%;
          margin-bottom: 6%;
          padding: 0 0 7.5rem;
        }

        .curve-wrapper {
          position: absolute;
          top: 2px;
          left: 0;
          width: 100%;
          transform: translateY(-36%);
          z-index: -1;
        }

        .curve-wrapper--top {
          display: none;
          top: 2px;
          transform: translateY(-36%);
        }

        .curve-wrapper--bot {
          top: unset;
          bottom: 2px;
          transform: translateY(100%);
        }

        .container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        h2 {
          white-space: pre-line;
        }

        p {
          margin-bottom: 5.5rem;
          white-space: pre-line;
        }

        .imageWrappper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: clamp(250px, 100%, 600px);
          margin: 0 auto;
        }

        .validation {
          display: flex;
          gap: 2rem;
          height: 80px;
        }

        .dkf img,
        .ddkm img {
          height: 100%;
          width: auto;
          object-fit: contain;
        }

        .prices {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem 4rem;
          font-weight: 600;
          font-size: 1.8rem;
        }

        .first,
        .return {
          white-space: nowrap;
        }

        @media (min-width: 768px) {
          .wrapper {
            margin-top: 5%;
            padding: 7.5rem 0;
          }

          .container {
            grid-template-columns: 1fr 1fr;
          }

          .curve-wrapper--top {
            display: block;
          }

          .validation {
            gap: 6rem;
            height: 115px;
          }
        }
      `}</style>
    </section>
  );
};

export default TextImage;
