
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
    function sendToken() {
        let mail = document.querySelector('input#email').value;
        console.log('ok')
        fetch('http://127.0.0.1:3000/send-token', {
            method: 'POST',
            body: JSON.stringify({
                email: mail
            })
        }).then(async (response) => {
            let responseJSON = await response.json()
            if (response.ok) {
                document.querySelector('div#input_token').removeAttribute('hidden')
                Toastify({
                    text: responseJSON.message,
                    className: "info",
                    position: "center",
                    style: {

                      background: "linear-gradient(to right, #22F059, #BFF006)",
                    }
                  }).showToast();

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
                text: "Erro ao validar formulário, tente novamente mais tarde!",
                className: "info",
                position: "center",
                style: {

                  background: "linear-gradient(to right, #F0111A, #F04B0B)",
                }
              }).showToast();
        });
    }
