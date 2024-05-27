const produto = {
    "id": null,
    "produtos": document.querySelector('#produtos').value,
    "descricao": document.querySelector('#descricao').value
}

function cadastraProduto(produto){

const reqPost = new Request('http://localhost:3000/produtos', {
    "method": "POST",
    "headers":{
        "content-type": "application/json"
    },
    "body": JSON.stringify(produto)
})
fetch(reqPost)
    .then(response => response.json())
}



document.querySelector('#btnAdd').addEventListener('click', cadastraProduto(produto))