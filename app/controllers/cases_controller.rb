class CasesController < ApplicationController
  def index
    cases = Case.all
    render json: cases
  end

  # def create 

  #   new_case = Case.create(assigned: false, )


  # end 




  # also need to authenticate!
  def destroy
    find_case = Case.find(params[:id])
    find_case.comments.destroy
    # bathroom.calc_rating
    cases = Case.all
    render json: cases, status: :ok
  end
end
