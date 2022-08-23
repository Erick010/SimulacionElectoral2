departamentos = [
    { "name" :"Atlántida", "diputados": 8 },
    { "name" :"Cortés", "diputados": 20 },
    { "name" :"Comayagua", "diputados": 7 },
    { "name" :"Copán", "diputados": 7},
    { "name" :"Colón" , "diputados": 4 },
    { "name" :"Choluteca", "diputados": 9},
    { "name" :"El Paraíso" , "diputados": 6},
    { "name" :"Francisco Morazán", "diputados": 23 },
    { "name" :"Gracias A Dios" , "diputados": 1},
    { "name" :"Islas de la bahía", "diputados":  1},
    { "name" :"Intibucá", "diputados": 3},
    { "name" :"La Paz", "diputados": 3 },
    { "name" :"Lempira", "diputados": 5},
    { "name" :"Olancho", "diputados": 7},
    { "name" :"Ocotepeque", "diputados": 2},
    { "name" :"Santa Bárbara", "diputados": 9},
    { "name" :"Yoro", "diputados": 9},
    { "name" :"Valle", "diputados": 4}
];    

function agregarElementos(){ 
    var lista=document.getElementById("select1"); 
    departamentos.forEach(function(data,index){
        var linew= document.createElement("option");    
        var contenido = document.createTextNode(data.name);
        lista.appendChild(linew);
        linew.appendChild(contenido);
    })
} 
agregarElementos();

document.getElementById('select1').onchange = function() {

    /* Referencia a los input */
    var puestos = document.getElementById('input1');
    var depto = document.getElementById('input10')
    var depto2 = document.getElementById('input9');
    var votosNac = document.getElementById('input3');
    var votosL = document.getElementById('input4');
    var votosLi = document.getElementById('input5')
    var votosSal = document.getElementById('input6')
    var votosInd = document.getElementById('input7')
    var Total = document.getElementById('input8')

    var dipN = document.getElementById("input11")
    var dipL = document.getElementById("input12")
    var dipLi = document.getElementById("input13")
    var dipSal = document.getElementById("input14")
    var dipInd = document.getElementById("input15")

    /* Asignamos cada dato a su input*/
    depto.value = this.value;
    depto2.value = this.value;
    puestos.value = Number(departamentos[this.selectedIndex].diputados)
    votosNac.value = Number(votos_totales[votosAleatorios(0,89)]),
    votosL.value = votos_totales[votosAleatorios(0,89)],
    votosLi.value = votos_totales[votosAleatorios(0,89)],
    votosSal.value = votos_totales[votosAleatorios(0,89)],
    votosInd.value = votos_totales[votosAleatorios(0,89)],
    Total.value = (Number(votosNac.value)+ Number(votosL.value)+ Number(votosLi.value)  + Number(votosSal.value) + Number(votosInd.value))

    cociente = Math.round(Total.value / puestos.value)

    dipN.value = Math.round(votosNac.value / cociente);
    dipL.value = Math.round(votosL.value / cociente);
    dipLi.value = Math.round(votosLi.value / cociente);
    dipSal.value = Math.round(votosSal.value / cociente);
    dipInd.value = Math.round(votosInd.value / cociente);
};

function votosAleatorios (min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

var votos_totales = []

for ( var k = 0 ; k < 90; k++ ){     
    var votos = votosAleatorios(1000,25000);
    votos_totales[k] = votos;
}
