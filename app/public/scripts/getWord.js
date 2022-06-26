var search = document.querySelector("#search"),
    reset = document.querySelector("#reset"),
    response = document.querySelector(".response");

search.addEventListener("click", async function () {
    // Clear response box
    response.innerHTML = '';
    var termo = document.querySelector("#termo").value;

    // Implementação da consulta AJAX com API Fetch e Async e Await
    let reply = await fetch('https://web-api-dicionario-simples.herokuapp.com/Words/get'+ termo);
    let obj = await reply.json();
    console.log(obj);
    if (obj.status == 200) {
        /* ====== Estruturas da resposta ====== */
        // Word
        var word = document.createElement("p");
        word.className = "word";
        word.innerHTML = obj.data[0].word;
        response.appendChild(word);

        // Definitions
        var definitions = document.createElement("ol");
        for (var i = 0; i < obj.data.length; i++) {
            // definitionType
            var type = document.createElement("li");
            type.innerHTML = obj.data[i].definitionType;
            // definitionText
            var text = document.createElement("p");
            text.innerHTML = obj.data[i].definitionText;
            type.appendChild(text);
            definitions.appendChild(type);
        }
        response.appendChild(definitions);
    } else {
        document.querySelector('#erro').innerHTML = "404 Word not found";
        document.querySelector('#erro').classList.toggle('displaynone', false);
    }
});

reset.addEventListener("click", function () {
    termo.value = '';
    response.innerHTML = '';
});