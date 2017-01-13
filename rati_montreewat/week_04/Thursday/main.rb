require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX
get '/fruites' do
  @fruites = query_db 'SELECT * FROM fruites'
  erb :fruites_index
end

# NEW
get '/fruites/new' do
  erb :fruites_new
end

# CREATE
post '/fruites' do
  query_db "INSERT INTO fruites (commonname, scientificname, image) VALUES ('#{params[:commonname]}', '#{params[:scientificname]}', '#{params[:image]}')"
  redirect to('/fruites')
end

# SHOW
get '/fruites/:id' do
  @fruite = query_db "SELECT * FROM fruites WHERE id = #{ params[:id] }"
  @fruite = @fruite.first # Pluck the sole fruite from the array

  erb :fruites_show
end

# EDIT
get '/fruites/:id/edit' do
  @fruite = query_db "SELECT * FROM fruites WHERE id = #{ params[:id] }"
  @fruite = @fruite.first

  erb :fruites_edit
end

# UPDATE
post '/fruites/:id' do
  query_db "UPDATE fruites SET commonname='#{ params[:commonname] }', scientificname='#{ params[:scientificname] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  redirect to('/fruites')
end

# DESTROY
get '/fruites/:id/delete' do
  query_db "DELETE FROM fruites WHERE id = #{ params[:id] }"
  redirect to('/fruites')
end

def query_db(sql)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql # Optional but nice to have

  results = db.execute sql
  db.close
  results # Implicit return
end
