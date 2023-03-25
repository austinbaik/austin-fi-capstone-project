class ChangeCommentsForeignKey < ActiveRecord::Migration[6.1]
  def up
    change_column :comments, :case_id, :integer, using: 'case_id::integer'
  end
end
