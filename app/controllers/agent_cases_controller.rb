class AgentCasesController < ApplicationController


  def create
    #check if agent cases exists? 
    agent = Agent.find_by(id: session[:user_id])
    thisCase = Case.find(params[:id])

    if agent && thisCase
      agent_case = AgentCase.create(case_id: thisCase.id, agent_id: agent.id)
    end

    if agent_case.valid?
      thisCase.assigned = true
    end

    cases = Case.all

    render json: cases, status: :created

    #create new agent_case and assign both the case_id and agent_id

    #grab the agent from sessions

    #case id

  end

  def index
    agent = Agent.find_by(id: session[:user_id])
    cases = agent.agent_cases

    render json: cases
  end

  private

  def parameters
    params.permit(:id)
    # params.require(:user).permit(:username, :password, :password_confirmation)
    #permit allows for key utilization; require mandates that parameter exists --> bc goes through User Controller
  end
end
