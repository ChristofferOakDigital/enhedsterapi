import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/hero';
import TextImage from '../components/textImage';
import FaqContainer from '../components/faq/FaqContainer';
import FaqItem from '../components/faq/FaqItem';

const Treatment: NextPage = () => {
    const heroContent = {
        title: 'Få behandling hos Enhedsterapeut Lisbeth Jessen',
        text: '“At hjælpe det enkelte menneske, til at hjælpe sig selv i mange forskellige former for problemstillinger.”',
        image: {
            src: '/images/strand.jpg',
            alt: 'Ved stranden',
        },
        buttonBook: {
            text: 'Book tid',
            url: '/kontakt',
        },
        bg: 'theme',
    };

    const textImageContent = {
        title: 'Princippet',
        text: 'Princippet er at styrke personlige evner, ressourcer og muligheder uanset funktionsniveauet, samt at arbejde ud fra den enkeltes kontekst med familie- og psykosocial baggrund. Ved samarbejde mellem behandler og klient at opnå fælles resonans og respons. Der er mange forskellige redskaber og nogle af dem er specielt effektive i forbindelse med stress, traumer, chok og fobier (jævnf.  Slavinski).',
        image: {
            src: '/images/solnedgang.jpg',
            alt: 'En solnedgang',
        },
        position: 'left',
        prices: true,
    };

    const textImageContentSecond = {
        title: 'Behandlinger',
        text: 'Man kan i løbet af sessioner sammen udforske det enkelte menneskes adgang til ressourcer og selv-helbredelse via forskellige teknikker alt afhængigt af lige præcis, hvad der er behov for:\n- Lytning.\n- Nærvær.\n- Kommunikation.\n- Rådgivning (fysisk, mental).\n- Positiv tankekraft.\n- Bevægelse..øvelser.\n- Kropsbehandling.\n- Kommunikationsteknikker.\n- Kostvejledning (evt. Vitaminer, mineraler, Bachs blomsterdråber).\n- Toning, rytme, sang, syngeskåle (Audun Myskias doktorafhandling var om musikbehandling og betydning for Parkinson- og demensramte).',
        image: {
            src: '/images/blomsterhave.jpg',
            alt: 'Enhedsterapeut Lisbeth Jessen',
        },
        position: 'right',
        bg: 'theme',
    };

    return (
        <div className="container">
            <Head>
                <title>Enhedsterapi Hillerød - Behandling</title>
                <meta
                    name="description"
                    content="Man kan i løbet af sessioner sammen udforske det enkelte menneskes adgang til ressourcer og selv-helbredelse via forskellige teknikker alt afhængigt af lige præcis, hvad der er behov for"
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="canonical"
                    href="https://www.enhedsterapeut.dk/behandling"
                />
            </Head>

            <Hero {...heroContent} />
            <TextImage {...textImageContent} />
            <TextImage {...textImageContentSecond} />
            <FaqContainer>
                <FaqItem
                    question="Hvad er enhedsterapi?"
                    answer="Enhedsterapi er at finde sin egen kraft og styrke."
                />
                <FaqItem
                    question="Hvad kan en enhedsterapeut gøre for dig?"
                    answer="Enhedsterapi kan hjælpe dig med, at helbrede dig selv og styrke din egen modstandskraft."
                />
            </FaqContainer>
        </div>
    );
};

export default Treatment;
