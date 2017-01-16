require "sinatra"
require "sinatra/reloader"
require "pry"
require "httparty"

get '/' do
  erb :home
end

get '/result' do
 @title = params[:title].upcase
 url = "http://omdbapi.com/?t=#{@title}"
 movie_info = HTTParty.get url
 @poster = movie_info["Poster"]
 @year = movie_info["Year"]
 @rated = movie_info["Rated"]
 @release = movie_info["Released"]
 @duration = movie_info["Runtime"]
 erb :result
end
