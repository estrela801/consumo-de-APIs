const inputs = [
    {"type": "text", "id": "preco", "label": "Preço"},
    {"type": "text", "id": "descricao", "label": "Descrição"},
    {"type": "text", "id": "IdProduto", "label": "Id"}
]
const btnAdd = document.createElement('button')
btnAdd.textContent = 'Add'
btnAdd.id = 'btnAdd'
btnAdd.type = 'button'


function criaDivForm(inputs){
    const divForm = document.createElement('div')
    divForm.classList.add('controle-form')

    inputs.forEach(produto => {

    const div = document.createElement('div')

    div.classList.add('controle-form')
    const i = document.createElement('input')
    i.type = produto.type
    i.id = produto.id
    
    const l = document.createElement('label')
    l.htmlFor =  produto.id
    l.innerHTML =  produto.label
    
    div.append(l, i)
    divForm.append(div)
})
return divForm
}
const divForm = criaDivForm(inputs)

divForm.append(criaDivForm, btnAdd)

document.body.appendChild(divForm)


