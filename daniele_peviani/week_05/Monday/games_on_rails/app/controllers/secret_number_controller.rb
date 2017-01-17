class SecretNumberController < ApplicationController
  def usr_input
  end

  def answer
    secret_number = 10
    if params[:number].to_i == secret_number
      @answer = 'Congratulations! You picked the right number'
    else
      @answer = 'Wrong number, please try again'
    end
  end
end
