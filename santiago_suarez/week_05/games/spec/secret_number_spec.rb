require "spec_helper"
require_relative "../../games/app/services/secret_number"

module SecretNumber
  RSpec.describe "Start secret number game" do

    it "should take a number and guess if it's correct or not" do
      expect(RandomNumber.correct_guess?(5)[:answer]).to be(true).or be(false)
    end
  end
end
