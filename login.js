function login(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("pass").value;
    if(username=="admin" && password==("user")){
        alert("login done");
        return false;
    }else{
        alert("login faild");
    }
}