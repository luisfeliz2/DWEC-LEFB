
let socios=[];

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

Idinterval=setInterval(borrando,1000);

