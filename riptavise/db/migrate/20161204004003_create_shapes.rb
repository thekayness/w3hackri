class CreateShapes < ActiveRecord::Migration[5.0]
  def change
    create_table :shapes do |t|
      t.integer :shape_id
      t.float :shape_pt_lat
      t.float :shape_pt_lng
      t.integer :shape_pt_sequence
    end
  end
end
