//were you born on a leap year?
var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log('\n-----------------------------------');
console.log(chalk.black.bold.bgGreenBright('LEAP YEAR BABY OR NOT??'));
console.log('------------------------------------');
console.log(chalk.bold.red("Want to know whether you were born on leap year or not?"));


var username = readlineSync.question(chalk.green('Then common ,Enter your Name: \n'));
// console.log(username);

console.log('\n');
console.log(chalk.bold.bgRedBright(username + ' Let\'s See Whether you are born on a Leap Year'));

var dateOfBirth = readlineSync.question(chalk.green('\nPlease Enter your Date of Birth in YYYY/MM/DD format: '));

var split = dateOfBirth.split('/');
// console.log(split); 
split1 = split[0];

// var year = dateOfBirth.substring(0, 4);
// console.log(year);

if (isNaN(parseInt(split1))) {
    console.log(chalk.bgCyan('\nPlease Enter a Valid Date Of Birth format'));
} else {
    if (split1 >= 1000 && split1 <= 9999) {
        if (split1 % 400 === 0 || split1 % 4 === 0) {
            console.log(chalk.cyanBright('\nCongratulations,' + username + ' you were born on a Leap Year!!'));
            console.log(chalk.bgYellow('\nThank You ' + username + ' for Playing this Game. Please Share a Screenshot on Social media.'));
        } else if (split1 % 100 === 0) {
            console.log(chalk.CyanBright('\nSorry,' + username + ' you were not born on a Leap Year!!'));
            console.log(chalk.bgYellow('\nThank You ' + username + ' for Playing this Game.'));
        }
        else {
          
            console.log(chalk.red('\nSorry,' + username + ' you were not born on a Leap Year!!'));
            console.log(chalk.bgYellow('\nThank You ' + username + ' for Playing this Game.'));
        }
    } else {
      
        console.log(chalk.redBright('\nPlease Enter Date Of Birth in Valid Format'));
    }
}