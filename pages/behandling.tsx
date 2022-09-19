import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/hero";
import TextImage from "../components/textImage";

const Treatment: NextPage = () => {
  const heroContent = {
    title:
      "“At hjælpe det enkelte menneske, til at hjælpe sig selv i mange forskellige former for problemstillinger.”",
    text: "",
    image: {
      src: "/images/krystal.jpg",
      alt: "En krystal på et bord",
    },
    bg: "theme",
  };

  const textImageContent = {
    title: "Princippet",
    text: "Princippet er at styrke personlige evner, ressourcer og muligheder uanset funktionsniveauet, samt at arbejde ud fra den enkeltes kontekst med familie- og psykosocial baggrund. Ved samarbejde mellem behandler og klient at opnå fælles resonans og respons. Der er mange forskellige redskaber og nogle af dem er specielt effektive i forbindelse med stress, traumer, chok og fobier (jævnf.  Slavinski).",
    image: {
      src: "/images/krystal.jpg",
      alt: "Enhedsterapeut Lisbeth Jessen",
    },
    position: "left",
    prices: true,
  };

  return (
    <div className="container">
      <Head>
        <title>Enhedsterapi Hillerød - Behandling</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero {...heroContent} />
      <TextImage {...textImageContent} />
    </div>
  );
};

export default Treatment;