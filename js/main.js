let nombreUsuario = prompt("ingrese un nombre de usuario.")
let menuHamburguesa = [];

console.log(nombreUsuario)
while (nombreUsuario.length < 6){
    alert("Error! Ingrese al menos seis caracteres.")
    console.log(nombreUsuario)
    nombreUsuario = prompt("ingrese un nombre de usuario.")
}

alert("Bienvenido a Flamas! " + nombreUsuario);

let menu = hamburguesa();
    console.log(menu);

while (!menuHamburguesa.includes(menu)){
    alert("Error! ingreso una opcion incorrecta")
    menu = hamburguesa();
}

if (menu == menuHamburguesa[0])
    alert("seleccionaste: " + menuHamburguesa[0] + ", llevas un total de $3000")
else if (menu == menuHamburguesa[1])
    alert("seleccionaste: " + menuHamburguesa[1] + ", lleva un total de $3500")  
else if (menu == menuHamburguesa[2])
    alert("seleccionaste: " + menuHamburguesa[2]+ ", lleva un total de $3800")
else if (menu == menuHamburguesa[3])
    alert("seleccionaste: " + menuHamburguesa[3] + ", lleva un total de $4000")  

alert("Pedido listo! que lo disfrutes")

function hamburguesa(){
    menuHamburguesa = [];
    menuHamburguesa.push("hamburguesa 01")
    menuHamburguesa.push("hamburguesa 02")
    menuHamburguesa.push("hamburguesa 03")
    menuHamburguesa.push("hamburguesa 04")

    let mensaje = "Que te servimos hoy?: \n";
    
    for (let i = 0; i<menuHamburguesa.length; i++){
        mensaje += menuHamburguesa[i]+ "\n";
    }

    return prompt(mensaje);
}


