Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/magic_eight' => 'magic_eight#form'
  get '/magic_eight/:question' => 'magic_eight#respond'
  get '/secret_number' => 'secret_number#form'
  get '/secret_number/guess' => 'secret_number#guess'
  get '/rock_paper_scissors' => 'rock_paper_scissors#form'
  get '/rock_paper_scissors/throw' => 'rock_paper_scissors#throw'
end
