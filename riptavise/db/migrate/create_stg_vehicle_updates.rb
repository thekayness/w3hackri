class CreateStgVehicleUpdates < ActiveRecord::Migrate
	def change
		  create_table "stg_vehicle_updates", id: false, force: :cascade do |t|
		    t.string "vehicle_id",      limit: 15
		    t.string "trip_id",         limit: 15
		    t.string "route_id",        limit: 15
		    t.string "trip_start_dt",   limit: 10
		    t.string "trip_start_time", limit: 10
		    t.string "current_status",  limit: 4
		    t.string "bearing",         limit: 15
		    t.string "latitude",        limit: 15
		    t.string "longitude",       limit: 15
		    t.string "speed",           limit: 15
		    t.string "stop_id",         limit: 15
		    t.string "TIMESTAMP",       limit: 15
		    t.string "file_name",       limit: 100
		    t.index ["route_id"], name: "route_idx", using: :btree
		    t.index ["trip_id"], name: "trip_idx", using: :btree
		    t.index ["vehicle_id"], name: "vehicle_updates", using: :btree
		  end

	end
end