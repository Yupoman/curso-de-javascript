const sumar = (num1,num2) => parseInt(num1) + parseInt(num2);
const restar = (num1,num2) => parseInt(num1) - parseInt(num2);
const multiplicar = (num1,num2) => parseInt(num1) * parseInt(num2);
const dividir = (num1,num2) => parseInt(num1) / parseInt(num2);

let operacion = prompt("¿Qué operación deseas realizar? + - * /");

if (operacion == "+") {
    resultado = sumar(prompt("Primer nº"), prompt("Segundo nº"));
    alert(`El resultado es ${resultado}`)
}
 else if (operacion == "-") {
    resultado = restar(prompt("Primer nº"), prompt("Segundo nº"));
    alert(`El resultado es ${resultado}`)
}
 else if (operacion == "*") {
    resultado = multiplicar(prompt("Primer nº"), prompt("Segundo nº"));
    alert(`El resultado es ${resultado}`)
}
 else if (operacion == "/") {
    resultado = dividir(prompt("Primer nº"), prompt("Segundo nº"));
    alert(`El resultado es ${resultado}`)
}
 else {alert("Error")}
