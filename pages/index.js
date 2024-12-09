// pages/index.js
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredLink(index);
    };

    const handleMouseLeave = () => {
        setHoveredLink(null);
    };

    return (
        <>
            <Head>
                <title>My Linktree</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div style={styles.container}>
                <div style={styles.profile}>
                    <img
                        src="https://via.placeholder.com/100" // Replace with your profile image URL
                        alt="Profile"
                        style={styles.avatar}
                    />
                    <h1 style={styles.name}>Your Name</h1>
                    <p style={styles.bio}>A short description about yourself or your work.</p>
                </div>
                <div style={styles.links}>
                    {['Facebook', 'Instagram', 'Twitter', 'GitHub'].map((link, index) => (
                        <a
                            key={link}
                            style={{
                                ...styles.link,
                                ...(hoveredLink === index && styles.linkHover),
                            }}
                            href={`https://${link.toLowerCase()}.com`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(145deg, #f3f4f6, #e5e7eb)',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
    },
    profile: {
        textAlign: 'center',
        marginBottom: '30px',
    },
    avatar: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginBottom: '15px',
        border: '3px solid #ddd',
    },
    name: {
        fontSize: '24px',
        fontWeight: 'bold',
        margin: '5px 0',
    },
    bio: {
        fontSize: '16px',
        color: '#555',
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        width: '100%',
        maxWidth: '400px',
    },
    link: {
        textDecoration: 'none',
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#fff',
        background: '#10b981',
        padding: '15px 20px',
        borderRadius: '8px',
        transition: 'transform 0.2s, background 0.2s',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    linkHover: {
        background: '#059669',
        transform: 'scale(1.05)',
    },
};