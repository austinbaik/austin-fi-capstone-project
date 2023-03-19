Rails.application.routes.draw do
  
  resources :cases
  resources :comments
  resources :agents
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!


  get "/me", to: "agents#show"

  post "/signup", to: "agents#create"


  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
