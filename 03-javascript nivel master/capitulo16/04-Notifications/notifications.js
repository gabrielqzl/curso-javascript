function showNotification() {
    if (Notification.permission === 'granted') {
        // Mostrar la notificación si el permiso ha sido concedido
        new Notification('¡Hola mundo!');
    } else if (Notification.permission !== 'denied') {
        // Solicitar permiso al usuario para mostrar notificaciones
        Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
                // Mostrar la notificación si el permiso ha sido concedido
                new Notification('Hola mundo! 2');
            }
        });
    }
}