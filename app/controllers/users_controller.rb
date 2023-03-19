class UsersController < ApplicationController

    has_many :cases 
    has_many :comments through: :case 


end
