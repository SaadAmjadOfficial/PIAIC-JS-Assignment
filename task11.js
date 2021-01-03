var cel1 = 0 , for1 = 0 , cel2 = 0 , for2 = 0 ;
cel1 = +prompt("Enter Temperature in Celsius" , "Temp in C");
for1 = (cel1 * 9 / 5) + 32;
document.write(cel1 + "C is " + for1 + "F" + "<br>");
for2 = +prompt("Enter Temperature in Fahrenheit" , "Temp in F");
cel2 = (for2 - 32) * 5 /9;
document.write(for2 + "F is " + cel2 + "C");