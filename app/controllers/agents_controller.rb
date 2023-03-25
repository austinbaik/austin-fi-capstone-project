class AgentsController < ApplicationController

    def create
        agent = Agent.create(agent_params)
        if agent.valid?
          session[:user_id] = agent.id #still don't quite understand this
          byebug
          render json: agent, status: :created
        else
          render json: { errors: agent.errors.full_messages }, status: :unprocessable_entity
        end
      end
    
      #   session[:user_id] = user.id
      #   #   still don't quite understand this
      #   #   Sessions work behind the scenes because of the bycrypt gem. We don't need to pass session within the render json, because session will be an object that connects with the application when you install the gem
      #   render json: user, status: :created
      # end
    
      def show

        agent = Agent.find_by(id: session[:user_id])
        
        if agent
          render json: agent
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

      
    
      private
    
      def agent_params
         params.permit(:name, :email, :password, :password_confirmation)        
        # params.require(:user).permit(:username, :password, :password_confirmation)
        #permit allows for key utilization; require mandates that parameter exists --> bc goes through User Controller
      end

end
