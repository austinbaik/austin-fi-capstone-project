class CaseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :priority, :status
end
