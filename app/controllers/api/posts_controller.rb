class Api::PostsController < ApplicationController
  before_action :authenticate_user!, only: [ :persons_posts, :destory, :create, :update]

  def persons_posts
    render json: persons_posts
  end

  def Posts
    render json: Post.all
  end

  def create
    post = persons_posts.posts.new(persons_posts)
    if post.save
      render json: post
    else
      render json: post.errors
    end
  end

  def update
    post = persons_posts.posts.find(params[:id])
    if post.update(persons_posts)
      render json: post
    else
      render json: post.errors
    end
  end

  private

  def persons_posts
    params.require(:post).permit(:comment)
  end

end
