// const lista1 = [
//     100,
//     200,
//     500,
//     400000000,
// ];

function calcularAverage(lista){
    console.log(lista);
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){

            return valorAcumulado + nuevoElemento;
        }

    );
    return sumaLista;
}

function calcMediana(lista){
    const lista1 = lista.sort(function(elemento1, elemento2){
        return elemento1 - elemento2;
    });
    console.log(lista);
    console.log(lista1);
        const mitadLista1 = parseInt(lista1.length / 2);
        let mediana;
        function esPar(numero){
            if(numero % 2 == 0){
                return true;
            }else{
                return false;
            }
        }

        if(esPar(lista1.length)){
            const element1 = lista1[mitadLista1];
            const element2 = lista1[mitadLista1 - 1]; 
            console.log("es par");
            mediana = calcularAverage([element1, element2]);
        }else{
            mediana = lista1[mitadLista1];
        };
    alert(mediana);
}