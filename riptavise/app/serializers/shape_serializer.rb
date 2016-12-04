class ShapeSerializer < ActiveModel::Serializer
  attributes :id, :shape_pt_lat, :shape_pt_lng, :shape_pt_sequence
end
