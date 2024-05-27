const reqGet = new Request("http://localhost:3000/produtos", {
  method: "GET",
  headers: {
    "content-type": "application/json", //busca as informações dos produtos
  },
});
fetch = fetch(reqGet)
  .then((batata) => batata.json())
  .then((batata) => {
    const div = document.createElement("div");
    batata.forEach((i) => {


      const liDescricao = document.createElement("li");
      liDescricao.innerHTML = i.descricao;
     
      const liId = document.createElement("li");
      liId.innerHTML = i.id;
     
      const liPreco = document.createElement("li");
      liPreco.innerHTML = i.preco.toFixed(2);
     
      div.append(liDescricao, liId, liPreco)
    });

    document.body.appendChild(div)

  });

