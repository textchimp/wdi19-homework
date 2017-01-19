class CreateTeachers < ActiveRecord::Migration
  def change
    create_table :teachers do |t|
      t.text :name
      t.text :expertise
      t.text :description
      t.text :address
      t.integer :contact
      t.timestamps
    end
  end
end
