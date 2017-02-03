# == Schema Information
#
# Table name: mountains
#
#  id             :integer          primary key
#  name           :text
#  image          :text
#  elevation      :integer
#  mountain_range :text
#  country        :text
#  first_ascent   :date
#  info           :text
#

class Mountain < ActiveRecord::Base
end
