var Bank = {
  accountNum: {},
  accounts: [],
  sum: 0,

  addAccount: function(owner, balance) {
    Bank.sum += balance;
    var account = {
      name: owner,
      currentBalance: balance
    };
    Bank.accountNum[owner] = Bank.accounts.length;
    Bank.accounts.push(account);
  },

  deposit: function(account, amount) {
    Bank.sum += amount;
    Bank.accounts[Bank.accountNum[account]].currentBalance += amount;
  },

  withdraw: function(account, amount) {
    if (Bank.check$(account1, amount)) {
      Bank.sum -= amount;
      Bank.accounts[Bank.accountNum[account]].currentBalance -= amount;
    }
  },

  transfer: function(account1, account2, amount) {
    if (Bank.check$(account1, amount)) {
      Bank.accounts[Bank.accountNum[account1]].currentBalance -= amount;
      Bank.accounts[Bank.accountNum[account2]].currentBalance += amount;
    }
  },

  check$: function(account, amount) {
    if (amount > Bank.accounts[Bank.accountNum[account]].currentBalance) {
      console.log("You ain't got enough money yo!")
      return false;
    }
    return true;
  }
};
