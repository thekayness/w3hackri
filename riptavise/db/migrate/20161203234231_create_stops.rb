class CreateStops < ActiveRecord::Migration[5.0]
  def change
    create_table :stops do |t|
      t.integer :stop_id
      t.string :stop_name
      t.float :lat
      t.float :lng
    end
  end
end
