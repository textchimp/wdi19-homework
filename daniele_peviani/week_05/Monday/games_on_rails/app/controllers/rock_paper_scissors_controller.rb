class RockPaperScissorsController < ApplicationController
  def usr_input
  end

  def result
    @usr_choice = params[:choice].downcase
    @opponent = ['rock', 'paper', 'scissors'].sample
    @output = ''

    case @usr_choice
    when @opponent
      @output = "It's a draw!"
    when 'rock'
      if @opponent == 'paper'
        @output = "Sorry, you lose"
      else
        @output = "Congratulations, you win!"
      end
    when 'paper'
      if @opponent == 'scissors'
        @output = "Sorry, you lose"
      else
        @output = "Congratulations, you win!"
      end
    else
      if @opponent = 'rock'
        @output = "Sorry, you lose"
      else
        @output = "Congratulations, you win!"
      end
    end

  end
end
