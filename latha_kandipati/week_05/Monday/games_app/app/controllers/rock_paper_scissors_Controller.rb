class RockPaperScissorsController < ApplicationController
  def index
  end
  def results
    #Getting the right image for user and computer
    @user_img = ''
    @comp_img = ''
    @game = ''
    user = params[:user_choice]
    computer = ["rock","paper","sci"].sample
    case user
    when 'rock'
      @user_img = "/assets/Rock.png"
      if computer == 'rock'
        @game = 'draw'
      elsif computer == 'sci'
        @game = 'win'
      elsif computer == 'paper'
        @game = 'lose'
      end

    when 'sci'
      @user_img = "/assets/Scissors.png"
      if computer == 'rock'
        @game = 'lose'
      elsif computer == 'sci'
        @game = 'draw'
      elsif computer == 'paper'
        @game = 'win'
      end

    when 'paper'
      @user_img = '/assets/Paper.png'
      if computer == 'rock'
        @game = 'win'
      elsif computer == 'sci'
        @game = 'lose'
      elsif computer == 'paper'
        @game = 'draw'
      end

    end

    case computer
    when 'rock'
      @comp_img = "/assets/Rock.png"
    when 'sci'
      @comp_img = "/assets/Scissors.png"
    when 'paper'
      @comp_img = '/assets/Paper.png'
    end

  end
end
