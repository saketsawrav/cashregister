const cashGiven = document.querySelector("#cash-given")
const billAmount = document.querySelector("#bill-amount")
const checkButton = document.querySelector("#check-button")
var errorMessage = document.querySelector("#error-message")
const noOfNotes = document.querySelectorAll(".no-of-notes")
const availableNotes = [2000, 500, 100, 50, 20, 10, 1]

checkButton.addEventListener('click', clickHandler)

function clickHandler() {
    if (Number(cashGiven.value) > 0 && Number(billAmount.value) > 0) {
        // Validate if Cash given by the customer is bigger then the Bill Amount
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            var totalAmount = cashGiven.value - billAmount.value
            calculateChange(totalAmount)
        } else {
            errorMessage.innerText = "The Amount given by the customer is not enough"
        }
    } else {
        errorMessage.innerText = "The Amount entered is invalid!!"
    }
}

function calculateChange(amount) {
    for (i = 0; i < availableNotes.length; i++) {
        changeToBeGiven = Math.trunc(amount / availableNotes[i])
        amount %= availableNotes[i]
        noOfNotes[i].innerText = changeToBeGiven
    }
}