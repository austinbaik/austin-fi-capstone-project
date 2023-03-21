class User < ApplicationRecord


    has_many :cases 
    has_many :comments, through: :cases 
    has_many :agents, through: :cases 

   
end
