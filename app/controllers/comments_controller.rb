class CommentsController < ApplicationController

  def create
    agent = Agent.find_by(id: session[:user_id])
    
    if agent.valid?
        name = agent.name
       this_case = Case.find_by(id: params[:case_id])
       byebug
       this_case.comments.create(comment: params[:comment], is_agent: "true", creator_name: name)

      render json: this_case, status: :created
    else
      render json: { errors: this_case.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def comments_params
    params.permit(:id, :comment, :case_id)
  end
end
