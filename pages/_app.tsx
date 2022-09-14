import '../styles/globals.css';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '../components/header';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const variants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
    };

    return (
        <>
            <Header />

            <AnimatePresence exitBeforeEnter>
                <motion.main
                    variants={variants}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    transition={{ type: 'linear' }}
                    key={router.pathname}
                >
                    <Component {...pageProps} />
                </motion.main>
            </AnimatePresence>

            {router.pathname !== '/contact' && <Footer />}
        </>
    );
}

export default MyApp;
