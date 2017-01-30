Rails.application.routes.draw do
  root :to => "pages#home"

  get '/magic8' => 'magic8#start'
  get '/magic8/result' => 'magic8#result'

  get '/sn' => 'sn#start'

  get '/sn/result' => 'sn#result'

  get '/rps' => 'rps#start'

  get '/rps/:throw' => 'rps#rps_play'


end
