module RockPaper

  def self.play(move)
    ComputerMoves.check(move)
  end

  class ComputerMoves
    MOVES = [:rock, :paper, :scissors]

    def self.check(move)
      move = move.to_sym
      computer = MOVES.sample
      if self.win?(move, computer)
        { move: move, answer: 'win', computer_move: computer }
      elsif self.lose?(move, computer)
        { move: move, answer: 'lose', computer_move: computer }
      elsif self.draw?(move, computer)
        { move: move, answer: 'draw', computer_move: computer }
      end
    end

    def self.win?(move, computer)
      computer == :rock && move == :scissors ||
      computer == :paper && move == :rock ||
      computer == :scissors && move == :paper
    end

    def self.lose?(move, computer)
      computer == :scissors && move == :rock ||
      computer == :rock && move == :paper ||
      computer == :paper && move == :scissors
    end

    def self.draw?(move, computer)
      computer == :rock && move == :rock ||
      computer == :paper && move == :paper ||
      computer == :scissors && move == :scissors
    end

  end

end
