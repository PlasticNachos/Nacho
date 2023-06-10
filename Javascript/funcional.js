window.addEventListener("load",inicio);

function inicio(){
    document.getElementById("idBotonLupa").addEventListener("click",buscar);
    document.getElementById("idPrincipal").addEventListener("click",principal);
    document.getElementById("idVerReclamos").addEventListener("click",reclamos);
    document.getElementById("idEstadisticas").addEventListener("click",estadisticas);
    document.getElementById("idAgregarEmpresa").addEventListener("click",agregarEmpresa);
    document.getElementById("idBotonReclamo").addEventListener("click",agregarReclamoMenu);
    document.getElementById("idBotonAgregar").addEventListener("click",agregar);
    document.getElementById("idOrdenNombreCreciente").addEventListener("click",ordenNomCreciente);
    document.getElementById("idOrdenNombreDecreciente").addEventListener("click",ordenNomDecreciente);
    document.getElementById("idBotonAgregar2").addEventListener("click",agregarEmpresa2);
    principal()
}

function buscar(){  
    let buscando = document.getElementById("idBuscador").value;
    alert(buscando);
    document.getElementById("idBuscador").value="";
}

function principal(){
    esconderSecciones();
    document.getElementById("Seccion1").style.display = "block";
}

function reclamos(){
    esconderSecciones();
    document.getElementById("Seccion2").style.display = "block";
}

function estadisticas(){
    esconderSecciones();
    document.getElementById("Seccion3").style.display = "block";
}

function agregarEmpresa(){
    esconderSecciones();
    document.getElementById("Seccion4").style.display = "block";
}

function agregarReclamoMenu(){
    alert("en Agregar Reclamo");
}

function esconderSecciones(){
    let secciones = document.getElementsByClassName("Seccion");
    for (let elemento of secciones){
        elemento.style.display = "none"
    }
}

let nuevoReclamo;
let agendaReclamos = new AgendaReclamos;

function agregar(){
    let miForm = document.getElementById("idFormulario")
    let nombre = document.getElementById("idNom").value;
    let empresa = agenda.getEmpresaByName(document.getElementById("idSelectDropdown").value);
    let titulo = document.getElementById("idReclamo").value;
    let reclamo = document.getElementById("idParrafoReclamo").value;
    if(miForm.reportValidity()){
        nuevoReclamo = new Reclamo(nombre, empresa, titulo, reclamo);
        agendaReclamos.agregar(nuevoReclamo);
        document.getElementById("idDiv").innerHTML="";
        for (let i = agendaReclamos.listaReclamos.length - 1; i >= 0; i--) {
            agregarReclamo(agendaReclamos.listaReclamos[i]);
        }
        miForm.reset();
    }     
}

let nuevaEmpresa;
let agenda = new Agenda;

function agregarEmpresa2(){
    let miForm2 = document.getElementById("idFormulario2")
    let nomEmpresa = document.getElementById("idNom2").value;
    let direc = document.getElementById("idDirec").value;
    let rubro = document.getElementById("idRubro").value;
    if(miForm2.reportValidity()){
        if(!agenda.existeEmpresa(nomEmpresa)){
            nuevaEmpresa = new Empresa(nomEmpresa, direc, rubro);
            miForm2.reset();
            agenda.agregar(nuevaEmpresa);
            agregarEmpresaASelect(nuevaEmpresa);
        } else {
            alert("Esa empresa ya existe.")
        }
    }     
}

function agregarEmpresaASelect(nombre){
    let nodo = document.createElement("option");
    let nodoTexto = document.createTextNode(nombre);
    nodo.appendChild(nodoTexto);
    document.getElementById("idSelectDropdown").appendChild(nodo);
}

function agregarReclamo(nuevoReclamo){
    let articuloNuevo = document.createElement("article");
    articuloNuevo.setAttribute("id", "idArticuloNuevo")
    document.getElementById("idDiv").appendChild(articuloNuevo);
    let h3 = document.createElement("h3");
    articuloNuevo.appendChild(h3);
    let textnodo = document.createTextNode("Reclamo No."+nuevoReclamo.numeroReclamo);
    h3.appendChild(textnodo);
    let div = document.createElement("div");
    div.setAttribute("class", "ReclamosIngresados");
    articuloNuevo.appendChild(div);
    let p1 = document.createElement("p");
    let textnodo2 = document.createTextNode(nuevoReclamo.nombre+": ");
    p1.appendChild(textnodo2);
    div.appendChild(p1);
    let span1 = document.createElement("span");
    span1.setAttribute("class", "Comentarios");
    let textnodo3 = document.createTextNode(nuevoReclamo.titulo);
    span1.appendChild(textnodo3);
    p1.appendChild(span1);
    let p2 = document.createElement("p");
    let textnodo4 = document.createTextNode("Empresa: ");
    p2.appendChild(textnodo4);
    div.appendChild(p2);
    let span2 = document.createElement("span");
    span2.setAttribute("class", "Empresas");
    let textnodo5 = document.createTextNode(nuevoReclamo.empresa);
    span2.appendChild(textnodo5);
    p2.appendChild(span2);
    let p3 = document.createElement("p");
    let textnodo6 = document.createTextNode(nuevoReclamo.reclamo);
    p3.appendChild(textnodo6);
    div.appendChild(p3);
    let p4 = document.createElement("p");
    div.appendChild(p4);
    let boton = document.createElement("button");
    let textnodo7 = document.createTextNode("¡A mi también me pasó!");
    boton.appendChild(textnodo7);
    p4.appendChild(boton);
    let textnodo8 = document.createTextNode(" Contador: ");
    p4.appendChild(textnodo8);
    let span3 = document.createElement("span");
    let textnodo9 = document.createTextNode(nuevoReclamo.contador);
    span3.appendChild(textnodo9);
    p4.appendChild(span3);
    boton.addEventListener("click", function(){
        nuevoReclamo.contador++;
        nuevoReclamo.empresa.aumentarReclamo();
        span3.innerHTML=nuevoReclamo.contador;
    })
}

function contador(){

}

function ordenNomCreciente(){
    alert("ordenNomCreciente")
}

function ordenNomDecreciente(){
    alert("ordenNomDecreciente")
}

function letra (){
    
}
