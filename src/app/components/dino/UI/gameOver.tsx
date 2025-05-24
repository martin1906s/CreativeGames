import React from 'react';
import { motion } from 'framer-motion';

interface GameOverProps {
    score: number;
    onRestart: () => void;
}

const GameOver = ({ score, onRestart }: GameOverProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                zIndex: 100,
            }}
        >
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>¡Game Over!</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Puntuación: {score}</p>
            <button
                onClick={onRestart}
                style={{
                    padding: '0.8rem 2rem',
                    fontSize: '1.2rem',
                    background: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Reiniciar
            </button>
        </motion.div>
    );
};

export default GameOver;