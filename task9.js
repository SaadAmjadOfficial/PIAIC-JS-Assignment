var num1 = 0 , num2 = 0 , ans = 0;
num1 = +prompt("Enter 1st number" , "1st num");
num2 = +prompt("Enter 2nd number" , "2nd num");
    ans = num1 * num2;
    document.write("Multiplication of " + num1 + " and " + num2 + " is " + ans + "<br>");
    ans = num1 / num2;
    document.write("Division of " + num1 + " and " + num2 + " is " + ans + "<br>");
    ans = num1 - num2;
    document.write("Subtraction of " + num1 + " and " + num2 + " is " + ans + "<br>");
    ans = num1 % num2;
    document.write("Modulus of " + num1 + " and " + num2 + " is " + ans);