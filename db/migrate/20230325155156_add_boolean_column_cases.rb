class AddBooleanColumnCases < ActiveRecord::Migration[6.1]
  def change
    add_column :cases, :assigned, :boolean
end
end
