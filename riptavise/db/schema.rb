# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 0) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

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

  create_table "stg_vehicle_updates_bkp", id: false, force: :cascade do |t|
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
  end

end
