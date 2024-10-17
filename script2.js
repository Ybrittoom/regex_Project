let regex = /^\s?\d{3}\.\d{3}\.\d{3}-\d{2}$/;

let CPF = [
    {nome: "Maria", cpf:" 542.890.558-18"},
    {nome: "Bia", cpf:" 212.821ss.228-14"},
    {nome: "Gui", cpf:" 587.322174.668-10"},
    {nome: "Luccas", cpf:" 900.215.890-18"},
    {nome: "Helena", cpf: "123.456.789-09"}
]

let i = 0
while (i < CPF.length) {

    let cpfLimpo = CPF[i].cpf

    if (regex.test(cpfLimpo)) {
        console.log(`O cpf ${cpfLimpo} esta correto!`)
    } else {
        console.log(`O cpf ${cpfLimpo} esta incorreto!`)
    }
    i++
}
