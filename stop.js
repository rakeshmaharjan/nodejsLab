const { exit } = require('process');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


let sum = 0;
function getNumber()
{
    readline.question('Enter number: ', number => {
        if (number == "stop") {
            console.log('sum of number: ', sum);
            readline.close();
        }
        else {
            sum += parseInt(number);
            getNumber();
        }
    });
}

getNumber();



