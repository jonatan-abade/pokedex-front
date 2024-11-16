function visibilidade() {
    let senha = document.getElementById('newpassword')
    let icone = document.querySelector('img#iconeVisibilidade')
    if (senha.type == 'text') {
        senha.type = 'password'
        icone.src = "../imagens/iconeVisivel.png"
    } else {
        senha.type = 'text'
        icone.src = "../imagens/iconeInvisivel.png"
    }
}
function redefinirSenha(){
    let login = document.querySelector('input#name').value;
    let novasenha = document.querySelector('input#newpassword').value;

    fetch('http://127.0.0.1:3000/redefinir-senha', {
        method: 'POST',
        body: JSON.stringify({
            email: login,
            senha: novasenha
        })
    }).then(async (response) => {
        let responseJSON = await response.json()
        if (response.ok) {
            console.log('senha redefinida com sucesso!')

        } else {
            alert(responseJSON.message)
        }

    }).catch((error) => {
        alert('Erro ao redefinir senha!')
    });
}
