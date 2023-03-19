class SessionsController < ApplicationController



    def create
        agent = Agent.find_by(name: params[:name])
        if agent&.authenticate(params[:password])
          session[:agent_id] = agent.id
          render json: agent, status: :created
        else
          render json: { error: "Invalid agent name or password" }, status: :unauthorized
        end
      end
    
      def destroy
        session.delete :agent_id
        head :no_content
      end
    


end
