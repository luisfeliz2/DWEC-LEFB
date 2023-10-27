let parrafo1 = {
    titulo: "Primer bloque de parrafos",
    hijos: ["Este es primer parrafo","este es el segundo"]

}
let estrutura = new Set();

estrutura.add(parrafo1);






estrutura.forEach(a => {

    let titulo = document.createElement("h1");
    titulo.innerHTML = a.titulo;

    //obtenemo el padre
    let body=document.getElementsByTagName("body")[0];
    
    //añadimo los titulos
    body.appendChild(titulo);


    //ahora a por los hijos
    a.hijos.forEach(hijo => {
        let p = document.createElement("p");
        p.innerHTML=hijo;
        body.appendChild(p);

    });


});