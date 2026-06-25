//-----ARREGLO GLOBAL-----
const cromosMundial = [];

//-----FUNCION CONSTRUCTORA-----
const crearJugador = (id, nombre, pais, posicion, urlImagen, urlBandera, colorFondoHex, goles, partidos, destacado) => {
  return {
    id: id,
    nombre: nombre,
    pais: pais,
    posicion: posicion,
    urlImagen: urlImagen,
    urlBandera: urlBandera,
    colorFondoHex: colorFondoHex,
    estadisticas: {
      goles: goles,
      partidos: partidos
    },
    destacado: destacado
  };
}

//------DATOS JUGADORES-----

// Estudiante B — 6 jugadores de los Grupos A y B (IDs del 1 al 6)
// Uso la función crearJugador del líder, respetando su orden de datos,
// y le agrego la curiosidad por fuera con un punto antes de meterlo al arreglo.

const jugador1 = crearJugador(1, "Granit Xhaka", "Suiza", "Centrocampista", "https://ui-avatars.com/api/?name=Granit+Xhaka&background=D52B1E&color=ffffff&size=256&bold=true", "https://flagcdn.com/w320/ch.png", "#D52B1E", 17, 146, true);
jugador1.curiosidad = "Es el jugador con más partidos en la historia de Suiza y uno de los dos únicos suizos que han marcado en tres Copas del Mundo distintas.";

const jugador2 = crearJugador(2, "Alphonso Davies", "Canadá", "Defensa", "https://ui-avatars.com/api/?name=Alphonso+Davies&background=D80621&color=ffffff&size=256&bold=true", "https://flagcdn.com/w320/ca.png", "#D80621", 15, 58, true);
jugador2.curiosidad = "Nació en un campo de refugiados en Ghana y marcó el primer gol de Canadá en la historia de los Mundiales (2022); en 2026 es el capitán más joven del torneo.";

const jugador3 = crearJugador(3, "Edin Džeko", "Bosnia-Herzegovina", "Delantero", "https://ui-avatars.com/api/?name=Edin+Dzeko&background=002F6C&color=ffffff&size=256&bold=true", "https://flagcdn.com/w320/ba.png", "#002F6C", 73, 149, true);
jugador3.curiosidad = "A los 40 años es el capitán y máximo goleador histórico de Bosnia con 73 goles; el segundo de esa lista apenas tiene 28.";

const jugador4 = crearJugador(4, "Raúl Jiménez", "México", "Delantero", "https://ui-avatars.com/api/?name=Raul+Jimenez&background=006847&color=ffffff&size=256&bold=true", "https://flagcdn.com/w320/mx.png", "#006847", 46, 125, false);
jugador4.curiosidad = "Sobrevivió a una fractura de cráneo en 2020 y, seis años después, marcó a los 35 su primer gol en un Mundial, dedicado a su padre fallecido.";

const jugador5 = crearJugador(5, "Son Heung-min", "Corea del Sur", "Delantero", "https://ui-avatars.com/api/?name=Son+Heung-min&background=CD2E3A&color=ffffff&size=256&bold=true", "https://flagcdn.com/w320/kr.png", "#CD2E3A", 56, 147, true);
jugador5.curiosidad = "Primer asiático en ganar la Bota de Oro de la Premier League; en 2018 marcó el gol que eliminó a Alemania, la entonces campeona del mundo.";

const jugador6 = crearJugador(6, "Akram Afif", "Qatar", "Extremo", "https://ui-avatars.com/api/?name=Akram+Afif&background=8A1538&color=ffffff&size=256&bold=true", "https://flagcdn.com/w320/qa.png", "#8A1538", 40, 127, false);
jugador6.curiosidad = "En la final de la Copa Asiática 2023 anotó tres penales y celebró sacándose de la media un cromo de sí mismo, como si fuera un truco de magia.";

// Meto los 6 jugadores al arreglo global
cromosMundial.push(jugador1, jugador2, jugador3, jugador4, jugador5, jugador6);



//-----FUNCION RENDERIZADO-----
const renderizarAlbum = () => {
  const contenedor = document.getElementById("album");

  contenedor.innerHTML = "";

  cromosMundial.forEach(jugador => {

    const tarjetaHTML = `
      <div>
        <img src="${jugador.urlBandera}" alt= "Bandera de ${jugador.pais}">
        <img src="${jugador.urlImagen}" alt= "Foto de ${jugador.nombre}">
        <h2>${jugador.nombre}</h2>
        <p>${jugador.pais}</p>
        <p>${jugador.posicion}</p>
        <div>
          <span>⚽ ${jugador.estadisticas.goles} goles</span>
          <span>🏟️ ${jugador.estadisticas.partidos} partidos</span>
        </div>
      </div>
    `;

    contenedor.innerHTML += tarjetaHTML;
  })
}

renderizarAlbum()

