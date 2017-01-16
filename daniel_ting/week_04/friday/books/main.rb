require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Book < ActiveRecord::Base
end

class Author < ActiveRecord::Base
end

get '/' do
  erb :home
end

# INDEX
get '/books' do
  @books = Book.all
  erb :books_index
end

# NEW
get '/books/new' do
  erb :books_new
end

# CREATE
post '/books' do
  book = Book.new
  book.name = params[:name]
  book.author = params[:author]
  book.image = params[:image]
  book.save
  redirect to("/books/#{book.id}")
end

# SHOW
get '/books/:id' do
  @book = Book.find params[:id]
  erb :books_show
end

# EDIT
get '/books/:id/edit' do
  @book = Book.find params[:id]
  erb :books_edit
end

# UPDATE
post '/books/:id' do
  book = Book.find params[:id]
  book.name = params[:name]
  book.author = params[:author]
  book.image = params[:image]
  book.save
  redirect to("/books/#{book.id}")
end

# DESTROY
get '/books/:id/delete' do
  book = Book.find params[:id]
  book.destroy
  redirect to('/books')
end

# INDEX
get '/authors' do
  @authors = Author.all
  erb :authors_index
end

# NEW
get '/authors/new' do
  erb :authors_new
end

# CREATE
post '/authors' do
  author = Author.new
  author.first_name = params[:first_name]
  author.last_name = params[:last_name]
  author.date_of_birth = params[:date_of_birth]
  author.image = params[:image]
  author.save
  redirect to("/authors/#{author.id}")
end

# SHOW
get '/authors/:id' do
  @author = Author.find params[:id]
  erb :authors_show
end

# EDIT
get '/authors/:id/edit' do
  @author = Author.find params[:id]
  erb :authors_edit
end

# UPDATE
post '/authors/:id' do
  author = Author.find params[:id]
  author.first_name = params[:first_name]
  author.last_name = params[:last_name]
  author.date_of_birth = params[:date_of_birth]
  author.image = params[:image]
  author.save
  redirect to("/authors/#{author.id}")
end

get '/authors/:id/delete' do
  author = Author.find params[:id]
  author.destroy
  redirect to('/authors')
end

after do
  ActiveRecord::Base.connection.close
end
