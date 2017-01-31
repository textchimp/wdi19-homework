# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Movie.destroy_all
Movie.create(:title => 'La La Land', :year => 2016, :rating => 'PG', :plot => 'A jazz pianist falls for an aspiring actress in Los Angeles.', :image => 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SY1000_SX675_AL_.jpg' )

Director.destroy_all
Director.create(:name => 'Damien Chazelle', :born => 1985, :nationality => 'American', :image => 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE2MzcyODA3MV5BMl5BanBnXkFtZTgwNTA3NTU2MjE@._V1_SY1000_CR0,0,710,1000_AL_.jpg')
