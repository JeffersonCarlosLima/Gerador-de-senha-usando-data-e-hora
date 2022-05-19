const dataHora = new Date()
const dia = String(dataHora.getDate()).padStart(2, "0")
const mes = String(dataHora.getMonth() + 1).padStart(2, "0")
const ano = dataHora.getFullYear()
const hora = dataHora.getHours()
let senha = ((dia * ano) - mes) * hora;
console.log(senha)

function gerarsenha() {
    document.getElementById('data').innerHTML = 'A senha atual é:   ' + senha
}