function logado(){
    if(localStorage.getItem("token") != null) {
    document.getElementById('login').classList.toggle('displaynone', true);
    document.querySelector('.dialog').classList.toggle('displaynone', false);

    } else {

        document.getElementById('login').classList.remove('displaynone');
        document.querySelector('.dialog').classList.toggle('displaynone', true);
    }

}

document.getElementById('btnlogoff').addEventListener('click',function(){
    document.getElementById('btnlogoff').classList.add('displaynone');
    localStorage.removeItem('token');

    logado();
})

