require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX
get '/doggos' do
  @doggos = query_db 'SELECT * FROM doggos'
  erb :index
end

# NEW
get '/doggos/new' do
  erb :new
end

# CREATE
post '/doggos' do
  query_db "INSERT INTO doggos (name, race, image, isGoodBoy) VALUES ('#{params[:name]}', '#{params[:race]}', '#{params[:image]}', '#{params[:isGoodBoy]}')"
  redirect to('/doggos')
end

# SHOW
get '/doggos/:id' do
  @doggo = query_db "SELECT * FROM doggos WHERE id = #{ params[:id] }"
  @doggo = @doggo.first # Pluck the sole doggo from the array

  erb :show
end

# EDIT
get '/doggos/:id/edit' do
  @doggo = query_db "SELECT * FROM doggos WHERE id = #{ params[:id] }"
  @doggo = @doggo.first

  erb :edit
end

# UPDATE
post '/doggos/:id' do
  query_db "UPDATE doggos SET name='#{ params[:name] }', race='#{ params[:race] }', image='#{ params[:image] }', isGoodBoy='#{params[:isGoodBoy]}' WHERE id=#{ params[:id] }"
  redirect to('/doggos')
end

# DESTROY
get '/doggos/:id/delete' do
  query_db "DELETE FROM doggos WHERE id = #{ params[:id] }"
  redirect to('/doggos')
end

def query_db(sql)
  db = SQLite3::Database.new 'database.sql'
  db.results_as_hash = true

  puts sql # Optional but nice to have

  results = db.execute sql
  db.close
  results # Implicit return
end
