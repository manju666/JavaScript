
function checknumber()
{
    var num = document.getElementById("num").value;
    var message;
    if(num % 2 == 0)
        {
            message="<h3> Number" +num+ "is Even </h3>";
         }
    else
        {
            message="<h3> Number" +num+ "is Odd </h3>";
        }
     document.getElementById("res").innerHTML = message;
}

function billcal()
{
    var units =document.getElementById("unit").Value;
    var total = 0;
    var amt = 0;
    var min = 50;
    var message;
    if ( units >=0 && units <100)
        {
            amt = units * 5;
         }
    else if(units >=100 && units < 500)
        {
            amt = units * 6;
        }
    else
    {
        amt = units * 10;
    }
    
    total = min + amt;
     message="Total amount to pay" +total;
    document.getElementById("res1").innerHTML = message;
}