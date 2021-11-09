// create function to determine the given expression is correct or not
// expression will be string of open bracket nor close bracket e.g ({[[()]]})
// your function should determine the expression is it correct or not
// examples:
// ({[]}) => true
// ([][]{})=> true
// ({)(]){[} => false
// [)()] => false

/**
 * 1. buat satu variabel input string
 * 2. tentukan apakah string punya () jika iya true, jika tidak false
 * 3. cetak hasil
 */

// if string0 = "(" && stringAkhir = ")" return true
// else = false

function isStringBracket(inputText) {
    for (let i = 0; i < inputText.length; i++) {
        console.log(inputText[i])
        if (inputText[0] !== inputText[8]) {
            return true
        }
    }
    return false
}

console.log(isStringBracket("()((((()))))"))