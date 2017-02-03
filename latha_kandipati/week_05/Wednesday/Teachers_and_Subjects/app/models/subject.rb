# == Schema Information
#
# Table name: subjects
#
#  id         :integer          not null, primary key
#  title      :text
#  category   :text
#  teacher_id :integer
#

class Subject < ActiveRecord::Base
  belongs_to :teacher
end
