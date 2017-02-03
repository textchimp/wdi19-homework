# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Constellation.destroy_all


Constellation.create :name => 'Scorpius', :family => 'Zodiac', :origin => 'ancient (Ptolemy)', :meaning => 'Scorpion', :brightest_star => 'Antares'
Constellation.create :name => 'Canis Major', :family => 'Orion', :origin => 'ancient (Ptolemy)', :meaning => 'Greater dog', :brightest_star => 'Sirius'
Constellation.create :name => 'Centaurus', :family => 'Hercules', :origin => 'ancient (Ptolemy)', :meaning => 'Centaur', :brightest_star => 'Alpha Centauri'
Constellation.create :name => 'Crux', :family => 'Hercules', :origin => 'Uranometria', :meaning => 'Southern cross', :brightest_star => 'Acrux'

Star.create :name => 'Sirius', :category => 'Binary Star System'
