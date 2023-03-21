class AddColumnstoComments < ActiveRecord::Migration[6.1]
  def change
      remove_column(:comments, :comment_creator_id)
      add_column :comments, :creator_name, :string
      add_column :comments, :is_agent, :boolean
  end
end
