require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'yahooFinance'

get '/' do
  erb :home
end

# INDEX
get '/stock' do
  @stock = query_db 'SELECT * FROM stock'
  erb :stock_index
end

# NEW
get '/stock/new' do
  erb :stock_new
end

# CREATE
post '/stock' do
  symbol = params[:symbol]
  stock_info = YahooFinance::get_quotes YahooFinance::StandardQuote, symbol
  last_trade = stock_info[ symbol ].lastTrade
  name = stock_info[ symbol ].name
  volume = stock_info[ symbol ].volume
  change = stock_info[ symbol ].changePercent

  query_db "INSERT INTO stock (symbol, name, last_trade, volume, change) VALUES ('#{symbol}', '#{name}', #{last_trade}, #{volume}, #{change})"
  redirect to('/stock')
end

# SHOW
get '/stock/:symbol' do
  @stock = query_db "SELECT * FROM stock WHERE symbol = '#{params[:symbol]}'"
  @stock = @stock.first

  erb :stock_show
end

# EDIT
get '/stock/:symbol/edit' do
  @stock = query_db "SELECT * FROM stock WHERE symbol = '#{params[:symbol]}'"
  @stock = @stock.first
  erb :stock_edit
end

# UPDATE
post '/stock/:symbol' do
  query_db "UPDATE stock SET symbol='#{ params[:symbol] }', name='#{ params[:name] }', last_trade=#{ params[:last_trade] }, volume=#{ params[:volume] }, change=#{ params[:change] } WHERE symbol='#{ params[:symbol] }'"
  redirect to ('/stock')
end

# DESTROY
get '/stock/:symbol/delete' do
  query_db "DELETE FROM stock WHERE symbol = '#{params[:symbol]}'"
  redirect to('/stock')
end

def query_db(sql)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql

  results = db.execute sql
  db.close
  results
end
