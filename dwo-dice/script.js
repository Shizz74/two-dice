document.addEventListener("DOMContentLoaded", function(event) {
    let btn = document.querySelector(".roll-btn");
let licznik = 0;
btn.addEventListener('click', function(){
    
    let a = 1 + Math.floor(Math.random() * 6); 
    let b = 1 + Math.floor(Math.random() * 6);
    console.log(a, b);
    licznik++;
    let score = document.querySelector('.score');
    let queue = document.querySelector('.queue-roll');
    const dice = ['dice/1a.png', 'dice/2a.png', 'dice/3a.png', 
    'dice/4a.png', 'dice/5a.png', 'dice/6a.png' ];


    const dice1 = new Image();
    dice1.src = dice[a-1];
    let x = 1 + Math.floor(Math.random() * 17)*10;
    dice1.style.transform = 'rotate('+x+'deg)';
    const dice2 = new Image();
    dice2.src = dice[b-1];
    let y = 1 + Math.floor(Math.random() * 17)*10;
    dice2.style.transform = 'rotate('+y+'deg)';

    

    


    if (a==b && a==6){
        queue.innerHTML = "";
        score.innerHTML = "Wygrałeś za " + licznik + " razem. Gratulacje!<br/><br/><br/>";
        licznik = 0;
        
        
        score.appendChild(dice1);
        score.appendChild(dice2);

    }
    else  {
        score.innerHTML = "Niestety nie tym razem<br/><br/><br/>" ;
        queue.innerHTML = "Próba: " + licznik;
        score.appendChild(dice1);
        score.appendChild(dice2);
    }


}) ;

});

