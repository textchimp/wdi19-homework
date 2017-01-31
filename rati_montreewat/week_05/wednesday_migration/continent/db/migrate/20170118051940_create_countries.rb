class CreateCountries < ActiveRecord::Migration
  def change
    create_table :countries do |t|
      t.text :name
      t.bigint :inhabitant
      t.text :image
      t.timestamps
    end
  end
end
