require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

#index
get '/cats' do
  @cats = query_db 'SELECT * FROM cats'
  erb :cats_index
end

#new
get '/cats/new' do
  erb :cats_new
end

#create
post '/cats' do
  query_db "INSERT INTO cats (breed, coat, country, image) VALUES ('#{params[:breed]}', '#{params[:coat]}','#{params[:country]}', '#{params[:image]}')"

  redirect to('/cats')
end

#show
get '/cats/:id' do
  @cat = query_db "SELECT * FROM cats WHERE id = #{params[:id]}"
  @cat = @cat.first

  erb :cats_show
end

#edit
get '/cats/:id/edit' do
  @cat = query_db "SELECT * FROM cats WHERE id = #{params[:id]}"
  @cat = @cat.first

  erb :cats_edit
end

#update
post '/cats/:id' do
    query_db "UPDATE cats SET breed='#{ params[:breed] }', coat='#{ params[:coat] }', country='#{ params[:country] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"

  redirect to('/cats') ################### how to redirect to the updates entry page
end


#destroy
get '/cats/:id/delete' do
  query_db "DELETE FROM cats WHERE id = #{params[:id]}"
  redirect to('/cats')
end


def query_db(sql)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  #add magic
  puts sql #optional but nice to have

  results = db.execute sql
  db.close
  results
  #when open connection to db have to close it also
end
