import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [open, setOpen] = useState(false);

  const variants = {
    hidden: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <div className="faq-item" onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <p>{question}</p>
        <div className={`item-toggle ${open ? "show" : ""}`}>
          <span />
          <span />
        </div>
      </div>

      <div className="faq-answer">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            variants={variants}
            initial="hidden"
            animate={open ? "enter" : "exit"}
            transition={{ type: "linear", duration: 0.2 }}
          >
            <p>{answer}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx>{`
        .faq-item {
          border-bottom: 1px solid var(--brown);
          cursor: pointer;
        }

        .faq-question {
          display: grid;
          grid-template-columns: 1fr 50px;
          gap: 2rem;
          place-items: center;
        }

        p {
          display: block;
          width: 100%;
          margin: 0;
          padding: 2rem 0;
          text-align: left;
          font-size: 2rem;
          line-height: 150%;
        }

        .item-toggle {
          position: relative;
          height: 100%;
          width: 100%;
          transition: transform 200ms ease-out;
        }

        .item-toggle span {
          position: absolute;
          top: 50%;
          left: 50%;
          height: 1px;
          width: 15px;
          background-color: var(--brown);
          transform: translate(-50%, -50%);
        }

        .item-toggle span:last-of-type {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .item-toggle.show {
          transform: rotate(45deg);
        }

        .faq-answer {
          overflow: hidden;
        }

        .faq-answer.show {
          height: auto;
        }

        .faq-answer p {
          padding-top: 0;
        }
      `}</style>
    </div>
  );
};

export default FaqItem;
