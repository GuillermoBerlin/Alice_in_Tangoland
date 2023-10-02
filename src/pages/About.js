import React from "react";
import "./about.css";
import aboutImage from "../images/bio_image.png";
import mirrorImage from "../images/image_mirror.png";

export default function About() {
  return (
    <div className="main-container-about">
      <div className="description-container">
        <div className="description-text-container">
          <h3>Alice in Tangoland</h3>
          <p>
          “Alice in Tangoland”, es un show único de arte en vivo, de una duración de 80 minutos,en el cual artistas de Circo extraordinarios se unen a algunos de los mejores bailarines de Tango delmundo para contar, sin palabras, una historia atemporal , ¡de una manera nunca antes vista! Acrobacia, malabares, contorsión, cyrwheel, aéreos, monociclo, clown, magia, pole, zancos, tragasable y bailarines de tango comparten escenario por primera vez, en una versión deteatro físico de "Alicia en el país de las Maravillas". Los personajes principales, inspirados libremente en la obra maestra de Lewis Caroll, así comola ambientación de los diferentes decorados se trasponen a un mundo de Tango y fantasía encual tacones, zapatero, mate, vestidos de lentejuelas y milongueros dan a la obra una atmósfera sin igual. Sostenido por una banda sonora que salta de música de tango tradicional al tango actual, TheDoors, Janis Joplin, Radiohead, el compositor contemporáneo Ibrahim Maalouf y más, ¡Te espera una experiencia multisensorial inolvidable!Únete a Alice en su increíble viaje interior, en el cual sólo abrazarse plenamente, le hará libre.
          </p>
        </div>
        <div className="image-description">
          <img src={aboutImage} />
        </div>
      </div>
      <div className="synopsis-container">
      <div className="image-synopsis">
          <img src={mirrorImage} />
        </div>
        <div className="synopsis-text-container">
          <h3>Sinopsis</h3>
          <p>
          Un maestro de Tango conservador, una lección aburrida, una niña juguetona; así comienza nuestra historia. Alice mira a su maestro de Tango demostrando los pasos, sentada en una pequeña silla de madera, se queda dormida. De repente, aparece un conejo blanco vestido de traje de Tango. Parece nervioso, como si estuviera en camino y llegara tarde. ¿Pero a dónde va?
          El conejo blanco salta y desaparece por su agujero, y Alice, empujada por su curiosidad, decide seguirlo. Por la madriguera del conejo, como metáfora de su ser interior, ella cae cada vez más profundamente. Ahí, en el fondo, se encuentra por primera vez con su sombra e inicia un viaje que cambiará su vida.
          A lo largo del camino, se encuentra con todo tipo de personajes: las flores, los gemelos, la oruga, el gato, el "zapatero" loco, la reina de corazones, entre otros, personificando diversos aspectos de ella misma como el orgullo, la locura, la alegría, el miedo, la vanidad y la conciencia.
          "Alice in Tangoland" nos narra el viaje único y, al mismo tiempo, universal de un ser en busca de sí mismo, prisionero de un mundo ilusorio en el cual la aceptación y la entrega son claves para despertar.
          </p>
          
        </div>  
       
      </div>
    </div>
  );
}
