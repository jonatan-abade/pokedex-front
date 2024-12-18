
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

    fetch('http://127.0.0.1:3000/login', {
        method: 'POST',
        body: JSON.stringify({
            email: login,
            senha: senha
        })
    }).then(async (response) => {
        let responseJSON = await response.json()
        if (response.ok) {
            window.location.href = 'pokemons.html'
        } else {
            Toastify({
                text: responseJSON.message,
                className: "info",
                position: "center",
                style: {
    
                  background: "linear-gradient(to right, #F0111A, #F04B0B)",
                }
              }).showToast();
        }

    }).catch((error) => {
        Toastify({
            text: "Erro ao fazer login",
            className: "info",
            position: "center",
            style: {

              background: "linear-gradient(to right, #F0111A, #F04B0B)",
            }
          }).showToast();
    });
}


