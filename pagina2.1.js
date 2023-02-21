// Leer 6 edades
// Calcular promedio de edades
// Calcular porcentaje menores de edad
// Calcular porcentaje de edades que estan comprometidas entre  16 y 24 años

// Leer datos
var edad1 = parseInt(prompt("Ingrese edad 1"));
var edad2 = parseInt(prompt("Ingrese edad 2"));
var edad3 = parseInt(prompt("Ingrese edad 3"));
var edad4 = parseInt(prompt("Ingrese edad 4"));
var edad5 = parseInt(prompt("Ingrese edad 5"));
var edad6 = parseInt(prompt("Ingrese edad 6"));
var edad7 = parseInt(prompt("Ingrese edad 7"));
var edad8 = parseInt(prompt("Ingrese edad 8"));
var edad9 = parseInt(prompt("Ingrese edad 9"));
var edad10 = parseInt(prompt("Ingrese edad 10"));

//calcular el promedio de edades
var resultadoPromedio = (edad1+edad2+edad3+edad4+edad5+edad6+edad7+edad8+edad9+edad10)/10;

//calcular el porcentaje de menores de edad
var contadoresMenoresEdad = 0;
var porcentajeMenoresEdad = 0;
var contadorPersonas16y24 = 0;
var porcentajePersonas16y24 = 0;
    if(edad1<18){
        contadoresMenoresEdad++
    }
    if(edad2<18){
        contadoresMenoresEdad++
    }
    if(edad3<18){
        contadoresMenoresEdad++
    }
    if(edad4<18){
        contadoresMenoresEdad++
    }
    if(edad5<18){
        contadoresMenoresEdad++
    }
    if(edad6<18){
        contadoresMenoresEdad++
    }
    if(edad7<18){
        contadoresMenoresEdad++
    }
    if(edad8<18){
        contadoresMenoresEdad++
    }
    if(edad9<18){
        contadoresMenoresEdad++
    }
    if(edad10<18){
        contadoresMenoresEdad++
    }
    // Edades entre 16 y 24
    if( 16<edad1 && edad1<24 ){
        contadorPersonas16y24++;
    }
    if( 16<edad2 && edad2<24 ){
        contadorPersonas16y24++;
    }
    if( 16<edad3 && edad3<24 ){
        contadorPersonas16y24++;
    }
    if( 16<edad4 && edad4<24 ){
        contadorPersonas16y24++;
    }
    if( 16<edad5 && edad5<24 ){
        contadorPersonas16y24++;
    }
    if( 16<edad6 && edad6<24 ){
        contadorPersonas16y24++;
    }
    if( 16<edad7 && edad7<24 ){
        contadorPersonas16y24++;
    }
    if( 16<edad8 && edad8<24 ){
        contadorPersonas16y24++;
    }
    if( 16<edad9 && edad9<24 ){
        contadorPersonas16y24++;
    }
    if( 16<edad10 && edad10<24 ){
        contadorPersonas16y24++;
    }

    porcentajeMenoresEdad = (contadoresMenoresEdad/10)*100;
    porcentajePersonas16y24 = (contadorPersonas16y24/10)*100;

    console.log("El porcentaje de personas menores de edad es : "+porcentajeMenoresEdad +"%");
    console.log("El porcentaje de personas con edades comprometidas entre 16 y 24 años es de : "+porcentajePersonas16y24 +"%");


