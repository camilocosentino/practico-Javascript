const salariosColombia = colombia.map(
    function(persona){
        return persona.salary;

    }
);
console.log(salariosColombia);
const salariosColombiaSort = salariosColombia.sort(function(SalaryA, SalaryB){
    return SalaryA - SalaryB;
})
console.log(salariosColombiaSort);

//Helpers
function esPar(numero){
    return (numero % 2 === 0);//esto devuelve true o false
    
}
function calcularAverage(lista){
    console.log(lista);
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){

            return valorAcumulado + nuevoElemento;
        }

    );
    const promedio = sumaLista / lista.length;
    return promedio;
}

//Calculadora de Medianas

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        
        const elemento1 = lista[mitad - 1];
        const elemento2 = lista[mitad];
        console.log(elemento1, elemento2);
        const mediana = calcularAverage([elemento1, elemento2]);
        return mediana;
    }else{
        const mediana = lista[mitad];
        return mediana;
    }
}

const medianaGralColombia = medianaSalarios(salariosColombiaSort);


// Mediana Salarios Top 10%
const SpliceStart = (salariosColombiaSort.length * 90) / 100;
const SpliceCount = salariosColombiaSort.length - SpliceStart;
const salariosColTop10 = salariosColombiaSort.splice(SpliceStart, SpliceCount);
const medianaTop10Col = medianaSalarios(salariosColTop10);
console.log(
    {
        medianaGralColombia,
        medianaTop10Col,
    }
);