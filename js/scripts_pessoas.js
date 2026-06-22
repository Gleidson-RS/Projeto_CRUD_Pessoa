//PEGANDO ELEMENTOS DO DOM
const formPessoa = document.querySelector('#form-pessoa')
const divLista = document.querySelector('#div-lista-pessoas')


//CRIANDO O ARRAY PESSOAS
const pessoas = []


//CAPTURAR O EVENTO submit DO FORMULÁRIO
formPessoa.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const dadosFormPessoa = new FormData(formPessoa)

    const pessoa = {
        nome: dadosFormPessoa.get('nome'),
        idade: dadosFormPessoa.get('idade'),
        renda: dadosFormPessoa.get('renda')
    }

    addPessoa(pessoa)
})


//FUNÇÃO ADICIONAR PESSOA
const addPessoa = (objPessoa) => {
    pessoas.push(objPessoa)

    listPessoas()

    formPessoa.reset()
}


//FUNÇÃO LISTAR PESSOAS
const listPessoas = () => {
    // Limpa a lista antes de recriar
    divLista.innerHTML = ''

    pessoas.forEach((elem, i) => {
        divLista.innerHTML += ` ${i + 1} - ${elem.nome} - ${elem.idade} anos - R$ ${elem.renda} <hr> <br>`

    })
}

