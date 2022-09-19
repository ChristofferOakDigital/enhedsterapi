import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <div className="mobile">
        <Link href="/">
          <a className="logo" onClick={() => setToggle(false)}>
            <Image
              src="/images/logo.png"
              alt="Et logo"
              height={45}
              width={45}
            />
          </a>
        </Link>

        <button
          className={`burger ${toggle ? "active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={toggle ? "show" : ""}>
          <ul className="mobile-nav">
            <li>
              <Link href="/klinik">
                <a onClick={() => setToggle(false)}>Klinikken</a>
              </Link>
            </li>
            <li>
              <Link href="/behandling">
                <a onClick={() => setToggle(false)}>Behandlinger</a>
              </Link>
            </li>
            <li>
              <Link href="/kontakt">
                <a onClick={() => setToggle(false)}>Book tid</a>
              </Link>
            </li>
            <li>
              <Link href="https://kirojess.dk/">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={() => setToggle(false)}
                >
                  Kiropraktik
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="desktop">
        <nav>
          <ul>
            <li>
              <Link href="/klinik">
                <a>Klinikken</a>
              </Link>
            </li>
            <li>
              <Link href="/behandling">
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
              <Link href="/kontakt">
                <a>Book tid</a>
              </Link>
            </li>
            <li>
              <Link href="https://kirojess.dk/">
                <a rel="noopener noreferrer" target="_blank">
                  Kiropraktik
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          height: 75px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--white);
          z-index: 2;
        }

        @media (min-width: 1024px) {
          .header {
            height: 100px;
          }
        }

        .logo {
          position: relative;
          height: 45px;
          width: 45px;
          z-index: 3;
        }

        .mobile {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 0 20px;
        }

        .mobile nav {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          padding: 75px 20px;
          background-color: var(--white);
          z-index: 2;
          transform: translateX(100%);
          transition: all 300ms ease-out;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2rem;
          list-style-type: none;
        }

        .mobile-nav a {
          font-size: 3rem;
        }

        .burger {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 45px;
          width: 45px;
          background-color: transparent;
          border: none;
          z-index: 3;
          cursor: pointer;
        }

        .burger span {
          position: absolute;
          top: calc(50% - 1px);
          left: calc(50% - 15px);
          height: 2px;
          width: 30px;
          border-radius: 5px;
          background-color: var(--brown);
          opacity: 1;
          transition: all 300ms ease-out;
          pointer-events: none;
        }

        .burger span:first-of-type {
          transform: translateY(-10px);
        }

        .burger span:last-of-type {
          transform: translateY(10px);
        }

        .active span:first-of-type {
          transform: translateY(0) rotate(45deg);
        }

        .active span:nth-of-type(2) {
          opacity: 0;
        }

        .active span:last-of-type {
          transform: translateY(0) rotate(-45deg);
        }

        .show {
          transform: translateX(0) !important;
        }

        .desktop {
          display: none;
        }

        @media (min-width: 1024px) {
          .mobile {
            display: none;
          }

          .desktop {
            display: block;
          }

          .desktop ul {
            display: flex;
            align-items: center;
            justify-content: center;
            list-style-type: none;
          }

          .desktop ul li a {
            padding: 1.5rem 3.5rem;
            font-family: var(--font-heading);
            font-size: 2rem;
            line-height: 120%;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
