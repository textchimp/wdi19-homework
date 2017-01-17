class SecretController < ApplicationController
  def game
  end

  def reveal
    @guess = params[:guess]
    secret_number = rand 0..100
    if @guess == secret_number
      @result = "Congratulations you guessed it"
    else
      @result = "Sorry you need to work on opening your third eye"
    end



  end

  end
