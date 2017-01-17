require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)
ActiveRecord::Base.logger = Logger.new(STDERR)
class Book < ActiveRecord::Base
end

class Author < ActiveRecord::Base
end

#################
#Books
#################
#Index
get '/' do
  erb :home
end

#List
get '/books' do
  @books = Book.all
  erb :books
end

#New
get '/book/new' do
  erb :book_new
end

#Create
post '/books' do
  book = Book.new
  book.name = params[:name]
  book.author = params[:author]
  book.description = params[:description]
  book.image = params[:image]
  book.save
  redirect to('/books')
end

#Show
get '/books/:id' do
  @book = Book.find params[:id]
  erb :book_show
end

#Edit
get '/books/:id/edit' do
  @book = Book.find params[:id]
  erb :book_edit
end
#Update
post '/books/:id' do
  book = Book.find params[:id]
  book.name = params[:name]
  book.author = params[:author]
  book.description = params[:description]
  book.image = params[:image]
  book.save
  redirect to('/books')
end

#Delete
get '/books/:id/delete' do
  book = Book.find params[:id]
  book.destroy
  redirect to('/books')
end

#################
#Authors
#################
#List
get '/authors' do
  @authors = Author.all
  erb :authors
end

#New
get '/author/new' do
  erb :author_new
end

#Create
post '/authors' do
  author = Author.new
  author.name = params[:name]
  author.bookid = params[:bookid]
  author.description = params[:description]
  author.image = params[:image]
  author.save
  redirect to('/authors')
end

#Show
get '/authors/:id' do
  @author = Author.find params[:id]
  erb :author_show
end

#Edit
get '/authors/:id/edit' do
  @author = Author.find params[:id]
  erb :author_edit
end

#Update
post '/authors/:id' do
  author = Author.find params[:id]
  author.name = params[:name]
  author.bookid = params[:bookid]
  author.description = params[:description]
  author.image = params[:image]
  author.save
  redirect to('/authors')
end

#Delete
get '/authors/:id/delete' do
  author = Author.find params[:id]
  author.destroy
  redirect to('/authors')
end

after do
  ActiveRecord::Base.connection.close
end
