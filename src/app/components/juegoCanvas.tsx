"use client";
export default function JuegoCanvas() {
    return (
        <div className="juegos">
            <div className="juego-piano">
                <iframe
                    src="/Piano/index.html"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                />
            </div>
            <div className="juego-colores">
                <iframe
                    src="/colores/index.html"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                />
            </div>
            <div className="juego-contar">
                <iframe
                    src="/contar/index.html"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                />
            </div>
            <div className="juego-rompecabezas">
                <iframe
                    src="/rompecabezas/index.html"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                />
            </div>
            <div className="juego-tic-tac-toe">
                <iframe
                    src="/tic-tac-toe/index.html"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                />
            </div>
        </div>
    );
}