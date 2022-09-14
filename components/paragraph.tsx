interface ParagraphContent {
    title: string;
    text: string;
}

const Paragraph = (content: ParagraphContent) => {
    const { title, text } = content;

    return (
        <section className="section">
            <article className="container">
                <h2>{title}</h2>
                <p>{text}</p>
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

export default Paragraph;
