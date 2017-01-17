class MountainsController < ApplicationController
  #Root or home page
  def home
  end
  #Index or list of all mountains
  def index
    @mountains = Mountain.all
  end
  #Form for adding a new moutains
  def new
  end
  #Create the mountain record in database
  def create
    Mountain.create mountain_params
    redirect_to (mountains_path)
  end
  #Show details of the requested mountain
  def show
    @mountain = Mountain.find params[:id]
  end
  #provide edit form for the requested mountain
  def edit
    @mountain = Mountain.find params[:id]
  end
  #Update the modified details
  def update
    mountain = Mountain.find params[:id]
    mountain.update mountain_params
    redirect_to (mountains_path)
  end
  #Delete the requested mountain
  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to (mountains_path)
  end

  private
  def mountain_params
    params.require(:mountain).permit(:name, :image, :state, :location, :elevation)
  end

end
