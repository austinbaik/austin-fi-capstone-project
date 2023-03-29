class CasesController < ApplicationController
  def index
    cases = Case.all
    render json: cases
  end

  # def create
  #   new_case = Case.create(assigned: false, )
  # end

  def update
    #  SENDS TWO PARAMS WITH AGENT IDS (INITIAL AND NEW)
    agent = Agent.find(session[:user_id])
    update_case = Case.find(params[:id])
    agent_case = AgentCase.find_by(agent_id: agent.id, case_id: params[:id])

    if params[:new_agent] == true
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

    cases = Case.all
    render json: cases, status: :ok
  # else
  #   render json: { errors: cases.errors.full_messages }, status: :unprocessable_entity
  end

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
    params.permit(:id, :title, :description, :priority, :status, :case_id, :new_agent)
  end
  
end
