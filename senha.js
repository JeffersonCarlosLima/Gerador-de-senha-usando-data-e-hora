const dataHora = new Date()
const dia = String(dataHora.getDate()).padStart(2, "0")
const mes = String(dataHora.getMonth() + 1).padStart(2, "0")
const ano = dataHora.getFullYear()
const hora = dataHora.getHours()
let senha = ((dia * ano) - mes) * hora;
console.log(senha)

function gerarsenha() {
    document.getElementById('senha').innerHTML = senha;
}

copiarSenha = senha;

function copiarTexto() {
    /* Get the text field */
    var copyText = copiarSenha;

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Texto copiado com sucesso!: " + copyText.value);
}