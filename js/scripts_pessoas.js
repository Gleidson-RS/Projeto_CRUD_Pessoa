//PEGANDO ELEMENTOS DO DOM
const formPessoa = document.querySelector('#form-pessoa')
const divLista = document.querySelector('#div-lista-pessoas')

//CRIANDO O ARRAY PESSOAS
const pessoa = []


//CAPITURAR O EVENTO submit DO FORMULARIO
formPessoa.addEventListener('submit', (evt) => {
    //INTERROMPER O EFEITO PADRÃO DE SUBMETER OS DADOS DO FORMULARIO
    evt.preventDefault()

    //CRIAR UM OBJETO FORMULARIO
    const dadosFormPessoa = new FormData(formPessoa)

    //CRIAR UM OBJETO LITERAL
    const pessoa = {
        nome: dadosFormPessoa.get('nome'),
        idade: dadosFormPessoa.get('idade'),
        renda: dadosFormPessoa.get('renda')
    }

    //CHAMANDO A FUNÇÃO addPessoa E PASSANDO O OBJETO LITERAL pessoa
    addPessoa(pessoa)

})

//CRIANDO A FUNÇÃO ADICIONAR PESSOA 
const addPessoa = (objPessoa) => {
    //ADICIONANDO O OBJETO LITERAL NO ARRAY PESSOAS
    pessoas.push(objPessoa)
}

//FUNÇÃO PARA LISTAR PESSOAS DO ARRAY
const listPessoas = () => {
    pessoas.forEach((elem, i) => {
        divLista.innerHTML += `${i} - ${elem.nome} - ${elem.idade} - ${elem.renda} <br>`
    })
}

