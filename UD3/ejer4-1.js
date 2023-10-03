
let socios = [];

do{
    socios = prompt("introduce los socios").split(",");

}while(socios.length !== 3);

console.log(`los numeros de socios son ${socios.length}`)
console.log(`los socios son ${socios.join("-->")}`)
console.log(`ordenado en orden alfabetico ${socios.sort().join("-->")}`)
console.log(`ordenado en orden alfabetico ${socios.reverse().join("-->")}`)



let buscar = prompt("dime a buscar");

if(socios.includes(buscar)){
    console.log(`el socio exite __-->${buscar} `)
}else{
    console.log("no existe")
}

let borrando =()=>{
    console.log(`Actual socios ${socios.join(",")}`);
    socios.pop();
    console.log(`Despues socios ${socios.join(",")}`);
    
    if(socios.length ==0){
        clearInterval(Idinterval)
    }
}
let nuevoSocios = socios.map( elemento => elemento.toUpperCase());

Idinterval=setInterval(borrando,1000);


//usando ,map
console.log(nuevoSocios)


//usando for each 
let posicion=0
socios.forEach(elemento=>{
    console.log(`${posicion} ${elemento}`)
    posicion +=1
})


//usando sort

socios.sort( function compare (a,b){
    if(a> b)return 1;
    if(a == b)return 0;
    if(a> b)return -1;
});

//usando some

socios.some(elemento => elemento[0]==="a");
socios.every(elemento => elemento[0]==="a");