<<<<<<< HEAD
<<<<<<< HEAD

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





=======
=======
>>>>>>> 28ef0f1ab202eb69d978f75cc7bb8b2a60506f1f
//Begin with the document ready function

	//Begin work on the Checking Account

		//Checking account deposit function

			//Get value from the amountChecking input field

			//On click of the depositChecking button

				//Take that value and add it to the existing value in the checkingBalance div

		//Checking account withdrawl funtion 

			//Get value from the amountChecking input field
			
			//On click of the withdrawChecking button

				// If that value is greater than the value in the account ignore that action
				// In other words if this would put the account into a negative balance do not allow it

				//Else subtract that value from the current amount in the checking account

	//Begin work on the Savings account

		//Savings account deposit function

		 		//Get value from the amountSavings input field

		 		//On click of the depositSavings button

		 			//Take that value and add it to the existing value in the savingsBalance div

		//Savings account withdraw funtion 

		 		//Get value from the amountSavings input field
				
		 		//On click of the withdrawl button

		 			//If that value is greater than the value in the account ignore that action
		 			//In other words if this would put the account into a negative balance do not allow it

		 			//Else subtract that value from the current amount in the savings account



// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
<<<<<<< HEAD
>>>>>>> bd5ce8011bfeea0675790c464dd26a2108fb6980
=======
>>>>>>> 28ef0f1ab202eb69d978f75cc7bb8b2a60506f1f

