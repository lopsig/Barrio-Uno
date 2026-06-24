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

