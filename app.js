var userName = prompt('คุณคือใคร');
// ==, === , != , !== , <= , >= , < , > 
if (userName === 'admin') {
    document.write('<p>คุณคือ admin</p>');
} else if (userName === 'user') {
    document.write('<p>คุณคือ user </p>');
} else {
    document.write('<p>คุณคือ </p>');
    document.write(userName);
}