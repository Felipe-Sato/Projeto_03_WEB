var submit = document.querySelector("#submit"),
    reset = document.querySelector("#reset"),
    termo,
    response = document.querySelector(".response");
    /*
    word = document.querySelector(".word"),
    phonetic = document.querySelector(".phoenetic"),
    license_name = document.querySelector(".license_name"),
    license_url = document.querySelector(".license_url")
    ol = document.querySelector("ol");*/

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
        //word
        var word = document.createElement("p");
        word.className = "word";
        word.innerHTML = obj[0].word;
        response.appendChild(word);

        //phonetic
        if(obj[0].phonetic != null) {
            var phonetic = document.createElement("p");
            phonetic.className = "phonetic";
            phonetic.innerHTML = obj[0].phonetic;
            response.appendChild(phonetic);
        }

        //meanings
        var meaning = document.createElement("ol");
        meaning.className = "meaning";
        for (var i = 0; i < obj[0].meanings.length; i++) {
            var outer_li = document.createElement("li");
            var partOfSpeech = document.createElement("ul");
            partOfSpeech.className = "partOfSpeech";
            partOfSpeech.innerHTML = obj[0].meanings[i].partOfSpeech;
            var inner_li = document.createElement("li");

            var ol = document.createElement("ol");
            ol.className = "definitions";
            //definitions
            for (var j = 0; j < obj[0].meanings[i].definitions.length; j++) {
                var definition = document.createElement("li");
                definition.className = "definition"
                definition.innerHTML = obj[0].meanings[i].definitions[j].definition;

                var ul = document.createElement("ul");
                //synonyns
                if (obj[0].meanings[i].definitions[j].synonyns != null) {
                    var synonyns = document.createElement("li");
                    synonyns.className = "synonyns";
                    synonyns.innerHTML = obj[0].meanings[i].definitions[j].synonyns;
                    ul.appendChild(synonyns)
                }
                //antonyns
                if (obj[0].meanings[i].definitions[j].antonyns != null) {
                    var antonyns = document.createElement("li");
                    antonyns.className = "antonyns";
                    antonyns.innerHTML = obj[0].meanings[i].definitions[j].antonyns;
                    ul.appendChild(antonyns);
                }
                //example
                if (obj[0].meanings[i].definitions[j].example != null) {
                    var example = document.createElement("li");
                    example.className = "example";
                    example.innerHTML = obj[0].meanings[i].definitions[j].example;
                    ul.appendChild(example);
                }
                
                definition.appendChild(ul);
                ol.appendChild(definition);
                inner_li.appendChild(ol);
            }
            partOfSpeech.appendChild(inner_li);
            outer_li.appendChild(partOfSpeech);
            meaning.appendChild(outer_li);
        }   
        
        response.appendChild(meaning);

        // license
        var license_name = document.createElement("p");
            license_name.className = "license";
            license_name.innerHTML = obj[0].license.name;
            response.appendChild(license_name);

            var license_url = document.createElement("p");
            license_url.className = "license";
            license_url.innerHTML = obj[0].license.url;
            response.appendChild(license_url);
    }
})

reset.addEventListener("click", function(){
    response.innerHTML = '';
})