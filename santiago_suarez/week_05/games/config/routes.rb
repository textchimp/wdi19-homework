Rails.application.routes.draw do
  root 'games#index'
  get '/eight_ball/:user_input', to: 'games#eight_ball', as: 'eight_ball'
  get '/rock_paper/:user_input', to: 'games#rock_paper', as: 'rock_paper'
  get '/secret_number/:user_input', to: 'games#secret_number', as: 'secret_number'
end
