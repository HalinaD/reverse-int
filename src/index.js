module.exports = function reverse (n) {
    let s = String(Math.abs(n));
    return   Number(s.split('').reverse().join(''));
}



