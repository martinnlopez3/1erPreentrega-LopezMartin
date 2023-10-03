let nombreUsuario = prompt("ingrese un nombre de usuario.")

function Hamburguesa(descripcion,precio) {
    this.descripcion = descripcion,
    this.precio = precio
};

let total = 0;

let menuHamburguesa = [];

let carrito = [];

console.log(nombreUsuario)
while (nombreUsuario.length < 6){
    alert("Error! Ingrese al menos seis caracteres.")
    console.log(nombreUsuario)
    nombreUsuario = prompt("ingrese un nombre de usuario.")
}

alert("Bienvenido a Flamas! " + nombreUsuario);

let menu = hamburguesa();
    console.log(menu);

while (menu< menuHamburguesa.length){
    total += menuHamburguesa[menu].precio
    carrito.push(menuHamburguesa[menu])
    alert("seleccionaste: " + menuHamburguesa[menu].descripcion + ", $" + menuHamburguesa[menu].precio + "\n Total: $" + total)

    menu = hamburguesa();
}

// if (menu == menuHamburguesa[0])
//     alert("seleccionaste: " + menuHamburguesa[0].descripcion + ", llevas un total de $" + menuHamburguesa[0].precio)
// else if (menu == menuHamburguesa[1])
//     alert("seleccionaste: " + menuHamburguesa[1].descripcion + ", lleva un total de $" + menuHamburguesa[1].precio)  
// else if (menu == menuHamburguesa[2])
//     alert("seleccionaste: " + menuHamburguesa[2].descripcion+ ", lleva un total de $" + menuHamburguesa[2].precio)
// else if (menu == menuHamburguesa[3])
//     alert("seleccionaste: " + menuHamburguesa[3].descripcion + ", lleva un total de $" + menuHamburguesa[3].precio)  

alert("Pedido listo! que lo disfrutes \n" + pedido(carrito))

function pedido(hamburguesa){
    let mensaje = "";
    for (let i = 0; i<hamburguesa.length; i++){
        console.log(hamburguesa[i])
        mensaje += hamburguesa[i].descripcion + " $" + hamburguesa[i].precio + "\n";

    }

    return mensaje;

}

function hamburguesa(){
    menuHamburguesa = [];
    menuHamburguesa.push(new Hamburguesa("hamburguesa 01", 3000))
    menuHamburguesa.push(new Hamburguesa("hamburguesa 02", 3500))
    menuHamburguesa.push(new Hamburguesa("hamburguesa 03", 3800))
    menuHamburguesa.push(new Hamburguesa("hamburguesa 04", 4000))

    let mensaje = "Que te servimos hoy?: \n";
    
    for (let i = 0; i<menuHamburguesa.length; i++){
        mensaje += i+": " + menuHamburguesa[i].descripcion + " $" + menuHamburguesa[i].precio + "\n";
    }

    return prompt(mensaje);
}


