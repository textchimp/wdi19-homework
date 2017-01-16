require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require 'pry'

get '/' do
  @error = params['error']
  erb :home
end

get '/movie_detail' do
  @movie_id = params['id']
  url = "http://omdbapi.com/?i=#{@movie_id}"
  @movie_detail = HTTParty.get url
  erb :movie_detail
end

get '/search' do
  @title = params[:title]
  url = "http://omdbapi.com/?s=#{@title}".downcase
  @movie_list = HTTParty.get url
  if @movie_list['Response'] == "True"
    if @movie_list['Search'].size == 1
      @movie_id = @movie_list['Search'].first['imdbID']
      redirect to("/movie_detail?id=#{@movie_id}")
    end
    return erb :search
  else redirect to("/?error=true")
  end
end
