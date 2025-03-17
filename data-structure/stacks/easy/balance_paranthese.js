// Write a function to check if a given string has balanced parentheses.

const paranthesMap = new Map()
paranthesMap.set("[",false)
paranthesMap.set("{",false)
paranthesMap.set("(",false)


function isBalanceParanthes(str) {
    for (let i = 0; i < str.length; i++) {
        if(paranthesMap.has(str[i]) && !paranthesMap.get(str[i])) paranthesMap.set(str[i],true)
        else if(paranthesMap.has(str[i]) && paranthesMap.get(str[i])) paranthesMap.set(str[i],false)
    }
    for (const key of paranthesMap.keys()) {
        if(key) return false
    }
    return true
}

console.log(isBalanceParanthes('[1(2+3*3)*{ehsan}$]'));
