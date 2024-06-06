document.addEventListener("DOMContentLoaded", function () {
    // Función para mostrar el formulario correspondiente a la opción seleccionada
    function showForm(option) {
        // Ocultar todos los formularios por defecto
        document.querySelectorAll('.form-container').forEach(function (container) {
            container.classList.remove('show');
        });

        // Mostrar el formulario relevante para la opción seleccionada
        var containerId = option + "_container";
        document.getElementById(containerId).classList.add('show');
    }

    // Evento para detectar el cambio de opción
    document.querySelectorAll('input[name="tipo_viaje"]').forEach(function (radio) {
        radio.addEventListener('change', function (event) {
            showForm(event.target.value);
        });
    });

    // Por defecto, mostrar el formulario para "Solo Ida"
    showForm('solo_ida');
});

let contadorDestinos = 1;

function agregarDestino() {
    if (contadorDestinos < 6) {
        contadorDestinos++;
        const nuevoDestino = `
        <div class="flex flex-container" id="destino${contadorDestinos}">
            <div class="w-full sm:w-1/3 mb-5">
                <label class="font-semibold text-sm text-gray-600 pr-2" for="paisMultiPlus${contadorDestinos}">Destino ${contadorDestinos}</label>
                <input class="cursor-pointer bg-[#ffffff37] border rounded-lg px-3 py-2 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500" type="text" id="paisMultiPlus${contadorDestinos}" autocomplete="off" />
                <div class="autocomplete-suggestions" id="suggestions_multiPlus"></div>
            </div>
            <div class="w-full sm:w-1/3 mb-5 pl-3">
                <label class="font-semibold text-sm text-gray-600 pr-2" for="multidestino_fecha${contadorDestinos}">Fecha ${contadorDestinos}</label>
                <input class="cursor-pointer bg-[#ffffff37] border rounded-lg px-3 py-2 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500" type="date" id="multidestino_fecha${contadorDestinos}" />
            </div>
            <div class="w-full sm:w-1/3 mb-5 pl-3">
                <label class="font-semibold text-sm text-gray-600 pr-2" for="multidestino_client${contadorDestinos}">Tripulantes</label>
                <input class="cursor-pointer bg-[#ffffff37] border rounded-lg px-3 py-2 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500" type="text" id="multidestino_client${contadorDestinos}" readonly />
            </div>
            <div class="sm:w-1/3" style="
                      width: 50px;
                      height: 50px;
                      margin-top: 22px;
                      margin-left: 15px;">

                      <!-- Botón con clases de Tailwind CSS -->
                      <button onclick="eliminarDestino('destino${contadorDestinos}')" class="w-10 h-10 rounded-full bg-[#1A388C] border-none font-semibold flex flex-col items-center justify-center shadow-lg cursor-pointer transition duration-300 overflow-hidden relative gap-0 hover:bg-red-500 hover:gap-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 69 14" class="w-3 transition duration-300 transform origin-bottom-right bin-top">
                              <g clip-path="url(#clip0_35_24)">
                                  <path fill="white" d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"></path>
                              </g>
                              <defs>
                                  <clipPath id="clip0_35_24">
                                      <rect fill="white" height="14" width="69"></rect>
                                  </clipPath>
                              </defs>
                          </svg>
                      
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 69 57" class="w-3 transition duration-300">
                              <g clip-path="url(#clip0_35_22)">
                                  <path fill="white" d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"></path>
                              </g>
                              <defs>
                                  <clipPath id="clip0_35_22">
                                      <rect fill="white" height="57" width="69"></rect>
                                  </clipPath>
                              </defs>
                          </svg>
                      </button>
                      
                      </div>
        </div>`;
        document.getElementById('destinos').insertAdjacentHTML('beforeend', nuevoDestino);
        moverImagenFondo();
        agregarEventListeners();
    } else {
        alert('No se pueden agregar más destinos (máximo 6)');
    }
}

function eliminarDestino(id) {
    document.getElementById(id).remove();
    contadorDestinos--;
    moverImagenFondo();
}

function moverImagenFondo() {
    const formMultidestino = document.getElementById('main_container');
    const imagenFondo = document.querySelector('#imagen_main');

    if (formMultidestino.clientHeight < 600) {
        imagenFondo.style.height = "600px";
    } else {
        imagenFondo.style.height = (formMultidestino.clientHeight + 100) + "px";
    }
}

function agregarEventListeners() {
    document.querySelectorAll('input[id^="multidestino_client"]').forEach(input => {
        input.removeEventListener('click', showModal); // Remove previous listener to avoid duplication
        input.addEventListener('click', showModal);
    });
}

