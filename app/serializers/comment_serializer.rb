class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :comment_creator_id, :case_id
end
