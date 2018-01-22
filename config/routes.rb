Rails.application.routes.draw do
  devise_for :users

  root to: 'home#index'
  get '*path', to: 'home#index'


end
