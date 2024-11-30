function getResult(first, second, sign){
    document.querySelector('.demonstration').innerHTML='Result';
    document.querySelector('.center').style='display:none';
    let result=document.createElement('div');

    result.innerHTML=first+sign+second+'=';
    result.innerHTML=eval(first+sign+second);
    document.querySelector('.demostration').innerHTML='';
    document.querySelector('.demostration').append(result);
}

document.querySelector('.submit').onclick=function(){
    let first=document.querySelector('.first').value;
    let second=document.querySelector('.second').value;
    let sign=document.querySelector('sign').value;

    let secondNumber=parseFloat(second);

    if(isNaN(secondNumber))
        alert('Enter wright number')
    else if (secondNumber == 0 && sign == '/')
        alert('Division by zero error')
    else if (first.lenght !=0 && second.lenght!=0)
        getResult(first, second, sign);
    else 
        alert('Enter a number');

};

