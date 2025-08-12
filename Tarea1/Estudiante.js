class Estudiante{

    #carnet;
    #nombre;
    #apellido;
    #edad;
    
    constructor(carnet, nombre, apellido, edad){
        this.#carnet = carnet;
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#edad = edad; 
    }


    getCarnet() {
        return this.#carnet;
    }
    
    setCarnet(carnet){
        this.#carnet = carnet
    }

    getNombre () {
        return this.#nombre;
    }

    setNombre(nombre){
        this.#nombre = nombre
    }

    getApellido () {
        return this.#apellido;
    }
    
    setNombre(apellido){
        this.#apellido = apellido
    }


    getEdad () {
        return this.#edad;
    }

    setNombre(edad){
        this.#edad = edad
    }


    getInformacionCompleta = () =>{
        return `El carnet es: ${this.#carnet} El Nombre es: ${this.#nombre} El Nombre es: ${this.#nombre} El Apellido es: ${this.#apellido} La Edad es: ${this.#edad}`;
    }

}


let estudiante1 = new Estudiante(201318644, 'Mynor','Cifuentes', 30);
console.log(estudiante1.getCarnet())
console.log(estudiante1.getNombre())
console.log(estudiante1.getApellido())
console.log(estudiante1.getEdad())
console.log(estudiante1.getInformacionCompleta())
let estudiante2 = new Estudiante();
estudiante2.setCarnet(20000000);
console.log(estudiante2.getCarnet())
