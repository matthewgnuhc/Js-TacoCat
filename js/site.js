function getUserString() {
    //Get the user's input
    let userString = document.getElementById("userString").value;

    //Reverse the user's input - separate function
    let revString = reverseString(userString);

    //Compare original input and reversed input - separate function
    let result = compareStrings(userString, revString);

    //Output Result - separate function
    displayData(result, userString, revString);

};

function reverseString(userString) {
    let startValue = userString.length - 1;
    let endValue = 0;


    let revString = "";

    //In a decremented for loop the startValue must be higher than the endValue
    for (let i = startValue; i >= endValue; i--) {
        revString += userString[i];
    };

    return revString;
}

function reverseStringB(userString) {
    //Tall code using intermediate variables for troubleshooting
    let splitArray = userString.split("");
    let revArray = splitArray.reverse();
    let rejoinArray = revArray.join("");

    //Uses array functions to reverse the string
    return userString.split('').reverse().join("");
}


function compareStrings(userString, revString) {

    const regEx = /[^A-Z0-9]/ig;

    let normalUser = userString.toLowerCase().replace(regEx, "");
    let normalRev = revString.toLowerCase().replace(regEx, "");

    
    if (normalUser == normalRev) {
        return "was a palindrome";
    } else {
        return "was not a palindrome";
    };
};

function displayData(result, userString, revString) {
   
    let output = document.getElementById("results");

    output.innerHTML = `After reversing your string I found that it ${result}<br />You entered ${userString}<br />Reversed was ${revString}`;
};