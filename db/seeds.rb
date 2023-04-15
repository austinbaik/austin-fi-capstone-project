# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



users = User.create([ {name: 'Luke'}, {name: 'James'}, {name: 'Josh'}])

Case.create(title: 'Lukes support case', description: "this is lukes test case", priority: "P1", status: "NEW", user_id: 1, assigned: false)

Case.create(title: 'what a problem this is', description: "please help me resolve a problem with xyz", priority: "P1", status: "NEW", user_id: 1, assigned: false)

Case.create(title: 'Joshs support case', description: "this is joshs test case", priority: "P2", status: "NEW", user_id: 3, assigned: false)

Case.create(title: 'Joshs support case for another issues', description: "this is joshs test case for another issues", priority: "P0", status: "NEW", user_id: 3, assigned: false)

Case.create(title: 'im having mondo issues; please help!', description: "somsetimes in themorning there are these problems that i case", priority: "P2", status: "NEW", user_id: 2, assigned: false)
