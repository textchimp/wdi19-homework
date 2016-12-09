var secretword = ['F', 'O', 'X'];
var wordguessed = ['_', '_', '_'];
var remainLetter = wordguessed.length;
// This global variable acts as a counter of accumulated reward.
var accumulated_reward = 0;

var guessLetter = function(str) {
  remainLetter_clone = remainLetter;
  //getRandomIn(helper function) below generets the reward every time the letter is guessed.
  reward = getRandomInt(50, 100)
  for (var i = 0; i < secretword.length; i++) {
    if (secretword[i] === str) {
      // array.splice(start, deleteCount, value, ...)
      wordguessed.splice(i, 1, secretword[i]);
      remainLetter --;
    }
  }
  // when the interation is done, if guess correctly, meaning that
  // there will be change in remainLetter , and we check it by comparing the scoped clone variavle.
  // then, we can add or substract the reward to or from the accumulated_reward variable
  if (remainLetter !== remainLetter_clone) {
    accumulated_reward += ((remainLetter_clone - remainLetter)*reward);
    alert("Congratulation!, you found the new letter "+ str+",your reward is $"+(remainLetter_clone - remainLetter)+"*"+reward+" and your current guessed word is " + wordguessed)
  } else {
  // if the decrease in reward is greater than the accumulated reward,
  //the accumulated reward should be zero,
    if (accumulated_reward > reward) {
      accumulated_reward -= reward;
    } else {
      accumulated_reward = 0;
    }
    alert("Sorry, it does not match ,your reward decrease by "+reward+" ,and your current guessed word is " + wordguessed)
  }
  // To check whether the player win
  if (remainLetter !== 0) {
    alert("There are "+remainLetter+" more letters needed to be guessed")
  } else {
    alert("congratulation!, you win the game and the final reward amount is "+accumulated_reward)
  }
}

var getRandomInt = function(min, max) {
  // ceil and floor round the number
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
