# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Author.destroy_all
a1 = Author.create(:name => 'René Descartes', :nationality => 'French', :dob => '1596/03/31', :period => '17th century', :image => 'https://upload.wikimedia.org/wikipedia/commons/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg')


Book.destroy_all
b1 = Book.create(:title => 'Meditations on First Philosophy', :year => 1641, :image => 'https://upload.wikimedia.org/wikipedia/commons/7/77/Meditationes_de_prima_philosophia_1641.jpg', :abstract => "Meditations on First Philosophy (subtitled In which the existence of God and the immortality of the soul are demonstrated) is a philosophical treatise by René Descartes first published in 1641 (in Latin). The French translation (by the Duke of Luynes with Descartes' supervision) was published in 1647 as Méditations Métaphysiques. The original Latin title is Meditationes de prima philosophia, in qua Dei existentia et animæ immortalitas demonstratur. The title may contain a misreading by the printer, mistaking animae immortalitas for animae immaterialitas, as suspected already by A. Baillet.

The book is made up of six meditations, in which Descartes first discards all belief in things that are not absolutely certain, and then tries to establish what can be known for sure. He wrote the meditations as if he had meditated for six days: each meditation refers to the last one as \"yesterday\" (In fact, Descartes began work on the Meditations in 1639.) One of the most influential philosophical texts ever written, it is widely read to this day.")

b1.author = a1
b1.save
