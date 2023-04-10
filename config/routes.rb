Rails.application.routes.draw do
  resources :agents do
      resources :cases
    
  end

  resources :agent_cases
  resources :cases do 
    resources :comments 
  end
  resources :comments
  resources :users

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  post "/signup", to: "agents#create"

  get "/me", to: "agents#show"
  post "/login", to: "sessions#create"

  post "/cases/:case_id/comments", to: "comments#create"

  get "/cases/:id", to: "cases#show"


  delete "/logout", to: "sessions#destroy"

  get "/allclosedcases", to: "cases#closed_cases"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
