Rails.application.routes.draw do

  get 'directors/index'

  get 'directors/new'

  get 'directors/edit'

  get 'directors/show'

  get 'movies/index'

  get 'movies/new'

  get 'movies/edit'

  get 'movies/show'

  resources :directors
  resources :movies
end
