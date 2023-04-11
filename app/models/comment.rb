class Comment < ApplicationRecord

    # belongs_to :owner through :case ?
    belongs_to :case 


    validates :comment, presence: true

end
