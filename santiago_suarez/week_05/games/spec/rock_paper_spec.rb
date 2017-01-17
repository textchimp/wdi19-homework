require "spec_helper"
require_relative "../../games/app/services/rock_paper"

module RockPaper
  RSpec.describe "Rock paper scissors game" do

    it "should take a user throw and check for win, lose or draw" do
      game = RockPaper.play(:rock)
      expect(game[:answer]).to eql('win').or eql('lose').or eql('draw')
    end

  end
end
