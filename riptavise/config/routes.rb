Rails.application.routes.draw do
  get 'home/shapes', to: 'home#shapes'
  get 'home/stops', to: 'home#stops'
  get 'home/trips'
  post 'home/shape', to: 'home#shape'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
end
