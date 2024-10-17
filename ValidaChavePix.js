const pixCpf = /^\s?\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const pixNumero = /^\s?\d{11}$/ //xxxxxxxxxxx
const pixEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log("Bem-Vindos a nossa loja de instrumento")

let clientes = [
    {nome: "Danilo", pix: "19989851845"},
    {nome: "Renan", pix: "394.375.38-15"},
    {nome: "Diogo", pix: "19994571122611"},
    {nome: "Willian", pix: "384.243.15-35"},
    {nome: "Wesley R.", pix: "19998562345"},
    {nome: "Yago", pix: "416.403.371-90"},
]

let i = 0;
while (i < clientes.length) {
    let pixCorreto = clientes[i].pix
    if (pixCpf.test(pixCorreto) || pixEmail.test(pixCorreto) || pixNumero.test(pixCorreto)) {
        console.log("Esta correto. Obrigado pela preferencia!!!")
    } else {
        console.log("Esta incorreto!!!")
    }

    i++
}
