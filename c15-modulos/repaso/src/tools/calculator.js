let operations =  require('./operations')

let calculator = (n1, n2, operacion) => {
    return operacion(n1,n2)
}

module.exports = { calculator}