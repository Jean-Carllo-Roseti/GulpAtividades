
function dividir (a, b) {
    return a / b;
}

function xau (){
    console.log('xau!');
}

function soPar (incio, fim) {
    for(let i = incio; i <= fim; i++) {
        if (i % 2 === 0) {
            console.log('este numero: ', i, (' é par.'))
        } else {
            console.log('este numero: ', i, (' é impar.'))
        }
    }
}

module.exports = dividir;
module.exports = soPar;