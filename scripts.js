var input = prompt('กรอกข้อความที่จะทำซ้ำ');
var count = prompt('จำนวนรอบ');
/*
for (var i = 1; i <= count; i++) {
    document.write('จำนวนรอบ' + i + ' ข้อความ: ' + input + '<br>');
}
*/

var i = 1;
while (i <= parseInt(count)) {
    document.write('จำนวนรอบ' + i + ' ข้อความ: ' + input + '<br>');
    i++;
}