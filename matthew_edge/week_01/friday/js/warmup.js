// Badger's Revenge
//
// Fed up with students clapping him after every warmup, Badger devises a cunning plan to put an end to it - or at least look like he's putting an end to it. You see, Badger secretly enjoys the adulation - mocking though it may be - so he doesn't want the clapping to stop altogether.
//
// The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.
//
// Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.
//
// Your program should:
//
// Track how many times each student in the class has clapped this week;
// Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
// Pick a random student to deliver the solution to Friday's warmup.

var whoClapped = {bobby :[1,1,1], smithbob: [1,1], steveson: [1,1,1], julie: [1,1,1], lisa: [1,1]}
var fridayClappers = []

if ((whoClapped.bobby.length> 2)) { fridayClappers.push('bobby')}
if ((whoClapped.smithbob.length> 2)) { fridayClappers.push('smithbob')}
if ((whoClapped.steveson.length> 2)) { fridayClappers.push('stevenson')}
if ((whoClapped.julie.length> 2)) { fridayClappers.push('julie')}
if ((whoClapped.lisa.length> 2)) { fridayClappers.push('lisa')}
var max = fridayClappers.length
var getRandom = (Math.floor(Math.random() * (max - 0 + 1)))
console.log('Presenting this Friday will be the amazing ' + fridayClappers[getRandom])
