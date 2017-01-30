class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def new
  end

  def create
    mountain = Mountain.create mountain_param
    redirect_to mountains_path(mountain.id)
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.update mountain_param
    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
  end

  private
  def mountain_param
    params.require(:mountain).permit(:name, :image, :elevation, :mountain_range, :country, :first_ascent, :info)
  end
end
