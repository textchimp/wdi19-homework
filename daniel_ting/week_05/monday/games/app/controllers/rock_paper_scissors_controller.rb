class RockPaperScissorsController < ApplicationController
  def form
  end

  # def throw
  #   results = {"rock" => "scissors", "scissors" => "paper", "paper" => "rock"}
  #   computer = results.keys.sample
  #   if results[params[:throw].downcase] == computer
  #     @output = "You won"
  #   elsif results[computer] == params[:throw].downcase
  #     @output = "You lost"
  #   else
  #     @output = "Tie"
  #   end
  # end

  def throw
    results = {"rock" => ["scissors", "lizard"], "scissors" => ["paper", "lizard"], "paper" => ["rock", "spock"], "spock" => ["scissors", "rock"], "lizard" => ["paper", "spock"]}
    @computer = results.keys.sample
    if results[params[:throw].downcase].include? @computer
      @output = "You won"
    elsif results[@computer].include? params[:throw].downcase
      @output = "You lost"
    else
      @output = "Tie"
    end
  end
end
