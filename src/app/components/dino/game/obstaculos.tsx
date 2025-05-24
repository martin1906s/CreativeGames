'use client'
import { useEffect } from 'react';
import Matter from 'matter-js';

const Obstacles = ({ world }: { world: Matter.World }) => {
    useEffect(() => {
        const interval = setInterval(() => {
            const cactus = Matter.Bodies.rectangle(800, 350, 30, 50);
            Matter.Composite.add(world, [cactus]);
        }, 2000);

        return () => clearInterval(interval);
    }, [world]); // Añadida dependencia faltante

    return null;
};

export default Obstacles;