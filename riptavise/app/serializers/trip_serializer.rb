class TripSerializer < ActiveModel::Serializer
  attributes :id, :route_id, :service_id, :trip_id, :trip_headsign, :direction_id, :block_id, :shape_id
end
