class PagesController < ApplicationController
  def home
  end

  def numbers
    @amount = 234
    @large_number = 23789032488
    @phone_number = 3134534345

  end

  def text
    @numbers = (1..20).to_a
    @error_count1 = 1
    @error_count2 = 3
    @story = "A very very very long long long long time ago in a galaxy far far far far away"
  end

  def assets
  end

  def url
  end
end
