class Agent < ApplicationRecord

    has_secure_password 

    has_many :cases 
    has_many :comments, through: :cases 
    has_many :users, through: :cases 

end
