class SecretNumberController < ApplicationController
  def form
  end

  def guess
    random_number = rand(10) + 1
    if params[:number].to_i == random_number
      @output = "correct"
    else
      @output = "guess again"
    end
  end
end
