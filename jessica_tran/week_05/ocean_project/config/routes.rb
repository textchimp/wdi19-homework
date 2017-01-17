Rails.application.routes.draw do

  root :to => 'oceans#index'

  get '/oceans' => 'oceans#index'

  post '/oceans' => 'oceans#create'

  get '/oceans/new' => 'oceans#new', :as => 'oceans_new'

  get '/oceans/:id' => 'oceans#show', :as => 'ocean'

  get '/oceans/:id/edit' => 'oceans#edit', :as => 'ocean_edit'


  post '/oceans/:id' => 'oceans#update'

  post '/oceans/:id/delete' => 'oceans#destroy', :as => 'ocean_delete'



end
