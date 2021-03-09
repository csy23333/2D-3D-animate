/**
 * @param {String}
 * @return {Number}
 */
function tmcontinueString(s) {
    let i = 0,
        j = 0,
        max = 1;
    if (s.length === 0) {
        return 0;
    }
    for (; j < s.length; j++) {
        if (s[j] !== s[j - 1]) {
            if (j - i > max) {
                max = j - i;
            }
            i = j;
        }
    }
    return max;
}
console.log(tmcontinueString("aabbbaaaaacc"));
