function passwordmatch(){
    if(document.getElementById("a").value==document.getElementById("b").value)
    {
        document.getElementById("warning").style.display="none";
        document.getElementById("signup").style.display="flex";
    }
    
    else
    {
        document.getElementById("warning").style.display="flex";
        document.getElementById("signup").style.display="none";
    }
}
    var allInputs=document.querySelectorAll("input")
    function storeData(){
    var userName=allInputs[0].value
    var password=allInputs[1].value
    localStorage.setItem("Username",userName)
    localStorage.setItem("password",password)
    }
