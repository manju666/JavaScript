function checkprime()
{
    num=getuserinput();

     flag = true;
 if( num < 2)
   flag = false;
  
  for( var i=2 ; i <= Math.sqrt(num); i++)
    {
     if(num % i == 0)
       {
         flag=false;
         break;
        } 
    }

 if(flag)
     {
         showresult("Given number "+num+" is prime ");
}
    else
    {
        showresult("Given number "+num+" is not prime ");
}
}

function factorial()
{
num=getuserinput();
    var res=1;
    for(var i=2; i <= num; i++)
        {
            res = res * i;
          }
     showresult("factorial of "+num+" is " +res);
}

function factors()
{
   num=getuserinput();
    var output = "";
    for(var i = 1; i <= num; i++)
        {
            if(num % i ==0)
                {
                    output += i +"";
                }
            
        }
    showresult("factors of "+num+ " is : "+output);
}

function fibonacci()
{
num = getuserinput();
     var output = " ";
    if(num == 0)
        { 
            output += "0";
        }
    else if(num ==1)
        {
            output += "0 1";
        }
    else
    { 
        var a = 0, b = 1;
       output += "0 1";
        for(var i = 3; i <= num; i++)
            {
                c=a+b;
                output += " "+c;
                a=b;
                b=c;
             }
    }
    
     showresult("fibonacci of "+num+ " is : "+output);
}




function getuserinput()
{
num = document.getElementById("num").value;
    return num;
}

function showresult(message)
{
document.getElementById("res").innerHTML="<h3>"+message
+"</h3>"
}
