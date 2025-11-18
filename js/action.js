async function loginSite() {
    const dados = await fetch('../data/users.json')
    const usuarios = await dados.json()
    
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value

    const user = usuarios.find(u => u.email === email && u.senha === senha)

    if (user) {
        window.confirm("Bem Vindo: "+ user.nome)
        limparCampos()
    } else {
        window.confirm("Verifique sua informações!")
    }
}

function limparCampos() {
    document.getElementById('email').value = ""
    document.getElementById('senha').value = ""
}

function loadRegistro() {
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value

    localStorage.setItem('email', email)
    localStorage.setItem('senha', senha)
    window.location.href = 'registro.html'
}

async function  exibirUsuarios() {
    const dados = await fetch("../data/users.json")
    const usuarios = dados.json()
    console.table(usuarios)
}