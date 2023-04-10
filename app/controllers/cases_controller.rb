
class CasesController < ApplicationController
  before_action :authorize



  def index
    cases = Case.all
    render json: cases
  end


  def show 
    this_case = Case.find_by(id: params[:id]) 
    render json: this_case, status: :ok
  end 

  def closed_cases
    closed_cases = Case.where(status: "CLOSED").all
    render json: closed_cases, status: :ok
  end 

  
  def create
    new_case = Case.create(create_params)
    # new_case.assigned = false 
    # new_case.save  
    cases = Case.all
    render json: cases, status: :ok
  end

  def update
    edit_params
    #  SENDS TWO PARAMS WITH AGENT IDS (INITIAL AND NEW)
    agent = Agent.find(session[:user_id])
    update_case = Case.find(params[:id])
    agent_case = AgentCase.find_by(agent_id: agent.id, case_id: params[:id])

    if params[:new_agent] != nil  
 
      agent_case.agent_id = (params[:new_agent])
      agent_case.save
      update_case.update(
        title: params[:title],
        description: params[:description],
        priority: params[:priority],
        status: params[:status],
      )
      update_case.save
    else
      update_case.update(
        title: params[:title],
        description: params[:description],
        priority: params[:priority],
        status: params[:status],
      )
      update_case.save
    end

    # cases = Case.all
    render json: update_case, status: :ok
  # else
  #   render json: { errors: cases.errors.full_messages }, status: :unprocessable_entity
  end

  # also need to authenticate!
  def destroy
    find_case = Case.find(params[:id])
    find_case.comments.destroy_all
    find_case.destroy
    cases = Case.all
    render json: cases, status: :ok
  end

  private

  def edit_params
    params.require(:case).permit(:id, :title, :description, :priority, :status, :case_id, :new_agent)
  end

  def create_params
    params.require(:case).permit(:title, :description, :priority, :status, :user_id, :assigned)
  end
  

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

end
