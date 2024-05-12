document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento donde se mostrará la información del navegador
    const navigatorInfoElement = document.getElementById('navigatorInfo');

    // Obtener información del navegador
    const appCodeName = navigator.appCodeName;
    const appName = navigator.appName;
    const userAgent = navigator.userAgent;
    const language = navigator.language;
    const onLine = navigator.onLine;
    const cookieEnabled = navigator.cookieEnabled;
    const plugins = navigator.plugins;
    const mediaDevices = navigator.mediaDevices;

    // Mostrar la información en el elemento HTML
    navigatorInfoElement.innerHTML = `
        <p><strong>App Code Name:</strong> ${appCodeName}</p>
        <p><strong>App Name:</strong> ${appName}</p>
        <p><strong>User Agent:</strong> ${userAgent}</p>
        <p><strong>Language:</strong> ${language}</p>
        <p><strong>Online:</strong> ${onLine ? 'Yes' : 'No'}</p>
        <p><strong>Cookies Enabled:</strong> ${cookieEnabled ? 'Yes' : 'No'}</p>
        <p><strong>Plugins:</strong> ${plugins.length}</p>
        <p><strong>User Media:</strong> ${mediaDevices ? 'Supported' : 'Not Supported'}</p>
    `;
});

// Este código JavaScript se ejecutará una vez que el DOM esté completamente cargado. Obtendrá la información del objeto Navigator y la mostrará en el elemento con el id navigatorInfo. Asegúrate de tener ambos archivos (index.html y navigator_example.js) en la misma carpeta para que funcionen correctamente.