function validate()

{
    
    var nameEle=document.getElementById("uname");
    var pswEle=document.getElementById("psw");
    
    var name=nameEle.value;
    var psw=pswEle.value;
    
    if(name.trim()==="")
        {
            document.getElementById("errorusername").innerHTML="Usename cannot be empty";
            nameEle.style.border="1px solid  red";
            return false;
        }
   if(psw.trim()==="")
      {
          document.getElementById("errorpsw").innerHTML="password cannot be empty";
            nameEle.style.border="1px solid  red";
            return false;
       }
}
