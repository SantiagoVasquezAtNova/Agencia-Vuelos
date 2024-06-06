var imageUrls = [
    'https://mcdonalds.vn/uploads/2018/news/gioi-thieu-1.jpg',
    'https://thefoodtech.com/wp-content/uploads/2023/05/burguerking.jpg',
    'https://tb-static.uber.com/prod/image-proc/processed_images/b6c28bdea6f6922e8e739875e6eab01c/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg',
    'https://www.publicitarioscriativos.com/wp-content/uploads/2022/07/Sem-titulo21.png',
    'https://clubintelecto.com/wp-content/uploads/2017/10/frisby-1920x1280.jpg',
    'https://www.las2orillas.co/wp-content/uploads/2024/02/postres-de-crepes-and-waffles.jpg',
    'https://eu-central-1.linodeobjects.com/restauracionnews/2022/11/TacoBellL.jpg',
    'https://tb-static.uber.com/prod/image-proc/processed_images/0da00f84d6d6b0ea64ef3d7e7fe0889c/783282f6131ef2258e5bcd87c46aa87e.jpeg',
    'https://tb-static.uber.com/prod/image-proc/processed_images/7f9152700c6d3c571ee3c23bcf3c51b6/c9252e6c6cd289c588c3381bc77b1dfc.jpeg'
];


var currentIndex = 0;


function changeImage() {
    var slider = document.getElementById('slider-container');
    slider.innerHTML = '';


    var img = document.createElement('img');
    img.src = imageUrls[currentIndex];
    slider.appendChild(img);

    currentIndex++;
    if (currentIndex >= imageUrls.length) {
        currentIndex = 0;
    }
}

setInterval(changeImage, 4000);


function addImageUrl(url) {
    imageUrls.push(url);
}


function removeImageUrl(index) {
    if (index >= 0 && index < imageUrls.length) {
        imageUrls.splice(index, 1);
    }
}


