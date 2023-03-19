class UsersController < ApplicationController
    
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)

    # params.require(:user).permit(:username, :password, :password_confirmation)
    #permit allows for key utilization; require mandates that parameter exists --> bc goes through User Controller
  end
end
