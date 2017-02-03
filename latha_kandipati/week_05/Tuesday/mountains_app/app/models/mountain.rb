# == Schema Information
#
# Table name: mountains
#
#  id        :integer          primary key
#  name      :text
#  image     :text
#  state     :text
#  location  :text
#  elevation :integer
#

class Mountain < ActiveRecord::Base
end
