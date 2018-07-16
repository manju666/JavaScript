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


function palindrome()
{
   num1 = getuserinput1();
   var a,b,temp=0;

b=num1;
   while(num1>0)
   {
     a=num1%10;
     num1=parseInt(num1/10);
     temp=temp*10+a;
    }
  if(temp==b)
   {
     showresult(" Given number "+b+" is  palindrome");  
    }
   else
   {
   showresult(" Given number "+b+" isnot  palindrome");  

}
    
}





function reverse()
{
   num1 = getuserinput1();
     var a,b,temp=0;

b=num1;
      while(num1>0)
      {
        a=num1%10;
        num1=parseInt(num1/10);
        temp=temp*10+a;
       }
    showresult(" Reverse of number "+b+" is "+temp);  
    
}



function sumofdigits()
{
   num1 = getuserinput1();
    var a,b,temp=0

b=num1;
        while(num1 != 0)
       {
         a = num1 % 10;
          temp = temp+a;
           num1=Math.floor(num1/10);
         }
   showresult("Sum of "+b+" is number "+temp);  
    
}



function sumoftwo()
{
   num1=getuserinput1();
    var sum=0;
    sum=num1;
    while(num1 != 0)
        {
            sum =  Math.floor(num/10); + Math.floor(num%10);
            num1 = sum;
        }
    showresult("Result 0f "+num1+ " is : "+sum);
}






function getuserinput1()
{
num1 = document.getElementById("num1").value;
    return num1;
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
