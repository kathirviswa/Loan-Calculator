function calculateLoan(){
    loanAmountvalue = document.getElementById("loan-amount").value
    interestRatevalue = document.getElementById("Interest-rate").value
    monthlytoPay = document.getElementById("Months-to-pay").value
    interest = (loanAmountvalue *(interestRatevalue * 0.01)) / monthlytoPay
    monthlyPayment = (loanAmountvalue / monthlytoPay + interest).toFixed(2);
   
    document.getElementById("payment").innerHTML=`Monthly Payment:${monthlyPayment}`
   }function calculateLoan(){
    loanAmountvalue = document.getElementById("loan-amount").value
    interestRatevalue = document.getElementById("Interest-rate").value
    monthlytoPay = document.getElementById("Months-to-pay").value
    interest = (loanAmountvalue *(interestRatevalue * 0.01)) / monthlytoPay
    monthlyPayment = (loanAmountvalue / monthlytoPay + interest).toFixed(2);
   
    document.getElementById("payment").innerHTML=`Monthly Payment:${monthlyPayment}`
   }