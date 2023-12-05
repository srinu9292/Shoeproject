var allInputs=document.querySelectorAll("input")
console.log(allInputs)
function loginInput(){

    var userName=allInputs[0].value
    var password=allInputs[1].value 
    var originalUserName=localStorage.getItem("Username")
    var originalPassword=localStorage.getItem("password")
    if(document.getElementById("name").value==""){
        document.getElementById("loginwarning").innerHTML="please enter name"
        document.getElementById("loginwarning").style.display="flex";
    }
    else{
        document.getElementById("loginwarning").style.display="none";

    }
    if(userName!=originalUserName && password!=originalPassword)
    {
        document.getElementById("loginwarning").style.display="flex";
        document.getElementById("login").setAttribute("disabled","true")
       
    }
else{
    document.getElementById("loginwarning").style.display="none";
    document.getElementById("login").removeAttribute("disabled","true");
 
}





}
var showPassword=document.getElementById("eyeicon");
var password=document.getElementById("passwordinput");

eyeicon.onclick = function (){
    if(passwordinput.type == "password"){
        passwordinput.type ="text";
        eyeicon.src ="./assets/images/8541830_eye_slash_icon.png";
    }
    else{
        passwordinput.type ="password";
        eyeicon.src = "./assets/images/3844476_eye_see_show_view_watch_icon.png";
    }
}