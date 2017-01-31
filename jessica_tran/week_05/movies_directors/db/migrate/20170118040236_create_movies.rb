class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.text :title
      t.integer :year
      t.text :rating
      t.text :plot
      t.text :image
      t.timestamps
    end
  end
end
