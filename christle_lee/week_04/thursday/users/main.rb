require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :users_new
end

#index
get '/users' do
  #get users from the database

#want to use users in the view to loop through it
  @users = query_db 'SELECT * FROM users'
  erb :users_index
end


#NEW specific urls should appear on top.
get '/users/new' do
  erb :users_new
end

#CREATE
post '/users/' do
  # Insert the new user data into the database
query_db "INSERT INTO users (username, password) VALUES ('#{params[:username]}', '#{params[:password]}')"

  #Redirect the user back to the index page
  redirect to('/users')
end

#SHOW
get '/users/:id' do #users/1
  @user = query_db "SELECT * FROM users WHERE id = #{params[:id]}"
#problem! db.execute always gives back an array.
  @user = @user.first #pluck sole user from the array.

  #show some html
  erb :users_show
end

#EDIT
get '/users/:id/edit' do
  #Fetch the existing user database
  @user = query_db "SELECT * FROM users WHERE id = #{params[:id]}"
  @user = @user.first

  #show the form with the existing data
  erb :users_edit
end


#UPDATE
post '/users/:id' do
  #upate the database with the new information
  query_db "UPDATE users SET status='#{params[:status]}', image='#{params[:image]}' WHERE id=#{params[:id]}"

  #redirect to index page
  redirect to('/users')

end

#DESTROY

get '/users/:id/delete' do
  #Delete user from the database
  query_db "DELETE FROM users WHERE id = #{params[:id]}"

  #redirect to index page
  redirect to('/users')

end


#creating a method so we don't have to repeat typing
def query_db(sql)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql #optional

  results = db.execute sql
  #close the connection can only connect 1024 times.
  db.close
#implicit return
  results
end
