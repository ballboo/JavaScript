function showData() {
    document.write('JavaScript <br>');
}
showData();

function addNumber(number1, number2) {
    result = number1 + number2;
    document.write('Result = ' + result + '<br>');

}
addNumber(10, 5);

function getMessage(msg) {
    return 'Hello ' + msg + '<br>';
}

document.write(getMessage('PHP'));

var msg = getMessage('Java');
document.write(msg);

var showName = function() {
    document.write('Akakrachai');
}

showName();