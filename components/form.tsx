import Image from 'next/image';
// import styles from '../styles/Form.module.css';

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
        <section className="wrapper">
            <div className="section">
                <div className="container">
                    <article className="article">
                        <h1>{title}</h1>
                        <p>{text}</p>
                        <a href="tel:+4548242444">+45 48 24 24 44</a>

                        <form className="form">
                            <fieldset>
                                <div className="label">
                                    <input
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        placeholder=" "
                                    />
                                    <label htmlFor="firstname">Fornavn</label>
                                </div>
                                <div className="label">
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
                                <div className="label">
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder=" "
                                    />
                                    <label htmlFor="phone">Telefon</label>
                                </div>
                                <div className="label">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder=" "
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </fieldset>
                            <fieldset>
                                <div className="wide label">
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="wide"
                                        placeholder=" "
                                    ></textarea>
                                    <label htmlFor="message">Besked</label>
                                </div>
                            </fieldset>

                            <fieldset>
                                <button className="button buttonFull wide">
                                    Send
                                </button>
                            </fieldset>
                        </form>
                    </article>

                    <div className="imageWrapper">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={375}
                            height={400}
                            className="imageMask"
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .wrapper {
                    width: 100%;
                    padding: 7.5rem 0;
                    background-color: var(--sand);
                }

                .container {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 3rem;
                }

                .article > * {
                    color: var(--white);
                }

                .form {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.8rem;
                }

                .form fieldset {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.8rem;
                    place-items: center;
                    margin: 0;
                    padding: 0;
                    border: none;
                }

                .form fieldset .label {
                    position: relative;
                    width: 100%;
                }

                .form fieldset input,
                .form fieldset textarea {
                    width: 100%;
                    padding: 1.3rem 1.5rem;
                    border: none;
                    border-radius: 3px;
                    font-size: 2rem;
                    font-family: var(--font-text);
                    font-weight: 300;
                    line-height: 120%;
                    background-color: var(--white);
                }

                .form fieldset label {
                    position: absolute;
                    top: 1.3rem;
                    left: 1.5rem;
                    font-size: 2rem;
                    font-family: var(--font-text);
                    font-weight: 300;
                    line-height: 120%;
                    color: var(--brown);
                    transition: all 150ms ease-out;
                    pointer-events: none;
                }

                .form fieldset input:focus + label,
                .form fieldset input:not(:placeholder-shown) + label,
                .form fieldset textarea:focus + label,
                .form fieldset textarea:not(:placeholder-shown) + label {
                    top: 0.3rem;
                    font-size: 1rem;
                }

                .form fieldset textarea {
                    min-height: 120px;
                    resize: none;
                }

                .wide {
                    grid-column: span 2;
                }

                .imageMask {
                    mask: url('../public/icons/mask.svg');
                    mask-size: contain;
                    mask-repeat: no-repeat;
                }
            `}</style>
        </section>
    );
};

export default Form;
