import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/hero";
import Paragraph from "../components/paragraph";
import TextImage from "../components/textImage";
import Quote from "../components/quote";

const Home: NextPage = () => {
  const heroContent = {
    title: "Enhedsterapi er en vej til sundhed og personlig udvikling.",
    text: "Et liv i bedre balance og flow.",
    buttonMore: {
      text: "Læs mere",
      url: "/behandling",
    },
    buttonBook: {
      text: "Book tid",
      url: "/kontakt",
    },
    image: {
      src: "/images/blomsterhave.jpg",
      alt: "Blomsterhave med et lyserødt træ",
    },
    bg: "theme",
  };

  const paragraphContent = {
    title: "Hvad kan enhedsterapi gøre for dig?",
    text: 'Enhedsterapi har forskellige redskaber til at styrke dine ressourcer og kvaliteter, så du kan opnå livsmestring  i dit eget liv og dermed også i dine relationer.\n\nAt modtage enhver, der træder ind i nuet som et æret gæst. Når man tillader den enkelte person at være, som han eller hun er, begynder vedkommende at forandre og at udvikle sig. Der kan opstå en bedre balance og dermed en fornemmelse eller bevidsthed om "flow".',
  };

  const textImageContent = {
    title: "Enhedsterapeut\nLisbeth Jessen",
    text: "- Jeg har matematisk/fysisk studentereksamen.\n- Jeg er uddannet som kiropraktor i Californien USA.\n- Jeg har været selvstændig siden 1990 og har derved en stor erfaring med at arbejde og hjælpe andre mennesker.\n- Jeg har altid prioriteret, at sætte mig grundigt ind i det indviduelle menneske og hvad der eventuelt kunne være af personlige  udfordringer, for bedst muligt at kunne hjælpe og støtte vedkommende.\n- Jeg blev uddannet som Enhedsterapeut i Danmark i 2015 ( Hold 1..kull 1, som det hedder i Norge) Uddannelsen er udviklet af den norske overlæge og forfatter Audun Myskia.\n- Jeg har gennem de sidste mange år taget mange kurser bl.a. også af mere spirituel karaktér som meditation, mindfulness, yoga (Jes Bertelsen, Jens Erik Risom, Jon Kabat Zin m.fl.",
    button: {
      text: "Læs mere",
      url: "/klinik",
    },
    image: {
      src: "/images/lisbeth-jessen.jpg",
      alt: "Enhedsterapeut Lisbeth Jessen",
    },
    position: "right",
    bg: "sand",
  };

  const quoteContent = {
    quote: '"Når der ikke er en vej ud, er der en vej igennem"',
    author: "// Klient eller citat person",
    image: {
      src: "/images/solnedgang.jpg",
      alt: "Solnedgang ved Arresø",
    },
  };

  return (
    <>
      <Head>
        <title>Enhedsterapi Hillerød</title>
        <meta
          name="description"
          content="Enhedsterapi har forskellige redskaber til at styrke dine ressourcer og kvaliteter, så du kan opnå livsmestring i dit eget liv og dermed også i dine relationer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero {...heroContent} />
      <Paragraph {...paragraphContent} />
      <TextImage {...textImageContent} />
      <Quote {...quoteContent} />
    </>
  );
};

export default Home;
