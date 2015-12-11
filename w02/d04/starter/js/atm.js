
//Global variables
var transaction;
var balance = {
  checking: 0,
  savings: 0,
};

function updateBalance() {
//updates account balance
  if (transaction.type==="withdraw") {
    transaction.amount = 0-transaction.amount;
  }
  if ((balance[transaction.account]+transaction.amount)>=0) {
    balance[transaction.account] += transaction.amount;
  }
}

function displayBalance() {
//displays account balance in html
  $('#checkingBalance').text("$"+balance.checking);
  $('#savingsBalance').text("$"+balance.savings);
}

//function balanceColor() {
//  if (balance.checking<=0) {
//    $('#amountChecking').css("background.color","#F52F4F");
//  }
//  if (balance.savings<=0) {
//    $('#amountChecking').css("background.color","#F52F4F");
//  }
//}



$(document).ready(function() {

//balanceColor(); - tried to add this color change. doesn't work yet.

  $('input').on('click', function() {
  //processes new transaction
    transaction = {
      amount: +$(this).siblings('.amount').val(),
      account: $(this).siblings('h2').text().toLowerCase(),
      type: $(this).val().toLowerCase(),
    };
    if (!(isNaN(transaction.amount))) {
      updateBalance();
      displayBalance();
    }
  });

});






