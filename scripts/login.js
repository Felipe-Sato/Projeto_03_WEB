document.getElementById('signin').addEventListener('click', function(){
    document.getElementById('signupbox').classList.toggle('displaynone', false);
})

document.getElementById('signup').addEventListener('click', function(){

    document.getElementById('signupbox').classList.toggle('displaynone', false);
})

function verificaEmail(emailinput){
    if(emailinput.value.indexOf("@") == -1 || emailinput.value.indexOf("@")==0 || emailinput.value.substring(-emailinput.length)=='@' || emailinput.value.length <=3){ 
        document.getElementById('erroemail').innerHTML = "Erro, email invalido";
        document.getElementById('erroemail').classList.toggle('displaynone', false);
        return false;
    }
    let usuario = emailinput.value.slice(0, emailinput.value.indexOf("@"));
    let dominio = emailinput.value.slice(emailinput.value.indexOf("@")+1, emailinput.value.length);

    if(usuario!=null, undefined, '', ' ' && dominio!=null, undefined,' ','') return true;
    else if (usuario == null || dominio == null){
        document.getElementById('erroemail').innerHTML = "Erro, email invalido";
        document.getElementById('erroemail').classList.toggle('displaynone', false);
        return false;
    }
}

function verificaSenha(pswinput){
    senha = pswinput.value;

    if(senha.length >= 3) return true; 
    else{ 
        document.getElementById('errosenha').innerHTML = "Erro, senha invalido";
        document.getElementById('errosenha').classList.toggle('displaynone', false);
        return false;
    }
}
//para testar o registro(signup) temos de usar o usuario definido pela API (para testes)
//podendo escolher qualquer senha para o registro
//email: eve.holt@reqres.in

document.getElementById('signup2').addEventListener('click', async function(emailinput, pswinput){
    emailinput=document.getElementById('user_email');
    pswinput=document.getElementById('user_password');

    if(verificaEmail(emailinput) && verificaSenha(pswinput)){
        const json = await fetch('https://reqres.in/api/register',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({email:emailinput.value,
            password:pswinput.value})
            }
        )
        document.getElementById('errosenha').classList.toggle('displaynone', true);
        document.getElementById('erroemail').classList.toggle('displaynone', true);
    }else if(!verificaEmail(emailinput)){
        document.getElementById('erroemail').innerHTML = "Erro, email invalido";
        document.getElementById('erroemail').classList.toggle('displaynone', false);
    }else if (!verificaSenha(pswinput)){
        document.getElementById('errosenha').innerHTML = "Erro, senha invalido";
        document.getElementById('errosenha').classList.toggle('displaynone', false);
    }
})

//para testar o login podemos utilizar o registrado por nos 
//(utilizando o email padrão mais a senha de escolha)
document.getElementById('signin2').addEventListener('click', async function(emailinput, pswinput){
    emailinput=document.getElementById('user_email');
    pswinput=document.getElementById('user_password');
    if(verificaEmail(emailinput) && verificaSenha(pswinput)){
        const json = await fetch('https://reqres.in/api/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({email:emailinput.value,
            password:pswinput.value})
            }
        )
        let data = await json.json();
        
        if(json.status == 200) localStorage.setItem('token', JSON.stringify(data.token));
        
        logado();
    }
})

logado();
