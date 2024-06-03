let listaSandwich = [];
            
let cuantos = parseInt(prompt("Ingrese el numero de sandwiches"));

let costoSandwich = 0;
let precio = {
    
    "integral" : 1.5 ,
    "salvado" : 1 , 
    "tomate" : 0.5,
    "lechuga" : 0.5,
    "vaca" : 1.5,
    "vegetariana" : 1.25 ,
    "chedar" : 1 ,
    "cebolla" : 1 ,
    "ketchup" : 0.25 ,
    "mayonesa" : 0.25 ,
}
let mensaje = ""
function preparar( pan , verduras , aderezos , carne , adicionales ){
    
    pan = prompt ("integral"+ " / " + "salvado").toLowerCase();
    verduras = prompt ("tomate"+ " / " + "lechuga").toLowerCase();
    aderezos = prompt ("mayonesa"+ " / " + "ketchup").toLowerCase();
    carne = prompt ("vaca" + " / " + "vegetariana").toLowerCase();
    adicionales = prompt ("chedar"+ " / " + "cebolla").toLowerCase();

    if ((pan !== "integral" && pan !== "salvado") ||
    (verduras !== "tomate" && verduras !== "lechuga") ||
    (aderezos !== "mayonesa" && verduras !== "ketchup")||
    (carne !== "vaca" && carne !== "vegetariana")||
    (adicionales !== "chedar" && adicionales !== "cebolla")){
    alert("Algo en su compra se escribio mal o nos encontramos sin ese producto! Vuelva a intentarlo");
    return preparar();}
    
    let mensaje = "Su sandwich incluye : \n Pan: " + pan + "\n verduras: " + verduras + "\n aderezos: " + aderezos + "\n Carne: " + carne + "\n adicionales: " + adicionales;
        alert (mensaje);
    return { pan , verduras , aderezos , carne , adicionales } ;
}
for(let i = 0 ; i < cuantos ; i++){
    
    let sandwich = preparar();
    let precioSandwich = 0 ;

    precioSandwich += precio[sandwich.pan];
    precioSandwich += precio[sandwich.verduras];
    precioSandwich += precio[sandwich.aderezos];
    precioSandwich += precio[sandwich.carne];
    precioSandwich += precio[sandwich.adicionales];
    alert ("$" + precioSandwich);
    
    costoSandwich += precioSandwich;
    listaSandwich.push(sandwich);

}

alert("precio de sus sandiwches : $" + costoSandwich)
alert ("gracias por su compra! puede pasarlos a retirar cuando guste por el local");