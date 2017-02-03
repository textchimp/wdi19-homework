# == Schema Information
#
# Table name: constellations
#
#  id             :integer          primary key
#  name           :text
#  family         :text
#  origin         :text
#  meaning        :text
#  brightest_star :text
#  image          :text
#

class Constellation < ActiveRecord::Base
  has_many :stars
end
