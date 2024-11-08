// alert('bem vindo a página!') 
// let paginainicial = async function fetch('http://127.0.0.1:3000/').then((resposta)=>{
//     console.log(resposta)
// })
async function getData() {
    const url = "'http://127.0.0.1:3000/'";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }


getData()