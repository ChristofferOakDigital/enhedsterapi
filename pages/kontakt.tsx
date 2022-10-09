import type { NextPage } from "next";
import Head from "next/head";
import Form from "../components/form";

const Contact: NextPage = () => {
  const formContent = {
    title: "Kontakt & book tid",
    text: "Jeg vil kontakte dig hurtigst muligt.",
    image: {
      src: "/images/lisbeth-jessen.jpg",
      alt: "Enhedsterapeut Lisbeth Jessen",
    },
  };

  return (
    <>
      <Head>
        <title>Enhedsterapi Hillerød - Kontakt</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Form {...formContent} />
    </>
  );
};

export default Contact;
