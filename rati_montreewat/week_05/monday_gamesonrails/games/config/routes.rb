Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/eightball' => 'eightball#play'
  get '/eightball/answer'=> 'eightball#answer'

  get '/secret' => 'secret#play'
  get '/secret/validate' => 'secret#validate'

  get '/rsp' => 'rsp#move'
  get '/rsp/result' => 'rsp#result'
end
