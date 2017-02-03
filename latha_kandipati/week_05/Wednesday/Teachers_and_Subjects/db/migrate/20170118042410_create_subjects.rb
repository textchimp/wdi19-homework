class CreateSubjects < ActiveRecord::Migration
  def change
    create_table :subjects do |t|
      t.text :title
      t.text :category
      t.integer :teacher_id
    end
  end
end
