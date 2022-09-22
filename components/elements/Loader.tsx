type LoaderProps = {
  size: string;
  border: string;
};

const Loader = ({ size, border }: LoaderProps) => {
  return (
    <div className="loader-wrapper">
      <div className={`circle-loader ${border}`} />

      <style jsx>{`
        .loader-wrapper {
          display: grid;
          place-content: center;
          height: 100%;
          margin-left: 15px;
        }

        .circle-loader {
          position: relative;
          height: ${size};
          width: ${size};
          margin: 0 auto;
          border-radius: 100%;
          pointer-events: none;
        }

        .circle-loader::before,
        .circle-loader::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 100%;
          border: 3px solid transparent;
          box-sizing: border-box;
        }

        .circle-loader::before {
          z-index: 100;
          animation: spin 1s infinite;
          border-top-color: var(--sand);
        }

        .circle-loader::after {
          border: 3px solid var(--white);
        }

        .circle-loader.thick::before,
        .circle-loader.thick::after {
          width: 100%;
          height: 100%;
          border-radius: 100%;
          border: 6px solid transparent;
        }

        .circle-loader.thick::before {
          border-top-color: var(--sand);
        }

        .circle-loader.thick::after {
          border: 6px solid var(--white);
        }
      `}</style>
    </div>
  );
};

export default Loader;
