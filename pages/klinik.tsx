import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/hero';
import TextImage from '../components/textImage';
import FaqContainer from '../components/faq/FaqContainer';
import FaqItem from '../components/faq/FaqItem';

const About: NextPage = () => {
    const heroContent = {
        title: '"Vend ansigtet mod solen, så vil skyggerne falde bag dig."',
        text: '',
        image: {
            src: '/images/solskin.jpg',
            alt: 'En skål på et bord',
        },
        bg: 'brown',
    };

    const textImageContentFirst = {
        title: 'Denne "mestringsmedicin"',
        text: 'Bygger på helse over tid, at styrke en naturlig helbredelse og fremme en økologisk bevidsthed. At opdage drivkraft og mening. At hjælpe sig selv med at påvirke det autonome nervesystem ved hjælp af træning, afspænding, ernæring, sansestimulation, evt. meditation, vejrtrækningsøvelser, træning f.eks yoga, de 5 Tibetanske riter,  kontakt med naturen..vandre, løbe, vinterbade,  sang, toning,  musik, dans...alt, der styrker vitalitet, glæde, dybde og livsmening.',
        image: {
            src: '/images/i-skoven.jpg',
            alt: 'Vandring i skoven',
        },
        position: 'left',
    };

    const textImageContentSecond = {
        title: 'Om klinikken',
        text: 'Klinikken ligger centralt i Nordsjælland  og centralt i Hillerød, både hvis du kommer i bil, hvor der er gratis parkering bagved bygningen og hvis du kommer med tog, hvor der er 5- 10 minutters gang.\nDu vil blive mødt og lyttet til i et hjerterum med fokus på dig og dine eventuelle udfordringer eller problematikker. Der vil være sat god tid af til samtale og refleksion.',
        image: {
            src: '/images/lisbeth-diplom.jpg',
            alt: 'Enhedsterapeut Lisbeth Jessen modtager diplom',
        },
        position: 'right',
        bg: 'theme',
    };

    return (
        <>
            <Head>
                <title>Enhedsterapi Hillerød - Om klinikken</title>
                <meta
                    name="description"
                    content="Jeg har altid prioriteret, at sætte mig grundigt ind i det indviduelle menneske og hvad der eventuelt kunne være af personlige udfordringer, for bedst muligt at kunne hjælpe og støtte vedkommende."
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="canonical"
                    href="https://www.enhedsterapeut.dk/klinik"
                />
            </Head>

            <Hero {...heroContent} />
            <TextImage {...textImageContentFirst} />
            <TextImage {...textImageContentSecond} />
            <FaqContainer>
                <FaqItem
                    question="Hvor kan jeg parkere?"
                    answer="Der er mulighed for gratis parkering bagved klinikken"
                />
            </FaqContainer>
        </>
    );
};

export default About;
