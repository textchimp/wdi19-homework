
var revengeOfBadger = {

  // less readable nested-array version:
  //
  // studentClaps: [
  //   ['Jess', 3],
  //   ['Daniel', 3],
  //   ...
  // ],

  studentClaps: {
    'Jess': 3,
    'Matt': 1,
    'Santiago': 4,
    'Daniele': 2,
    'Daniel': 0,
    'Latha': 4,
    'Alexander': 0
  },

  shortlist: [], // initialise an empty shortlist

  getCandidates: function() {

    // you can also use Object.keys(), but it's harder to read:
    //
    // var keys = Object.keys(this.studentClaps);
    // for (var i = 0; i < keys.length; i++) {
    //   this.studentClaps[ keys[i] ]
    // }

    for(var name in this.studentClaps){
      if( this.studentClaps[ name ] > 2 ){
        // add the name to the end of our shortlist array if they've clapped enough
        this.shortlist.push( name );
      }
    }
    return this.shortlist.length;
  },

  draw: function(){

    this.shortlist  = [];
    var winner;
    var numberOfCandidates = this.getCandidates();

    if( numberOfCandidates ===  0 ){
      // Badger has to do his own warmup if no one clapped too much
      winner = "Badger";
    } else {
      // choose a random student from the shortlist:
      // First, get a random integer betweeen 0 and the last element of the numberOfCandidates array
      // Second, use that random values as the index into our shortlist array, to get a random student
      var random = Math.floor( Math.random() * numberOfCandidates );
      winner = this.shortlist[ random ];
    }

    console.log("Lucky  " + winner + ", you'll be doing the warmup today.");

    // We won't use this return value when we call this function below (because the console.log above
    // tells us everything we need)
    return winner;
  }

};

revengeOfBadger.draw();
