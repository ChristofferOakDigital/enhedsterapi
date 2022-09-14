import Image from 'next/image';
import styles from '../styles/Form.module.css';

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
        </section>
    );
};

export default Form;
