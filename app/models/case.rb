class Case < ApplicationRecord
    
    # belongs_to :agent, :foreign_key => 'agent_id'
    belongs_to :user
    #implicit validation that occurs here 
    has_many :agent_cases
    has_many :agents, through: :agent_case 
    has_many :comments 

    validates :title, presence: true
    validates :description, presence: true
    validates :priority, presence: true
    validates :status, presence: true
    validates :user_id, presence: true

end
