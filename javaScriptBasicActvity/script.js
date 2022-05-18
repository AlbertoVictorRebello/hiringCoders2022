const cpfLength = 11;

function cpfValidation() {    
    let cpf = document.getElementById('cpf').value;
    cpf = cpf.replaceAll(/[.|-]/g, '');    
    let pass = validator(cpf);
    
    if (pass) {
        document.getElementById('success').style.display = 'block';
        document.getElementById('error').style.display = 'none';
    } else {

    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'block';
    }
    
}

function validator(cpf) {
    let base = cpf.substring(0,9);
    let checkSum = cpf.substring(9);
    let digit_1 = checkSum.charAt(0);
    let digit_2 = checkSum.charAt(1);
    let digit_1Limit = 10;
    let digit_2Limit = 11;
    let sum = 0;
    let validatorNum = 0;
    
    if ((base.length + checkSum.length) != cpfLength) {
        return false
    }

    // digit 1 validation
    for (let index = digit_1Limit; index > 1; index--) {
        sum += base.charAt(digit_1Limit - index) * index;
    }

    validatorNum = sum % cpfLength < 2 ? 0 : cpfLength - (sum % cpfLength);

    if (validatorNum != digit_1) {
        return false;
    }

    alert(`${ sum } - ${ validatorNum }`)
    // digit 2 validation
    base = cpf.substring(0,10);
    sum = 0;
    for (let index = digit_2Limit; index > 1; index--) {
        sum += base.charAt(digit_2Limit - index) * index;
    }

    validatorNum = sum % cpfLength < 2 ? 0 : cpfLength - (sum % cpfLength);
    alert(`${ sum } - ${ validatorNum }`)
    if (validatorNum != digit_2) {
        return false;
    }

    return true;

}

function clearScreen() {
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';
}

