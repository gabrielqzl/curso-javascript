// Verificar si el usuario está utilizando un dispositivo móvil
const mobileQuery = window.matchMedia('(max-width: 768px)');

// Función para actualizar el teto según el tipo de dispositivo
function updateDeviceType(query) {
    const deviceTypeElement = document.getElementById('deviceType');

    if (query.matches) {
        // El usuario está en un dispositivo móvil
        deviceTypeElement.textContent = 'Estás utilizando un dispositivo móvil';
        deviceTypeElement.classList.add('mobile');
        deviceTypeElement.classList.remove('desktop');
    } else {
        deviceTypeElement.textContent = 'Estás utilizando un dispositivo de escritorio';
        deviceTypeElement.classList.add('desktop');
        deviceTypeElement.classList.add('mobile');
    }
}

// LLama a la función inicialmente para establecer el tipo de dispositivo
updateDeviceType(mobileQuery);

// Agrega un listener para detectar cambios en el tamaño de la pantalla
mobileQuery.addListener(updateDeviceType);

// Este archivo HTML contiene un elemento <p> con el id "deviceType" que se actualiza dinámicamente según el tipo de dispositivo detectado por matchMedia. El color del texto cambia entre verde para dispositivos de escritorio y azul para dispositivos móviles.