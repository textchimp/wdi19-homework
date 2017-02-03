Rails.application.routes.draw do
  root :to => 'mainlands#index'
  resources :mainlands
  resources :countries
end
