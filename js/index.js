var botao = document.querySelector('button');
var box = document.getElementById('change');

botao.onclick = function(){
    if(box.style.background=='red'){
        box.style.background='blue';
    }else{
        box.style.background='red';
    }
}