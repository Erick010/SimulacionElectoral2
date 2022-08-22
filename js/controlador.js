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
    var depto = document.getElementById('input8')
    var depto2 = document.getElementById('input7');
  
    /* Asignamos cada dato a su input*/
    depto.value = this.value;
    depto2.value = this.value;
    puestos.value = departamentos[this.selectedIndex].diputados
  };


function votosAleatorios (min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

var votos_totales = []

for ( var k = 0 ; k < 90; k++ ){     
    var votos = votosAleatorios(1000,100000);
    votos_totales[k] = votos;
}

