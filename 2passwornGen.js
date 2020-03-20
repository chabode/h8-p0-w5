function changeVocals (str) {
    //code di sini
    var newStr = ''
    for(var i = 0; i<str.length; i++){
        if(str[i] === 'a'){
            newStr += 'b'
        } else if (str[i] === 'A'){
            newStr += 'B'
        } else if (str[i] === 'e'){
            newStr += 'f'
        }else if (str[i] === 'E'){
            newStr += 'F'
        }else if (str[i] === 'i'){
            newStr += 'j'
        }else if (str[i] === 'I'){
            newStr += 'J'
        }else if (str[i] === 'o'){
            newStr += 'p'
        }else if (str[i] === 'O'){
            newStr += 'P'
        }else if (str[i] === 'u'){
            newStr += 'v'
        }else if (str[i] === 'U'){
            newStr += 'V'
        } else{
            newStr += str[i]
        }
    }
    return newStr
}

function reverseWord (str) {
//code di sini
    var revKata = ''
    for(var i = str.length -1; i>= 0; i--){
        revKata += str[i]
    }
    return revKata
}

function setLowerUpperCase (str) {
//code di sini
    var setLowUp = ''
    for(var i = 0; i<str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            setLowUp += str[i].toUpperCase()
        } else if (str[i] === str[i].toUpperCase()){
            setLowUp += str[i].toLowerCase()
        }
    }
    return setLowUp
}

function removeSpaces (str) {
//code di sini
    var remSpace = ''
    for (var i = 0; i<str.length; i++){
        if(str[i] === ' '){
            remSpace += ''
        } else {
            remSpace += str[i]
        }
    }
    return remSpace
}

function passwordGenerator (name) {
//code di sini
    if (name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else {
        var vocal = changeVocals(name)
        var revWord = reverseWord(vocal)
        var lowerUpper = setLowerUpperCase(revWord)
        var result = removeSpaces(lowerUpper)
    }
    return result
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'