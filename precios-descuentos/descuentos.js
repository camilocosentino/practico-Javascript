const cupones = [{nombre: "BlackFriday", valor: 50}, {nombre: "CyberMonday", valor:25}];

function calcPrecioConDescuento(precio, cupon){
    
    const porcentajeConDescuento = 100 - cupon;
    const precioConDescuento = (precio * porcentajeConDescuento) / 100;
    return precioConDescuento;
}


function PriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputCupon = document.getElementById("inputCupon");
    const discountCupon= inputCupon.value;
    const discountValue = cupones.find(function(tipoCupon){
        return tipoCupon.nombre === discountCupon;
    });
    console.log(discountValue.valor);
    const precioConDescuento = calcPrecioConDescuento(priceValue, discountValue.valor);

    const result = document.getElementById("result");
    result.innerText = "El precio con descuento es de: " + precioConDescuento;
}