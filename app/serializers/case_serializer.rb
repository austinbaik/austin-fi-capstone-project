class CaseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :priority, :status, :assigned, :user_id, :comments
end
