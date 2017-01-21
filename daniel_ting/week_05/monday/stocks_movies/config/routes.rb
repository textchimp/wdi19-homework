Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/stocks' => 'stocks#home'
  get '/stocks/:sticker' =>'stocks#show'
  get '/movies' => 'movies#home'
  get 'movies/:title' => 'movies#show'
end
