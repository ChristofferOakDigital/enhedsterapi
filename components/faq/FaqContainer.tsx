type FaqContainerProps = {
  children: JSX.Element | JSX.Element[];
};

const FaqContainer = ({ children }: FaqContainerProps) => {
  return (
    <section className="section">
      <article className="container">
        <span className="title">Ofte stillede spørgsmål</span>
        <div className="faq-container">{children}</div>
      </article>

      <style jsx>{`
        .container {
          width: clamp(300px, 100%, 660px);
          margin: 0 auto;
          padding: 6rem 0;
          text-align: center;
        }

        .title {
          display: block;
          margin-bottom: 2rem;
          text-align: left;
          font-size: 2rem;
          font-weight: bold;
          font-family: var(--font-heading);
          color: var(--text);
          line-height: 150%;
        }

        .faq-container {
          display: grid;
          grid-template-columns: 1fr;
          width: 100%;
          border-top: 1px solid var(--brown);
        }

        @media (min-width: 768px) {
          .container {
            padding: 14.5rem 0;
          }
        }
      `}</style>
    </section>
  );
};

export default FaqContainer;
