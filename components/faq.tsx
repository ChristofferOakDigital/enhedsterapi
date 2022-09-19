interface FAQContent {
  question: string;
  answer: string;
}

const FAQ = (content: FAQContent) => {
  const { question, answer } = content;

  return (
    <section className="section">
      <article className="container">
        <h2>Her kommer en FAQ</h2>
      </article>

      <style jsx>{`
        .container {
          width: clamp(300px, 100%, 660px);
          margin: 0 auto;
          padding: 6rem 0;
          text-align: center;
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

export default FAQ;
