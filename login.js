function mobile_validate() {
    document.getElementById("mobile_err").innerHTML = "";
    var number = document.getElementById("mobile").value;
    if (number.length != 10) {
        document.getElementById("mobile_err").innerHTML = "(try again,mobile no. not valid)";
        document.getElementById("mobile_err").style.color = "red";
    }
}
function password_validate() {
    document.getElementById("password_err").innerHTML="";
    var password=document.getElementById("password").value;
    if(password.length>=8){
        var cap=0;
        for(i=0;i<password.length;i++){
            var ch=password.charAt(i);
            if(ch>='A' && ch<='Z'){
                cap++;
            }
        }
        if(cap>0){
            document.getElementById("password_err").innerHTML="(Strong password)";
        }
        else{
            document.getElementById("password_err").innerHTML="(weak password)";
        }
    }
    else{
        document.getElementById("password_err").innerHTML="(password must atleast 8 char)";
    }
    document.getElementById("password_err").style.color="red";
}