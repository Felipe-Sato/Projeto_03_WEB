var submit = document.querySelector("#submit"),
    reset = document.querySelector("#reset"),
    termo,
    response = document.querySelector(".response");

submit.addEventListener("click", async function() {
    // Clear response box
    response.innerHTML = '';
    termo = document.querySelector("#search").value;

    // Implementação da consulta AJAX com API Fetch e Async e Await
    let Body = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+termo);
    if (!Body.ok) {
        response.innerHTML = "Erro ao pesquisar: " + termo;
    } else {
        let obj = await Body.json();

        /* ====== Estruturas da resposta ====== */
        // Word
        var word = document.createElement("p");
        word.className = "word";
        word.innerHTML = obj[0].word;
        response.appendChild(word);

        // Definitions
        var definitions = document.createElement("ol");
        for (var i = 1; i < obj.length; i++) {
            // definitionType
            var definitionType = document.createElement("li");
            definitionType = obj[i].definitionType;
            // definitionText
            var definitionText = document.createElement("p");
            definitionText = obj[i].definitionText;
            definitionType.appendChild(definitionText);
            definitions.appendChild(definitionType);
        }
        response.appendChild(definitions);
    }
});

reset.addEventListener("click", function(){
    response.innerHTML = '';
})