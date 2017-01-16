require 'pry'
require 'sinatra'
require 'json'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do
  erb :form
end

get '/search' do
  query = params[:query].downcase
  @url = "http://www.omdbapi.com/?"
  @movies = HTTParty.get "#{@url}s=#{query}"
  if @movies['totalResults'] != "1"
    erb :movies
  else
    redirect "/movie?id=#{@movies['Search'][0]['imdbID']}"
  end
end

get '/movie' do
  id = params[:id]
  @url = "http://www.omdbapi.com/?"
  @movie = HTTParty.get "#{@url}i=#{id}"
  erb :movie_detail
end
