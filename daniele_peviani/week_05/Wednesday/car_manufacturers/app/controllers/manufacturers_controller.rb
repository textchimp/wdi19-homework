class ManufacturersController < ApplicationController
  def index
    @manufacturers = Manufacturer.all
  end

  def new
  end

  def edit
  end

  def show
    @manufacturer = Manufacturer.find params[:id]
  end
end
