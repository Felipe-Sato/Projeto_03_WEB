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

//para testar o registro(signup) temos de usar o usuario definido pela API (para testes)
//podendo escolher qualquer senha para o registro
//email: eve.holt@reqres.in
//senha: cityslicka

document.getElementById('signup2').addEventListener('click',  function (emailinput, pswinput) {
    emailinput = document.getElementById('user_email');
    pswinput = document.getElementById('user_password');

    if (verificaEmail(emailinput) && verificaSenha(pswinput)) {
        const json =  fetch('https://web-api-dicionario-simples.herokuapp.com/Users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: emailinput.value,
                password: pswinput.value
            })
        }
        )
        if (!json.ok) {
            document.getElementById('erro').innerHTML = "Erro na consulta a API";
            document.getElementById('erro').classList.toggle('displaynone', false);
        }
    }

})

//para testar o login podemos utilizar o registrado por nos 
//(utilizando o email padrão mais a senha de escolha)
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
