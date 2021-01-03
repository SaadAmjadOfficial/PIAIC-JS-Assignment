var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is " + a + "<br>" + "b is " + b + "<br>" + "result is " + result);
/*Explain the output at each stage:
--a; 1
--a - --b; 1
--a - --b + ++b; 2
--a - --b + ++b + b--; 3 
*/