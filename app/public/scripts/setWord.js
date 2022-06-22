var insert = document.querySelector("#insert"),
    reset = document.querySelector("#reset"),
    response = document.querySelector(".response");

insert.addEventListener("click", async function () {
    var termo = document.querySelector("#termo").value,
        type = document.querySelector("#type").value,
        text = document.querySelector("#text").value;

    // Implementação da consulta AJAX com API Fetch e Async e Await
    let Body = await fetch('http://localhost:27017/projetoWEB3/Words', {
        method: "POST",
        headers: { contentType: "application/json; charset=utf-8" },
        body: JSON.stringify({
            word: termo,
            definitionType: type,
            definitionText: text
        })
    });
    let data = await json.json();
    if (json.status == 200) {
        document.querySelector('#erro').innerHTML = "Palavra adicionada com sucesso!";
    } else {
        document.querySelector('#erro').innerHTML = data.error;
    }
    document.querySelector('#erro').classList.toggle('displaynone', false);
    logado();
});

reset.addEventListener("click", function () {
    termo.value = '';
    response.innerHTML = '';
});