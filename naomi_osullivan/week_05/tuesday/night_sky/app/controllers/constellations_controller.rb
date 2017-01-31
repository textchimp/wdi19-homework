class ConstellationsController < ApplicationController


  def index
    @constellations = Constellation.all
  end

  def new
  end

  def create
    constellation = Constellation.create constellation_params
    redirect_to constellation_path #fixme
  end

  def show
    @constellation = Constellation.find params[:id]
  end

  def edit
    @constellation = Constellation.find params[:id]
  end

  def update
    constellation = Constellation.find params[:id]
    constellation.update constellation_params
    redirect_to constellations_path(constellation.id)
  end

  def destroy
    constellation = Constellation.find params[:id]
    constellation.destroy
    redirect_to constellations_path
  end


  private
  def constellation_params
    params.require(:constellation).permit(:name, :family, :origin, :meaning, :brightest_star, :image)
  end

end
