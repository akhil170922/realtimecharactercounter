let textarea=document.getElementById("textarea");
let counter = document.getElementById("counter");

textarea.addEventListener("input",function(){
    let count=textarea.value.length;
    counter.innerHTML=count+ " "+"Characters";
    let errors=document.getElementById("error");
    if(count<120){
        errors.innerHTML="need 120 characters at min."
    }
    else{
        errors.innerHTML=" "
    }
     if(count==300){
        errors.innerHTML="limited to 300 characters"
    }
})
