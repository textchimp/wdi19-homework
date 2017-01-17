class NumberController < ApplicationController

def result
  if params[:number].to_i == rand(1..10)
    render '/number/correct'
  else
    render '/number/incorrect'
  end
 end
end
