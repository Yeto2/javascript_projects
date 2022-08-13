// --------------Color Palett---------------
    
        let lis = document.querySelectorAll("ul li");
        let screen = document.querySelector(".screen");
    
    
        if (window.localStorage.getItem("color")) {
            screen.style.background = window.localStorage.getItem("color");
    
            //* remove active class 
            lis.forEach((li)=>{
                li.classList.remove("active");
            })
    
            document.querySelector(`[data-color ="${window.localStorage.getItem("color")}"]`).classList.add("active");
    
        }else{
            console.log("no");
    
        }
    
    
        lis.forEach((li) => {
            li.addEventListener("click" , (e) => {
                console.log(e.currentTarget.dataset.color);
    
                //*remove active class from all lis
                lis.forEach((li) =>{
                    li.classList.remove("active");
                })
                //*add active class to current li
    
                e.currentTarget.classList.add("active");
    
                //*add colors to local storage
    
                window.localStorage.setItem("color" , e.currentTarget.dataset.color)
    
                //*change the screen bg using selected color
    
                screen.style.background = e.currentTarget.dataset.color;
    
            } )
        })