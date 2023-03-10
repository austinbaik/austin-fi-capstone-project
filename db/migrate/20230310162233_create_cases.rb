class CreateCases < ActiveRecord::Migration[6.1]
  def change
    create_table :cases do |t|
      t.string :title
      t.string :description
      t.string :priority
      t.string :status
      t.integer :rating
      t.integer :user_id 
      t.integer :agent_id 

      t.timestamps
    end
  end
end
