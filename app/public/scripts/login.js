document.getElementById('signin').addEventListener('click', function () {
    document.getElementById('signupbox').classList.toggle('displaynone', false);
})

document.getElementById('signup').addEventListener('click', function () {

    document.getElementById('signupbox').classList.toggle('displaynone', false);
})

function verificaEmail(emailinput) {
    console.log(emailinput.value.length);
    if (emailinput.value.indexOf("@") == -1 || emailinput.value.indexOf("@") == 0 ||
        emailinput.value.indexOf("@") == emailinput.value.length - 1 || emailinput.value.length < 3) {
        document.getElementById('erro').innerHTML = "Erro, email invalido";
        document.getElementById('erro').classList.toggle('displaynone', false);
        return false;
    } else {
        return true;
    }
}

function verificaSenha(pswinput) {
    senha = pswinput.value;

    if (senha.length >= 3) return true;
    else {
        document.getElementById('erro').innerHTML = "Erro, senha invalido";
        document.getElementById('erro').classList.toggle('displaynone', false);
        return false;
    }
}

document.getElementById('signup2').addEventListener('click',  function (nomeinput, emailinput, pswinput) {
    nomeinput = document.getElementById('user_name');
    emailinput = document.getElementById('user_email');
    pswinput = document.getElementById('user_password');

    if (verificaEmail(emailinput) && verificaSenha(pswinput)) {
        const json =  fetch('https://web-api-dicionario-simples.herokuapp.com/Users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nome: nomeinput.value,
                email: emailinput.value,
                senha: pswinput.value,
                admin: false
            })
        });
        if (!json.ok) {
            document.getElementById('erro').innerHTML = "Erro na consulta a API";
            document.getElementById('erro').classList.toggle('displaynone', false);
        }
    }

})

document.getElementById('signin2').addEventListener('click', async function (emailinput, pswinput) {
    emailinput = document.getElementById('user_email');
    pswinput = document.getElementById('user_password');
    if (verificaEmail(emailinput) && verificaSenha(pswinput)) {
        const json = await fetch('https://web-api-dicionario-simples.herokuapp.com/Users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: emailinput.value,
                password: pswinput.value
            })
        });
        let data = await json.json();
        if (json.status == 200) {
            localStorage.setItem('token', JSON.stringify(data.token));
        } else {
            document.getElementById('erro').innerHTML = "Erro na consulta a API";
            document.getElementById('erro').classList.toggle('displaynone', false);
        }
        logado();
    }
})

logado();
