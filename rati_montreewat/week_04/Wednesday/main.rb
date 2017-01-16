require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :forum
end

get '/lookup' do
  @title=params['symbol'].downcase
  # @title = 'jaws'
  @url = "http://omdbapi.com/?s=#{ @title }"
  @movie_info = HTTParty.get @url;
  if @movie_info['totalResult'] == "1"
    redirect "/movie?id=#{@movie_info['Search'][0]['imdbID']}"
  else
    erb :movies
  end
end

get '/movie' do
  id = params[:id]
  @url = "http://www.omdbapi.com/?"
  @movie_info = HTTParty.get "#{@url}i=#{id}"
  erb :lookup
end
