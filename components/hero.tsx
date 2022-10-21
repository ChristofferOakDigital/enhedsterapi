import Link from 'next/link';
import Image from 'next/image';
import CurveMedium from './curves/CurveMedium';
interface HeroContent {
    title: string;
    text?: string;
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

    let curveColor = bg === 'brown' ? '#665050' : '#ebe5de';

    return (
        <section className={`wrapper ${bg || ''}`}>
            <div className="curve-wrapper">
                <CurveMedium color={curveColor} />
            </div>

            <div className="section hero">
                <div className="imageWrapper">
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

                <div>
                    <h1 className="title">{title}</h1>
                    {text && <p className="text">{text}</p>}

                    <div className="buttons">
                        {buttonMore && (
                            <Link href={buttonMore.url}>
                                <a className="button buttonFull">
                                    {buttonMore.text}
                                </a>
                            </Link>
                        )}
                        {buttonBook && (
                            <Link href={buttonBook.url}>
                                <a className="button">{buttonBook.text}</a>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .wrapper {
                    position: relative;
                    width: 100%;
                    z-index: 2;
                }

                .curve-wrapper {
                    position: absolute;
                    bottom: 2px;
                    left: 0;
                    width: 100%;
                    transform: translateY(64%);
                    z-index: -1;
                }

                .hero {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    padding-bottom: 3rem;
                }

                .title {
                    margin: 0 0 2.5rem;
                }

                .text {
                    margin: 0 0 4rem;
                }

                .buttons {
                    display: grid;
                    grid-template-columns: max-content;
                    gap: 2.5rem;
                }

                @media (min-width: 425px) {
                    .buttons {
                        grid-template-columns: repeat(2, max-content);
                    }
                }

                @media (min-width: 768px) {
                    .wrapper {
                        margin-bottom: 7%;
                        padding: 7.5rem 0 0;
                    }

                    .hero {
                        grid-template-columns: 1fr 1fr;
                        padding-top: 7rem;
                        padding-bottom: 7rem;
                    }

                    .imageWrapper {
                        order: 2;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
