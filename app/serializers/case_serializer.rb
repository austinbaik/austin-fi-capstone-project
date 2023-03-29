class CaseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :priority, :status, :assigned, :user_id, :comments, :agent_cases

  def agent_cases
    
    ids = object.agent_cases.map do |c|
      c.agent_id 
    end
return ids
  end

end
