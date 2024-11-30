function getResult(first, second, sign){
    document.querySelector('.demonstration').innerHTML='Result:';
    document.querySelector('.center').style='display:none;';
    let result=document.createElement('div');

    result.innerHTML=first + sign + second + '=';
    result.innerHTML+=eval(first + sign + second);
    document.querySelector('.demonstration').innerHTML = '';
    document.querySelector('.demonstration').append(result);
}

document.querySelector('.submit').onclick=function(){
    let first=document.querySelector('.first').value;
    let second=document.querySelector('.second').value;
    let sign=document.querySelector('.sign').value;

    let secondNumber=parseFloat(second);

    if(isNaN(secondNumber))
        alert('Введите корректное число');
    else if (secondNumber === 0 && sign === '/')
        alert('Ошибка деления на ноль');
    else if (first.length !==0 && second.length!==0)
        getResult(first, second, sign);
    else 
        alert('Введите число');
};

