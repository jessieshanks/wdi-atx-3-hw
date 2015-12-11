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



//function accountType(label);

var accountName;

$("button").on('click', function() {
	accountName = $(this).closest("h2").text();

console.log(accountName);



///$( "div:contains('John')" ).css( "text-decoration", "underline" );

//var accountName;
//$("button").on('click', function() {
//accountName =

//}
//$( "div:contains('John')" ).css( "text-decoration", "underline" );




















// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts

// This ^^^ is definitely not dry! I am going to try what I've mapped out instead
//

var transaction {
	amount: null;
//	type: null;
	account: null;
};

var accountBalance {
	savings: 0;
	checking: 0;
}


var balanceChecking {
	amount: 0;
	account: "checking";
}

var balanceSavings {
	amount: 0;
	account: "savings"
}

var allAccounts = [];
allAcccounts[0] = balanceChecking;
allAccounts[1] = balanceSavings;



load balance on webpage
on click checking button, fill transaction object, run function approve transaction



function approveTransaction(transaction) {
	if
}

function accountType(label);

var accountName;
$("button").on('click', function() {
accountName =

}
$( "div:contains('John')" ).css( "text-decoration", "underline" );

var accountName;
$("button").on('click', function() {
accountName =

}
$( "div:contains('John')" ).css( "text-decoration", "underline" );




