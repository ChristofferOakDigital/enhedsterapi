import { useState } from 'react';
import CurveMedium from './curves/CurveMedium';
// import Image from "next/image";
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

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // let isValidForm = handleValidation();

        const res = await fetch('/api/sendgrid', {
            body: JSON.stringify({
                email: email,
                phone: phone,
                name: `${firstname} ${lastname}`,
                subject: 'Besked fra Enhedsterapeut.dk',
                message: message,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        const { error } = await res.json();
        if (error) {
            console.log(error);
            return;
        }
        // console.log(fullname, email, subject, message);
    };

    return (
        <section className="wrapper">
            <div className="curve-wrapper">
                <CurveMedium color="#ce9983" />
            </div>

            <div className="section form-section">
                <div className="imageWrapper">
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="imageMask"
                    />
                </div>

                <div className="container">
                    <article className="article">
                        <h1 className="title">{title}</h1>
                        <p>{text}</p>
                        <p>Langesvej 34, stuen, 3400 Hillerød</p>
                        <a className="phone" href="tel:+4548242444">
                            +45 48 24 24 44
                        </a>

                        <form className="form" onSubmit={handleSubmit}>
                            <fieldset>
                                <div className="label">
                                    <input
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        value={firstname}
                                        placeholder=" "
                                        onChange={(e) =>
                                            setFirstname(e.target.value)
                                        }
                                    />
                                    <label htmlFor="firstname">Fornavn</label>
                                </div>
                                <div className="label">
                                    <input
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        value={lastname}
                                        placeholder=" "
                                        onChange={(e) =>
                                            setLastname(e.target.value)
                                        }
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
                                        value={phone}
                                        placeholder=" "
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                    />
                                    <label htmlFor="phone">Telefon</label>
                                </div>
                                <div className="label">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        placeholder=" "
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
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
                                        value={message}
                                        placeholder=" "
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                    ></textarea>
                                    <label htmlFor="message">
                                        Besked (ingen personfølsomme data)
                                    </label>
                                </div>
                            </fieldset>

                            <fieldset>
                                <button className="button buttonFull wide">
                                    Send
                                </button>
                            </fieldset>
                        </form>
                    </article>
                </div>
            </div>

            <style jsx>{`
                .wrapper {
                    position: relative;
                    width: 100%;
                    margin-bottom: 20rem;
                    background-color: var(--sand);
                }

                .curve-wrapper {
                    position: absolute;
                    bottom: 2px;
                    left: 0;
                    width: 100%;
                    transform: translateY(64%);
                    z-index: -1;
                }

                .title {
                    margin: 0 0 2.5rem;
                }

                .form-section {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    padding-bottom: 7rem;
                }

                .article > * {
                    color: var(--white);
                }

                .phone {
                    display: inline-block;
                    margin-bottom: 5rem;
                    font-family: var(--font-heading);
                    font-size: 3.3rem;
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
                    max-width: calc(100% - 3rem);
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

                @media (min-width: 768px) {
                    .wrapper {
                        padding: 7.5rem 0 0;
                    }

                    .form-section {
                        grid-template-columns: 1fr 1fr;
                        padding-top: 7rem;
                    }

                    .imageWrapper {
                        order: 2;
                    }
                }
            `}</style>
        </section>
    );
};

export default Form;
