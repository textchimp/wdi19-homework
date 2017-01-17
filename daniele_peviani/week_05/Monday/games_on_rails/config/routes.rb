Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/magic_8' => 'magic_eight#usr_input'
  get '/magic_8/answer' => 'magic_eight#answer'

  get '/secret_number' => 'secret_number#usr_input'
  get '/secret_number/answer' => 'secret_number#answer'

  get '/rock_paper_scissors' => 'rock_paper_scissors#usr_input'
  get '/rock_paper_scissors/result' => 'rock_paper_scissors#result'
end
