'use client'
import Matter from 'matter-js';

export class JuegoDino {
    private motor: Matter.Engine;
    private mundo: Matter.World;
    private dino: Matter.Body;
    private suelo: Matter.Body;
    private renderizador?: Matter.Render;
    private corredor?: Matter.Runner;

    constructor() {
        // gravedad y=atraccion
        this.motor = Matter.Engine.create({
            gravity: { x: 0.08000001, y: .9 }
        });
        this.mundo = this.motor.world;

        // Crear personaje y escenario
        this.dino = Matter.Bodies.circle(0, 0, 40, {
            isStatic: false,
            label: 'dino'
        });

        this.suelo = Matter.Bodies.rectangle(400, 400, 8000000, 200, {
            isStatic: true,
            label: 'suelo'
        });

        // Añadir al mundo
        Matter.Composite.add(this.mundo, [this.dino, this.suelo]);
    }

    // Iniciar el juego
    public iniciar(lienzo: HTMLCanvasElement) {
        this.renderizador = Matter.Render.create({
            canvas: lienzo,
            engine: this.motor,
            options: {
                width: 800,
                height: 400,
                wireframes: false
            }
        });

        this.corredor = Matter.Runner.create();
        Matter.Render.run(this.renderizador);
        Matter.Runner.run(this.corredor, this.motor);
    }

    // Saltar
    public saltar() {
        Matter.Body.applyForce(this.dino, this.dino.position, {
            x: 0.0,
            y: -0.1
        });
    }

    // Detener el juego
    public detener() {
        if (this.renderizador) Matter.Render.stop(this.renderizador);
        if (this.corredor) Matter.Runner.stop(this.corredor);
    }

    // Getter para el cuerpo del dino
    public obtenerDino() {
        return this.dino;
    }
}