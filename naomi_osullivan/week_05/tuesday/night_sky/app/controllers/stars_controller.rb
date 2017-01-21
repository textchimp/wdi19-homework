class StarsController < ApplicationController
  def index
    @stars = Star.all
  end

  def new

  end

  def create
    star = Star.create star_params
    redirect_to stars_path
    raise 'hell'
  end

  def show
    @star = Star.find params[:id]
    @constellations = Constellation.all

  end

  def edit
    @star = Star.find params[:id]
    @constellations = Constellation.all

  end

  def update
    star = Star.find params[:id]
    star.update star_params
    redirect_to stars_path(star.id)
  end

  def destroy
    star = Star.find params[:id]
    star.destroy
    redirect_to stars_path
  end



  private
  def star_params
    params.require(:star).permit(:name, :category, :constellation_id)
  end

end
