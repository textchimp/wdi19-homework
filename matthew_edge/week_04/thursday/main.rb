require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX
get '/cars' do
  @cars = query_db 'SELECT * FROM cars'
  erb :cars_index
end

# NEW
get '/cars/new' do
  erb :cars_new
end

# CREATE
post '/cars' do
  query_db "INSERT INTO cars (make, model, year) VALUES ('#{params[:make]}', '#{params[:model]}', '#{params[:year]}')"
  redirect to('/cars')
end

# SHOW
get '/cars/:id' do
  @car = query_db "SELECT * FROM cars WHERE id = #{ params[:id] }"
  @car = @car.first # Pluck the sole car from the array

  erb :cars_show
end

# EDIT
get '/cars/:id/edit' do
  @car = query_db "SELECT * FROM cars WHERE id = #{ params[:id] }"
  @car = @car.first

  erb :cars_edit
end

# UPDATE
post '/cars/:id' do
  query_db "UPDATE cars SET make='#{ params[:make] }', model='#{ params[:model] }', year='#{ params[:year] }' WHERE id=#{ params[:id] }"
  redirect to('/cars')
end

# DESTROY
get '/cars/:id/delete' do
  query_db "DELETE FROM cars WHERE id = #{ params[:id] }"
  redirect to('/cars')
end

def query_db(sql)
  db = SQLite3::Database.new 'data.sqlite3'
  db.results_as_hash = true


  results = db.execute sql
  db.close
  results # Implicit return
end
