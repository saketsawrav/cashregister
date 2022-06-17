var cashGiven = document.querySelector("#cash-given")
var billAmount = document.querySelector("#bill-amount")
var checkButton = document.querySelector("#check-button")
var errorMessage = document.querySelector("#error-message")
var noOfNotes = document.querySelectorAll("#no-of-notes")

checkButton.addEventListener('click', clickHandler)

function clickHandler () {
    if (cashGiven.value > 0 && billAmount.value > 0) {
        console.log("Amount is valid")
        // Validate if Cash given by the customer is bigger then the Bill Amount
        if ( cashGiven.value >= billAmount.value) {
            console.log("cash given is valid")
            var totalAmount = cashGiven.value - billAmount.value
            console.log(totalAmount)
        } else {
            errorMessage.innerText = "The Amount given by the customer is not enough"
            console.log("cash given by customer is not enough to proceed further")
        }
    } else {
        errorMessage.innerText = "The Amount entered is invalid!!"
        console.log("The amount is invalid!!")
    }
}