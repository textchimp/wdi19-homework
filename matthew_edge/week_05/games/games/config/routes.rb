Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/ball/start' => 'ball#start'
  get '/ball/result' => 'ball#result'


  get 'number/start' => 'number#start'
  get 'number/result' => 'number#result'
end
