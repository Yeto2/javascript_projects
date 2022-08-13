    // ------------------------currency exchange--------------------------

    let currInput = document.querySelector("[name = 'dollar']");
    let resault = document.querySelector(".result");
    
    function someFunction(){
        usd = currInput.value;
        mad = (usd * 10.27).toFixed(2) ; 
        resault.textContent = ` ${usd} USD Dollar = ${mad} moroccan Dirham`;
    }
    
    currInput.addEventListener('click', someFunction, false);
    currInput.addEventListener('keyup', someFunction, false);