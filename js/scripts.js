//business logic
function Account(name, balance) {
  this.acctname = name;
  this.balance = balance;
}
Account.prototype.deposit= function(deposit, withdraw){
  return this.balance + deposit - withdraw;
}

// Account.prototype.withdraw= function(withdraw){
//   return this.balance - withdraw;
// }
//design logic
$(document).ready(function(){
  $("form#user").submit(function(event){
    event.preventDefault();
    var name= $("input#name").val();
    var initialDeposit = parseInt($("input#initDeposit").val());
    var deposit = parseInt($("input#deposit").val());
    if (!deposit){
      deposit = 0;
    }
    var withdraw = parseInt($("input#withdraw").val());
    if (!withdraw){
      withdraw = 0;
    }
    // console.log(name + initialDeposit + deposit + withdraw);

    var newAccount = new Account(name,initialDeposit);
    var finalBalance = newAccount.deposit(deposit, withdraw);

    $(".balanceBox h3").text("$" + finalBalance);
    console.log(finalBalance);
  });



});
