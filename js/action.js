function loginSite(){
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value

    if(email === 'aluno@etec.br' && senha === '1234'){
        window.confirm("Parabéns você foi Logado com Sucesso!")
        limparCampos()
    }else{
        window.alert("As informações contém Erros!")
    }
}

function limparCampos(){
    document.getElementById('email').value = ""
    document.getElementById('senha').value = ""
}

function loadRegistro(){
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value

    localStorage.setItem('email', email)
    localStorage.setItem('senha', senha)
    window.location.href = 'registro.html'
}