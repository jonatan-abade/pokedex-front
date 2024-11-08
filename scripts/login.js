
function visibilidade() {
    let senha = document.getElementById('password')
    let icone = document.querySelector('img#iconeVisibilidade')
    if (senha.type == 'text') {
        senha.type = 'password'
        icone.src = "../imagens/iconeVisivel.png"
    } else {
        senha.type = 'text'
        icone.src = "../imagens/iconeInvisivel.png"
    }
}
function fazerValidacaoLogin() {
    let login = document.querySelector('input#name').value;
    let senha = document.querySelector('input#password').value;
    console.log(login, senha);

}


