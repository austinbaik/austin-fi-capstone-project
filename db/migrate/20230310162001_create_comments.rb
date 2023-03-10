class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :comment
      t.string :comment_creator_id
      t.string :case_id
      
      t.timestamps

    end
  end
end
