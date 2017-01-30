Rails.application.routes.draw do
  root :to => 'volcanoes#index'

  get '/volcanoes' => 'volcanoes#index'
  get '/volcanoes/new' => 'volcanoes#new'
  post '/volcanoes' => 'volcanoes#create'
  get '/volcanoes/:id' => 'volcanoes#show', :as => 'volcano'

  get '/volcanoes/:id/edit' => 'volcanoes#edit', :as => 'volcano_edit'
  post '/volcanoes/:id' => 'volcanoes#update'

  post '/volcanoes/:id/delete' => 'volcanoes#destroy', :as => 'volcano_delete'
end
