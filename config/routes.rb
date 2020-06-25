Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :persons, only: [:index, :show, :update]
    get 'my_persons', to: 'persons#my_persons'
    # get 'my_posts', to: 'persons#my_posts'
    resources :posts
    get 'persons_posts', to: 'posts#persons_posts'
  end
end
