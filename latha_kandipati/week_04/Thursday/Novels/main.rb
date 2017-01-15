require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

#Index
get '/' do
  erb :home
end

#List
get '/books' do
  @books = db_query "SELECT * FROM novels"
  erb :books
end

#New
get '/book/new' do
  erb :book_new
end

#Create
post '/books' do
  db_query "INSERT INTO novels (name, author, description, image) VALUES ('#{params[:name]}', '#{params[:author]}', '#{params[:description]}', '#{params[:image]}')"
  redirect to('/books')
end

#Show
get '/books/:id' do
  @book = db_query "SELECT * FROM novels WHERE id=#{params[:id]}"
  @book = @book.first
  erb :book_show
end

#Edit
get '/books/:id/edit' do
  @book = db_query "SELECT * FROM novels WHERE id=#{params[:id]}"
  @book = @book.first
  erb :book_edit
end
#Update
post '/books/:id' do
  db_query "UPDATE novels SET name='#{ params[:name] }', author='#{params[:author]}', description='#{params[:description]}', image='#{params[:image]}' WHERE id=#{ params[:id] }"
  redirect to('/books')
end
#Delete
get '/books/:id/delete' do
  db_query "DELETE FROM novels WHERE id=#{params[:id]}"
  redirect to('/books')
end

#Supporting functions
def db_query(sql)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  puts sql
  res = db.execute sql
  db.close
  res
end
