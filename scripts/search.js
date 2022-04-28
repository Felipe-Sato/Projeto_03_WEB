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
            ul.appendChild(li);
            console.log(obj[i].license.name);
            console.log(obj[i].license.url);

        for (var j = 0; j < obj[i].meanings.length; j++) {
            console.log(obj[i].meanings[j].partOfSpeech);
            li.innerHTML = obj[i].meanings[j].partOfSpeech;
            ul.appendChild(li);
            li.innerHTML = obj[i].meanings[j].synonyns;
            ul.appendChild(li);
            li.innerHTML = obj[i].meanings[j].antonyns;
            ul.appendChild(li);

            for (var k = 0; k < obj[i].meanings[j].definitions.length; k++) {
                console.log(obj[i].meanings[j].definitions[k].definition)
                li.innerHTML = obj[i].meanings[j].definitions[k].definition;
                ul.appendChild(li);
                li.innerHTML = obj[i].meanings[j].definitions[k].synonyns;
                ul.appendChild(li);
                li.innerHTML = obj[i].meanings[j].definitions[k].antonyns;
                ul.appendChild(li);
                li.innerHTML = obj[i].meanings[j].definitions[k].example;
                ul.appendChild(li);
            }
        }
    }
})