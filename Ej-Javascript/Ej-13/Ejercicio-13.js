class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return "Me llamo " + this.nombre + " y tengo " + this.edad + " años";
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    setProfesor(profesor) {
        this.profesor = profesor;
    }
    estudiando() {
        return "Estudiando con " + this.profesor;
    }
}

class Profesor extends Persona {
    
    constructor(nombre, edad, estudiantes) {
        super(nombre, edad);
        this.estudiantes = estudiantes;
    }
    
    ensenando() {
       return this.estudiantes.forEach(element => console.log(element));
    }

    addEstudiantes(nombre, edad) {
        this.estudiantes.push(new Estudiante(nombre, edad));
    }
    
}

let estudiante = [];
estudiante.push(new Estudiante('Jorge', 56));
estudiante.push(new Estudiante('Nicolas', 25));
estudiante.push(new Estudiante('Federico', 31));

var profesor1 = new Profesor('Pepe', 60, estudiante);

//console.log(profesor1.estudiantes);
profesor1.addEstudiantes('Fernando', 34);

console.log(profesor1.ensenando());
