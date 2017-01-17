module SecretNumber

  def self.guess(number)
    RandomNumber.correct_guess?(number)
  end

  class RandomNumber

    def self.correct_guess?(number)
      random = self.random
      { answer: number.to_i == random, actual_num: random }
    end

    def self.random
      rand(10)
    end
  end

end
