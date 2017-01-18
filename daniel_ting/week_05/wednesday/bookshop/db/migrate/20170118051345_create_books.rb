class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.text :title
      t.text :year
      t.text :image
      t.text :abstract
      t.timestamps
    end
  end
end
