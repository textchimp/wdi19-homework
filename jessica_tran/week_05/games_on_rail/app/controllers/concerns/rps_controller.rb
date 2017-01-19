class RpsController<ApplicationController
  def start
    @play_throw = ["rock", "paper", "scissors"]

  end

  def rps_play
    @computer_throw = ["rock", "paper", "scissors"].sample
    @throw= params[:throw]
  if @computer_throw == @throw
    render :tie
  end
  if @computer_throw == "rock"
    case @throw
    when "paper"
      render :win
    when "scissors"
      render :lose
    end
  end
  if @computer_throw == "paper"
    case @throw
    when "scissors"
      render :win
    when "rock"
      render :lose
    end
  end
  if @computer_throw == "scissors"
    case @throw
    when "rock"
      render :win
    when "paper"
      render :lose
    end
  end

end
end
