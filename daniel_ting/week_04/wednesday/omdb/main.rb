require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do
  erb :poster
end

get '/search' do
  if not params[:movie].nil?
    @title = params[:movie]
    url = "http://omdbapi.com/?s=#{@title}"
    movie_info = HTTParty.get url
    @posters = movie_info["Search"]
  end
  erb :poster
end
