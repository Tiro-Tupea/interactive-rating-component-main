window.onload=function(){

    const btnChoice = document.querySelectorAll('.btn-choice');
    const btnSubmit = document.querySelector('#submit');
    const mainCart  = document.querySelector('.first-cart');
    const thkUCart  = document.querySelector('.thk-u-cart');
    const scoreRate = document.querySelector('.score');
    let rate;


    console.dir(btnChoice);

    btnChoice.forEach(item => {
        item.addEventListener('click', (e) =>{
            e.preventDefault
            rate = e.target.textContent;

        });
    })
            

    btnSubmit.onclick = function(){showThku()};
        
  

    


    function showThku() {

        if(rate == null){
            alert("We really need your feedback pls");
        }
        else {
            mainCart.style.display = "none";
            thkUCart.style.display = "block";
            thkUCart.style.transitionTimingFunction = "ease";
            scoreRate.textContent = "You selected " + rate + " out of 5"
        }

    }
    

}