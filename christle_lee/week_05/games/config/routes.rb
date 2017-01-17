Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/games/magichammer' => 'games#magichammer'
  get '/games/magichammer/answer' => 'games#answer'

  get '/games/secretnumber' => 'games#secretnumber'
  get '/games/secretnumber/secretanswer' => 'games#secretanswer'
  
  get '/games/rps' => 'games#rps'
  get '/games/rps/throw' => 'games#throw'

end
