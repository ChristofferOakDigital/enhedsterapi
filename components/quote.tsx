import Image from 'next/image';

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
        <section className="section">
            <div className="container">
                <div className="imageWrapper hideMobile">
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
                    <p>{quote}</p>
                    <span>{author}</span>
                </article>
            </div>

            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    padding: 7.5rem 0 17.5rem;
                }

                .article {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                p {
                    display: block;
                    margin: 0 0 5rem;
                    font-size: 3.6rem;
                    font-family: var(--font-heading);
                    text-align: center;
                }

                span {
                    display: block;
                    font-size: 1.8rem;
                    line-height: 150%;
                    text-align: right;
                }

                .imageWrapper {
                    position: relative;
                    z-index: -1;
                }

                .imageWrapper::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 150%;
                    padding-bottom: 150%;
                    background-image: url('/icons/formBefore.svg');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    transform: translate(-5%, -15%);

                    z-index: -1;
                }

                .imageWrapper::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 150%;
                    padding-bottom: 150%;
                    background-color: var(--theme);
                    mask: url('/icons/maskAfter.svg');
                    mask-size: contain;
                    mask-repeat: no-repeat;
                    z-index: -2;
                }

                .imageMask {
                    mask: url('/icons/mask.svg');
                    mask-size: contain;
                    mask-repeat: no-repeat;
                }

                @media (min-width: 768px) {
                    .container {
                        grid-template-columns: 1fr 2fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default Quote;
