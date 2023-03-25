class CreateAgentCases < ActiveRecord::Migration[6.1]
  def change
    create_table :agent_cases do |t|
      t.string :agent_id
      t.string :case_id
      t.timestamps
      
    end
  end
end
