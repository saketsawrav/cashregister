var cashGiven = document.querySelector("#cash-given")
var billAmount = document.querySelector("#bill-amount")
var checkButton = document.querySelector("#check-button")
var errorMessage = document.querySelector("#error-message")
var noOfNotes = document.querySelectorAll("#no-of-notes")

checkButton.addEventListener('click', clickHandler)

function clickHandler () {
    if (cashGiven.value > 0 && billAmount.value > 0) {
        console.log("Amount is valid")
    } else {
        errorMessage.innerText = "The Amount entered is invalid!!"
        console.log("The amount is invalid!!")
    }
}