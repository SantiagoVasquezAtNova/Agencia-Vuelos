document.addEventListener("DOMContentLoaded", function () {
  // Seleccionamos todos los botones de detalles por su clase
  document.querySelectorAll('.details-button').forEach(button => {
      button.addEventListener('click', function (event) {
          event.preventDefault();

          // Crear el contenedor del modal
          const modal = document.createElement('div');
          modal.classList.add('fixed', 'inset-0', 'flex', 'items-center', 'justify-center', 'bg-black', 'bg-opacity-50');
          modal.id = 'details-modal';

          // Contenido del modal
          modal.innerHTML = `
              <div class="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 max-w-3xl">
              <section class="fixed top-0 left-0 flex items-center justify-center w-full h-full">
              <div class="p-4 max-w-3xl w-full">
                <div class="relative bg-blueGray-900 bg-opacity-30 overflow-hidden rounded-5xl">
                  <div class="bg-[#282828] p-10 rounded-xl">
                    <div class="text-left">
                      <h3 class="mb-4 text-3xl text-white font-medium tracking-3xl">Select plan</h3>
                      <p class="mb-8 text-white">Update your credit card details</p>
                    </div>
                    <div class="flex flex-wrap -m-2 mb-8">
                      <div class="w-full md:w-1/2 p-2">
                        <div class="p-8 h-full bg-gradient-radial-dark border border-gray-900 border-opacity-30 rounded-5xl plan-option rounded-xl">
                          <div class="flex flex-wrap items-center justify-between">
                            <div class="w-auto">
                              <p class="mb-2 text-sm text-white font-medium">Team+</p>
                            </div>
                            <div class="w-auto">
                              <input type="radio" name="plan" value="team" class="plan-input w-6 h-5">
                            </div>
                          </div>
                          <p class="mb-4 text-white font-medium text-4xl">
                            <span>$10</span>
                            <span class="text-xs font-medium text-gray-300">/ month</span>
                          </p>
                          <ul>
                            <li class="flex items-center mb-4">
                              <div class="flex items-center justify-center w-3.5 h-3.5 mr-3 border border-[#4bbdd1] rounded-full">
                                <img src="nightsable-assets/images/modals/check2.svg" alt="">
                              </div>
                              <p class="text-sm text-white">Privacy control for rooms and murals</p>
                            </li>
                            <li class="flex items-center mb-4">
                              <div class="flex items-center justify-center w-3.5 h-3.5 mr-3 border border-[#4bbdd1] rounded-full">
                                <img src="nightsable-assets/images/modals/check2.svg" alt="">
                              </div>
                              <p class="text-sm text-white">Overage allowance</p>
                            </li>
                            <li class="flex items-center mb-4">
                              <div class="flex items-center justify-center w-3.5 h-3.5 mr-3 border border-[#4bbdd1] rounded-full">
                                <img src="nightsable-assets/images/modals/check2.svg" alt="">
                              </div>
                              <p class="text-sm text-white">In-app chat and email support</p>
                            </li>
                            <li class="flex items-center mb-4">
                              <div class="flex items-center justify-center w-3.5 h-3.5 mr-3 border border-[#4bbdd1] rounded-full">
                                <img src="nightsable-assets/images/modals/check2.svg" alt="">
                              </div>
                              <p class="text-sm text-white">Monthly billing available</p>
                            </li>
                            <li class="flex items-center">
                              <div class="flex items-center justify-center w-3.5 h-3.5 mr-3 border border-[#4bbdd1] rounded-full">
                                <img src="nightsable-assets/images/modals/check2.svg" alt="">
                              </div>
                              <p class="text-sm text-white">Priority support</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="w-full md:w-1/2 p-2">
                        <div class="p-8 h-full bg-gradient-radial-dark border border-gray-900 border-opacity-30 rounded-5xl plan-option rounded-xl">
                          <div class="flex flex-wrap items-center justify-between">
                            <div class="w-auto">
                              <p class="mb-2 text-sm text-white font-medium">Business plan</p>
                            </div>
                            <div class="w-auto">
                              <input type="radio" name="plan" value="business" class="plan-input w-6 h-5">
                            </div>
                          </div>
                          <p class="mb-4 text-white font-medium text-4xl">
                            <span>$40</span>
                            <span class="text-xs font-medium text-gray-300">/ month</span>
                          </p>
                          <ul>
                            <li class="flex items-center mb-4">
                              <div class="flex items-center justify-center w-3.5 h-3.5 mr-3 border border-[#4bbdd1] rounded-full">
                                <img src="nightsable-assets/images/modals/check2.svg" alt="">
                              </div>
                              <p class="text-sm text-white">Privacy control for rooms and murals</p>
                            </li>
                            <li class="flex items-center mb-4">
                              <div class="flex items-center justify-center w-3.5 h-3.5 mr-3 border border-[#4bbdd1] rounded-full">
                                <img src="nightsable-assets/images/modals/check2.svg" alt="">
                              </div>
                              <p class="text-sm text-white">Overage allowance</p>
                            </li>
                            <li class="flex items-center mb-4">
                              <div class="flex items-center justify-center w-3.5 h-3.5 mr-3 border border-[#4bbdd1] rounded-full">
                                <img src="nightsable-assets/images/modals/check2.svg" alt="">
                              </div>
                              <p class="text-sm text-white">In-app chat and email support</p>
                            </li>
                            <li class="flex items-center mb-4">
                              <div class="flex items-center justify-center w-3.5 h-3.5 mr-3 border border-[#4bbdd1] rounded-full">
                                <img src="nightsable-assets/images/modals/check2.svg" alt="">
                              </div>
                              <p class="text-sm text-white">Monthly billing available</p>
                            </li>
                            <li class="flex items-center">
                              <div class="flex items-center justify-center w-3.5 h-3.5 mr-3 border border-[#4bbdd1] rounded-full">
                                <img src="nightsable-assets/images/modals/check2.svg" alt="">
                              </div>
                              <p class="text-sm text-white">Priority support</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-wrap justify-end -m-2">
                    <div class="w-auto p-2"><a class="inline-block px-14 py-4 text-white hover:text-black font-medium tracking-2xl hover:bg-blue-400 border-2 border-white focus:border-[#4bbdd1] focus:border-opacity-40 hover:border-[#4bbdd1] focus:ring-4 focus:ring-blue-400 focus:ring-opacity-40 rounded-full transition duration-300 cursor-pointer" id="close-modal">Cancel</a></div>
                    <div class="w-auto p-2"><a class="inline-block px-14 py-4 font-medium tracking-2xl border-2 border-[#44bdd2] bg-blue-400 hover:bg-blue-500 text-black focus:ring-4 focus:ring-blue-500 focus:ring-opacity-40 rounded-full transition duration-300 cursor-pointer" >Select plan</a></div>
                  </div>
                  </div>
                  <a class="absolute right-10 top-0 w-36">
                    <img src="/assets/images/logo-icaro1.png">
                  </a>
                </div>
              </div>
            </section>
                          
              </div>
          `;

          // Añadir el modal al cuerpo del documento
          document.body.appendChild(modal);

          // Añadir evento al botón de cerrar
          document.querySelectorAll('#close-modal').forEach(closeButton => {
              closeButton.addEventListener('click', function () {
                  document.getElementById('details-modal').remove();
              });
          });

          // Añadir evento a los botones de selección de plan
          document.querySelectorAll('.plan-input').forEach(input => {
              input.addEventListener('change', function () {
                  document.querySelectorAll('.plan-option').forEach(option => {
                      option.classList.remove('selected-plan');
                  });
                  this.closest('.plan-option').classList.add('selected-plan');
              });
          });
      });
  });
});
