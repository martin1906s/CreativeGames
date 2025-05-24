'use client'
import { useEffect } from 'react';
import Matter from 'matter-js';
import useKeyPress from '../hooks/useKeyPress';
import { useSound } from '../hooks/useSounds';

const Dino = ({ dino }: { dino: Matter.Body }) => {
    const jumpPressed = useKeyPress('Space');
    const jumpSound = useSound('/assets/dino/jump.mp3'); // Movido fuera del useEffect

    useEffect(() => {
        if (jumpPressed) {
            Matter.Body.applyForce(dino, dino.position, { x: 0, y: -0.1 });
            jumpSound();
        }
    }, [jumpPressed, dino, jumpSound]); // Añadidas dependencias faltantes

    return null; // El renderizado se hace en Matter.js
};

export default Dino;