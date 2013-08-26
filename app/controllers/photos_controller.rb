class PhotosController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @photos = @user.photos
  end

  def create
    params[:photo][:user_id] = current_user.id
    @photo = Photo.create!(params[:photo])
    render :json => @photo
  end

  def destroy
    photo = Photo.find(params[:id])
    photo.destroy
    render json: photo
  end
end
