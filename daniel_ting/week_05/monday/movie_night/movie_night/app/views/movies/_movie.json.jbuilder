json.extract! movie, :id, :title, :in_theatres, :released, :rating, :created_at, :updated_at
json.url movie_url(movie, format: :json)