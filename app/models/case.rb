class Case < ApplicationRecord
    
    # belongs_to :agent, :foreign_key => 'agent_id'
    belongs_to :user,  :foreign_key => 'user_id'
    #implicit validation that occurs here 

    has_many :comments 

    
end
