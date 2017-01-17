Rails.application.routes.draw do

  root :to => 'pages#home'

  get '/magic' => 'magic#game'
  get '/magic/prediction' => 'magic#prediction'

  get '/secret' => 'secret#game'
  get '/secret/reveal' => 'secret#reveal'

  get '/scissors' => 'scissors#game'
  get '/scissors/throw' => 'scissors#throw'


end
