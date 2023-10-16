class personaClass {
    constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
    }
    
    get edad() {
    return this._edad;
    }
    set edad(valor) {
    this._edad = valor;
    }
    cumplirAnos(incremento){
    this.edad = this.edad + incremento;
    }
    imprimirInfo() {
    document.write("Nombre" + this.nombre);
    document.write(", Edad " + this.edad);
    }
    static confirmacion() {
    alert("Enhorabuena esta funcionando la clase Persona");
     }
    toString() {
     return this.nombre
     }
    valueOf() {
     return this.edad
     }
     }
     var mama = new personaClass("Ana", 67);
     mama.cumplirAnos(1);
     mama.imprimirInfo();
     mama.edad;
    personaClass.confirmacion(); // Llamana a método estático