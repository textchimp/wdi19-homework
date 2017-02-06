class CreateManufacturer < ActiveRecord::Migration
  def change
    create_table :manufacturers do |t|
      t.text :name
      t.text :country
      t.text :founder
      t.integer :founded_year
      t.text :website
      t.text :logo
      t.timestamps
    end
  end
end
