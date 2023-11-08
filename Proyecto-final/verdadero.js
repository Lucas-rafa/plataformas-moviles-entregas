const reproductorSelect = document.getElementById("reproductor-select");
const reproductor = document.getElementById("reproductor");
const countrySelect = document.getElementById("country-select"); // Agrega un elemento de selección de país
const languageSelect = document.getElementById("language-select");

// Listener para el cambio en la selección de estación de radio
reproductorSelect.addEventListener("change", function () {
    const selectedStation = reproductorSelect.value;
    reproductor.src = selectedStation;
    reproductor.play(); // Inicia la reproducción automáticamente
});

// Función para cargar estaciones de radio de un país específico
function cargarEstacionesDeRadio(country) {
    // Construye la URL de la API para obtener las estaciones de radio
    const apiUrl = `https://de1.api.radio-browser.info/json/stations/search?country=${country}&limit=20`;

    // Realiza una solicitud a la API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Limpia el selector de estaciones de radio
            reproductorSelect.innerHTML = "";

            // Asegúrate de que la respuesta incluya estaciones
            if (data && data.length > 0) {
                // Llena el selector con las estaciones disponibles
                data.slice(0, 20).forEach(station => {
                    const option = document.createElement("option");
                    option.value = station.url;
                    option.textContent = station.name;
                    reproductorSelect.appendChild(option);
                });
            } else {
                console.error(`No se encontraron estaciones de radio para ${country}.`);
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

// Listener para el cambio en la selección de país
countrySelect.addEventListener("change", function () {
    const selectedCountry = countrySelect.value;
    cargarEstacionesDeRadio(selectedCountry); // Carga las estaciones del país seleccionado
});

// Llama a la función para cargar las estaciones de radio de Argentina por defecto
cargarEstacionesDeRadio("Argentina");

const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");  });