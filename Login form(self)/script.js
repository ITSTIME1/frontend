const form = document.querySelector("form"),
    eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");

form.onsubmit = (e) =>{
    e.preventDefault();
    if(eInput.value == ""){ // if your email blank empty
        eField.classList.add("shake", "error");
    }else{
        checkEmail();
    }
    if(pInput.value == ""){
        pField.classList.add("shake", "error");
    }

    setTimeout(()=>{ // settime = your shake css ability remove
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    eInput.onkeyup=()=>{
        checkEmail();
    }

    function checkEmail(){
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!eInput.value.match(pattern)){
            eField.classList.add("error");
            let errorTxt = eField.querySelector(".error-Txt");
            
            (eInput.value!="") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Warning Can't be blank email";
        }else{
            eField.classList.remove("error");
        }
        
    }
    pInput.onkeyup=()=>{
        if(pInput.value=""){
            pField.classList.add("error");
        }else{
            pField.classList.remove("error");
        }
    }
    if(!eField.classList.contains("error") && !pField.classList.contains("error")){
        window.location.href="#";
        console.log("Form Submitted!");
    }
    
}