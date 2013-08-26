class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.integer :friend_id, null: false
      t.integer :photo_id, null: false

      t.timestamps
    end
  end
end
