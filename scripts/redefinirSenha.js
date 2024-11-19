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
async function redefinirSenha() {
    document.querySelector("#loading").innerText = "Carregando..."

    let login = document.querySelector('input#name').value;
    let novasenha = document.querySelector('input#newpassword').value;

    await fetch('http://127.0.0.1:3000/redefinir-senha', {
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
    document.querySelector("#loading").innerText = ""
}
