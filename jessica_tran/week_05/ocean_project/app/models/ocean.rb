# == Schema Information
#
# Table name: oceans
#
#  id        :integer          primary key
#  location  :text
#  area      :integer
#  volume    :integer
#  depth     :integer
#  coastline :integer
#

class Ocean < ActiveRecord::Base
end
