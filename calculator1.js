let screen = document.getElementById('screen');
 buttons = document.querySelectorAll('button');
let screenValue = "";

for (item of buttons ){
    item.addEventListener('click' , (e) => {

      buttonText = e.target.innerText;
      console.log('Button Text is ', buttonText);

    if (  buttonText == 'x'  ){
        buttonText = '*';
        screenValue += buttonText;
        screen.value = screenValue;
    }

    else if ( buttonText == 'AC'  ){
        screenValue = "" ;
        screen.value = screenValue;
    }

    else if ( buttonText == 'DEL'  ){
       screen.value = screenValue.slice(0 , screen.value.length -1);
       screenValue = screen.value;
    }

    else if ( buttonText == '=' ){
         screen.value = eval(screenValue);
    }

    else{
        screenValue += buttonText;
        screen.value = screenValue;
    }
    })
}