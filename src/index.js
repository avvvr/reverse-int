module.exports = function reverse(n) {
    let strArr = String(n).split('');
    if (strArr[0] === '-') {
        strArr.shift();
    }
    return Number(strArr.reverse().join(''));
}