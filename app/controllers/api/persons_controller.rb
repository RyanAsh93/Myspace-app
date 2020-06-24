class Api::PersonsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.random_person(current_user.liked_persons)
  end

  def update
    current_user.liked_persons << params[:id].to_i
    current_user.save
  end

  def my_persons
    render json: User.liked(current_user.liked_persons)
end
end
