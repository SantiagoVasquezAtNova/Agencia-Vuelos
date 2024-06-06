document.addEventListener('DOMContentLoaded', function () {
    const menuItem = document.querySelector('.menu-item');
    const submenu = menuItem.querySelector('.submenu');

    menuItem.addEventListener('mouseover', function () {
        submenu.classList.remove('hidden');
    });

    menuItem.addEventListener('mouseout', function () {
        submenu.classList.add('hidden');
    });
});
