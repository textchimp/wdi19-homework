QUnit.log(function( details ) {
  if ( details.result ) {
    return;
  }
  var loc = details.module + ": " + details.name + ": ",
    output = "FAILED: " + loc + ( details.message ? details.message + ", " : "" );

  if ( details.actual ) {
    output += "expected: " + details.expected + ", actual: " + details.actual;
  }
  if ( details.source ) {
    output += ", " + details.source;
  }
  console.log( output );
});

QUnit.test( "square test", function( assert ) {
  assert.equal( isSquare(rectangle), true );
});

QUnit.test( "CreditCardValidation test1", function( assert ) {
  assert.propEqual( validateCreditCard("9999-9999-8888-0000"), {valid: true, 'number': "9999-9999-8888-0000"},
  'Expected: {valid: true, "number": "9999-9999-8888-0000"}' );
});

QUnit.test( "CreditCardValidation test2", function( assert ) {
  assert.propEqual( validateCreditCard("a923-3211-9c01-1112"), {valid: false, 'number': "a923-3211-9c01-1112", error: 'invalid characters'},
  'Expected: {valid: false, "number": "a923-3211-9c01-1112", error: "invalid characters"}' );
});

QUnit.test( "CreditCardValidation test3", function( assert ) {
  assert.propEqual( validateCreditCard("4444-4444-4444-4444"), {valid: false, 'number': "4444-4444-4444-4444", error: 'only one type of number'},
  'Expected: {valid: false, "number": "4444-4444-4444-4444", error: "only one type of number"}' );
});

QUnit.test( "CreditCardValidation test4", function( assert ) {
  assert.propEqual( validateCreditCard("1111-1111-1111-1110"), {valid: false, 'number': "1111-1111-1111-1110", error: 'sum < 16'},
  'Expected: {valid: false, "number": "1111-1111-1111-1110", error: "sum < 16"}' );
});

QUnit.test( "CreditCardValidation test5", function( assert ) {
  assert.propEqual( validateCreditCard("6666-6666-6666-6661"), {valid: false, 'number': "6666-6666-6666-6661", error: 'odd final number'},
  'Expected: {valid: false, "number": "6666-6666-6666-6661", error: "odd final number"}' );
});

QUnit.test( "Bank test1", function( assert ) {
  Bank.addAccount('Johnny', 200);
  assert.propEqual( Bank.accounts[0], {name: 'Johnny', currentBalance: 200} );
});

QUnit.test( "Bank test2", function( assert ) {
  Bank.addAccount('Ben', 100);
  assert.propEqual( Bank.accounts[1], {name: 'Ben', currentBalance: 100} );
});

QUnit.test( "Bank test3", function( assert ) {
  Bank.transfer('Ben', 'Johnny', 30);
  assert.equal( Bank.accounts[1].currentBalance, 70 );
});

QUnit.test( "Bank test4", function( assert ) {
  assert.equal( Bank.sum, 300 );
});

QUnit.test( "Bank test5", function( assert ) {
  Bank.deposit('Ben', 30);
  assert.equal( Bank.accounts[1].currentBalance, 100 );
});

QUnit.test( "Bank test6", function( assert ) {
  assert.equal( Bank.sum, 330 );
});
