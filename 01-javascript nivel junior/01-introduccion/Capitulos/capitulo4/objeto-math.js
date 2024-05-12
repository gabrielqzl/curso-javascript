document.write("<h3>Objeto Math</h3>")
document.write("<h3>Métodos</h3>")

// Objeto Math Básico

// METODOS

//     sqrt() - Devuelve la raíz cuadrada positiva de un número.
//     cbrt() - Devuelve la raíz cúbica de un número.
//     max() - Devuelve el mayor de cero o más números.
//     min() - Devuelve el más pequeño de cero o más números.
//     random() - Devuelve un número pseudo-aleatorio entre 0 y 1.
//     round() - Devuelve el valor de un número redondeado al número entero más cercano.
//     fround() - Devuelve la representación flotante de precisión simple más cercana de un número.
//     floor() - Devuelve el mayor entero menor que o igual a un número.
//     trunc() - Devuelve la parte entera del número x, la eliminación de los digitos fraccionarios.

// let numero = Math.sqrt(25)
// let numero = Math.cbrt(25)
// let numero = Math.max(4,1,6, 2,234,65)
// let numero = Math.min(4,1,6, 2,234,65)
let numero = Math.random() * 99
// numero = Math.round(numero)
// numero = Math.floor(numero+1)
// numero = Math.fround(numero)
numero = Math.trunc(numero)

document.write(numero)

document.write("<h3>Propiedades</h3>")
// PROPIEDADES

//     PI - Ratio de la circunferencia de un circlo respecto a su diámetro, aproximadamente 3.14159.
//     SQRT1_2 - Raíz cuadrada de 1/2; Equivalentemente, 1 sobre la raiz cuadrada de 2, aproximadamente 0.707.
//     SQRT2 - Raíz cuadrada de 2, aproximadamente 1.414.
//     E - Constante de Euler, la base de los logaritmos naturales, aproximadamente 2.71828.
//     LN2 - Logaritmo natural de 2, aproximadamente 0.693.
//     LN10 - Logaritmo natural de 10, aproximadamente 2.303.
//     LOG2E - Logaritmo de E con base 2, aproximadamente 1.443.
//     LOG10E - Logaritmo de E con base 10, aproximadamente 0.434.

// let num = Math.PI
// let num = Math.SQRT1_2
// let num = Math.SQRT2
// let num = Math.E
// let num = Math.LN2
// let num = Math.LN10
// let num = Math.LOG2E
let num = Math.LOG10E
document.write(num)
