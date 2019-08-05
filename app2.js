var randomNumber = Math.floor(Math.random() * 5) + 1;
var input = prompt('ทายตัวเลขตั้งแต่ 1-5');

if (parseInt(input) === randomNumber) {
    document.write('คุณทายถูก');
} else {
    document.write('คุณทายผิด เลขสุ่มคือ ' + randomNumber);
}