'use client'
import JuegoCanvas from "./components/juegoCanvas";
export default function Home() {
  return (
    <main>
      <header>
        <div className="title">
          <h1>Creative Games</h1>
        </div>
        <p>La mejor forma de aprender siempre es divirtiéndose, y qué mejor forma de hacerlo que a través del juego. Ahora tenemos la suerte de disponer de muchos juegos online para niños y, además, ¡Gratis!. </p>
        <p>Tienes una variedad de juegos adaptados para niños de 3 a 5 años de edad. ¡Seguro que a tus niños les encantarán!</p>
        <h2>Juegos online para niños </h2>
        <p>Los juegos para niños de 3 a 5 años son actividades pensadas para unir la diversión con el aprendizaje. A esta edad, los pequeños exploran el mundo mientras fortalecen habilidades como la memoria, la atención y el razonamiento lógico. También comienzan a identificar colores, formas y números, sentando las bases para aprendizajes futuros. Aquí encontrarás una amplia selección de juegos educativos gratuitos para niños de 3 a 5 años, creados para apoyar su crecimiento y despertar su curiosidad.</p>
        <h2>¿Para que sirven?</h2>
        <p> Estos ayudarán a los niños a mejorar su atención y concentración, así como su habilidad estratégica y su memoria visual. También trabajarán su afán de superación al querer mejorar sus resultados y estimularán su creatividad. </p>
        <h2>Objetivo</h2>
        <p>La popularidad de nuestros juegos se debe a que cada uno de ellos incorporaran indicaciones verbales, soportes visuales y requieren el uso del mouse o pantalla táctil, siendo diseñados específicamente para abordar los diferentes estilos de aprendizaje. Así tu pequeño aprende de manera visual y auditiva. </p>
        <h2>&quot;Todos los aprendizajes mas importantes de la vida se hecen jugando&quot;</h2>
      </header>
      <JuegoCanvas />
    </main>
  );
} 