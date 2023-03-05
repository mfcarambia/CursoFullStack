let nombre="Manuel"
let apellido="Carambia"

console.log(nombre+" "+apellido);

let n1=15
let n2=30
let t1=0
let t2=0

function sumatoria(n1,n2){
    t1=n1+n2
    console.log(t1);
    let n3=prompt("Ingrese el numero siguiente:")
    t2=t1+n3
    console.log(t2)
}

sumatoria(n1,n2)