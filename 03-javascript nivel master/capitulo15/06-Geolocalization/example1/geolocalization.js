  // Verificar si el navegador soporta la API de geolocalización
  if ("geolocation" in navigator) {
    // Obtener la ubicación del usuario
    navigator.geolocation.getCurrentPosition(function(position) {
      // Acceder a la latitud y longitud
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      // Mostrar la ubicación en la página
      var locationDiv = document.getElementById("location");
      locationDiv.textContent = "Ubicación actual: Latitud " + latitude + ", Longitud " + longitude;
    }, function(error) {
      // Manejar errores
      console.error("Error al obtener la ubicación:", error);
    });
  } else {
    // El navegador no soporta la geolocalización
    var locationDiv = document.getElementById("location");
    locationDiv.textContent = "Geolocalización no soportada por este navegador";
  }