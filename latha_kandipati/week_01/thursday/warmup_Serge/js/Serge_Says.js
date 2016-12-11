/*
Serge Says
Serge answers 'Sure.' if you ask him a question.
He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
He says 'Fine. Be that way!' if you address him without actually saying anything.
He answers 'Whatever.' to anything else.
Create a function that takes an input and returns Serge's response.
*/
function sergeSays(msg)
{
  //covert them to uppercase gives the flexibility to give "serge" in any way
  if( msg.length === 0 )
  {
    console.log("Fine. Be that way!");
    return;
  }
  if( msg === msg.toUpperCase() )
  {
    console.log("Woah, chill out!");
    return;
  }
  if( msg[msg.length-1] === '?' ) 
  {
    console.log("Sure.");
    return;
  }
  console.log("Whatever.");
}
var message = prompt("Give your message:");
sergeSays(message);
