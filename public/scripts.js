const requisicao = new Request("http://localhost:3000/produtos", {
  method: "GET",
  headers: {
    "content-type": "application/json", //busca as informações dos produtos
  },
});
fetch = fetch(requisicao)
  .then((batata) => batata.json())
  .then((batata) => {
    const div = document.createElement("div");
    batata.forEach((i) => {


      const pDescricao = document.createElement("p");
      pDescricao.innerHTML = i.descricao;
     
      const pId = document.createElement("p");
      pId.innerHTML = i.id;
     
      const pPreco = document.createElement("p");
      pPreco.innerHTML = i.preco;
     
      div.append(pDescricao, pId, pPreco)
    });

    document.body.appendChild(div)

  });
