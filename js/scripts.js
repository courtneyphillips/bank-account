function Bankaccount(clientName, balance){
  this.clientName = clientName
  this.balance = balance
}

Bankaccount.prototype.withdrawl = function(amount) {
  this.balance -= amount;
  return this.balance;
}

Bankaccount.prototype.deposit = function(amount) {
  this.balance += amount;
  return this.balance;
}

$(document).ready(function(){

  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var inputClientName = $("input#clientname").val();
    var inputAmount = parseInt($("input#amount").val());

    var newBankAccount = new Bankaccount(inputClientName, inputAmount);

    $("ul#accounts").append("<li><span class='account'>" + newBankAccount.clientName + "</span></li>");

    $(".account").last().click(function(){
    $("#show-account").show();
    $(".clientname").text(newBankAccount.clientName);
    $(".balance").text(newBankAccount.balance);

    });


    $("form#transaction").submit(function(event) {
      event.preventDefault();

      var inputDeposit = parseInt($("input#deposit").val());
        if (inputDeposit > 0) {
        newBankAccount.deposit(inputDeposit)}

      var inputWithdrawl = parseInt($("input#withdrawl").val());
        if (inputWithdrawl > 0) {
       newBankAccount.withdrawl(inputWithdrawl)}

      var element = document.getElementById("clientbalance");
        element.innerHTML = "Balance: $" + newBankAccount.balance;
    });

  });

});
