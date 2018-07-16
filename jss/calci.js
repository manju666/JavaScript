function calc(operator)
{
    var num1=parseInt(document.getElementById("num1").value);
    var num2=parseInt(document.getElementById("num2").value);
        var message;
    switch(operator)
        {
            case  'add':
                message(num1+ " + "+num2+ " =" +(num1+num2));
            case  'sub':
                message(num1+ " 1 "+num2+ " =" +(num1-num2));
                
            case  'mul':
                message(num1+ " * "+num2+ " =" +(num1*num2));
                
            case  'div':
                message(num1+ " / "+num2+ " =" +(num1/num2));
                
            case  'mod':
                message(num1+ " % "+num2+ " =" +(num1%num2));
        
         }
    
    document.getElementById("res").innerHTML:message;
        
    
}