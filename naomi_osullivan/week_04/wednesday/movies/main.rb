require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'


get '/' do
  erb :home
end


get '/movie_details' do
  @id = params[:id]

  url = "http://omdbapi.com/?i=#{@id}"
  movie_info = HTTParty.get url
  @poster = movie_info['Poster']
  @plot = movie_info['Plot']
  @title = movie_info['Title']

  erb :movie_details
end

#
# get '/lookup' do
#   @title = params[:title]
#
#   url = "http://omdbapi.com/?t=#{@title}"
#   movie_info = HTTParty.get url
#   @poster = movie_info['Poster']
#   @plot = movie_info['Plot']
#
#   erb :lookup
# end


get '/lookup_multiple' do
  @title = params[:title]

  url = "http://omdbapi.com/?s=#{@title}"
  @results = HTTParty.get url
  @results = @results['Search']

  if @results.length == 1
    # @title =
    # @plot =
    # @poster =
    # erb :movie_details

    redirect "/movie_details?id=#{ @results[0]['imdbID']  }"
  else
    erb :lookup_multiple
  end

  # binding.pry

  # @poster = movie_info['Poster']
  # @plot = movie_info['Plot']

  erb :lookup_multiple
end


# http://img.omdbapi.com/?apikey=[yourkey]&
