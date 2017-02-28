# == Schema Information
#
# Table name: manufacturers
#
#  id          :integer          not null, primary key
#  name        :text
#  country     :text
#  founder     :text
#  funded_year :integer
#  website     :text
#  logo        :text
#  created_at  :datetime
#  updated_at  :datetime
#

class Manufacturer < ActiveRecord::Base
end
