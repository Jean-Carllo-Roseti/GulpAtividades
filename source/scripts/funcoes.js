function somando (a, b) {
    return a + b;
}

function saudacao (callback) {
    return (console.log('Bom dia a tds.'))
    (callback);
}

function xx (callback) {
    console.log('testezinho.')
    callback();
}

function ola () {
    console.log('saudação exibidas.')
    xx();
}

module.exports = somando;
module.exports = saudacao;
exports.xx = xx;
exports.ola = ola;



