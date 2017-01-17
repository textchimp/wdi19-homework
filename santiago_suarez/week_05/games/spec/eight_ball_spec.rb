require "spec_helper"
require_relative "../../games/app/services/eight_ball"

module EightBall
  RSpec.describe "Start Eight Ball game" do

    it "should take a param and return a random answer" do
      answer = EightBall.answer_question("Random param")
      expect(RandomAnswer::ANSWERS).to include answer
    end

  end
end
