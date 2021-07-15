

const lista1Count = {
  
};

function calcModa(lista1){
        lista1.map(
            function(elemento){
                if (lista1Count[elemento]) {
                    lista1Count[elemento] += 1;
                }else{
                    lista1Count[elemento] = 1;
                }
                
            }
        )

        const lista1CountArray = Object.entries(lista1Count).sort(
            function (valorAcumulado, nuevoElemento){
                return valorAcumulado[1] - nuevoElemento[1];
            }

        );

        const moda = lista1CountArray.pop();
     return moda[0];
    }