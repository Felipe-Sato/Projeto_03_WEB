var upload = document.querySelector('#upload');

upload.addEventListener("click", async function () {
  var file = document.querySelector('#file').value;
  const json = await fetch('https://web-api-dicionario-simples.herokuapp.com/Upload', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    mode: "cors",
    body: JSON.stringify({
      File: file
    })
  });
  if (json.status == 200) {
    document.querySelector('#erro').innerHTML = "Upload feito com sucesso!";
  } else {
    document.querySelector('#erro').innerHTML = "Erro ao fazer Upload!";
  }
  document.querySelector('#erro').classList.toggle('displaynone', false);
  logado();

});