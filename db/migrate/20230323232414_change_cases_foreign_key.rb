class ChangeCasesForeignKey < ActiveRecord::Migration[6.1]
  def up
    remove_column(:cases, :agent_id)
end
end
