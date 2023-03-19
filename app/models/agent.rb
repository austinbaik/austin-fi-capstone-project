class Agent < ApplicationRecord

    has_secure_password 

    has_many :cases 

end
