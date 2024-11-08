// alert('bem vindo a página!') 
// let paginainicial = async function fetch('http://127.0.0.1:3000/').then((resposta)=>%7B
//     console.log(resposta)
// })
async function getData() {
  const url = "http://127.0.0.1:3000/";
  try {
    const response = await fetch(url);
    if (!response.ok) {
     // throw new Error(Response status: ${response.status});
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.log("error");

    console.error(error);
  }
}

window.addEventListener('load', async function () {
  let recepcao = document.getElementById('apresentacao_titulo')
  recepcao.innerHTML = 'carregando...'
  await new Promise(r => setTimeout(r, 1500));
  let getdata = await getData()
  console.log(getdata)
  recepcao.innerText = getdata
  await new Promise(r => setTimeout(r, 2000));
  recepcao.innerText = 'Vamos lá!'
  window.location.href ='login.html'
});

