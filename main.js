const cashGiven = document.querySelector("#cash-given")
const billAmount = document.querySelector("#bill-amount")
const checkButton = document.querySelector("#check-button")
var errorMessage = document.querySelector("#error-message")
const noOfNotes = document.querySelectorAll(".no-of-notes")
const labelBillAmount = document.querySelector(".bill-label")
const availableNotes = [2000, 500, 100, 50, 20, 10, 1]
const nextButton = document.querySelector("#next-button")
const inputAmounts = document.querySelectorAll("#cash-given, #bill-amount")

resetInputs()
hideBillAmountButton()
hideErrorMessage()

nextButton.addEventListener('click', nextClickHandler)
checkButton.addEventListener('click', clickHandler)

function nextClickHandler() {
    hideBillAmountButton()
    hideErrorMessage()
    if (Number(cashGiven.value) > 0) {
        showBillAmountButton()
    } else if(typeof cashGiven.value === 'string'){
        showErrorMessage ("Enter a Number not a string.")
        resetInputs()
    } else {
        showErrorMessage("Enter a valid Amount to proceed")
        resetInputs()
    }
}

function clickHandler() {
    hideErrorMessage()
    if (Number(cashGiven.value) > 0 && Number(billAmount.value) > 0) {
        // Validate if Cash given by the customer is bigger then the Bill Amount
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            var totalAmount = cashGiven.value - billAmount.value
            calculateChange(totalAmount)
        } else {
            showErrorMessage("The Amount given by the customer is not enough")
        }
    } else if(typeof billAmount.value === 'string'){
        showErrorMessage ("Enter a Number not a string.")
        resetInputs()
    } else {
        showErrorMessage("The Amount entered is invalid!!")
        resetInputs()
    }
}

function calculateChange(amount) {
    for (i = 0; i < availableNotes.length; i++) {
        changeToBeGiven = Math.trunc(amount / availableNotes[i])
        amount %= availableNotes[i]
        noOfNotes[i].innerText = changeToBeGiven
    }
}

function hideBillAmountButton (){
    billAmount.style.display = "none"
    checkButton.style.display = "none"
    labelBillAmount.style.display = "none"
}

function showBillAmountButton () {
    billAmount.style.display = "block"
    checkButton.style.display = "block"
    labelBillAmount.style.display = "block"
}

function showErrorMessage(msg) {
    errorMessage.innerText = msg
    errorMessage.style.display = "block"
}

function hideErrorMessage() {
    errorMessage.style.display = "none"
}

function resetInputs() {
    inputAmounts.forEach(input => {
        input.value = '';})
}