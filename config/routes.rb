Rails.application.routes.draw do
  resources :records
  resources :medications
  devise_for :users

  root to: 'home#index'
  get '*path', to: 'home#index'

  # get 'api/records/data', :defaults => { :format => 'json' }




end
