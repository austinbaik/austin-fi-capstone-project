class Agent < ApplicationRecord

    has_secure_password 

    has_many :agent_cases
    has_many :cases, through: :agent_case

    has_many :comments, through: :cases 
    has_many :users, through: :cases 

end
