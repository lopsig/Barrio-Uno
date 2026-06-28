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

// jugadores grupo C
const jugador7 = crearJugador(7, "Vinícius Júnior", "Brasil", "Extremo", "https://ui-avatars.com/api/?name=Vinicius+Junior&background=FFDF00&color=1A1A1A&size=256&bold=true", "https://flagcdn.com/w320/br.png", "#FFDF00", 11, 45, true);
jugador7.curiosidad = "En 2024 fue elegido el mejor jugador del mundo por la FIFA, el primer brasileño en lograrlo desde Kaká, y ha ganado dos veces la Champions League marcando en ambas finales.";

const jugador8 = crearJugador(8, "Achraf Hakimi", "Marruecos", "Defensa", "https://ui-avatars.com/api/?name=Achraf+Hakimi&background=C1272D&color=ffffff&size=256&bold=true", "https://flagcdn.com/w320/ma.png", "#C1272D", 12, 97, true);
jugador8.curiosidad = "Nació y se crió en Madrid, pero eligió jugar por Marruecos, el país de sus padres; hoy es su capitán y está considerado uno de los mejores laterales del mundo.";

const jugador9 = crearJugador(9, "Scott McTominay", "Escocia", "Centrocampista", "https://ui-avatars.com/api/?name=Scott+McTominay&background=003478&color=ffffff&size=256&bold=true", "https://flagcdn.com/w320/gb-sct.png", "#003478", 14, 69, false);
jugador9.curiosidad = "Su espectacular gol de chilena ante Dinamarca clasificó a Escocia a su primer Mundial en 28 años; en Glasgow le hicieron un mural por esa jugada.";

const jugador10 = crearJugador(10, "Christian Pulisic", "Estados Unidos", "Extremo", "https://ui-avatars.com/api/?name=Christian+Pulisic&background=002868&color=ffffff&size=256&bold=true", "https://flagcdn.com/w320/us.png", "#002868", 33, 87, true);
jugador10.curiosidad = "Apodado 'Capitán América', es el único estadounidense que ha jugado y ganado una final de Champions League, y marcó el gol que metió a su país en octavos en el Mundial 2022.";

const jugador11 = crearJugador(11, "Hakan Çalhanoğlu", "Türkiye", "Centrocampista", "https://ui-avatars.com/api/?name=Hakan+Calhanoglu&background=E30A17&color=ffffff&size=256&bold=true", "https://flagcdn.com/w320/tr.png", "#E30A17", 22, 110, true);
jugador11.curiosidad = "Nació en Alemania pero eligió jugar por Türkiye, a la que capitanea; es uno de los mejores lanzadores de tiros libres del mundo, con goles desde más de 40 metros.";

const jugador12 = crearJugador(12, "Miguel Almirón", "Paraguay", "Mediapunta", "https://ui-avatars.com/api/?name=Miguel+Almiron&background=CE1126&color=ffffff&size=256&bold=true", "https://flagcdn.com/w320/py.png", "#CE1126", 9, 76, false);
jugador12.curiosidad = "Creció en la pobreza en Asunción y llegó a jugar siete años en la Premier League con el Newcastle; ahora lidera el ataque de Paraguay en su primer Mundial desde 2010.";


// Meto los 6 jugadores al arreglo global 
cromosMundial.push(jugador1, jugador2, jugador3, jugador4, jugador5, jugador6,jugador7, jugador8, jugador9, jugador10, jugador11, jugador12);



// =================================================================
// CÓDIGO DEL ESTUDIANTE F - LOGICA DE GAMIFICACIÓN Y DESBLOQUEO
// =================================================================

const cromosDesbloqueados = [];

const actualizarContador = () => {
  const contenedorContador = document.getElementById("contador-progreso");
  const totalGlobal = cromosMundial.length;
  const totalDesbloqueados = cromosDesbloqueados.length;
  const porcentaje = totalGlobal > 0 ? Math.round((totalDesbloqueados / totalGlobal) * 100) : 0;

  if (contenedorContador) {
    contenedorContador.innerHTML = `
      <div style="background: #f4f4f4; padding: 8px 15px; border-radius: 6px; display: inline-block; margin-top: 10px; font-weight: bold; color: #333;">
        Progreso del Álbum: ${porcentaje}% completado (${totalDesbloqueados}/${totalGlobal})
      </div>
    `;
  }
};

