class MainlandsController < ApplicationController
  def index
    @mainlands = Mainland.all
  end

  def new
    @mainland = Mainland.new
  end

  def create
    mainland = Mainland.create mainland_params
    redirect_to mainland
  end

  def edit
    @mainland = Mainland.find params[:id]
  end

def update
    mainland = Mainland.find params[:id]
    mainland.update mainland_params
    redirect_to mainland
  end

  def show
    @mainland = Mainland.find params[:id]
  end

  def destroy
    mainland = Mainland.find params[:id]
    mainland.destroy
    redirect_to mainlands_path
  end

  private
  def mainland_params
    params.require(:mainland).permit(:name, :population, :image)
  end

end
