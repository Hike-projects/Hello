// pages/index.js
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>My Links</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div style={styles.container}>
                <div style={styles.card}>
                    <h1 style={styles.title}>Welcome to My Links</h1>
                    <p style={styles.subtitle}>Connect with me on the platforms below:</p>
                    <div style={styles.links}>
                        <a style={styles.link} href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a style={styles.link} href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a style={styles.link} href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a style={styles.link} href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        </>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(145deg, rgba(255,255,255,0.8), rgba(200,200,255,0.8))',
        fontFamily: 'Arial, sans-serif',
    },
    card: {
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '20px 40px',
        borderRadius: '15px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '24px',
        margin: '10px 0',
    },
    subtitle: {
        fontSize: '16px',
        margin: '10px 0 20px',
        color: '#555',
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    link: {
        color: '#0070f3',
        textDecoration: 'none',
        fontSize: '18px',
        transition: 'color 0.3s',
    },
};