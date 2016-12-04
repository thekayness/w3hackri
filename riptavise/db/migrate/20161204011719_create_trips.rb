class CreateTrips < ActiveRecord::Migration[5.0]
  def change
    create_table :trips do |t|
      t.belongs_to :stg_vehicle_update, index: true
      t.integer :route_id
      t.string :service_id
      t.integer :trip_id
      t.string :trip_headsign
      t.integer :direction_id
      t.integer :block_id
      t.integer :shape_id
    end
  end
end
