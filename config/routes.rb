PhotoTagger::Application.routes.draw do
  resources :users, :only => [:create, :new, :show] do
    resources :photos, :only => [:index]
  end
  resource :session, :only => [:create, :destroy, :new]
  resources :photos
end