function showModal(event) {
    const input = event.target;
    const modalContainer = document.getElementById('modal-container');

    modalContainer.innerHTML = `
    <section class="modal fixed top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-coolGray-800 bg-opacity-80 overflow-auto" id="informacion">
        <div class="max-w-lg w-full m-auto p-8 bg-white rounded-md modal-content">
            <div class="flex-container">
                <div class="w-full sm:w-1/2 mb-5 pl-3">
                    <label class="font-semibold text-gray-600 pr-2 flex" for="adultos">Adultos</label>
                    <label class="font-semibold text-sm text-gray-600 pr-2" for="adultos">Desde 18 años</label>
                    <div class="flex items-center space-x-2">
                        <button class="bg-blue-500 px-2 py-1 rounded text-black" id="decreaseAdult">-</button>
                        <span id="adultValue" class="px-2 py-1">1</span>
                        <button class="bg-blue-500 px-2 py-1 rounded text-black" id="increaseAdult">+</button>
                    </div>
                </div>
                <div class="w-full sm:w-1/2 mb-5 pl-3" id="menores-container">
                    <label class="font-semibold text-gray-600 pr-2 flex" for="menores">Menores</label>
                    <label class="font-semibold text-sm text-gray-600 pr-2" for="menores">Hasta 17 años</label>
                    <div class="flex items-center space-x-2">
                        <button class="bg-blue-500 px-2 py-1 rounded text-black" id="decreaseMenores">-</button>
                        <span id="menoresValue" class="px-2 py-1">0</span>
                        <button class="bg-blue-500 px-2 py-1 rounded text-black" id="increaseMenores">+</button>
                    </div>
                </div>
            </div>
            <div id="menoresInputs" class=" flex flex-wrap justify-between"></div>
            <div class="flex flex-wrap justify-end -m-2 mt-4">
                <div class="w-full md:w-1/2 p-2">
                    <button class="flex flex-wrap justify-center w-full px-4 py-2.5 bg-white font-medium text-base text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 rounded-md shadow-button close">Cancelar</button>
                </div>
                <div class="w-full md:w-1/2 p-2">
                    <button class="flex flex-wrap justify-center w-full px-4 py-2.5 rounded-md bg-blue-500 text-white font-bold transition duration-500 transform hover:bg-blue-400 hover:shadow-md hover:scale-105 active:bg-blue-700 active:shadow-none active:scale-98 confirm">Confirmar</button>
                </div>
            </div>
        </div>
    </section>
    `;

    const modal = document.querySelector('.modal');
    modal.style.display = 'flex';

    const closeModal = () => {
        modalContainer.innerHTML = '';
    };

    document.querySelector('.close').addEventListener('click', closeModal);
    document.querySelector('.confirm').addEventListener('click', () => {
        const adultos = document.getElementById('adultValue').innerText;
        const menores = document.getElementById('menoresValue').innerText;
        input.value = `${adultos} Adulto(s), ${menores} Menores`;
        closeModal();
    });

    const increaseAdult = document.getElementById('increaseAdult');
    const decreaseAdult = document.getElementById('decreaseAdult');
    const increaseMenores = document.getElementById('increaseMenores');
    const decreaseMenores = document.getElementById('decreaseMenores');

    let adultCount = parseInt(document.getElementById('adultValue').innerText);
    let menorCount = parseInt(document.getElementById('menoresValue').innerText);

    increaseAdult.addEventListener('click', () => {
        if (adultCount < 5) {
            adultCount++;
            document.getElementById('adultValue').innerText = adultCount;
        }
    });

    decreaseAdult.addEventListener('click', () => {
        if (adultCount > 1) {
            adultCount--;
            document.getElementById('adultValue').innerText = adultCount;
        }
    });

    increaseMenores.addEventListener('click', () => {
        if (menorCount < 6) {
            menorCount++;
            document.getElementById('menoresValue').innerText = menorCount;
            actualizarMenoresInputs(menorCount);
        }
    });

    decreaseMenores.addEventListener('click', () => {
        if (menorCount > 0) {
            menorCount--;
            document.getElementById('menoresValue').innerText = menorCount;
            actualizarMenoresInputs(menorCount);
        }
    });

}
function actualizarMenoresInputs(count) {
    const menoresInputs = document.getElementById('menoresInputs');
    menoresInputs.innerHTML = '';
    for (let i = 1; i <= count; i++) {
        const inputGroup = document.createElement('div');
        inputGroup.classList.add('menor-group', 'justify-between', 'flex', 'flex-wrap', 'gap-1');
        inputGroup.innerHTML = `
            <label class="w-full text-center">Edad del menor ${i}</label>
            <select class="menor-viaje w-full px-2 py-1 rounded border" id="edadMenor${i}">
                ${Array.from({ length: 17 }, (_, index) => `<option value="${index + 1}">${index + 1}</option>`).join('')}
            </select>
        `;
        menoresInputs.appendChild(inputGroup);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('#solo_ida_client, #ida_vuelta_client, #multidestino_client');
    const modalContainer = document.getElementById('modal-container');

    inputs.forEach(input => {
        input.addEventListener('click', function () {
            showModal(input);
        });
    });
});


