Rails.application.routes.draw do
  resources :records
  devise_for :users

  root to: 'home#index'
  get '*path', to: 'home#index'

  # get 'api/records/data', :defaults => { :format => 'json' }




end
