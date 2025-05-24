'use client'
import { useState, useEffect } from 'react';

const useKeyPress = (targetKey: string) => {
    const [keyPressed, setKeyPressed] = useState(false);

    useEffect(() => {
        const downHandler = ({ code }: KeyboardEvent) => {
            if (code === targetKey) setKeyPressed(true);
        };
        const upHandler = ({ code }: KeyboardEvent) => {
            if (code === targetKey) setKeyPressed(false);
        };

        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);

        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, [targetKey]);

    return keyPressed;
};

export default useKeyPress;