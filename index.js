window.onload = function () {
    var target = document.querySelector('.target');
    console.log(target);

    target.addEventListener('click', clickA);//callback func
}

function clickA(e) {
    console.log(e.type);
    e.preventDefault();

    var a = prompt('Enter a value');
    var b = prompt('Enter b value');

    alert(+a + +b);
}