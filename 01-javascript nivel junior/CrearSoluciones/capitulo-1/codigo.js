dineroCofla = prompt('Cofla ¿Cuánto dinero tienes?')
// dineroRoberto = prompt('¿Cuánto dinero tienes?')
// dineroPedro = prompt('¿Cuánto dinero tienes?')
dineroCofla = parseInt(dineroCofla)

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("comprate el helado de agua")
    alert("y te sobran " + (dineroCofla - 0.6))
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("comprate el helado de crema")
    alert("y te sobran " + (dineroCofla - 1.6))
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("comprate el helado de heladrix")
    alert("y te sobran " + (dineroCofla - 1.7))
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("comprate el helado de haladovix")
    alert("y te sobran " + (dineroCofla - 1.8))
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("comprate el helado de helardo")
    alert("y te sobran " + (dineroCofla - 2.9))
}

else if (dineroCofla >= 2.9) {
    alert("Helado con confites o el pote de 1/4 kg")
    alert("y te sobran " + (dineroCofla - 2.9))
} else {
    alert("No te alcanza para comprar helado")
}