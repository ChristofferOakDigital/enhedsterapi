import Link from 'next/link';
import Image from 'next/image';
import CurveLight from './curves/CurveLight';
import CurveDoubleLight from './curves/CurveDoubleLight';

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
        <section className="wrapper">
            <div className="curve-wrapper curve-wrapper--top">
                <CurveLight />
            </div>
            <div className="curve-wrapper curve-wrapper--bot">
                <CurveDoubleLight />
            </div>

            <div className="section">
                <div className="container">
                    <div className={`imageWrapper ${position || ''}`}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="imageMask"
                        />
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
                        <Link href={button.url}>
                            <a className="button buttonFull">{button.text}</a>
                        </Link>
                    </article>
                </div>
            </div>

            <style jsx>{`
                .wrapper {
                    position: relative;
                    width: 100%;
                    margin-top: 5%;
                    margin-bottom: 6%;
                    padding: 0 0 7.5rem;
                    background-color: var(--sand);
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
                    bottom: 2px;
                    transform: translateY(100%);
                }

                .container {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                }

                * {
                    color: var(--white);
                }

                h2 {
                    white-space: pre-line;
                }

                p {
                    margin-bottom: 5.5rem;
                }

                .imageWrappper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: clamp(250px, 100%, 600px);
                    margin: 0 auto;
                }

                @media (min-width: 768px) {
                    .wrapper {
                        padding: 7.5rem 0;
                    }

                    .container {
                        grid-template-columns: 1fr 1fr;
                    }

                    .curve-wrapper--top {
                        display: block;
                    }
                }
            `}</style>
        </section>
    );
};

export default TextImage;
