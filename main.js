const cashGiven = document.querySelector("#cash-given")
const billAmount = document.querySelector("#bill-amount")
const checkButton = document.querySelector("#check-button")
var errorMessage = document.querySelector("#error-message")
const noOfNotes = document.querySelectorAll(".no-of-notes")
const availableNotes = [2000, 500, 100, 50, 20, 10, 1]

checkButton.addEventListener('click', clickHandler)

function clickHandler() {
    if (cashGiven.value > 0 && billAmount.value > 0) {
        console.log("Amount is valid")
        // Validate if Cash given by the customer is bigger then the Bill Amount
        if (cashGiven.value >= billAmount.value) {
            console.log(cashGiven.value >= billAmount.value)
            console.log(cashGiven.value + " , " + billAmount.value)
            console.log("cash given is valid")
            var totalAmount = cashGiven.value - billAmount.value
            calculateChange(totalAmount)
            console.log(totalAmount)
        } else {
            console.log(cashGiven.value >= billAmount.value)
            console.log(cashGiven.value + " , " + billAmount.value)
            errorMessage.innerText = "The Amount given by the customer is not enough"
            console.log("cash given by customer is not enough to proceed further")
        }
    } else {
        errorMessage.innerText = "The Amount entered is invalid!!"
        console.log("The amount is invalid!!")
    }
}

function calculateChange(amount) {
    for (i = 0; i < availableNotes.length; i++) {
        changeToBeGiven = Math.trunc(amount / availableNotes[i])
        amount %= availableNotes[i]
        noOfNotes[i].innerText = changeToBeGiven
    }
}