class RspController < ApplicationController
  def move
    @possible_throw = ['rock', 'paper', 'scissors']
  end

  def result
    @possible_throw = ['rock', 'paper', 'scissors']
    @random = @possible_throw.sample
    if params['move'] == @random
      @result = "Draw! It's #{params['move']}! "
    elsif (params['move'] == 'rock' && @random == 'scissors') || (params['move'] == 'scissors' && @random == 'paper') || (params['move'] == 'paper' && @random == 'rock')
      @result = "You win !"
    else
      @result = "You loss !"
    end
  end
end
