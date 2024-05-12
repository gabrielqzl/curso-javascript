"use strict"

// for(let i = 0; i <= 20; i++){
//     if(i == 12){
//         continue
//     }
//     document.write(i, " ")
// }

// let animales = ["gato", "perro", "loro"]

// for(let animal in animales){
//     document.write(animales[animal], "<br>")
// }
// document.write("<br>")
// for(let animal of animales){
//     document.write(animal,"<br>")
// }

let array1 = ["maria", "josefa", "roberta"]
let array2 = ["pedro", "marcelo", array1, "josefina"]

forRancio:
for(let array in array2){
    if(array == 2 ){
        for(let array of array1){
            continue forRancio
            document.write(array, "<br>")
        }
    } else {
        document.write(array2[array], "<br>")
    }
}