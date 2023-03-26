class CasesController < ApplicationController
  def index
    cases = Case.all
    render json: cases
  end

  # def create

  #   new_case = Case.create(assigned: false, )

  # end

  # def update

  #   agent = Agent.find(session[:user_id])
  #   update_case = Case.find(params[:id])
  #   agent_case = update_case.agent_cases
  #   update_case.update(

  #   )

  # end

  # also need to authenticate!
  def destroy
    find_case = Case.find(params[:id])
    find_case.comments.destroy
    # bathroom.calc_rating
    cases = Case.all
    render json: cases, status: :ok
  end


  private 

  def edit_params 
    params.permit(:id, :title, :description, :priority, :status)

  end 


end
