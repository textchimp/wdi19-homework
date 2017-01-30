class AddMainlandIdToCountries < ActiveRecord::Migration
  def change
    add_column :countries, :mainland_id, :integer
  end
end
