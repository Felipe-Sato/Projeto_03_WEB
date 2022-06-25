var insert = document.querySelector("#insert"),
    reset = document.querySelector("#reset"),
    response = document.querySelector(".response");

insert.addEventListener("click", async function () {
    var termo = document.querySelector("#termo").value,
        type = document.querySelector("#type").value,
        text = document.querySelector("#text").value;

    // Implementação da consulta AJAX com API Fetch e Async e Await
    const json = await fetch('https://web-api-dicionario-simples.herokuapp.com/Words', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        mode: "cors",
        body: JSON.stringify({
            word: termo,
            definitionType: type,
            definitionText: text
        })
    });
    if (json.status == 200) {
        document.querySelector('#erro').innerHTML = "Palavra adicionada com sucesso!";
    } else {
        document.querySelector('#erro').innerHTML = "Erro ao adicionar a palavra!";
    }
    document.querySelector('#erro').classList.toggle('displaynone', false);
    logado();
});

reset.addEventListener("click", function () {
    termo.value = '';
    response.innerHTML = '';
});