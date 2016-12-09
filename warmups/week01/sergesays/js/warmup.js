// Serge answers 'Sure.' if you ask him a question.
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
// He says 'Fine. Be that way!' if you address him without actually saying anything.
// He answers 'Whatever.' to anything else.
// Create a function that takes an input and returns Serge's response.

var sergeSays = function( input ){

  if( input.length === 0 ){
    return "Fine. Be that way!";
  }
  // You don't need any 'else' blocks here because the 'return' statement above prevents
  // anything else in this function from being run, if the test condition is true

  // Lines 15 and 16 are logically equivalent:
  // if( input[ input.length - 1 ] === '?' )
  if( input.endsWith('?') ){
    return "Sure.";
  }

  if( input === input.toUpperCase() ){
    return "Whoa, chill out yo!";
  }

  return "Whatever."; // Catch-all default case for anything else we say to Serge
};


var response = sergeSays( "Are you okay Serge? You seem sad. Is everything ok at home..." );
console.log( response );
