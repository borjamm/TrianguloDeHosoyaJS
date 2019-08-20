var N = prompt("Por favor introduce una dimensión para el triángulo de Hosoya: ", 20);
var flag = prompt('Introduce una "t" para mostrar el tiempo. En caso de que no le interesa pulse el botón de cancelar: ', "t");
var general = "";

if (N == null || N == "" ) {
    N = 15;
}

var tiempo1 = performance.now();
var tab = tabulation(N);
var tiempo2 = performance.now();
var mem = memoization(N);
var tiempo3 = performance.now();

if(flag == "t"){
    general = "<div id='g' class='row'><div class='col s100 m100'>" +
                "<div class='card black darken-1'>" +
                    "<div class='card-content green-text'>" + "<p>Para dimensión = " + N + "</p>" + "</div>" +
                        "<div class='card-action white-text'>"  + "<p style='text-transform: uppercase; color: red'>por tabulation</p>" + 
                        tab + "<p style='text-transform: uppercase; color: red'>por memoization</p>" + mem +
                        "<p style='color: #D2691E;'>El tiempo de ejecución por tabulation: " + (tiempo2 - tiempo1) / 1000 + " segundos.</p>" +
                        "<p style='color: #D2691E;'>El tiempo de ejecución por memoization: " + (tiempo3 - tiempo2) / 1000 + " segundos.</p>" 
                    + "</div>" +
                "</div>" +
            "</div>";
}else{
    general = "<div id='g' class='row'><div class='col s100 m100'>" +
                "<div class='card black darken-1'>" +
                    "<div class='card-content green-text'>" + "<p>Para dimensión = " + N + "</p>" + "</div>" +
                        "<div class='card-action white-text'>"  + "<p style='text-transform: uppercase; color: red'>por tabulation</p>" + 
                        tab + "<p style='text-transform: uppercase; color: red'>por memoization</p>" + mem
                    + "</div>" +
                "</div>" +
            "</div>";
}

$('.container').append(general);

function generaliteOption(){
    var N = prompt("Por favor introduce una dimensión para el triángulo de Hosoya: ", 20);
    var flag = prompt('Introduce una "t" para mostrar el tiempo. En caso de que no le interesa pulse el botón de cancelar: ', "t");
    var general = "";


    if (N == null || N == "" ) {
        N = 15;
    }

    var tiempo1 = performance.now();
    var tab = tabulation(N);
    var tiempo2 = performance.now();
    var mem = memoization(N);
    var tiempo3 = performance.now();

    if(flag == "t"){
        general = "<div id='g' class='row'><div class='col s100 m100'>" +
                    "<div class='card black darken-1'>" +
                        "<div class='card-content green-text'>" + "<p>Para dimensión = " + N + "</p>" + "</div>" +
                            "<div class='card-action white-text'>"  + "<p style='text-transform: uppercase; color: red'>por tabulation</p>" + 
                            tab + "<p style='text-transform: uppercase; color: red'>por memoization</p>" + mem +
                            "<p style='color: #D2691E;'>El tiempo de ejecución por tabulation: " + (tiempo2 - tiempo1) / 1000 + " segundos.</p>" +
                            "<p style='color: #D2691E;'>El tiempo de ejecución por memoization: " + (tiempo3 - tiempo2) / 1000 + " segundos.</p>" 
                        + "</div>" +
                    "</div>" +
                "</div>";
    }else{
        general = "<div id='g' class='row'><div class='col s100 m100'>" +
                    "<div class='card black darken-1'>" +
                        "<div class='card-content green-text'>" + "<p>Para dimensión = " + N + "</p>" + "</div>" +
                            "<div class='card-action white-text'>"  + "<p style='text-transform: uppercase; color: red'>por tabulation</p>" + 
                            tab + "<p style='text-transform: uppercase; color: red'>por memoization</p>" + mem
                        + "</div>" +
                    "</div>" +
                "</div>";
    }

    $("#g").remove();
    $('.container').append(general);
}

function memoizationOption(){
    var N = prompt("Por favor introduce una dimensión para el triángulo de Hosoya: ", 20);
    var flag = prompt('Introduce una "t" para mostrar el tiempo. En caso de que no le interesa pulse el botón de cancelar: ', "t");
    var resultado = "";

    if (N == null || N == "" ) {
        N = 15;
    }

    var tiempo1 = performance.now();
    var mem = memoization(N);
    var tiempo2 = performance.now();

    if (flag == "t"){
        resultado = "<div id='g' class='row'><div class='col s100 m100 '>" +
            "<div class='card black darken-1'>" +
                "<div class='card-content green-text'>" + "<p style='text-transform: uppercase; color: red'>por memoization</p></div>" + "<div class='card-content green-text'><p>Para dimensión = " + N + "</p>" + "</div>" +
                    "<div class='card-action white-text'>"  + mem +
                    "<p style='color: #D2691E;'>El tiempo de ejecución por memoization: " + (tiempo2 - tiempo1) / 1000 + " segundos.</p>" +
                "</div>" +
            "</div>" +
        "</div>";
    }else{
        resultado = "<div id='g' class='row'><div class='col s100 m100 '>" +
            "<div class='card black darken-1'>" +
                "<div class='card-content green-text'>" + "<p style='text-transform: uppercase; color: red'>por memoization</p></div>" + "<div class='card-content green-text'><p>Para dimensión = " + N + "</p>" + "</div>" +
                    "<div class='card-action white-text'>"  + mem +
                "</div>" +
            "</div>" +
        "</div>";
    }

    $("#g").remove();
    $('.container').append(resultado);
}

