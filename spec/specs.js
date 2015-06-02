describe('Bankaccount', function(){
  it("creates a new bank account with the given specifications", function(){
    var testAccount = new Bankaccount("testname", 100);
    expect(testAccount.clientName).to.equal("testname");
    expect(testAccount.balance).to.equal(100);
  });

    it("removes a given amount from the account balance", function(){
      var testAccount = new Bankaccount("test", 200);
      testAccount.withdrawl(50);
      expect(testAccount.balance).to.equal(150);
   });

   it("adds a given amount from the account balance", function(){
     var testAccount = new Bankaccount("test", 200);
     testAccount.deposit(50);
     expect(testAccount.balance).to.equal(250);
  });
})
