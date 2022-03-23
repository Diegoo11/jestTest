function cesar(cadena,num){
    cadena = cadena.toLowerCase()
    if(num>26){
        num = num%26
    }
    if(num<-26){
        num = num%26
    }

    let respuesta = []
    cadena.split('').forEach(lether => {
        if(lether === ','||lether === '.'||lether === '!'||lether === "'"||lether === ";"||lether === "?"||lether === " "){
            respuesta.push(lether)
            return
        }

        let number = lether.charCodeAt() + num
        if(number > 122){
            num -= 26
        }
        if(number < 97){
            num += 26
        }
        let gato = String.fromCharCode(lether.charCodeAt() + num)

        respuesta.push(gato)

    });
    return respuesta.join('')
}

module.exports = cesar