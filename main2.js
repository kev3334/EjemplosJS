function calcular(){
    var nombre=document.getElementById('nombre').value;
    let nparcial=document.getElementById('notaparcial').value;
    let nfinal=document.getElementById('notafinal').value;
    let npracticas=document.getElementById('notapracticas').value;
    let notafinal;
    var mostrarnombre,mostrarnota,desaprobado;
    var p1,p2;
    
    notafinal=(nparcial*1+nfinal*2+npracticas*1)/4;


    mostrarnombre="Estudiante: "+nombre;
    mostrarnota="Su promedio final es: "+notafinal;
    desaprobado="Usted ha desaprobado el curso."
    p1=document.getElementById('pnombre');
    p2=document.getElementById('promediofinal');

    if(notafinal>=10.5){
        p1.innerHTML=mostrarnombre;
        p2.innerHTML=mostrarnota;
    }else{
        p1.innerHTML=desaprobado;
    }


}

function limpiar(){
    var p1,p2;
    p1=document.getElementById('pnombre');
    p2=document.getElementById('promediofinal');
    p1.innerHTML="";
    p2.innerHTML="";
    document.getElementById('nombre').value="";
    document.getElementById('notaparcial').value="";
    document.getElementById('notafinal').value="";
    document.getElementById('notapracticas').value="";
}
//*function validar(){
//    let n1=document.getElementById('notaparcial').value;
//    var p2;
//    p2=document.getElementById('promediofinal');
//    if(n1.lenght == 0){
//        p2.innerHTML="La nota parcial 1 esta vacio"+n1;
//    }else{
//        p2.innerHTML="La nota parcial 1 no esta vacio"+n1;
//    }