# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# users = User.create([ {name: 'Luke'}, {name: 'James'}, {name: 'Josh'}])

Case.create(title: 'Lukes support case', description: "this is lukes test case", priority: "P1", status: "NEW", user_id: 5, assigned: false)

Case.create(title: 'Joshs support case', description: "this is joshs test case", priority: "P2", status: "NEW", user_id: 7, assigned: false)

