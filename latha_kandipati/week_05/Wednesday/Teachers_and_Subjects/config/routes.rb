# == Route Map
#
#         Prefix Verb   URI Pattern                  Controller#Action
# subjects_index GET    /subjects/index(.:format)    subjects#index
#   subjects_new GET    /subjects/new(.:format)      subjects#new
#  subjects_edit GET    /subjects/edit(.:format)     subjects#edit
#  subjects_show GET    /subjects/show(.:format)     subjects#show
#       teachers GET    /teachers(.:format)          teachers#index
#                POST   /teachers(.:format)          teachers#create
#    new_teacher GET    /teachers/new(.:format)      teachers#new
#   edit_teacher GET    /teachers/:id/edit(.:format) teachers#edit
#        teacher GET    /teachers/:id(.:format)      teachers#show
#                PATCH  /teachers/:id(.:format)      teachers#update
#                PUT    /teachers/:id(.:format)      teachers#update
#                DELETE /teachers/:id(.:format)      teachers#destroy
#       subjects GET    /subjects(.:format)          subjects#index
#                POST   /subjects(.:format)          subjects#create
#    new_subject GET    /subjects/new(.:format)      subjects#new
#   edit_subject GET    /subjects/:id/edit(.:format) subjects#edit
#        subject GET    /subjects/:id(.:format)      subjects#show
#                PATCH  /subjects/:id(.:format)      subjects#update
#                PUT    /subjects/:id(.:format)      subjects#update
#                DELETE /subjects/:id(.:format)      subjects#destroy
#

Rails.application.routes.draw do
  resources :teachers
  resources :subjects
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
