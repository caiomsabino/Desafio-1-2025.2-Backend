function palindrome(str){
    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

    let reversed = str.split('').reverse().join('');

    return str === reversed;
}