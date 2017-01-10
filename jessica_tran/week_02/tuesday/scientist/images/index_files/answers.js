var anagram = {

    anagrams: [],


        customSort: function (str){
        var temp = str.split('');
        temp= temp.sort();
        temp= temp.join();
        return temp;
      },

      checkForAnagrams: function (word, wordArray){
        word= word.toLowerCase();
        var sortedWord = this.customSort(word);

        for (var i = 0; i<wordArray.length; i++){

          var potentialAnagram = this.customSort(wordArray[i]);
          if(sortedWord === potentialAnagram){
            this.anagrams.push(wordArray[i]);
          }

      }//for
      return this.anagrams;
    }//function
};

var result = anagram.checkForAnagrams("listens",["enlists", "google", "inlets", "banana"]);

console.log(result)
