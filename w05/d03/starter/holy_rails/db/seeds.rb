# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


movies = Movie.create ( [{title: 'My Neighbor Totoro', year: 1988  } , { title: 'Kiki\'s Delivery Service', year: 1989} , { title: 'Ponyo', year: 2008} ])
characters = Character.create ()
