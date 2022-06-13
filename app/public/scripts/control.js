function logado(){
    if(localStorage.getItem("token") != null) {
    document.getElementById('btnlogoff').classList.remove('displaynone');
    document.getElementById('signup').classList.add('displaynone');
    document.getElementById('signin').classList.add('displaynone');
    document.getElementById('signupbox').classList.toggle('displaynone', true);
    document.querySelector('.mainText').classList.toggle('displaynone', true);
    document.querySelector('.subtitle').classList.toggle('displaynone', true);
    document.querySelector('.search').classList.toggle('displaynone', false);

    } else {

        document.getElementById('signup').classList.remove('displaynone');
        document.getElementById('signin').classList.remove('displaynone');
        document.querySelector('.mainText').classList.toggle('displaynone', false);
        document.querySelector('.subtitle').classList.toggle('displaynone', false);
        document.querySelector('.search').classList.toggle('displaynone', true);
    }

}

document.getElementById('btnlogoff').addEventListener('click',function(){
    document.getElementById('btnlogoff').classList.add('displaynone');
    localStorage.removeItem('token');

    logado();
})