const renderizarAlbum = (listaJugadores = cromosMundial) => {
  const contenedor = document.getElementById("album");
  if (!contenedor) return;
  contenedor.innerHTML = "";

  // Iteramos sobre la lista filtrada o completa
  listaJugadores.forEach(jugador => {
    const estaDesbloqueado = cromosDesbloqueados.includes(jugador.id);

    // CONTENEDOR PRINCIPAL EXTERNO
    const bloqueCromo = document.createElement("div");
    bloqueCromo.classList.add("contenedor-cromo");

    // LA TARJETA
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("card-cromo"); 
    tarjeta.style.backgroundColor = jugador.colorFondoHex;
    
    if (!estaDesbloqueado) {
      tarjeta.classList.add("cromo-bloqueado");
    }

    tarjeta.innerHTML = `
      <img src="${jugador.urlBandera}" alt="Bandera de ${jugador.pais}" width="30">
      <img src="${jugador.urlImagen}" alt="Foto de ${jugador.nombre}">
      <h2>${jugador.nombre}</h2>
      <p><strong>${jugador.pais}</strong></p>
      <p>${jugador.posicion}</p>
      <div>
        <span>⚽ ${jugador.estadisticas.goles} goles</span>
        <span>🏟️ ${jugador.estadisticas.partidos} partidos</span>
      </div>
      <p style="font-size: 0.85rem; font-style: italic; margin-top: 8px; color: #555;">"${jugador.curiosidad}"</p>
    `;

    bloqueCromo.appendChild(tarjeta);

    if (!estaDesbloqueado) {
      const botonReto = document.createElement("button");
      botonReto.classList.add("btn-reto");
      botonReto.setAttribute("data-id", jugador.id);
      botonReto.innerText = "Desbloquear Cromo con Reto";
      
      bloqueCromo.appendChild(botonReto);
    }

    contenedor.appendChild(bloqueCromo);
  });

  // Escuchador de eventos para tus botones externos
  const botones = document.querySelectorAll(".btn-reto");
  botones.forEach(boton => {
    boton.addEventListener("click", (e) => {
      const idJugador = parseInt(e.target.getAttribute("data-id"));
      const tarjetaElemento = e.target.previousElementSibling;
      
      ejecutarDesbloqueo(idJugador, tarjetaElemento);
    });
  });

  actualizarContador();
};

const ejecutarDesbloqueo = (id, tarjetaElemento) => {
  if (!cromosDesbloqueados.includes(id)) {
    cromosDesbloqueados.push(id);
  }

  tarjetaElemento.classList.add("animacion-flash");

  setTimeout(() => {
    tarjetaElemento.classList.remove("cromo-bloqueado");
    tarjetaElemento.classList.remove("animacion-flash");
    // Al desbloquear, ejecutamos el filtro para mantener la vista actual correctamente
    filtrarJugadores();
  }, 500);
};


//grupo c & d: total goles
function goles() {
  let totalGoles = 0;

  for (let i = 0; i < cromosMundial.length; i++) {
    let acumulaGoles = cromosMundial[i].estadisticas.goles;
    totalGoles += acumulaGoles;
  }

  document.getElementById("goles-totales").textContent = "Total Goles: "+totalGoles;
}


// =================================================================
// ESTUDIANTE E — DESARROLLADOR DE INTERACTIVIDAD Y FILTROS
// =================================================================

// 1. Capturamos los elementos del HTML
const buscadorNombre = document.getElementById("buscador-nombre");
const filtroPais = document.getElementById("filtro-pais");

// 2. Función principal que aplica los filtros combinados
const filtrarJugadores = () => {
  // Convertimos el texto a minúsculas para que la búsqueda no sea estricta (ej: "vinicius" y "Vinícius")
  const textoBusqueda = buscadorNombre.value.toLowerCase();
  const paisSeleccionado = filtroPais.value;

  // Utilizamos la función de orden superior .filter()
  const cromosFiltrados = cromosMundial.filter(jugador => {
    // Condición A: ¿El nombre del jugador incluye el texto escrito?
    const coincideNombre = jugador.nombre.toLowerCase().includes(textoBusqueda);
    
    // Condición B: ¿El país coincide o seleccionaron "todos"?
    const coincidePais = (paisSeleccionado === "todos" || jugador.pais === paisSeleccionado);

    // El jugador pasa el filtro solo si cumple AMBAS condiciones a la vez
    return coincideNombre && coincidePais;
  });

  // 3. Volvemos a renderizar el álbum en tiempo real con los cromos filtrados
  renderizarAlbum(cromosFiltrados);
};

// 4. Agregar los escuchadores de eventos (Listeners)
// 'input' se dispara cada vez que el usuario escribe una letra
buscadorNombre.addEventListener("input", filtrarJugadores);

// 'change' se dispara cuando el usuario selecciona un país diferente en el menú
filtroPais.addEventListener("change", filtrarJugadores);


// --- EJECUCIÓN INICIAL ---
// Renderizamos el álbum completo y los goles al cargar la página por primera vez
renderizarAlbum();
goles();