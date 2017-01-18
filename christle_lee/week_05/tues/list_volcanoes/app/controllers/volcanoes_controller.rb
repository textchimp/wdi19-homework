class VolcanoesController < ApplicationController
  def index
    @volcanoes = Volcano.all
  end

  def new
  end

  def create
    volcano = Volcano.create volcano_params
    redirect_to volcanoes_path(volcano.id)
  end

  def show
    @volcano = Volcano.find params[:id]
  end

  def edit
    @volcano = Volcano.find params[:id]
  end

  def update
    volcano = Volcano.find params[:id]
    volcano.update volcano_params
    redirect_to volcano_path(volcano.id)
  end

  def destroy
    volcano = Volcano.find params[:id]
    volcano.destroy
    redirect_to volcanoes_path
  end

  private
  def volcano_params
    params.require(:volcano).permit(:name, :image, :last_eruption, :country)
  end

end
