class GamesController < ApplicationController

#magic hammer
  def magichammer
  end

  def answer
    @answer = ["I'll tell you if you start paying me!",
    "How would I know?",
    "Lorem ipsum dolor sit amet...",
    "You shall be hungry in an hour",
    "You may rely on it",
    "You might find your answer on google",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Ask Joel, he knows everything",
    "Ask again late",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Your wish is my command line",
    "Very doubtful"].sample
  end

#secret number
  def secretnumber
  end

  def secretanswer
    @guess = params[:guess].to_i
    @thinker = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sample.to_i
    @lose = "I think you lost"
    @win = "I think you won"
  end

#rock scissors paper
  def rps
  end

  def throw
    @throw = params[:throw].to_s
    @trump = ["rock", "paper", "scissors"].sample
    @lose = "Get lost!"
    @win = "You won this time"
    @draw = "Draw"
end


end
