require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
:adapter => 'sqlite3',
:database => 'database.sqlite3'
)



class Book < ActiveRecord::Base
  belongs_to :author
end

class Author < ActiveRecord::Base
  has_many :books, dependent: :destroy
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
  book.pages = params[:pages]
  book.save
  redirect to("/books/#{book.id}")
end

# SHOW
get '/books/:id' do
  @book = Book.find params[:id]  #uses primary id
  erb :books_show
end

get '/books/:id/edit' do
  @book = Book.find params[:id]
  erb :books_edit
end

post "/books/:id" do
  # update db with new
  book = Book.find params[:id]
  book.name = params[:name]
  book.pages = params[:pages]
  book.save
  redirect to ("/books/#{book.id}")
end
#DESTROY
get '/books/:id/delete' do

  book = Book.find params[:id]
  book.destroy
  redirect to('/books')
end

get '/authors' do
  @authors = Author.all
  erb :authors_index
end

get '/authors/new' do
  erb :authors_new
end

post '/authors' do
  author = Author.new
  author.name = params[:name]
  author.age = params[:age]
  author.image = params[:image]
  author.save
  redirect to("/authors/#{author.id}")
end

get '/authors/:id' do
  @author = Author.find params[:id]  #uses primary id
  erb :authors_show
end

get '/authors/:id/edit' do
  @author = Author.find params[:id]
  erb :authors_edit
end

post "/authors/:id" do
  # update db with new
  author = Author.find params[:id]
  author.name = params[:name]
  author.age = params[:age]
  author.image = params[:image]
  author.save
  redirect to ("/authors/#{author.id}")
end
#DESTROY
get '/authors/:id/delete' do

  author = Author.find params[:id]
  author.destroy
  redirect to('/authors')
end
after do
  ActiveRecord::Base.connection.close
end