// Inicializa los event listeners para los inputs iniciales
document.addEventListener('DOMContentLoaded', agregarEventListeners);

document.addEventListener("DOMContentLoaded", function () {
    const paises = {
        "BD": "Bangladesh", "BE": "Belgica", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia y Herzegovina", "BB": "Barbados", "WF": "Wallis y Futuna", "BL": "San Bartolomé",
        "BM": "Bermudas", "BN": "Brunei", "BO": "Bolivia", "BH": "Barein", "BI": "Burundi", "BJ": "Benin", "BT": "Butan", "JM": "Jamaica", "BV": "Isla Bouvet", "BW": "Botsuana", "WS": "Samoa",
        "BQ": "Bonaire, San Eustaquio y Saba", "BR": "Brasil", "BS": "Bahamas", "JE": "Jersey", "BY": "Bielorrusia", "BZ": "Belice", "RU": "Rusia", "RW": "Ruanda", "RS": "Serbia",
        "TL": "Timor Oriental", "RE": "Reunion", "TM": "Turkmenistan", "TJ": "Tayikistan", "RO": "Rumania", "TK": "Tokelau", "GW": "Guinea-Bisáu", "GU": "Guam", "GT": "Guatemala",
        "GS": "Islas Georgia del Sur y Sandwich del Sur", "GR": "Grecia", "GQ": "Guinea Ecuatorial", "GP": "Guadalupe", "JP": "Japón", "GY": "Guyana", "GG": "Guernsey", "GF": "Guayana Francesa",
        "GE": "Georgia", "GD": "Granada", "GB": "Reino Unido", "GA": "Gabón", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Groenlandia", "GI": "Gibraltar", "GH": "Ghana",
        "OM": "Omán", "TN": "Túnez", "JO": "Jordania", "HR": "Croacia", "HT": "Haití", "HU": "Hungría", "HK": "Hong Kong", "HN": "Honduras", "HM": "Islas Heard y McDonald", "VE": "Venezuela",
        "PR": "Puerto Rico", "PS": "Territorio Palestino", "PW": "Palaos", "PT": "Portugal", "SJ": "Svalbard y Jan Mayen", "PY": "Paraguay", "IQ": "Irak", "PA": "Panamá", "PF": "Polinesia Francesa",
        "PG": "Papúa Nueva Guinea", "PE": "Perú", "PK": "Pakistán", "PH": "Filipinas", "PN": "Islas Pitcairn", "PL": "Polonia", "PM": "San Pedro y Miquelón", "ZM": "Zambia", "EH": "Sáhara Occidental",
        "EE": "Estonia", "EG": "Egipto", "ZA": "Sudáfrica", "EC": "Ecuador", "IT": "Italia", "VN": "Vietnam", "SB": "Islas Salomón", "ET": "Etiopía", "SO": "Somalia", "ZW": "Zimbabue", "SA": "Arabia Saudita",
        "ES": "España", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldavia", "MG": "Madagascar", "MF": "San Martín", "MA": "Marruecos", "MC": "Mónaco", "UZ": "Uzbekistán", "MM": "Birmania",
        "ML": "Malí", "MO": "Macao", "MN": "Mongolia", "MH": "Islas Marshall", "MK": "Macedonia del Norte", "MU": "Mauricio", "MT": "Malta", "MW": "Malaui", "MV": "Maldivas", "MQ": "Martinica",
        "MP": "Islas Marianas del Norte", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isla de Man", "UG": "Uganda", "TZ": "Tanzania", "MY": "Malasia", "MX": "México", "IL": "Israel", "FR": "Francia",
        "IO": "Territorio Británico del Océano Índico", "SH": "Santa Elena, Ascensión y Tristán de Acuña", "FI": "Finlandia", "FJ": "Fiyi", "FK": "Islas Malvinas", "FM": "Micronesia", "FO": "Islas Feroe",
        "NI": "Nicaragua", "NL": "Países Bajos", "NO": "Noruega", "NA": "Namibia", "VU": "Vanuatu", "NC": "Nueva Caledonia", "NE": "Níger", "NF": "Isla Norfolk", "NG": "Nigeria", "NZ": "Nueva Zelanda",
        "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Islas Cook", "XK": "Kosovo", "CI": "Costa de Marfil", "CH": "Suiza", "CO": "Colombia", "CN": "China", "CM": "Camerún", "CL": "Chile",
        "CC": "Islas Cocos", "CA": "Canadá", "CG": "República del Congo", "CF": "República Centroafricana", "CD": "República Democrática del Congo", "CZ": "Chequia", "CY": "Chipre", "CX": "Isla de Navidad",
        "CR": "Costa Rica", "CW": "Curazao", "CV": "Cabo Verde", "CU": "Cuba", "SZ": "Esuatini", "SY": "Siria", "SX": "Sint Maarten", "KG": "Kirguistán", "KE": "Kenia", "SS": "Sudán del Sur", "SR": "Surinam",
        "KI": "Kiribati", "KH": "Camboya", "KN": "San Cristóbal y Nieves", "KM": "Comoras", "ST": "Santo Tomé y Príncipe", "SK": "Eslovaquia", "KR": "Corea del Sur", "SI": "Eslovenia", "KP": "Corea del Norte",
        "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leona", "SC": "Seychelles", "KZ": "Kazajistán", "KY": "Islas Caimán", "SG": "Singapur", "SE": "Suecia", "SD": "Sudán",
        "DO": "República Dominicana", "DM": "Dominica", "DJ": "Yibuti", "DK": "Dinamarca", "VG": "Islas Vírgenes Británicas", "DE": "Alemania", "YE": "Yemen", "DZ": "Argelia", "US": "Estados Unidos",
        "UY": "Uruguay", "YT": "Mayotte", "UM": "Islas menores alejadas de los Estados Unidos", "LB": "Líbano", "LC": "Santa Lucía", "LA": "Laos", "TV": "Tuvalu", "TW": "Taiwán", "TT": "Trinidad y Tobago",
        "TR": "Turquía", "LK": "Sri Lanka", "LI": "Liechtenstein", "LV": "Letonia", "TO": "Tonga", "LT": "Lituania", "LU": "Luxemburgo", "LR": "Liberia", "LS": "Lesoto", "TH": "Tailandia",
        "TF": "Territorios Australes Franceses", "TG": "Togo", "TD": "Chad", "TC": "Islas Turcas y Caicos", "LY": "Libia", "VA": "Ciudad del Vaticano", "VC": "San Vicente y las Granadinas",
        "AE": "Emiratos Árabes Unidos", "AD": "Andorra", "AG": "Antigua y Barbuda", "AF": "Afganistán", "AI": "Anguila", "VI": "Islas Vírgenes de los Estados Unidos", "IS": "Islandia",
        "IR": "Irán", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AQ": "Antártida", "AS": "Samoa Americana", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba",
        "IN": "India", "AX": "Alandia", "AZ": "Azerbaiyán", "IE": "Irlanda", "ID": "Indonesia", "UA": "Ucrania", "QA": "Catar", "MZ": "Mozambique"
    };


    setupInputAutocomplete('paisIda', 'suggestions');
    setupInputAutocomplete('paisIdaDestino', 'suggestions_destino');
    setupInputAutocomplete('paisIv', 'suggestions_iv');
    setupInputAutocomplete('paisIvDestino', 'suggestions_IvDestino');
    setupInputAutocomplete('paisMulti', 'suggestions_multi');
    setupInputAutocomplete('paisMultiPlus', 'suggestions_multiPlus');

    function setupInputAutocomplete(inputId, suggestionsContainerId) {
        const input = document.getElementById(inputId);
        const suggestionsContainer = document.getElementById(suggestionsContainerId);

        input.addEventListener('input', function () {
            const inputValue = this.value.trim().toLowerCase();
            suggestionsContainer.innerHTML = '';
            const suggestions = Object.keys(paises).filter(function (pais) {
                return paises[pais].toLowerCase().startsWith(inputValue);
            });

            suggestions.forEach(function (suggested) {
                const div = document.createElement('div');
                div.classList.add('suggestion');
                div.textContent = paises[suggested];
                div.addEventListener('click', function () {
                    input.value = paises[suggested];
                    suggestionsContainer.innerHTML = '';
                });
                suggestionsContainer.appendChild(div);
            });
        });

        // Event listener para cerrar la lista de países cuando se hace clic fuera de ella
        document.addEventListener('click', function (event) {
            if (!suggestionsContainer.contains(event.target) && event.target !== input) {
                suggestionsContainer.innerHTML = '';
            }
        });
    }

    // Configurar autocompletado para el input 'paisIvDestino'
    setupInputAutocomplete('paisMultiPlus', 'suggestions_multiPlus');
});

