import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.mobile}>
                <Link href="/">
                    <a className={styles.logo}>
                        <Image
                            src="/images/logo.png"
                            alt="Et logo"
                            height={45}
                            width={45}
                        />
                    </a>
                </Link>

                <button
                    className={`${styles.burger} ${
                        toggle ? styles.active : ''
                    }`}
                    onClick={() => setToggle(!toggle)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav className={toggle ? styles.show : ''}>
                    <ul>
                        <li>
                            <Link href="/clinic">
                                <a>Klinikken</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/treatment">
                                <a>Behandlinger</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>Book tid</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/kirojess">
                                <a>Kiropraktik</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={styles.desktop}>
                <nav>
                    <ul>
                        <li>
                            <Link href="/clinic">
                                <a>Klinikken</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/treatment">
                                <a>Behandlinger</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <Image
                                        src="/images/logo.png"
                                        alt="Et logo"
                                        height={45}
                                        width={45}
                                    />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>Book tid</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/kirojess">
                                <a>Kiropraktik</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
