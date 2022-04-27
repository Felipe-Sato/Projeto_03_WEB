var button = document.querySelector("#submit"),
    termo,
    texto = document.querySelector(".response");

button.addEventListener("click", async function() {
    termo = document.querySelector("#search").value;
    // Implementação da consulta AJAX com API Fetch
    let Body = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+termo);
    let obj = await Body.json();
    console.log(obj);
    texto.innerHTML = obj.word;
})