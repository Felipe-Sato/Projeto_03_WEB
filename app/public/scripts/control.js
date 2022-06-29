async function logado() {
    const token = localStorage.getItem("token");
    if (token != null) {
        let reply = await fetch('https://web-api-dicionario-simples.herokuapp.com/Users/'+ token);
        let obj = await reply.json();
        if (obj.status == 200) {
            localStorage.setItem('token', obj.token);
            document.getElementById('btnlogoff').classList.remove('displaynone');
            document.getElementById('signup').classList.add('displaynone');
            document.getElementById('signin').classList.add('displaynone');
            document.getElementById('signupbox').classList.toggle('displaynone', true);
            document.querySelector('.mainText').classList.toggle('displaynone', true);
            document.querySelector('.subtitle').classList.toggle('displaynone', true);
            document.querySelector('.search').classList.toggle('displaynone', false);
        }
    } else {

        document.getElementById('signup').classList.remove('displaynone');
        document.getElementById('signin').classList.remove('displaynone');
        document.querySelector('.mainText').classList.toggle('displaynone', false);
        document.querySelector('.subtitle').classList.toggle('displaynone', false);
        document.querySelector('.search').classList.toggle('displaynone', true);
    }

}

document.getElementById('btnlogoff').addEventListener('click', function () {
    document.getElementById('btnlogoff').classList.add('displaynone');
    localStorage.removeItem('token');
    logado();
});

document.querySelector('#btn-form-signup').addEventListener('click', function () {
    document.querySelector('#user_name').classList.toggle('displaynone', false);
});

document.querySelector('#btn-form-signin').addEventListener('click', function () {
    document.querySelector('#user_name').classList.toggle('displaynone', true);
});

document.querySelector('#btn-form-insert').addEventListener('click', function () {
    document.querySelector('#type').classList.toggle('displaynone', false);
    document.querySelector('#termo').classList.toggle('displaynone', false);
    document.querySelector('#text').classList.toggle('displaynone', false);
    document.querySelector('#search').classList.toggle('displaynone', true);
    document.querySelector('#insert').classList.toggle('displaynone', false);
    document.querySelector('#file').classList.toggle('displaynone', true);
});

document.querySelector('#btn-form-search').addEventListener('click', function () {
    document.querySelector('#type').classList.toggle('displaynone', true);
    document.querySelector('#termo').classList.toggle('displaynone', false);
    document.querySelector('#text').classList.toggle('displaynone', true);
    document.querySelector('#search').classList.toggle('displaynone', false);
    document.querySelector('#insert').classList.toggle('displaynone', true);
    document.querySelector('#file').classList.toggle('displaynone', true);
});

document.querySelector('#btn-form-upload').addEventListener('click', function () {
    document.querySelector('#type').classList.toggle('displaynone', true);
    document.querySelector('#termo').classList.toggle('displaynone', false);
    document.querySelector('#text').classList.toggle('displaynone', true);
    document.querySelector('#search').classList.toggle('displaynone', true);
    document.querySelector('#insert').classList.toggle('displaynone', true);
    document.querySelector('#file').classList.toggle('displaynone', false);
})