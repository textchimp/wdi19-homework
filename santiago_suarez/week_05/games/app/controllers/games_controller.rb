class GamesController < ApplicationController
  def index
  end

  def eight_ball
    eight_ball = EightBall.answer_question(params[:user_input])
    render :eight_ball, locals: { eight_ball: eight_ball }
  end

  def rock_paper
    rock_paper = RockPaper.play(params[:user_input])
    render :rock_paper, locals: { rock_paper: rock_paper }
  end

  def secret_number
    secret_number = SecretNumber.guess(params[:user_input])
    render :secret_number, locals: { secret_number: secret_number }
  end

end