function tabulationOption(){
    var N = prompt("Por favor introduce una dimensión para el triángulo de Hosoya: ", 20);
    var flag = prompt('Introduce una "t" para mostrar el tiempo. En caso de que no le interesa pulse el botón de cancelar: ', "t");
    var resultado = "";
    if (N == null || N == "" ) {
        N = 15;
    }

    var tiempo1 = performance.now();
    var tab = tabulation(N);
    var tiempo2 = performance.now();
    if (flag == "t"){
        resultado = "<div id='g' class='row'><div class='col s100 m100 '>" +
                "<div class='card black darken-1'>" +
                    "<div class='card-content green-text'>" + "<p style='text-transform: uppercase; color: red'>por tabulation</p></div>" +"<div class='card-content green-text'><p>Para dimensión = " + N + "</p>" + "</div>" +
                        "<div class='card-action white-text'>"  + tab +
                        "<p style='color: #D2691E;'>El tiempo de ejecución por tabulation: " + (tiempo2 - tiempo1) / 1000 + " segundos.</p>" +
                    "</div>" +
                "</div>" +
            "</div>";
    }else{
        resultado = "<div id='g' class='row'><div class='col s100 m100 '>" +
                "<div class='card black darken-1'>" +
                    "<div class='card-content green-text'>" + "<p style='text-transform: uppercase; color: red'>por tabulation</p></div>" +"<div class='card-content green-text'><p>Para dimensión = " + N + "</p>" + "</div>" +
                        "<div class='card-action white-text'>"  + tab +
                    "</div>" +
                "</div>" +
            "</div>";
    }

    $("#g").remove();
    $('.container').append(resultado);

}


function tabulation(n){
    var dp = new Array(2);
    /*Inicializamos el array*/
    for(var k=0;k<n;k++){
        dp[k] = new Array(2);
    }

    for(var k=0;k<n;k++){
        for (var t=0;t<n;t++){
            dp[k][t] = 0;
        }
     }

    var texto = "<p>";
    if(n == 1){
        dp[0][0] = 1;
    }else{
        dp[0][0] = dp[1][0] = 1;
        dp[1][1] = 1;
    } 

    /*Filas: */ 
    for (var i = 2; i < n; i++) { 
        /*Columnas: */
        for (var j = 0; j < n; j++) { 
            /*Recursivo: */ 
            if (i > j){ 
                dp[i][j] = (dp[i-1][j] + dp[i-2][j]); 
            }else{
                dp[i][j] = (dp[i-1][j-1] + dp[i-2][j-2]);
            }
        } 
    }

    for (var i = 0; i < n; i++){ 
        for (var j = 0; j <= i; j++){
            texto += dp[i][j] + " ";
        }
        texto += "<br/>";
    } 

    texto += "</p>";
    console.log(dp);
    return texto;
}

function memoization(n){
    var memorization = "<p>";
    for (var i = 0; i < n; i++) {
        for (var j = 0; j <= i; j++) {
            memorization += Hosoya(i,j) + " ";
        }
        memorization += "<br/>";
    }
    memorization += "</p>";
    return memorization;
}

function Hosoya(n, m){
    var almacen = new Map();
    if(almacen.has(n.toString() + m.toString())){
        return almacen.get(n.toString() + m.toString()); /*Si se ha calculado el número se devuelve*/
    }

    if ((n == 0 && m == 0) || (n == 1 && m == 0) || (n == 1 && m == 1) || (n == 2 && m == 1)) {
        almacen.set(n.toString() + m.toString(), 1);
        return 1;
    }

    if (n > m){
        almacen.set(n.toString() + m.toString(), Hosoya(n-1, m) + Hosoya(n-2, m));
        return almacen.get(n.toString() + m.toString()); 
    }else{
        if (m == n){
            almacen.set(n.toString() + m.toString(), Hosoya(n-1, m-1)+ Hosoya(n-2, m-2));
            return almacen.get(n.toString() + m.toString());
        }else{
            almacen.set(n.toString() + m.toString(), 0);
            return 0;
        }
    }
}

