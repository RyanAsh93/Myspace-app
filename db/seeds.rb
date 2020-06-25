# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# make a seeds/FAKER for comments <-----


25.times do
  name = Faker::Name.name   
  avatar = Faker::Avatar.image(slug: name, size: '100x300', format: 'png', set: 'set2')
  Person.create(name: name, avatar: avatar)
end

 puts '25 people seeded'
