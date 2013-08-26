class Tag < ActiveRecord::Base
  attr_accessible :friend_id, :photo_id

  belongs_to :photo
  belongs_to :friend,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
end
