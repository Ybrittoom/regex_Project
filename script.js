

    let regex = /^\d+$/;
    /*Explicação: ^\d+$ corresponde a uma sequência de um ou mais dígitos (\d).
     O ^ no início e o $ no fim garantem que toda a string seja apenas números. */

    console.log("Alunos digite os seu numeros favoritos de 0 a 9")

    let Maria = "126789"
    let Joao = "12a34cf"

    console.log("Vamos conferir")
    console.log(regex.test(Maria), "Maria esta correto", Maria)
    console.log(regex.test(Joao), "Joao esta incorreto, e apenas numeros", Joao)

    console.log("Agora vamos ver as letras, pode ser maiúsculas e minúsculas de A a Z")

    regex =  /^[a-zA-Z]+$/;
    /*Explicação: ^[a-zA-Z]+$ verifica se há apenas letras maiúsculas e minúsculas de A a Z. 
    O ^ no início e $ no final garantem que a string inteira seja composta por letras. */

    Maria = "yuisklzxv"
    Joao = "qwk12fi098"
    console.log(regex.test(Maria), "Maria esta correto", Maria)
    console.log(regex.test(Joao), "Joao esta incorreto, e apenas letras", Joao)

    console.log("Agora coloquem uma data que voces gosta")

    regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    /*(0[1-9]|[12][0-9]|3[01]) verifica dias válidos (01 a 31).
    (0[1-9]|1[0-2]) valida meses (01 a 12).
    \d{4} valida o ano com 4 dígitos. */

    Maria = "07/11/2008"
    Joao = "82/210/20000011"
    console.log(regex.test(Maria), "Maria esta correto", Maria)
    console.log(regex.test(Joao), "Joao esta incorreto, data invalida", Joao)

    console.log("Agora coloque seu email")

    regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
/*  [a-zA-Z0-9._%+-]+ valida a parte local do e-mail (antes do @).
    @[a-zA-Z0-9.-]+ valida o domínio (depois do @).
    \.[a-zA-Z]{2,} valida a extensão do domínio, exigindo ao menos 2 letras.

*/

    Maria = "mariaa99@gmail.com"
    Joao = "joaolkzin019@@.com.12.br.enois9vinho"

    console.log(regex.test(Maria), "Maria esta correto", Maria)
    console.log(regex.test(Joao), "Joao esta incorreto, email invalida", Joao)

    console.log("Agora o seu numero de telefone")

    regex = /^\+?\d{1,3}\s?\(?\d{2,3}\)?\s?\d{4,5}-?\d{4}$/;
    /*\+?\d{1,3} valida o código do país (DDI), com ou sem o símbolo + (opcional).
    \(?\d{2,3}\)? valida o código de área (DDD), com ou sem parênteses.
    \d{4,5}-?\d{4} valida o número local, que pode ter de 8 a 9 dígitos. */

    Maria = "+55 (19) 99999-4999"
    Joao = "++55555  (((19((((())() 98985-_-1830111"

    console.log(regex.test(Maria), "Maria esta correto", Maria)
    console.log(regex.test(Joao), "Joao esta incorreto, numero invalida", Joao)

    regex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9#?=&.-]*)*$/;
    /*(https?:\/\/)? valida o protocolo HTTP ou HTTPS, que é opcional.
    (www\.)? valida o prefixo www, também opcional.
    [a-zA-Z0-9.-]+\.[a-zA-Z]{2,} valida o domínio.
    (\/[a-zA-Z0-9#?=&.-]*)* valida os caminhos, parâmetros, e fragmentos de URL. */

    Maria = "https://www.example.com"
    Joao = "https://WMWMWMWMWMWMW.exampleeeeeee,,,....com.br.br"

    console.log(regex.test(Maria), "Maria esta correto", Maria)
    console.log(regex.test(Joao), "Joao esta incorreto, URL invalida", Joao)


