const inputTexto = document.querySelector(".input-texto")
const ouputTexto = document.querySelector(".ouput-texto")

function encriptar(mensaje) {
    let codigo_encriptacion = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ]

    mensaje = mensaje.toLowerCase()
        //recorrer la matriz, osea las vocales identificar en input y  remplazar
    for (let i = 0; i < codigo_encriptacion.length; i++) {
        if (mensaje.includes(codigo_encriptacion[i][0])) {
            mensaje = mensaje.replaceAll(codigo_encriptacion[i][0], codigo_encriptacion[i][1])
        }
    }
    return mensaje
}

function btnEncriptar() {
    const mensaje_encriptado = encriptar(inputTexto.value)
        //Mostrando en zona ouput
    ouputTexto.value = mensaje_encriptado
    inputTexto.value = ""
        //SE puede agregar el doom, para eliminar imagen si hay tyexto
}

function desencriptar(mensaje) {
    let codigo_encriptacion = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ]

    mensaje = mensaje.toLowerCase()
        //recorrer la matriz, osea las vocales identificar en input y  remplazar
    for (let i = 0; i < codigo_encriptacion.length; i++) {
        if (mensaje.includes(codigo_encriptacion[i][1])) {
            mensaje = mensaje.replaceAll(codigo_encriptacion[i][1], codigo_encriptacion[i][0])
        }
    }
    return mensaje
}

function btnDesencriptar() {
    const mensaje_desencriptado = desencriptar(inputTexto.value);
    ouputTexto.value = mensaje_desencriptado
    inputTexto.value = ""
}

function btnCopiar() {
    ouputTexto.select()
    navigator.clipboard.writeText(ouputTexto.value)
    ouputTexto.value = ""
    alert("Texto copiado")
}