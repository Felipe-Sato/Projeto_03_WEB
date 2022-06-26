var search = document.querySelector("#search"),
    reset = document.querySelector("#reset"),
    response = document.querySelector(".response");

search.addEventListener("click", async function () {
    // Clear response box
    response.innerHTML = '';
    var termo = document.querySelector("#termo").value;

    // Implementação da consulta AJAX com API Fetch e Async e Await
    let obj = await fetch('https://web-api-dicionario-simples.herokuapp.com/Words/get?word='+ termo);
    if (obj.status === 200) {
        console.log(obj);
        /* ====== Estruturas da resposta ====== */
        // Word
        var word = document.createElement("p");
        word.className = "word";
        word.innerHTML = obj.data[0].word;
        response.appendChild(word);

        // Definitions
        var definitions = document.createElement("ol");
        for (var i = 1; i < obj.data.length; i++) {
            // definitionType
            var definitionType = document.createElement("li");
            definitionType = obj.data[i].definitionType;
            // definitionText
            var definitionText = document.createElement("p");
            definitionText = obj.data[i].definitionText;
            definitionType.appendChild(definitionText);
            definitions.appendChild(definitionType);
        }
        response.appendChild(definitions);
    } else {
        document.querySelector('#erro').innerHTML = data.error;
        document.querySelector('#erro').classList.toggle('displaynone', false);
    }
});

reset.addEventListener("click", function () {
    termo.value = '';
    response.innerHTML = '';
});