function compute()
{
    var p = document.getElementById("principal").value;
    var t = document.getElementById('years').value;
    var r = document.getElementById('rate').value;


            // Interest = p*t*r/100
    var i = p*t*r/100;

 document.getElementById('result').innerHTML = i;   

document.getElementById('calculatedInterest').innerHTML =  ("<p>If you deposit "+ p + ", at an Interest Rate of "+r+".<br> You will receive an amount of "+i+", after " +t+" years.")
}
