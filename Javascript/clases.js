class Empresa{
    constructor(nombre, direccion, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.rubro = rubro;
        this.numeroDeReclamos = 0;
    }
    toString(){
        return this.nombre;
    }
    aumentarReclamo(){
        this.numeroDeReclamos++;
    }
}

class Agenda{
    constructor(){
        this.listaEmpresas = [];
    }
    agregar(unaEmpresa){
        this.listaEmpresas.push(unaEmpresa);
    }
    existeEmpresa(nombre){
        let existe = false;
        for (let i = 0; i < this.listaEmpresas.length && !existe; i++) {
            let empresaActual = this.listaEmpresas[i];
            if( empresaActual.nombre.toLowerCase() === nombre.toLowerCase() ){
                existe = true;
            }
        }
        return existe;
    }
    getEmpresaByName(nombre){
        let encontre = false;
        for(let i=0; i< this.listaEmpresas.length && !encontre; i++){
            if(this.listaEmpresas[i].nombre.toUpperCase()==nombre.toUpperCase()){
                encontre = true;
                return this.listaEmpresas[i];
            }
        }
    }
    darTodas(){
        return this.listaEmpresas;
    }
    darEmpresasSinReclamos(){
        let empresasSinReclamos = [];
        for (let elem of this.listaEmpresas){
            if (elem.numeroDeReclamos==0){
                empresasSinReclamos.push(elem);
            }
        }
        return empresasSinReclamos;
    }
}

var numeroReclamo = 1

class Reclamo{
    constructor(nombre, empresa, titulo, reclamo){
        this.nombre = nombre;
        this.empresa = empresa;
        this.titulo = titulo;
        this.reclamo = reclamo;
        this.contador = 1;
        this.numeroReclamo = numeroReclamo;
        numeroReclamo++;
        empresa.aumentarReclamo();
    }
    toString(){
        return this.nombre;
    }
    subirContador(){
        this.contador++
    }
}

class AgendaReclamos{
    constructor(){
        this.listaReclamos = [];
        this.listaReclamosDePersona = [];
    }
    agregar(unReclamo){
        this.listaReclamos.push(unReclamo);
    }
    darTodos(){
        return this.listaReclamos;
    }
    getReclamosByPersona(persona){
        this.listaReclamosDePersona.length=0
        for(let elem of this.listaReclamos){
            if(elem.nombre.toUpperCase() == persona.toUpperCase()){
                this.listaReclamosDePersona.push(elem);
            }
        }
        return this.listaReclamosDePersona;
    }
}
