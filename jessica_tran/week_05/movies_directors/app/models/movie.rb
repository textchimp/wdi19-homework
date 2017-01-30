# == Schema Information
#
# Table name: movies
#
#  id          :integer          not null, primary key
#  title       :text
#  year        :integer
#  rating      :text
#  plot        :text
#  image       :text
#  created_at  :datetime
#  updated_at  :datetime
#  director_id :integer
#

class Movie < ActiveRecord::Base
  belongs_to :director
end
