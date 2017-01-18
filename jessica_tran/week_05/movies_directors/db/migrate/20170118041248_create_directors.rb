class CreateDirectors < ActiveRecord::Migration
  def change
    create_table :directors do |t|
      t.text :name
      t.integer :born
      t.text :nationality
      t.text :image
      t.timestamps
    end
  end
end
