document.addEventListener('DOMContentLoaded', async function () {
    let params = new URLSearchParams(document.location.search);
    let name = params.get("name");
    let url = params.get("url");


    document.querySelector('.nome').innerText = name;
})
