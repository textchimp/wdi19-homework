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
  belongs_to :author
end

class Author < ActiveRecord::Base
  has_many :books
end


get '/' do
  erb :home
end

# INDEX // read
get '/books' do
  @books = Book.all
  erb :books_index
end

# NEW // read
get '/books/new' do
  @authors = Author.all
  # binding.pry
  erb :books_new
end

# CREATE
post '/books' do
  book = Book.new
  book.name = params[:name]
  book.year = params[:year]
  book.image = params[:image]
  book.author_id = params[:author_id]
  book.save
  redirect to("/books/#{ book.id }")
end

# SHOW // read
get '/books/:id' do
  @book = Book.find params[:id]
  erb :books_show
end

# EDIT // read
get '/books/:id/edit' do
  @book = Book.find params[:id]
  erb :books_edit
end

# UPDATE
post '/books/:id' do
  book = Book.find params[:id]
  book.name = params[:name]
  book.year = params[:year]
  book.image = params[:image]
  book.author_id = params[:author_id]
  book.save
  redirect to("/books/#{ book.id }")
end

get '/books/:id/delete' do
  book = Book.find params[:id]
  book.destroy
  redirect to('/books')
end

######################

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
  author.image = params[:image]
  author.save
  redirect to("/authors/#{ author.id }")
end

get "/authors/:id" do
  @author = Author.find params[:id]
  erb :authors_show
end


# EDIT // read
get '/authors/:id/edit' do
  @author = Author.find params[:id]
  erb :authors_edit
end

# UPDATE
post '/authors/:id' do
  author = Author.find params[:id]
  author.name = params[:name]
  author.image = params[:image]
  author.save
  redirect to("/authors/#{ author.id }")
end

get '/authors/:id/delete' do
  author = Author.find params[:id]
  author.destroy
  redirect to('/authors')
end

after do
  ActiveRecord::Base.connection.close
end
