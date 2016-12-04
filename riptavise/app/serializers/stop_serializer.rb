class StopSerializer < ActiveModel::Serializer
  attributes :id, :stop_id, :stop_name, :lat, :lng
end
