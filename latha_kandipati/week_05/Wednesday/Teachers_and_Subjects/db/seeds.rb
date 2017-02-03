# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Teacher.destroy_all
Teacher.create(:name => 'Joel Turnbull', :expertise => 'Computers', :description => 'Joel has been teaching web development for a few years and it turns out is pretty good at it. He taught himself to code last century and has never wanted to do anything else. You can connect with him on PSN: his handle is xXx_TheBlade420_xXx',
:address => 'Sydney', :contact => 34873928)


Subject.destroy_all
Subject.create(:title => 'Ruby on Rails', :category => 'Computers', :teacher_id => 1)
