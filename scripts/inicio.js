document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('boton').addEventListener('click', function (e) {
        e.preventDefault();
        const host = obtenerHostUrl();
        const url = `http://${host}/pages/login.html`;
        window.location.href = url;
    });

    const obtenerHostUrl = () => {
        const urlParticionada = window.location.href.split('/');
        return urlParticionada[2];
    };
});