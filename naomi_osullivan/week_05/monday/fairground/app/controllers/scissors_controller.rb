class ScissorsController < ApplicationController

  def game
  end

  def throw
    @throw = params[:throw].downcase

    game = {
      1 => 'scissors',
      2 => 'paper',
      3 => 'rock'
    }

    computer = rand 1..3
      if computer == 1
        @comp = game[1]
      elsif computer == 2
        @comp = game[2]
      elsif computer = game[3]
        @comp = game[3]
      end


      if @throw == @comp
        @spr = "You won!"
      else
        @spr = "You lose"


      end




  end

end
