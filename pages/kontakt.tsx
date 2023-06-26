import type { NextPage } from "next";
import Head from "next/head";
import Form from "../components/form";

const Contact: NextPage = () => {
  const formContent = {
    title: "Kontakt & book en tid",
    text: "Jeg vender tilbage hurtigst muligt.",
    image: {
      src: "/images/enhedsterapeut-lisbeth-jessen.jpg",
      alt: "Enhedsterapeut Lisbeth Jessen",
    },
  };

  return (
    <>
      <Head>
        <title>Enhedsterapi Hillerød - Kontakt</title>
        <meta
          name="description"
          content="En vej til sundhed og personlig udvikling."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.enhedsterapeut.dk/kontakt" />
      </Head>

      <Form {...formContent} />
    </>
  );
};

export default Contact;
