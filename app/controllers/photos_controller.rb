class PhotosController < ApplicationController
  def index
    if params[:user_id]
      @user = User.find(params[:user_id])
    else
      @user = current_user
    end

    @photos = @user.photos

    respond_to do |format|
      format.html
      format.json {render :json => @photos}
    end
  end

  def create
    p params
    params[:photo][:user_id] = current_user.id
    @photo = Photo.create!(params[:photo])
    render :json => @photo
  end

  def update
    @photo = Photo.find(params[:id])
    @photo.update_attributes!(params[:photo])
    render :json => @photo
  end

  def show
    @photo = Photo.find(params[:id])
    render :json => @photo
  end

  def destroy
    photo = Photo.find(params[:id])
    photo.destroy
    render json: photo
  end
end
