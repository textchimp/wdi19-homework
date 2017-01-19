class SnController < ApplicationController
  def start
    @numbers = [1,2,3,4,5,6,7,8,9,10]
  end

  def result
    @secret_number = rand(1..10)
    @numbers = [1,2,3,4,5,6,7,8,9,10]
    @guess= params[:guess]
    if @secret_number == @guess.to_i
      render :win
    else
      render :lose
    end
  end
end