// Función para abrir el modal con el contenido correspondiente al botón presionado
function openModal(restaurant) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Agregar el contenido del modal según el restaurante seleccionado
    var modalContent = '';

    if (restaurant === 'McDonalds') {
        modalContent = `
            <div >
                <h5 class="text-2xl font-bold mb-3">McDonald's</h5>
                 <div class="front-content mt-6">
                <div class="description">
                    <div class="title mb-4">
                        <p class="text-lg">
                            <span>Consulta el <a href="https://www.mcdonalds.com/us/es-us/full-menu.html" class="text-blue-500">menú</a></span>
                        </p>
                    </div>
                    <div class="card-footer space-y-4">
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Pedido</span>
                            <input placeholder="¿Qué deseas ordenar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text">
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Cantidad</span>
                            <input placeholder="¿Cuánto quieres?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="number" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Nombres-apellidos</span>
                            <input placeholder="¿Quién va a reclamar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Hora</span>
                            <input placeholder="" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="time" required>
                        </label>
                        <a href="#" class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold text-center rounded-md hover:bg-blue-600">Reservar</a>
                    </div>
                </div>
            </div>
        </div>
            </div>
        `;
    } else if (restaurant === 'BurgerKing') {
        modalContent = `
            <div >
                <h5 class="text-2xl font-bold mb-3">Burger King</h5>
                <div class="front-content mt-6">
                <div class="description">
                    <div class="title mb-4">
                        <p class="text-lg">
                            <span>Consulta el <a href="https://www.bk.com.co/menu/#whopper" class="text-blue-500">menú</a></span>
                        </p>
                    </div>
                    <div class="card-footer space-y-4">
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Pedido</span>
                            <input placeholder="¿Qué deseas ordenar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text">
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Cantidad</span>
                            <input placeholder="¿Cuánto quieres?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="number" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Nombres-apellidos</span>
                            <input placeholder="¿Quién va a reclamar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Hora</span>
                            <input placeholder="" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="time" required>
                        </label>
                        <a href="#" class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold text-center rounded-md hover:bg-blue-600">Reservar</a>
                    </div>
                </div>
            </div>
        </div>
            </div>
        `;
    }
    else if (restaurant === 'DominosPizza') {
        modalContent = `
            <div >
                <h5 class="text-2xl font-bold mb-3">Domino's Pizza</h5>
                <div class="front-content mt-6">
                <div class="description">
                    <div class="title mb-4">
                        <p class="text-lg">
                            <span>Consulta el <a href="https://www.dominos.com.co/pages/order/menu#!/menu/category/viewall/" class="text-blue-500">menú</a></span>
                        </p>
                    </div>
                    <div class="card-footer space-y-4">
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Pedido</span>
                            <input placeholder="¿Qué deseas ordenar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text">
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Cantidad</span>
                            <input placeholder="¿Cuánto quieres?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="number" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Nombres-apellidos</span>
                            <input placeholder="¿Quién va a reclamar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Hora</span>
                            <input placeholder="" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="time" required>
                        </label>
                        <a href="#" class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold text-center rounded-md hover:bg-blue-600">Reservar</a>
                    </div>
                </div>
            </div>
        </div>
            </div>
        `;
    }
    else if (restaurant === 'Starbucks') {
        modalContent = `
            <div >
                <h5 class="text-2xl font-bold mb-3">Starbucks</h5>
                <div class="front-content mt-6">
                <div class="description">
                    <div class="title mb-4">
                        <p class="text-lg">
                            <span>Consulta el <a href="https://www.starbucks.com.co/menu" class="text-blue-500">menú</a></span>
                        </p>
                    </div>
                    <div class="card-footer space-y-4">
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Pedido</span>
                            <input placeholder="¿Qué deseas ordenar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text">
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Cantidad</span>
                            <input placeholder="¿Cuánto quieres?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="number" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Nombres-apellidos</span>
                            <input placeholder="¿Quién va a reclamar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Hora</span>
                            <input placeholder="" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="time" required>
                        </label>
                        <a href="#" class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold text-center rounded-md hover:bg-blue-600">Reservar</a>
                    </div>
                </div>
            </div>
        </div>
            </div>
        `;
    }
    else if (restaurant === 'Frisby') {
        modalContent = `
            <div >
                <h5 class="text-2xl font-bold mb-3">Frisby</h5>
                <div class="front-content mt-6">
                <div class="description">
                    <div class="title mb-4">
                        <p class="text-lg">
                            <span>Consulta el <a href="https://frisby.com.co/" class="text-blue-500">menú</a></span>
                        </p>
                    </div>
                    <div class="card-footer space-y-4">
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Pedido</span>
                            <input placeholder="¿Qué deseas ordenar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text">
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Cantidad</span>
                            <input placeholder="¿Cuánto quieres?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="number" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Nombres-apellidos</span>
                            <input placeholder="¿Quién va a reclamar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Hora</span>
                            <input placeholder="" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="time" required>
                        </label>
                        <a href="#" class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold text-center rounded-md hover:bg-blue-600">Reservar</a>
                    </div>
                </div>
            </div>
        </div>
            </div>
        `;
    }
    else if (restaurant === 'CrespesWaffles') {
        modalContent = `
            <div >
                <h5 class="text-2xl font-bold mb-3">Crepes & Waffles</h5>
                <div class="front-content mt-6">
                <div class="description">
                    <div class="title mb-4">
                        <p class="text-lg">
                            <span>Consulta el <a href="https://crepesywaffles.com/menu" class="text-blue-500">menú</a></span>
                        </p>
                    </div>
                    <div class="card-footer space-y-4">
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Pedido</span>
                            <input placeholder="¿Qué deseas ordenar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text">
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Cantidad</span>
                            <input placeholder="¿Cuánto quieres?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="number" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Nombres-apellidos</span>
                            <input placeholder="¿Quién va a reclamar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Hora</span>
                            <input placeholder="" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="time" required>
                        </label>
                        <a href="#" class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold text-center rounded-md hover:bg-blue-600">Reservar</a>
                    </div>
                </div>
            </div>
        </div>
            </div>
        `;
    }
    else if (restaurant === 'TacoBell') {
        modalContent = `
            <div >
                <h5 class="text-2xl font-bold mb-3">Taco Bell</h5>
                <div class="front-content mt-6">
                <div class="description">
                    <div class="title mb-4">
                        <p class="text-lg">
                            <span>Consulta el <a href="https://tacobell.es/productos-tacobell/" class="text-blue-500">menú</a></span>
                        </p>
                    </div>
                    <div class="card-footer space-y-4">
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Pedido</span>
                            <input placeholder="¿Qué deseas ordenar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text">
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Cantidad</span>
                            <input placeholder="¿Cuánto quieres?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="number" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Nombres-apellidos</span>
                            <input placeholder="¿Quién va a reclamar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Hora</span>
                            <input placeholder="" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="time" required>
                        </label>
                        <a href="#" class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold text-center rounded-md hover:bg-blue-600">Reservar</a>
                    </div>
                </div>
            </div>
        </div>
            </div>
        `;
    }
    else if (restaurant === 'LegalSea') {
        modalContent = `
            <div >
                <h5 class="text-2xl font-bold mb-3">Legal Sea Foods</h5>
                <div class="front-content mt-6">
                <div class="description">
                    <div class="title mb-4">
                        <p class="text-lg">
                            <span>Consulta el <a href="https://www.legalseafoods.com/locations-menus/" class="text-blue-500">menú</a></span>
                        </p>
                    </div>
                    <div class="card-footer space-y-4">
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Pedido</span>
                            <input placeholder="¿Qué deseas ordenar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text">
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Cantidad</span>
                            <input placeholder="¿Cuánto quieres?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="number" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Nombres-apellidos</span>
                            <input placeholder="¿Quién va a reclamar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Hora</span>
                            <input placeholder="" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="time" required>
                        </label>
                        <a href="#" class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold text-center rounded-md hover:bg-blue-600">Reservar</a>
                    </div>
                </div>
            </div>
        </div>
            </div>
        `;
    }
    else if (restaurant === 'PandaExpress') {
        modalContent = `
            <div >
                <h5 class="text-2xl font-bold mb-3">Panda Express</h5>
                <div class="front-content mt-6">
                <div class="description">
                    <div class="title mb-4">
                        <p class="text-lg">
                            <span>Consulta el <a href="https://www.pandaexpress.ca/en/menu/entrees" class="text-blue-500">menú</a></span>
                        </p>
                    </div>
                    <div class="card-footer space-y-4">
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Pedido</span>
                            <input placeholder="¿Qué deseas ordenar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text">
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Cantidad</span>
                            <input placeholder="¿Cuánto quieres?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="number" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Nombres-apellidos</span>
                            <input placeholder="¿Quién va a reclamar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Hora</span>
                            <input placeholder="" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="time" required>
                        </label>
                        <a href="#" class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold text-center rounded-md hover:bg-blue-600">Reservar</a>
                    </div>
                </div>
            </div>
        </div>
            </div>
        `;
    }
    else if (restaurant === 'DunkinDonuts') {
        modalContent = `
            <div >
                <h5 class="text-2xl font-bold mb-3">Dunkin Donuts</h5>
                <div class="front-content mt-6">
                <div class="description">
                    <div class="title mb-4">
                        <p class="text-lg">
                            <span>Consulta el <a href="https://www.dunkincolombia.com/pedir" class="text-blue-500">menú</a></span>
                        </p>
                    </div>
                    <div class="card-footer space-y-4">
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Pedido</span>
                            <input placeholder="¿Qué deseas ordenar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text">
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Cantidad</span>
                            <input placeholder="¿Cuánto quieres?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="number" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Nombres-apellidos</span>
                            <input placeholder="¿Quién va a reclamar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Hora</span>
                            <input placeholder="" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="time" required>
                        </label>
                        <a href="#" class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold text-center rounded-md hover:bg-blue-600">Reservar</a>
                    </div>
                </div>
            </div>
        </div>
            </div>
        `;
    }
    else if (restaurant === 'KfC') {
        modalContent = `
            <div >
                <h5 class="text-2xl font-bold mb-3">Kfc</h5>
                <div class="front-content mt-6">
                <div class="description">
                    <div class="title mb-4">
                        <p class="text-lg">
                            <span>Consulta el <a href="https://www.kfc.co/menu" class="text-blue-500">menú</a></span>
                        </p>
                    </div>
                    <div class="card-footer space-y-4">
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Pedido</span>
                            <input placeholder="¿Qué deseas ordenar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text">
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Cantidad</span>
                            <input placeholder="¿Cuánto quieres?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="number" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Nombres-apellidos</span>
                            <input placeholder="¿Quién va a reclamar?" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text" required>
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700">Hora</span>
                            <input placeholder="" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="time" required>
                        </label>
                        <a href="#" class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold text-center rounded-md hover:bg-blue-600">Reservar</a>
                    </div>
                </div>
            </div>
        </div>
            </div>
        `;
    }

    document.getElementById("modal-container").innerHTML = modalContent;
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera de él
window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
}