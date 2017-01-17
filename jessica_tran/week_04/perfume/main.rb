require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

#INDEX

get '/perfume' do
  #get perfume from db
  @perfume = query_db 'SELECT * FROM perfume'

  #show html
  erb :perfume_index
end


#NEW
get '/perfume/new' do
  erb :perfume_new
end


#CREATE
post "/perfume" do
  #insert new values into the db
  query_db "INSERT INTO perfume (brand, name, cost, image) VALUES ('#{params[:brand]}','#{params[:name]}','#{params[:cost]}','#{params[:image]}')"
  #redirect to the index
  redirect to ('/perfume')
end

#SHOW
get '/perfume/:id' do
  #get info using the perfume's id
  @perfume1 = query_db "SELECT * FROM perfume WHERE id =#{  params[:id] }"
  @perfume1 = @perfume1.first

  #show page with just one perfume
  erb :perfume_show
end

#EDIT

get '/perfume/:id/edit' do
  #fetch existing from db
  @perfume1 = query_db "SELECT * FROM perfume WHERE id =#{  params[:id] }"
  @perfume1 = @perfume1.first

  erb :perfume_edit
end

#UPDATE
post '/perfume/:id' do
  query_db "UPDATE perfume SET brand='#{params[:brand]}', name='#{params[:name]}', cost='#{params[:cost]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  redirect to('/perfume')
end

#DESTROY
get '/perfume/:id/delete' do
  query_db "DELETE FROM perfume WHERE id=#{params[:id]}"
  redirect to('/perfume')
end

def query_db (sql)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql #optional

  results = db.execute sql
  db.close
  results
end
