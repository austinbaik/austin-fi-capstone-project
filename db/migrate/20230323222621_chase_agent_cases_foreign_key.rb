class ChaseAgentCasesForeignKey < ActiveRecord::Migration[6.1]
  def up
    change_column :agent_cases, :case_id, :integer, using: 'case_id::integer'

    change_column :agent_cases, :agent_id, :integer, using: 'agent_id::integer'

  end
end
