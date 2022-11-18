function calcular(){
    let monto = document.getElementById('valor').value;
    let dscto = 0, montofinal=0;
    var resultado1,resultado2;
    var p1,p2;
    if (monto>=150){
        dscto=0.12*monto;
        montofinal=monto-dscto;
    }else{
        montofinal=monto;
    }
    resultado1="Dscto: "+dscto;
    resultado2="Importe final: "+montofinal;
    p1=document.getElementById('descuento');
    p2=document.getElementById('importefinal');
    p1.innerHTML=resultado1;
    p2.innerHTML=resultado2;

}