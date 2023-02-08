// // 4.3 >= 4
// // 1 == 2
// // 4 < 4
// // 2 !== 5
// // 5 == '5'
// // 5 === '5'
// // 5 == 5
// // 5 === 5

// let a = 4.3;
// let b = 4;
// let c = 5;
// let d = 2;

// if (a+b>c+d){
//     document.write("SIIIIIIIIIIIIIIIIII");
//     console.log(true);
// }
// else{
//     document.write("NOOOOOOOOOOOOOOOOOOOOOOO");
//     console.log(false);
// }

// document.write("<br>");

// let angulo1 = 40
// let angulo2 = 60
// let angulo3 = 20

// if (angulo1 + angulo2 + angulo3 == 180){
//     document.write("ES UN TRIANGULO!");
// }
// else{
//     document.write("NOOO ES UN TRIANGULO!");
// }
// document.write("<br>");

// if (b>c && b>d) {
//     document.write(b + "4 es el mayor");
// }
// else if (c>b && c>d) {
//     document.write("5 es el mayor");
// } 
// else if (d>b && d>c){
//     document.write("2 es el mayor");
// }
// else{
//     document.write("estos numeros son una mierda!");
// }
// document.write("<br>");

// if(c%2 == 0){
//     document.write("ES PAR");
//     console.log("la cifra de a" + a +"es par");
// }
// else{
//     document.write("ES IMPAR");
// }

// let dia= "sabado";
// switch (dia) {
//     case "lunes":
//         console.log("lunes");
//         break;
//     case "martes":
//         console.log("martes");
//         break;
//     case "miercoles":
//         console.log("miercoles");
//         break;
//     case "jueves":
//         console.log("jueves");
//         break;
//     case "viernes":
//         console.log("viernes");
//         break;
//     case "sabado":
//         console.log("sabado");
//         break;
//     case "domingo":
//         console.log("domingo");
//         break;
//     default:
//         console.log("Esto no es un dia");
//         break;
// }

let dataActual = new Date();
let mes = dataActual.getMonth();
switch (mes) {
    case 0:
        console.log("enero");
        break;
    case 1:
        console.log("febrero");
        break;
    case 2:
        console.log("marzo");
        break;
    case 3:
        console.log("abril");
        break;
    case 4:
        console.log("mayo");
        break;
    case 5:
        console.log("junio");
        break;
    case 6:
        console.log("julio");
        break;
    case 7:
        console.log("agosto");
        break;
    case 8:
        console.log("septiembre");
        break;
    case 9:
        console.log("octubre");
        break;
    case 10:
        console.log("noviembre");
        break;
    case 11:
        console.log("diciembres");
        break;
         
    default:
        console.log("Esto no es un mes");
        break;
}