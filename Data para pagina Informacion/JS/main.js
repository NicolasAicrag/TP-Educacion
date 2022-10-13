
/* ..."Para leer el Json y pasarlo a formato js"....
    let url = "./Merval/Json/Datos_cotizacion1.json"
    let datos = [];
    fetch(url)
        .then(response => response.json())
        .then(data => {  // data que contiene el JSON
            console.log(data)
            dataMerval = data.CotizCierre
            console.log(dataMerval)
*/


        let cad = `<div class="container">`
        
        for (producto of dataMerval) {
            cad += `
            <div class="especie">
                <ul> 
                    <div class="cuerpo">
                        <li class="c1"><img src="${producto.imagen}"></li>
                        <li class="c2">Ticker: ${producto.ticker}</li>
                        <li class="c3">Especie: ${producto.name}</li>
                        <li class "c4">Precio ${producto.last}</li>
                        <li class="c5">Variación ${producto.variac}</li>
                    </div>    
                </ul>    
            </div>`
        }


        cad += `</div>`

        document.getElementById("cotizaciones").innerHTML = cad;


    
    
















/*let cad=`<div class="container">`

for(elemento of data){

    cad+=`
        <div class="tarjeta">
            <img src="${elemento.image}" alt="foto">
            <div class="cuerpo">
                <h4>Nombre:${elemento.id} - ${elemento.name}</h4>
                <p>Genero:${elemento.gender}</p>
                <p>Especie:${elemento.species} </p>
            </div>
        </div>
    `
}
cad+=`

console.log(cad)

document.getElementById("tarjetas").innerHTML=cad

*/




















/*let cad=`<div class="container">       `
for( personaje of data){
    cad +=`
        <div class="tarjeta">
            <img src="${personaje.image}" alt="${personaje.name}">
            <div class="cuerpo">
                <h4>Nombre: ${personaje.name}</h4>
                <p>Genero:${personaje.gender}</p>
                <p>Especie:${personaje.species} </p>
            </div>
        </div>
    `    
}
cad+=`</div>          `
console.log(cad)
document.getElementById("fotos").innerHTML=cad;
*/














/*let cad=`<div class="container">
       `
for(personaje of data){  // data es un arreglo que contiene a los personajes
    cad+=`<div class="tarjeta">
            <img src="${personaje.image}" alt="${personaje.name}">
            <div class="cuerpo">
                <h4>Personaje:${personaje.id} - ${personaje.name}</h4>
                <p>Genero:${personaje.gender}</p>
                <p>Especie:${personaje.species}</p>
            </div>
        </div>
    `
}
cad+=`</div>
      `       // le agrego el cierre de la etiqueta div
console.log(cad)
document.getElementById("fotos").innerHTML=cad
*/

