class SecretController < ApplicationController
  def play
  end

  def validate
    @secret = Random.rand(1..10)
    if params['guess'].to_i == @secret
      @result = "You Guessed correct!"
    else
      @result = "WRONG YOU LOSE."
    end
  end
end
