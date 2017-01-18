Rails.application.routes.draw do

root :to => 'pages#home'

get '/constellations' => 'constellations#index'
get '/constellations/new' => 'constellations#new'
post '/constellations' => 'constellations#create'
get '/constellations/:id' => 'constellations#show', :as =>'constellation'
get '/constellations/:id/edit' => 'constellations#edit', :as => 'constellation_edit'
post '/constellations/:id' => 'constellations#update'
post '/constellations/:id/delete' => 'constellations#destroy', :as => 'constellation_delete'


get '/stars' => 'stars#index'
get '/stars/new' => 'stars#new'
post '/stars' => 'stars#create'
get '/stars/:id' => 'stars#show', :as => 'star'
get '/stars/:id/edit' => 'stars#edit', :as => 'star_edit'
post '/stars/:id' => 'stars#update'
post '/stars/:id/delete' => 'stars#destroy', :as => 'star_delete'


end
