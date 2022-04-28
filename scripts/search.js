var button = document.querySelector("#submit"),
    termo,
    ul = document.querySelector("ul");

button.addEventListener("click", async function() {
    termo = document.querySelector("#search").value;
    // Implementação da consulta AJAX com API Fetch
    let Body = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+termo);
    let obj = await Body.json();
    for (var i = 0; i < obj.length; i++) {
        var li = document.createElement("li");
            li.innerHTML = obj[i].word;
            console.log(obj[i].word);
            console.log(obj[i].meanings);
            console.log(obj[i].license);
            /*
        for (var j = 0; j < obj[i].meanings.length; j) {
            li.innerHTML = obj[i].meanings[j];
            console.log(li.innerHTML);
        }
        */
    }
})