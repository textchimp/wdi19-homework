require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# INDEX
get '/destinations' do
  @destinations = query_db "SELECT * FROM destinations"
  erb :destinations
end

# NEW
get '/destinations/new' do
  erb :destinations_new
end

# CREATE
post '/destinations' do
  query_db "INSERT INTO destinations (name, country, population, language, image, map, desc) VALUES ('#{params[:name]}', '#{params[:country]}', '#{params[:population]}', '#{params[:language]}', '#{params[:image]}', '#{params[:map]}', '#{params[:desc]}')"
  redirect to('/destinations')
end

# SHOW
get '/destinations/:id' do
  @destinations = query_db "SELECT * FROM destinations WHERE id=#{params[:id]}"
  @destinations = @destinations.first
  erb :destinations_show
end

# EDIT
get '/destinations/:id/edit' do
  @destinations = query_db "SELECT * FROM destinations WHERE id = #{params['id']}"
  @destinations = @destinations.first
  erb :destinations_edit
end

# UPDATE
post '/destinations/:id' do
  query_db "UPDATE destinations SET name = '#{params[:name]}', country = '#{params[:country]}', population = '#{params[:population]}', language = '#{params[:language]}', image = '#{params[:image]}', map = '#{params[:map]}', desc = '#{params[:desc].gsub("'","''")}' WHERE id = #{params['id']}"
  redirect to('destinations')
end

# DESTROY
get '/destinations/:id/delete' do
  query_db "DELETE FROM destinations WHERE id = #{params[:id]}"
  redirect to('/destinations')
end

def query_db (sql)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql
  results
end
