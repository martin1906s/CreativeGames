'use client'
import React, { useEffect, useRef } from 'react';
import { JuegoDino } from '../lib/dinoEngine';
import useKeyPress from '../hooks/useKeyPress';
import { useSound } from '../hooks/useSounds';

export const JuegoCanvas = () => {
    const lienzoRef = useRef<HTMLCanvasElement>(null);
    const juegoRef = useRef<JuegoDino | null>(null);
    const espacioPresionado = useKeyPress('Space');
    const jumpSound = useSound('/assets/dino/jump.mp3');

    useEffect(() => {
        // Inicializar el juego
        juegoRef.current = new JuegoDino();
        if (lienzoRef.current) {
            juegoRef.current.iniciar(lienzoRef.current);
        }

        // Limpieza
        return () => {
            juegoRef.current?.detener();
        };
    }, []);

    useEffect(() => {
        // Lógica del salto
        if (espacioPresionado) {
            juegoRef.current?.saltar();
            jumpSound();
        }
    }, [espacioPresionado, jumpSound]); // Añadida dependencia faltante

    return <canvas ref={lienzoRef} width={800} height={400} />;
};