/*
Fed up with students clapping him after every warmup, Badger devises a cunning
plan to put an end to it - or at least look like he's putting an end to it.
You see, Badger secretly enjoys the adulation - mocking though it may be -
so he doesn't want the clapping to stop altogether.

The names of those who are witnessed clapping Badger more than twice in the
first four days of any one week will go into a draw. On Friday morning, a
random name will be drawn from that list and the 'winner' will be forced to
deliver the solution to Friday's warmup.

Create a program that Badger can use for this task - ideally, you should create
an object (revengeOfBadger) to do this, but if you can get it working using
standalone functions, that's cool.

Your program should:

Track how many times each student in the class has clapped this week;
Include a collection of candidates for the Friday draw (ie, a list of names of
people who have clapped Badger more than twice that week);
Pick a random student to deliver the solution to Friday's warmup.
*/
var revengeOfBadger = {
  students: {"John": 3, "David": 2, "Emma": 1, "Claire": 5},
  drawList: [],
  shortList: function()
  {
    for ( var name in this.students )
    {
      if ( this.students[name] > 2 )
      {
        this.drawList.push(name);
      }
    }
    console.log("People eligible for lucky draw this week: ",this.drawList);
  },
  draw: function()
  {
    this.shortList();
    var luckyWinner = this.drawList[Math.floor(Math.random()*this.drawList.length)];
    console.log("And the lucky winner is: ",luckyWinner);
  }
};
revengeOfBadger.draw();
