class SubjectsController < ApplicationController
  def index
    @subjects = Subject.all
  end

  def new
    @subject = Subject.new
  end

  def create
    subject = Subject.create subject_params
    redirect_to subject
  end

  def edit
    @subject = Subject.find params[:id]
  end

  def update
    subject = Subject.find params[:id]
    subject.update subject_params
    redirect_to subject
  end

  def show
    @subject = Subject.find params[:id]
  end

  def destroy
    subject = Subject.find params[:id]
    subject.destroy
    redirect_to subjects_path
  end

  private
  def subject_params
    params.require(:subject).permit(:title, :category, :teacher_id)
  end

end
