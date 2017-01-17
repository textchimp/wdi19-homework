require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
# require 'rake'

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

# BOOKS ------------------------------------

# BOOKS: index
get '/books' do
  @books = Book.all
  erb :books_index
end

# BOOKS: new
get '/books/new' do
  erb :books_new
end

# BOOKS: show
get '/books/:id' do
  @book = Book.find params[:id]
  # author_id = @book.author_id
  # @ author = Author.find author_id
  @author = @book.author
  erb :books_show
end

# BOOKS: create
post '/books' do
  book = Book.new
  book.title = params[:title]
  book.publisher = params[:publisher]
  book.yearPublished = params[:yearPublished]
  book.blurb = params[:blurb]
  book.image = params[:image]
  book.author_id = params[:author_id]
  book.save
  redirect to ("/books/#{book.id}")
end

# BOOKS: edit
get '/books/:id/edit' do
  @book = Book.find params[:id]
  erb :books_edit
end

# BOOKS: update
post '/books/:id' do
  book = Book.find params[:id]
  book.title = params[:title]
  book.publisher = params[:publisher]
  book.yearPublished = params[:yearPublished]
  book.blurb = params[:blurb]
  book.image = params[:image]
  book.save
  redirect to ("/books/#{book.id}")
end

# BOOKS: delete
get '/books/:id/delete' do
  book = Book.find params[:id]
  book.destroy
  redirect to('/books')
end

# AUTHORS ------------------------------------

# AUTHORS: index
get '/authors' do
  @authors = Author.all
  erb :authors_index
end

# AUTHORS: new
get'/authors/new' do
  erb :authors_new
end

# AUTHORS: create
post '/authors' do
  author = Author.new
  author.first_name = params[:first_name]
  author.surname = params[:surname]
  author.info = params[:info]
  author.image = params[:image]
  author.save
  redirect to("/authors/#{author.id}")
end


# AUTHORS: show
get '/authors/:id' do
  @author = Author.find params[:id]
  @name = "#{@author.first_name} #{@author.surname}"
  erb :authors_show
end

# AUTHORS: edit
get '/authors/:id/edit' do
  @author = Author.find params[:id]
  erb :authors_edit
end

# AUTHORS: update
post '/authors/:id' do
  author = Author.find params[:id]
  author.first_name = params[:first_name]
  author.surname = params[:surname]
  author.info = params[:info]
  author.image = params[:image]
  author.save
  redirect to("/authors/#{author.id}")
end

# AUTHORS: delete
get "/authors/:id/delete" do
  author = Author.find params[:id]
  author.destroy
  redirect to ('/authors')
end
