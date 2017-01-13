require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require 'pry'

get '/' do
  erb :home
end

get '/movies' do
  title = params[:movie]
  url = "http://www.omdbapi.com/?s=#{title}"
  @movie_list = HTTParty.get url

  erb :movies

end

get '/movies/:title' do
  url = "http://www.omdbapi.com/?t=#{params[:title]}"
  movie_info = HTTParty.get url
  @movie_title = movie_info["Title"]
  @plot = movie_info["Plot"]
  @year = movie_info["Year"]
  @poster = movie_info["Poster"]

  erb :movie
end
