class SecretNumberController < ApplicationController
  def index
  end
  def results
    @secret_number = rand(10)
    @win = false
    if @secret_number == params[:guessed_number]
      @win = true
    end
  end
end
