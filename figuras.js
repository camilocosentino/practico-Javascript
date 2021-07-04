//Square Code
console.group("Cuadrados");
    // const squareSide = 5;
    // console.log("The square sides are: " + squareSide + " cm");

function squarePerimeter(){
   const input = document.getElementById("InputCuadrado");
   const value = input.value;
   perimeter = value * 4;
   alert(perimeter);
} 
// console.log("The square perimeter is: " + squarePerimeter + " cm");

function squareArea(squareSide){
   const input = document.getElementById("InputCuadrado");
   const value = input.value;
   area = value * value;
   alert(area);
} 
// console.log("The square area is: " + squareArea + " cm^2");
console.groupEnd();

//Triangle Code
console.group("Triangle");
// const triangleSide1 = 6;
// const triangleSide2= 6;
// const triangleBase = 4;
// const triangleHeight = 5.5;

// console.log("Triangle sides are: " 
// + triangleSide1
// + "cm, "
// + triangleSide2
// + "cm, "
// + triangleBase
// + "cm"
// );

function trianglePerimeter(triangleBase, triangleSide1, triangleSide2){
   return triangleBase + triangleSide1 + triangleSide2;
}

function triangleArea(triangleBase, triangleHeight){
   return (triangleBase * triangleHeight) / 2;
}

function triangleHeight(){
   const input = document.getElementById("InputSide1");
   const input2 = document.getElementById("InputSide2");
   const input3 = document.getElementById("InputSide3");
   var ladoIgual;
   var ladoDiferente;
   var ladoDiferenteSobre2;
   var correcto;
   const side1 = input.value;
   const side2 = input2.value;
   const side3 = input3.value;
      if(side1 == side2){
          ladoIgual = side1;
          ladoDiferente = side3;
          ladoDiferenteSobre2 = ladoDiferente / 2;
         correcto = true;
      }else if(side1 == side3){
          ladoIgual = side1;
          ladoDiferente = side2;
          ladoDiferenteSobre2 = ladoDiferente / 2;
         correcto = true;

      }else if(side2 == side3){
          ladoIgual = side2;
          ladoDiferente = side1;
          ladoDiferenteSobre2 = ladoDiferente / 2;
         correcto = true;

      }else{
         correcto = false;

      }
      if(correcto == true){
         const altura = Math.sqrt((ladoIgual * ladoIgual) - (ladoDiferenteSobre2 * ladoDiferenteSobre2));
         alert("La altura es: " + altura);
         
      }else{
         alert("Asegurate para que sea in triangulo isosceles de elegir dos lados del triangulo del mismo valor");
      }
      
   
}
console.groupEnd();

//Circle Code
console.group("Circle");

const PI = Math.PI;
function circleDiametro(circleRadio){
    return circleRadio * 2;
}



function circlePerimeter(circleRadio){
        return (circleDiametro(circleRadio)) * PI;
} 

function circleArea(circleRadio){
   return (circleRadio * circleRadio) * PI;
}

console.groupEnd();
