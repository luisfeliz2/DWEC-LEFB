class Producto{
    constructor(nombre,categoria,unidades,precio){
        this._nombre=nombre;
        this._categoria=categoria;
        this._unidades=unidades;
        this._precio=precio;

    }

//

    importe(){
        return this._unidades*this._precio;
    }

    toString(){
        return `Nombre :${this._nombre},Categoria: ${this._categoria},Unidades: ${this._unidades},
        Precio:${ this._precio}`;
    }


}

let arroz = new Producto("arroz","comida",10,32);
let tornillo= new Producto("tornillo","ferreteria",5,33)
let agua=new Producto("agua","bebidas",2,3)

let kods=[arroz,tornillo,agua];

kods.forEach(function(persona){
    console.log(persona._nombre)
});

class Televisores extends Producto{
    constructor(nombre,categoria,unidades,precio,tamanio){
        super(nombre,categoria,unidades,precio);
        this._tamanio=tamanio;
    }

    get info(){
        return this._tamanio+this._nombre;
    }
}
let tele= new Televisores("nokia TV 42","informatica",2,323,42)
console.log(tele)