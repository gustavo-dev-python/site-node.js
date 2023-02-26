
function LOGIN() {

    var usuario = document.getElementById('login').value
    var pass = document.getElementById('senha').value
    if(usuario == 'gustavo.dev' && pass == '8002'){
        alert('sucesso')
        location.href ='perfil.html'
    }else{
        alert('nome ou senha incorretos')
    }
}

