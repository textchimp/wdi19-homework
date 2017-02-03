# == Schema Information
#
# Table name: mountains
#
#  id          :integer          primary key
#  name        :text
#  image       :text
#  elevation   :integer
#  location    :text
#  description :text
#

class Mountain < ActiveRecord::Base
end
