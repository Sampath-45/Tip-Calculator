let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmountInput = document.getElementById("tipAmount");
let totalInput = document.getElementById("totalAmount");
let errorMessage = document.getElementById("errorMessage");

function totalSum() {
    let BillAmountValue = billAmount.value;
    let PercentageTipValue = percentageTip.value;
    if (BillAmountValue === "") {
        errorMessage.textContent = errorMessage;
    } else if (PercentageTipValue === "") {
        errorMessage.textContent = errorMessage;
    } else {
        errorMessage.textContent = "";
        let BillAmount = parseInt(BillAmountValue);
        let PercentageTip = parseInt(PercentageTipValue);

        let TipAmount = (PercentageTip / 100) * BillAmount
        let TotalAmount = BillAmount + TipAmount

        tipAmountInput.value = TipAmount;
        totalInput.value = TotalAmount;
    }
}