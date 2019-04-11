const os = require("os");
let loginUsuario = os.userInfo().username;
let UsuarioValue;

function esUsuario(usuario){
    if(usuario==loginUsuario){
        UsuarioValue = "Eres el usuario";
    }
    else{
        UsuarioValue = "NO Eres el usuario";
    }
    return UsuarioValue
}

module.exports ={
    esUsuario:esUsuario
}