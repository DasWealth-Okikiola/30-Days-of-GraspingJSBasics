var balance = -2.00;
var checkBalance = true;
var isActive = true;

if (checkBalance === true && isActive === true && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2) + ".")
}
else if (checkBalance === true && isActive === false) {
    console.log("Your account is no longer active.")
}
else if (checkBalance === true && isActive == true && balance === 0) {
    console.log("Your account is empty")
}
else if (checkBalance === true && isActive === true && balance <= 0) {
    console.log("Your account is negative, you need to contact bank")
}
else {
    console.log("Thank you and have a nice day!")
}

