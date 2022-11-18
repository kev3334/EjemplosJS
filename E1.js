function calcular(){
var nombre = document.getElementById('inombre').value;
let sueldo = document.getElementById('isueldo').value;
let nhijos = document.getElementById('inhijos').value;
let sueldofinal=0;
let bon=0;
var p1,p2;
var mostrarnombre, mostrarsueldo;

if(nhijos > 0){
    bon=0.07*sueldo;
}else{
    bon=0;
}
sueldofinal=parseInt(sueldo)+parseInt(bon);

mostrarnombre="Trabajador: "+nombre;
mostrarsueldo="Su sueldo es: "+sueldo+" + bonificación: "+bon.toFixed()+". Total: "+sueldofinal;

p1=document.getElementById('pbonificacion');
p2=document.getElementById('psueldofinal');
p1.innerHTML=mostrarnombre;
p2.innerHTML=mostrarsueldo;
}

function limpiar(){
    var p1,p2;
    p1=document.getElementById('pbonificacion');
    p2=document.getElementById('psueldofinal');
    p1.innerHTML="";
    p2.innerHTML="";
    document.getElementById('inombre').value="";
    document.getElementById('isueldo').value="";
    document.getElementById('inhijos').value="";
}