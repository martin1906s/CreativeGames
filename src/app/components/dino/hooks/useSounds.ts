'use client'
import { Howl } from 'howler';

export const useSound = (src: string) => {
    const sound = new Howl({ src: [src] });

    const play = () => {
        sound.play();
    };

    return play;
}; 