class CreateMainlands < ActiveRecord::Migration
  def change
    create_table :mainlands do |t|
      t.text :name
      t.bigint :population
      t.text :image
      t.timestamps
    end
  end
end
