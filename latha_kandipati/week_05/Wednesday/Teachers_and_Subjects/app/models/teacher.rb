# == Schema Information
#
# Table name: teachers
#
#  id          :integer          not null, primary key
#  name        :text
#  expertise   :text
#  description :text
#  address     :text
#  contact     :integer
#  created_at  :datetime
#  updated_at  :datetime
#  image       :text
#

class Teacher < ActiveRecord::Base
  has_many :subjects
end
